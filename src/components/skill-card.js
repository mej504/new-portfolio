// Modules
import { useState, useRef, useEffect } from 'react';

import cardStyles from '../styles/components/skill-card.module.scss';

import Image from 'next/image';

export default function SkillCard( props ) {

	let { scrollTargetHit, cardCount, i } = props;
	let elementsAnimated = props.elementsAnimated;
	let container = useRef( null );
	let delay = i * 75;

	const animateCardsIn = ( element ) => new Promise((res, rej) => {

		element.animate([
			{
				transform:'translate(0, 100px)',
				opacity:0,
			},
			{
				transform:'translate(0, 0)',
				opacity:1,
			}
		], {
			duration:1000,
			iterations:1,
			delay: delay,
			fill:'forwards',
			easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
		})

		if( i === ( cardCount -1 ) ) {

			let animations = element.getAnimations();

			if( animations.length > 0 ) {
				animations[0].onfinish = function() {
					res({
						completed:1
					})
				}
			} else {
				rej({
					completed:0
				})
			}

		}


	})

	const handleHoverIn = ( element ) => {

		if( elementsAnimated.current ) {
			element.animate([
				{ transform:'translate(0, 0)'},
				{ transform:'translate(-8px, -8px)'}
			], {
				duration: 200,
				iterations:1,
				easing:'ease',
				fill:'forwards'
			})
		}

	}

	const handleHoverOut = ( element ) => {

		if( elementsAnimated.current ) {
			element.animate([
				{ transform:'translate(-8px, -8px)'},
				{ transform:'translate(0, 0)'}
			], {
				duration: 200,
				iterations:1,
				easing:'ease',
				fill:'forwards'
			})
		}

	}

	useEffect(() => {

		if( scrollTargetHit && !elementsAnimated.current ) {

			animateCardsIn( container.current ).then((status) => {

				if( status.completed === 1 ) {
					elementsAnimated.current = true;
					container.current.style.transform = 'translate(0, 0)';
				}

			}).catch((err) => {
				console.log(err);
			})

		}

	}, [ scrollTargetHit ] );

	return (

		<div ref={ container } onMouseEnter={ () => handleHoverIn(container.current ) } onMouseLeave={ () => handleHoverOut(container.current) } className={ cardStyles.cardContainer }>

			<div className={ cardStyles.imgContainer }>
				<Image src={ props.imgPath } width={ 90 } height={ 90 } objectFit='contain' loading='eager'/>
			</div>
			<p className={ cardStyles.skillName }>{ props.skillName }</p>

			<style jsx>{`

				.animate-in {
					animation:1250ms ${delay}ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards shift-in;
				}

				@keyframes shift-in {
					from {
						transform:translate(0, 100px);
						opacity:0;
					}
					to {
						transform:translate(0, 0);
						opacity:1;
					}
				}

			`}</style>

		</div>


	)

}