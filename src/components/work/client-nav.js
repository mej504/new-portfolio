// Modules
import { useEffect, useRef, useState } from 'react';
import projects from '../../../lib/projects';

// Components
import Marker from '../work/marker';

// Styles
import styles from '../../styles/work/components/client-nav.module.scss';

export default function ClientNav({ currentlyViewing, updateCurrentlyViewing, cardsAnimated }) {

	// List data
	const listElement = useRef(null);
	const listItemLocations = useRef([]);
	const prevSelection = useRef(null);

	// Marker data
	const marker = useRef(null);
	const markerPos = useRef({});
	const prevOffset = useRef(0);

	// Animation data
	const animationsComplete = useRef(null);

	const getMarkerRect = ( marker ) => {
		return marker.getBoundingClientRect();
	}

	const updateMarkerPosition = ( marker ) => {

		if( !marker ) throw new ReferenceError('marker is undefined. function expects 1 parameter to be an HTMLElement');

		let markerRect = getMarkerRect( marker );

		markerPos.current = {
			y: markerRect.y,
			height: markerRect.height,
			offsetTop: marker.offsetTop,
			centerOffset: markerRect.y + (markerRect.height / 2)
		}

		return;

	}

	const getYShift = ( markerPosition, targetElementPosition, direction ) => {

		// Calculates center of target and marker elements' offset from top of the screen
		let targetCenter = targetElementPosition.y + ( targetElementPosition.height / 2 );
		let markerCenter = markerPosition.y + ( markerPosition.height / 2 );

		// If null, we will always initially animate downward
		if( prevOffset.current === 0 ) {
			return (markerCenter - targetCenter) * -1;
		} else {
			return targetCenter - markerCenter;
		}

	}

	const getAnimationDirection = ( markerY, targetElementY ) => {
		return markerY > targetElementY ? 'up' : 'down';
	}

	const animateMarker = ( markerPosition, targetPosition ) => new Promise((res, rej) => {

		animationsComplete.current = false;

		const options = {
			duration:500,
			easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			iterations:1
		}

		let direction = getAnimationDirection( markerPosition.y, targetPosition.y );
		let shift = getYShift( markerPosition, targetPosition, direction);
		let animations;

		marker.current.animate([
			{ transform: `translateY(${shift}px)` }
		], options)

		animations = marker.current.getAnimations();

		animations[0].onfinish = function() {

			animationsComplete.current = true;

			if( prevOffset.current === 0 ) {
				marker.current.style.top = `${shift}px`;
				res();
			} else {
				marker.current.style.top = `${ prevOffset.current + shift }px`;
				prevOffset.current += shift;
				res();
			}

		}

		return;

	});

	const handleClick = (e) => {

		if( animationsComplete.current === false ) return;

		let listChildren = Array.from(listElement.current.children);

		let targetElement = listChildren.find( item => item.getAttribute('slug') === e.target.getAttribute('slug') );
		let slug = targetElement.getAttribute('slug');

		if( currentlyViewing === slug ) return;

		updateCurrentlyViewing(slug);

		animateMarker( markerPos.current, targetElement.getBoundingClientRect() ).then((msg) => {
			updateMarkerPosition( marker.current );
		});

		return;

	}

	useEffect(() => {

		updateMarkerPosition( marker.current );

		animateMarker( markerPos.current, listElement.current.children[0].getBoundingClientRect() ).then(() => {
			updateMarkerPosition( marker.current );
			prevOffset.current = marker.current.offsetTop;
		});

	}, [])

	return (
		<section className={ styles.clientNavContainer }>

			<h1 className={ styles.header }>Projects</h1>

			<div className={ styles.clientListContainer }>

				<Marker innerRef={ marker } />

				<ul ref={ listElement } className={ styles.clientList }>
					{ projects.map((project, i) => {
						return <li onClick={ handleClick } slug={ project.clientSlug } key={ i }>{ project.client }</li>
					})}
				</ul>

			</div>

		</section>
	)

}