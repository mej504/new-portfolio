import workCardStyles from '../styles/work-card.module.scss';
import { useState, useRef } from 'react';

export default function WorkCardOverlay( { overlayY, hovered, data } ) {

	let { category, title, overlayContainer, cardAnimateIn, cardAnimateOut } = workCardStyles;

	let currentY = overlayY;

	return (

		<div className={`${overlayContainer} ${hovered ? cardAnimateIn : 'cardAnimateOut' }`}>

			<p className={ category }>{ data.category }</p>

			<div className={ workCardStyles.detailsContainer }>
				<h3>{ data.title }</h3>
				<p>{ data.builtWith }</p>
			</div>

			<a className={ workCardStyles.link } target='_blank' href={ data.url } rel='external'>{ data.category === 'Personal' ? 'Try app' : 'Preview unavailable' }</a>

			<style jsx>{`

				.cardAnimateOut {
					animation: animate-out 300ms ease-in-out forwards;
				}

				@keyframes animate-out {

					from {
						top:${currentY}%;
					}

					to {
						top:100%;
					}

				}
			
			`}
			</style>

		</div>

	)

}