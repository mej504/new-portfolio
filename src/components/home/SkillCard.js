// Modules
import { useRef, useEffect } from 'react';
import Image from 'next/image';

import cardStyles from './styles/skill-card.module.scss';

export default function SkillCard({ cardCount, i, imgPath, skillName }) {

	let container = useRef( null );
	let delay = i * 75;

	const animateCardsIn = ( element ) => {


		return new Promise((res, rej) => {

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

			if( i === ( cardCount - 1 ) ) {

				let animations = element.getAnimations();

				if( animations.length > 0 ) {
					animations[0].onfinish = function() {
						res({ completed:true })
					}
				} else {
					rej({ completed:false })

				}

			}

		})

	}

	const handleHoverIn = ( element ) => {

		element.animate([
			{ transform:'translate(0, 0)'},
			{ transform:'translate(-8px, -8px)'}
		], {
			duration: 200,
			iterations:1,
			easing:'ease',
			fill:'forwards'
		})

		return

	}

	const handleHoverOut = ( element ) => {

		element.animate([
			{ transform:'translate(-8px, -8px)'},
			{ transform:'translate(0, 0)'}
		], {
			duration: 200,
			iterations:1,
			easing:'ease',
			fill:'forwards'
		})

		return

	}

	useEffect(() => {

		animateCardsIn( container.current ).then((status) => {

			if( status.completed ) {
				container.current.style.transform = 'translate(0, 0)';
			}

		}).catch(() => {
			return null;
		})

	});

	return (

		<div ref={ container } onMouseEnter={ () => handleHoverIn(container.current) } onMouseLeave={ () => handleHoverOut(container.current) } className={ cardStyles.cardContainer }>

			<div className={ cardStyles.imgContainer }>

				<Image src={ imgPath } width={ 90 } height={ 90 } layout='intrinsic' loading='eager'/>

			</div>

			<p className={ cardStyles.skillName }>{ skillName }</p>

		</div>


	)

}