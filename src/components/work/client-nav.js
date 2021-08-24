// Modules
import { useEffect, useRef, useState } from 'react';
import projects from '../../../lib/projects';

// Components
import Marker from '../work/marker';

// Styles
import styles from '../../styles/work/components/client-nav.module.scss';

export default function ClientNav({ currentlyViewing, updateCurrentlyViewing }) {

	// List data
	const listElement = useRef(null);
	const listItemLocations = useRef([]);
	const prevSelection = useRef(null);

	// Marker data
	const marker = useRef(null);
	const markerPos = useRef({});
	const prevShift = useRef(null);

	// Animation data
	const animationsComplete = useRef(null);

	const updateListItemLocations = ( list ) => {

		if( !list ) return;

		let listItems = Array.from( list.children );

		listItems.forEach( (el) => {
			let slug = el.getAttribute('slug');
			let pos = el.getBoundingClientRect();

			listItemLocations.current = [
				...listItemLocations.current,
				{
					slug,
					pos: {
						y: pos.y,
						height: pos.height
					}
				}
			]

		})

	}

	const getMarkerRect = ( marker ) => {
		return marker.getBoundingClientRect();
	}

	const updateMarkerPosition = ( marker ) => {

		if( !marker ) throw new ReferenceError('marker is undefined. function expects 1 parameter to be an HTMLElement');

		let markerRect = getMarkerRect( marker );

		markerPos.current = {
			y: markerRect.y,
			height: markerRect.height,
			centerOffset: markerRect.y + (markerRect.height / 2)
		}

		return;

	}

	const getYShift = ( markerPosition, targetElementPosition, direction ) => {

		// Calculates center of target and marker elements' offset from top of the screen
		let targetCenter = targetElementPosition.y + ( targetElementPosition.height / 2 );
		let markerCenter = markerPosition.y + ( markerPosition.height / 2 );
		let shift;

		// If null, we will always initially animate downward
		if( prevShift.current === null ) {
			shift = (markerCenter - targetCenter) * -1;
			return shift;
		} else {
			// If the target element is above the marker, we must move back some distance,
			// otherwise we move forward some distance
			if( direction === 'up' ) {
				shift = prevShift.current + ( markerCenter - targetCenter );
				return shift;
			} else {
				shift = prevShift.current + ( targetCenter - markerCenter );
				return shift;
			}
			
		}

	}

	const getAnimationDirection = ( markerY, targetElementY ) => {
		return markerY > targetElementY ? 'up' : 'down';
	}

	const animateMarker = ( markerPosition, targetPosition ) => new Promise((res, rej) => {

		animationsComplete.current = false;
		console.log(markerPosition, targetPosition);

		const options = {
			duration:500,
			easing:'ease-in-out',
			fill:'forwards',
			iterations:1
		}
		let direction = getAnimationDirection( markerPosition.y, targetPosition.y );
		let shift = getYShift( markerPosition, targetPosition, direction);
		let animations;
		console.log(shift);

		if( prevShift.current === null ) {

			marker.current.animate([
				{ transform: `translateY(${shift}px)` }
			], options)

			prevShift.current = shift;

		} else {

			marker.current.animate([
				{ transform: `translateY(${shift}px)`},
			], options);

			prevShift.current = shift;
		}


		animations = marker.current.getAnimations();
		console.log(animations);

		animations.forEach( (animation, i) => {

			if( i === (animations.length - 1) ) {
				animation.onfinish = function() {
					console.log('animations complete!');
					res('animations completed!');
				}
			}

		})

		return;

	});

	const handleClick = (e) => {

		if( animationsComplete.current === false ) {
			return;
		}

		let targetElement = listItemLocations.current.find( item => item.slug === e.target.getAttribute('slug') );

		animateMarker( markerPos.current, targetElement.pos ).then((msg) => {
			animationsComplete.current = true;
			updateMarkerPosition( marker.current );
		});

		return;

	}

	useEffect(() => {

		updateListItemLocations( listElement.current );
		updateMarkerPosition( marker.current );

		animateMarker( markerPos.current, listItemLocations.current[0].pos ).then((msg) => {
			animationsComplete.current = true;
			updateMarkerPosition( marker.current );
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