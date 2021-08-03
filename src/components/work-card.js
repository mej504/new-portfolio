import Image from 'next/image';
import styles from '../styles/work-card.module.scss';
import WorkCardOverlay from './work-card-overlay';
import { useState } from 'react';

export default function WorkCard( props ) {

	const { imgPath } = props;
	const [containerHovered, setContainerHovered] = useState(false);
	const [cardPosition, updateCardPosition] = useState(0);

	const handleMouseExit = (e) => {
		setContainerHovered(false);

		let a = e.target.firstElementChild;
		let offset = a.offsetTop;
		let size = a.clientHeight;
		let test = normalizeCardPosition( size, offset );

		console.log(a.getBoundingClientRect());

		updateCardPosition( test );

	}

	const normalizeCardPosition = ( size, offset ) => {
		return Math.floor( (offset/size) * 100 );
	}

	return (

		<div onMouseEnter={() => setContainerHovered(true)} onMouseLeave={ handleMouseExit }  className='workCardContainer'>

			<WorkCardOverlay hovered={ containerHovered } cardPos={ cardPosition } data={ props } />

			<style jsx>{`

				.workCardContainer {
					position:relative;
					flex:1 1 500px;
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