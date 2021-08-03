import workCardStyles from '../styles/work-card.module.scss';
import { useState } from 'react';

export default function WorkCardOverlay( { cardPos, hovered, data } ) {

	let { overlayContainer, cardAnimateIn, cardAnimateOut } = workCardStyles;

	return (

		<div className={ `overlay-container ${ hovered ? 'card-animate-in' : '' }` }>
			<p>{ data.title }</p>

			<style jsx>{`

				.overlay-container {
					color:white;
					position:absolute;
					top:0;
					left:0;
					width:100%;
					height:100%;
					padding:2em;
					transform:translateY(100%);
					background:var(--purpleBoxShadow);
				}

				.card-animate-in {
					visibility:visible;
					animation: animate-in 1s ease-in-out forwards;
				}

				.card-animate-out {
					visibility:visible;
					animation: animate-out 1s ease-in-out forwards;
				}

				@keyframes animate-in {

					from {
						transform:translateY(100%);
					}

					to {
						transform:translateY(0);
					}

				}

				@keyframes animate-out {

					from {
						transform:translateY(${cardPos}px);
					}

					to {
						transform:translateY(100%);
					}
				}

			`}</style>

		</div>

	)

}