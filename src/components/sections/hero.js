// Modules
import { useEffect, useState, useRef } from 'react';

// Styles
import heroStyles from '../../styles/sections/hero.module.scss';

// Components
import Nav from './nav';
import Link from 'next/link';

export default function Hero(props) {

	const { location } = props;
	const heroTitle = useRef( null );
	const heroPosition = useRef( null );
	const heroScroll = useRef(0);

	const arrowWrap = useRef(null);

	const container = props.innerRef;

	const video = useRef( null );
	const videoScroll = useRef(0);
	const prevVidY = useRef(0);
	const videoOrientation = useRef(null);

	const handleScroll = () => {

		let { current } = heroTitle;
		let container = props.innerRef;
		let { scrollY, innerHeight } = window;

		let heroRect = current.getBoundingClientRect();
		heroPosition.current = heroRect;

		if( scrollY >= heroPosition.current ) {
			return;
		} else {
			heroScroll.current = scrollY * 0.6;
			current.style.transform = `translateY(-${ heroScroll.current }px)`;
			arrowWrap.current.style.transform = `translateY(-${ heroScroll.current }px)`;
			arrowWrap.current.style.opacity = 1 - ( heroScroll.current * 0.005 );
			current.style.opacity = 1 - ( heroScroll.current * 0.0025 );
		}

	}

	const handleResize = () => {

		let { current } = videoOrientation;

		if( window.innerWidth <= 1055 && current === 'landscape' ) {
			video.current.setAttribute('src', '/mov/bg-video-portrait.m4v');
			videoOrientation.current = 'portrait';
		}

		if( window.innerWidth > 1055 && current === 'portrait' ) {
			video.current.setAttribute('src', '/mov/bg-video.m4v');
			videoOrientation.current = 'landscape';
		}

		return;

	}

	useEffect(() => {

		if( window.innerWidth <= 1055 && !(window.innerWidth > window.innerHeight) ) {
			video.current.setAttribute('src', '/mov/bg-video-portrait.m4v');
			videoOrientation.current = 'portrait';
		}

		if( window.innerWidth > 1055 ) {
			video.current.setAttribute('src', '/mov/bg-video.m4v');
			videoOrientation.current = 'landscape';
		}


		if( location === '/' ) {

			window.addEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('scroll', handleScroll);
				window.removeEventListener('resize', handleResize);
			}

		}

	}, [location])

	return (
		<section ref={ props.innerRef } className={ heroStyles.wrapper }>

			<div className={ heroStyles.videoWrap }>
				<video ref={ video } className={ heroStyles.videoWrap} src="/mov/bg-video.m4v" loop autoPlay muted/>
			</div>

			<div ref={ heroTitle } className={ heroStyles.heroTitleWrap }>

				<h1>Justin Minyard</h1>
				<div className={ heroStyles.titleAccentWrap }>

					<img src='/img/hero-accent.svg' width={ 1000 } height={ 50 } alt='' />

					{
					/*
						<Image src='/img/hero-accent.svg' width={ 1000 } height={ 50 } alt='' />
					*/
					}

				</div>
				<h2>full-stack web developer</h2>

				<Link href="/work">
					<a className={ heroStyles.btn }>View work</a>
				</Link>

			</div>

			<div ref={ arrowWrap } onClick={ () => window.location = '#about' }  className={ heroStyles.scrollArrowWrap }>

				<img src='/img/scroll-arrow.svg' width={ 10 } height={ 71 } alt='' />

				{
				/*
					<Image src='/img/scroll-arrow.svg' width={ 10 } height={ 71 } alt='' />
				*/
				}

			</div>

		</section>
	)

}