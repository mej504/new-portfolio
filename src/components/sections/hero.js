// Modules
import { useEffect, useState, useRef } from 'react';

// Styles
import heroStyles from '../../styles/sections/hero.module.scss';

// Components
import Nav from './nav';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero(props) {

	const heroTitle = useRef( null );
	const heroPosition = useRef( null );

	const prevVidY = useRef(0);

	const video = useRef( null );

	const scrollToPercent = ( scrollY, viewportHeight ) => {
		return scrollY / viewportHeight * 100;
	}

	useEffect(() => {

		let { current } = heroTitle;
		let vid = video.current;
		let heroScroll = 0;
		let vidScroll = 0;

		// Update heroPosition
		let heroRect = heroTitle.current.getBoundingClientRect();
		heroPosition.current = heroRect;

		window.addEventListener('scroll', () => {

			let { scrollY, innerHeight } = window;

			if( scrollY >= heroPosition.current.height ) {
				return;
			} else {
				heroScroll = scrollY * 0.5;
				vidScroll = scrollToPercent( scrollY, innerHeight );

				current.style.transform = `translateY(-${ heroScroll }px)`;
				current.style.opacity = 1 - ( heroScroll * 0.005 );

				vid.style.transform = `translateY(${ vidScroll }%)`;

			}


		})

	}, [])

	return (
		<section ref={ props.innerRef } className={ heroStyles.wrapper }>

			<Nav />

			<div className={ heroStyles.videoWrap }>
				<video ref={ video } className={ heroStyles.videoWrap} src="/mov/bg-video.m4v" loop autoPlay muted/>
			</div>

			<div ref={ heroTitle } className={ heroStyles.heroTitleWrap }>

				<h1>Justin Minyard</h1>
				<div className={ heroStyles.titleAccentWrap }>
					<Image src='/img/hero-accent.svg' width={ 1000 } height={ 50 } />
				</div>
				<h2>full-stack web developer</h2>

				<a className={ heroStyles.btn } href="#work">View work</a>

			</div>

			<div onClick={ () => window.location = '#about' }  className={ heroStyles.scrollArrowWrap }>

				<Image src='/img/scroll-arrow.svg' width={ 10 } height={ 71 } />

			</div>

		</section>
	)

}