// Modules;
import { useRef, useState, useEffect } from 'react';

import styles from '../styles/components/back-to-top.module.scss';

export default function BackToTopArrow({ bottomLimit }) {

	const position = useRef({
		x:15,
		y:15
	})

	const [ scrollLimitReached, setScrollLimitReached ] = useState( false );
	const scrollYPos = useRef(0);

	// positions button at an offset from either the bottom or top
	// based upon whether the scroll limit has been reached
	const elPos = scrollLimitReached ? 'absolute' : 'fixed';

	if( scrollLimitReached ) {
		position.current.y = 100;
	} else {
		position.current.y = 15;
	}

	// Update current y scroll position once mounted
	useEffect(() => {

		if( !window ) return;

		window.addEventListener('scroll', (e) => {

			let scrollPlusViewportHeight = window.scrollY + window.innerHeight;
			let offset = 175;

			scrollYPos.current = scrollPlusViewportHeight;

			scrollYPos.current - offset > bottomLimit.current ? setScrollLimitReached( true ) : setScrollLimitReached( false );

		})

	}, [ scrollLimitReached ])

	return (
		<>
			<div className='button-wrap'>

				<svg className={ styles.backToTopArrow } viewBox="0 0 75.04 75.04">
					<circle className={ styles.buttonEllipse } cx="37.52" cy="37.52" r="37.52"/>
					<path className={ styles.arrowTip } d="M37.67,21.23,46.86,35H28.48Z" transform="translate(0.04 0.21)"/>
					<rect className={ styles.arrowBody } x="36.56" y="35.22" width="2.3" height="17.99"/>
				</svg>

			</div>

			<style jsx>{`

				.button-wrap {
					position:${ elPos };
					right:${position.current.x}px;
					bottom:${position.current.y}px;
					margin:3em;
					max-height:75px;
					max-width:75px;
					z-index:100;
				}

			`}</style>

		</>
	)

}