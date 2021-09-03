// Modules;
import { useRef, useState, useEffect } from 'react';
import styles from '../styles/components/back-to-top.module.scss';

export default function BackToTopArrow({ bottomLimit, formBtnPosition, heroSectionRef, location }) {

	// Constants
	const STARTING_Y = 15;

	// State
	const [ buttonState, setButtonState ] = useState({
		visible: null,
		positionProp: '',
		location: null,
		yPosition: STARTING_Y
	});
	
	// Refs
	const bottomLimitReached = useRef(null);
	const heroThresholdReached = useRef(null);

	const heroCutoff = useRef(null);
	const bottomCutoff = useRef(null);

	const elPositionProp = useRef(null);
	const scrollYPos = useRef(null);
	const thisBtn = useRef(null);
	const isVisible = useRef(false);

	const handleScroll = () => {

		let { scrollY } = window
		let heroPoint = heroCutoff.current;
		let bottomPoint = bottomCutoff.current;
		scrollYPos.current = scrollY;

		// Update button if in top region
		if( scrollYPos.current < heroPoint && ( buttonState.visible || buttonState.visible === null ) ) {
			
			setButtonState({
				...buttonState,
				visible:false
			})

			return;
		}

		// Update button if in middle region
		if( ( scrollYPos.current >= heroPoint && scrollYPos.current < bottomPoint ) && ( !buttonState.visible || buttonState.positionProp === 'absolute' ) ) {

			setButtonState({
				visible:true,
				positionProp:'fixed',
				location:'bottom',
				yPosition:STARTING_Y
			})

			return;

		}

	}

	// Update current y scroll position once mounted
	useEffect(() => {

		heroCutoff.current = heroSectionRef.current.clientHeight / 2;
		bottomCutoff.current = formBtnPosition.current;

		// Kind of a misnomer for the function name  in this context, but oh well
		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}

	}, [ buttonState ]);


	return (
		<>
			<div
				onClick={ () => window.scrollTo({top:0}) }
				ref={thisBtn}
				className={`button-wrap ${ buttonState.visible === true ? styles.animateIn : styles.animateOut }` }>

				<svg className={ styles.backToTopArrow } viewBox="0 0 75.04 75.04">
					<circle className={ styles.buttonEllipse } cx="37.52" cy="37.52" r="37.52"/>
					<path className={ styles.arrowTip } d="M37.67,21.23,46.86,35H28.48Z" transform="translate(0.04 0.21)"/>
					<rect className={ styles.arrowBody } x="36.56" y="35.22" width="2.3" height="17.99"/>
				</svg>

			</div>

			<style jsx>{`

				.button-wrap {
					position:${ buttonState.positionProp };
					right:15px;
					${ buttonState.location }:${ buttonState.yPosition }px;
					margin:3em;
					border-radius:50%;
					max-height:75px;
					max-width:75px;
					cursor:pointer;
					overflow:hidden;
					z-index:100;
					transform:scale(1);
					transform-origin:center;
				}

				@media screen and (max-width:760px) {
					.button-wrap {
						max-height:50px;
						max-width:50px;
						right:-20px;
					}
				}

			`}</style>

		</>
	)

}