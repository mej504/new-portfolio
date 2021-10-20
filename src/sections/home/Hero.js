// Modules
import { useEffect, useRef } from 'react';

// Styles
import styles from './styles/hero.module.scss';

// Components
import Link from 'next/link';
import Image from 'next/image';

export default function Hero({ innerRef }) {

	const heroTitle = useRef( null );
	const arrowWrap = useRef(null);

	useEffect(() => {

		/**
		 * 
		 * Manipulates hero title container and scroll arrow with some level of "smoothing"
		 * 
		 * @param HTMLElement | title | Hero title container
		 * @param HTMLElement | arrow | Scroll arrow container
		 * @param Float | transitionCoefficient | Amount of smoothing for transform
		 * @param Float | opacityCoefficient | Amount of smoothing for opacity change
		 * 
		 * @returns void
		 * 
		 */

		const animateHeroElements = ( title, arrow, transitionCoefficient = 0.25, opacityCoefficient = 0.0025 ) => {

			let { scrollY } = window;
			title.style.transform = `translateY(-${ transitionCoefficient * (scrollY * 2) }px)`;
			title.style.opacity = 1 - ( opacityCoefficient * scrollY );

			// I want the arrow to fade out slightly faster than the title elements, so I bump up
			// the smoothing coefficient to 0.0060
			arrow.style.transform = `translateY(-${ ( transitionCoefficient + 0.25 ) * ( scrollY * 2 ) }px)`;
			arrow.style.opacity = 1 - (( opacityCoefficient + 0.0035) * scrollY );

			return;

		}
		
		/**
		 * 
		 * Scroll handler to determine at what point to continue or stop animating
		 * elements in the hero section
		 * 
		 * @returns void
		 * 
		*/

		const handleScroll = () => {

			let { current: title } = heroTitle;
			let { current: arrow } = arrowWrap;
			let { bottom: titleBottom } = title.getBoundingClientRect();

			// Short circuit if bottom of hero title is out of viewport
			if( titleBottom <= 0 ) {
				return;
			} else {
				return animateHeroElements( title, arrow, 0.1 );
			}

		}

		window.addEventListener('scroll', handleScroll );

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}

	})


	return (
		<section ref={ innerRef } className={ styles.wrapper }>

			<div ref={ heroTitle } className={ styles.heroTitleWrap }>

				<h1>Justin Minyard</h1>
				<div className={ styles.titleAccentWrap }>
					<Image src='/img/hero-accent.svg' width={ 1000 } height={ 80 } layout='intrinsic' alt='' />
				</div>
				<h2>full-stack web developer</h2>

				<Link href="/work">
					<a className={ styles.btn }>View work</a>
				</Link>

			</div>

			<div ref={ arrowWrap } onClick={ () => window.location = '#about' }  className={ styles.scrollArrowWrap }>

				<Image role='button' src='/img/scroll-arrow.svg' width={ 10 } height={ 71 } alt='Click here to learn about me' />

			</div>

		</section>
	)

}