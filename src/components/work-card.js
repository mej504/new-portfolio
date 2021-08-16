import Image from 'next/image';
import styles from '../styles/components/work-card.module.scss';
import WorkCardOverlay from './work-card-overlay';
import { useState } from 'react';

export default function WorkCard( props ) {

	const { imgPath } = props;
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

			`}</style>

		</div>

	)

}