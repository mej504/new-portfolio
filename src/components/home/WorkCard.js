import { useState } from 'react';

import WorkCardOverlay from './WorkCardOverlay';

import styles from './styles/work-card.module.scss';

export default function WorkCard( props ) {

	const { imgPath, deviceSize } = props;

	const [containerHovered, setContainerHovered] = useState(false);


	/* STATE */
	const [overlayY, updateOverlayY] = useState(0);
	const [targetedOverlay, updateTargetedOverlay] = useState(undefined);

	/* Return percentage-based offset of targeted overlay from top of container */
	const normalizeYPos = ( elementHeight, yPosition ) => {
		return Math.floor( ( yPosition / elementHeight ) * 100 );
	}

	const handleHoverOut = ( overlay ) => {
		let offset = overlay.offsetTop;
		let startingYPos = normalizeYPos( overlay.getBoundingClientRect().height, offset );
		updateOverlayY( startingYPos );
	}

	return (

		deviceSize === 'desktop' ? (

			<div
			
			onMouseEnter={(e) => {
				updateTargetedOverlay( e.target.firstElementChild );
				setContainerHovered(true)
			}}
			
			onMouseLeave={() => {
				handleHoverOut( targetedOverlay );
				setContainerHovered(false)
				updateTargetedOverlay(null);
			}}
			
			className='workCardContainer'>

				<WorkCardOverlay
					overlayY={ overlayY }
					hovered={ containerHovered }
					data={ props }
				/>

				<style jsx>{`

					.workCardContainer {
						position:relative;
						flex:1 1 575px;
						max-width:575px;
						padding:2em;
						background-image:url(${imgPath});
						background-position:top;
						background-size:cover;
						background-repeat:no-repeat;
						min-height:325px;
						border:2px solid var(--richBlack);
						overflow:hidden;
					}

					@media screen and (max-width:650px) {
						.workCardContainer {
							background-position:center;
							background-size:cover;
						}
					}


				`}</style>

			</div>

		) : (

			<div className={ styles.mobileWorkCardContainer }>

				<img src={ imgPath } alt={`Image preview of ${ props.title } project`}/>

				<div className={ styles.mobileWorkCardContainerDetails}>


					<div className={ styles.detailsSubgroup }>

						<h2>{ props.title }</h2>

						<div>
							<span className={ styles.mobileCategory }>{ props.category } | </span>
							<span className={ styles.mobileBuiltWith }>{ props.builtWith }</span>
						</div>

						<p>{ props.description }</p>

					</div>

					<button onClick={() => window.location = props.url } aria-label={`Visit ${props.title}`} className={ styles.workCardButton }>View site</button>


				</div>

			</div>

		)


	)

}