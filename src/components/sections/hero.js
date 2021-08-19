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
	// const scroll = useRef(0);

	useEffect(() => {

		let { current } = heroTitle;
		let scroll = null;

		window.addEventListener('scroll', () => {

			scroll = window.scrollY * 0.95;
			current.style.transform = `translateY(-${ scroll }px)`;
			current.style.opacity = 1 - ( scroll * 0.0025 );

		})

	}, [])

	return (
		<section ref={ props.innerRef } className={ heroStyles.wrapper }>

			<Nav />

			<div className={ heroStyles.videoWrap }>
				<video className={ heroStyles.videoWrap} src="/mov/bg-video.m4v" loop autoPlay muted/>
			</div>

			<div ref={ heroTitle } className={ heroStyles.heroTitleWrap }>

				<h1>Justin Minyard</h1>
				<div className={ heroStyles.titleAccentWrap }>
					<Image src='/img/hero-accent.svg' width={ 1000 } height={ 50 } />
				</div>
				<h2>full-stack web developer</h2>

				<a className={ heroStyles.btn } href="#work">View work</a>

			</div>

			<div className={ heroStyles.scrollArrowWrap }>

				<Image src='/img/scroll-arrow.svg' width={ 10 } height={ 71 } />

			</div>

		</section>
	)

}