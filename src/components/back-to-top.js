// Modules;
import { useRef, useState, useEffect } from 'react';

import styles from '../styles/components/back-to-top.module.scss';

export default function BackToTopArrow({ bottomLimit, formBtnPosition, heroSectionRef }) {

	const elPositionProp = useRef('');
	const [position, updatePosition] = useState({
		x:15,
		y:15
	})

	const [elPosition, updateElPosition] = useState(null);
	const scrollLimitReached = useRef(null);
	const scrollYPos = useRef(null);
	const thisBtn = useRef(null);
	const thisBtnPos = useRef(null);
	const visibility = useRef('');

	// Update current y scroll position once mounted
	useEffect(() => {

		if( !window ) return;

		// Immediately updates scrollYPos ref
		scrollYPos.current = window.scrollY + window.innerHeight;

		// Sets visibility of button based off initial scrollY value
		if( window.scrollY >= (heroSectionRef.current.clientHeight / 2) ) {
			visibility.current = 'visible';
		} else {
			visibility.current = 'hidden';
		}

		// Check whether scroll limit is reached given the current scroll position on page load
		scrollLimitReached.current = scrollYPos.current >= formBtnPosition.current ? true : false;

		// If we've already reached the scroll limit, update button's position state
		if( scrollLimitReached.current ) {

			elPositionProp.current = 'top';
			updateElPosition('absolute');
			updatePosition({
				...position,
				y: formBtnPosition.current
			})

		} else {
			elPositionProp.current = 'bottom';
			updateElPosition('fixed');
			updatePosition({
				x:15,
				y:15
			})
		}

		window.addEventListener('scroll', (e) => {

			if( window.scrollY >= (heroSectionRef.current.clientHeight / 2) ) {
				visibility.current = 'visible';
			} else {
				visibility.current = 'hidden';
			}


			let scrollPlusViewportHeight = window.scrollY + window.innerHeight;
			let offset = 100;

			scrollYPos.current = scrollPlusViewportHeight;

			if( scrollYPos.current >= formBtnPosition.current ) {
				scrollLimitReached.current = true;
			}

			scrollLimitReached.current = scrollYPos.current - offset >= formBtnPosition.current ? true : false;

			if( scrollLimitReached.current ) {
				elPositionProp.current = 'top';
				updateElPosition('absolute');
				updatePosition({
					...position,
					y: formBtnPosition.current
				});
			} else {
				elPositionProp.current = 'bottom';
				updateElPosition('fixed');
				updatePosition({
					...position,
					y: 15
				})
			}
			
		})

	}, []);


	return (
		<>
			<div onClick={ () => window.scrollTo({top:0}) } ref={thisBtn} className='button-wrap'>

				<svg className={ styles.backToTopArrow } viewBox="0 0 75.04 75.04">
					<circle className={ styles.buttonEllipse } cx="37.52" cy="37.52" r="37.52"/>
					<path className={ styles.arrowTip } d="M37.67,21.23,46.86,35H28.48Z" transform="translate(0.04 0.21)"/>
					<rect className={ styles.arrowBody } x="36.56" y="35.22" width="2.3" height="17.99"/>
				</svg>

			</div>

			<style jsx>{`

				.button-wrap {
					visibility:${visibility.current};
					position:${ elPosition };
					right:${position.x}px;
					${elPositionProp.current}:${position.y}px;
					margin:3em;
					max-height:75px;
					max-width:75px;
					z-index:100;
				}

			`}</style>

		</>
	)

}