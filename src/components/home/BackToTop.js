// Modules;
import { useRef, useState, useEffect } from 'react';
import styles from './styles/back-to-top.module.scss';

export default function BackToTopArrow({ heroSectionRef }) {

	// CONSTANTS
	const animationTriggersDefaults = {
		shouldAnimateIn:false,
		shouldAnimateOut:false
	}

	// STATE
	const [ buttonIsVisible, setButtonIsVisible ] = useState(false);

	// REFS
	const heroCutoff = useRef(null);

	// Popping these in a ref to ensure the triggers persist through the re-render
	const buttonAnimationTriggers = useRef({
		...animationTriggersDefaults
	})

	/**
	 * Handles the back-to-top button state based on the user's current location on the page
	 * 
	 * @returns void
	 * 
	 */

	const handleScroll = () => {

		let { scrollY } = window
		let { current: heroPoint } = heroCutoff;

		// Animate the button out if we pass the heroPoint threshold
		if( scrollY < heroPoint && buttonIsVisible ) {
			
			buttonAnimationTriggers.current = {
				shouldAnimateOut:true,
				shouldAnimateIn:false,
			}

			setButtonIsVisible(false);

			return;
		}

		// Animate the button in if we pass the heroPoint threshold
		if( ( scrollY >= heroPoint ) && !buttonIsVisible ) {

			buttonAnimationTriggers.current = {
				shouldAnimateOut:false,
				shouldAnimateIn:true,
			}

			setButtonIsVisible(true);

			return;

		}

	}

	useEffect(() => {

		// Grabs the point at which the back-to-top button must update
		heroCutoff.current = heroSectionRef.current.clientHeight / 2;

		// Sets initial state of button
		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}

	}, [ buttonIsVisible ] );


	return (

		<div
			onClick={ () => window.scrollTo({top:0}) }
			className={`${styles.buttonWrap} ${ buttonAnimationTriggers.current.shouldAnimateIn ? styles.animateIn : '' } ${ buttonAnimationTriggers.current.shouldAnimateOut ? styles.animateOut : ''}` }>

			<svg className={ styles.backToTopArrow } viewBox="0 0 75.04 75.04">
				<circle className={ styles.buttonEllipse } cx="37.52" cy="37.52" r="37.52"/>
				<path className={ styles.arrowTip } d="M37.67,21.23,46.86,35H28.48Z" transform="translate(0.04 0.21)"/>
				<rect className={ styles.arrowBody } x="36.56" y="35.22" width="2.3" height="17.99"/>
			</svg>

		</div>

	)

}