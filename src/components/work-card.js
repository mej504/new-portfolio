import Image from 'next/image';
import styles from '../styles/work-card.module.scss';
import WorkCardOverlay from './work-card-overlay';
import { useState } from 'react';

export default function WorkCard( props ) {

	const { imgPath } = props;
	const [containerHovered, setContainerHovered] = useState(false);

	const handleMouseExit = (e) => {
		setContainerHovered(false);
	}

	return (

		<div onMouseEnter={() => setContainerHovered(true)} onMouseLeave={() => setContainerHovered(false)}  className='workCardContainer'>

			<WorkCardOverlay hovered={ containerHovered } data={ props } />

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