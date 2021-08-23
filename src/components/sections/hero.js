// Modules
import { useEffect, useState, useRef } from 'react';

// Styles
import heroStyles from '../../styles/sections/hero.module.scss';

// Components
import Nav from './nav';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero(props) {

	const { location } = props;
	const heroTitle = useRef( null );
	const heroPosition = useRef( null );
	const heroScroll = useRef(0);

	const video = useRef( null );
	const videoScroll = useRef(0);
	const prevVidY = useRef(0);

	const scrollToPercent = ( scrollY, viewportHeight ) => {
		return scrollY / viewportHeight * 100;
	}

	const handleScroll = () => {

		let { current } = heroTitle;
		let vid = video.current;
		let { scrollY, innerHeight } = window;

		let heroRect = current.getBoundingClientRect();
		heroPosition.current = heroRect;

		if( scrollY >= heroPosition.current ) {
			return;
		} else {
			heroScroll.current = scrollY * 0.5;
			videoScroll.current = scrollToPercent( scrollY, innerHeight );
			
			current.style.transform = `translateY(-${ heroScroll.current }px)`;
			current.style.opacity = 1 - ( heroScroll.current * 0.005 );

			vid.style.transform = `translateY(${ videoScroll.current }%)`;

		}

	}

	useEffect(() => {

		if( location === '/' ) {

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			}

		}

		/*
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
		*/

	}, [location])

	return (
		<section ref={ props.innerRef } className={ heroStyles.wrapper }>

			<Nav location={ location } />

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