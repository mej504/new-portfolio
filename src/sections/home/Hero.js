// Modules
import { useEffect, useRef } from 'react';

// Styles
import styles from './styles/hero.module.scss';

// Components
import Link from 'next/link';

export default function Hero(props) {

	const heroTitle = useRef( null );
	const heroPosition = useRef( null );
	const heroScroll = useRef(0);

	const arrowWrap = useRef(null);

	useEffect(() => {

		const handleScroll = () => {

			let { current } = heroTitle;
			let container = props.innerRef;
			let { scrollY, innerHeight, innerWidth } = window;

			let heroRect = current.getBoundingClientRect();
			heroPosition.current = heroRect;

			if( scrollY >= heroPosition.current ) {
				return;
			} else {
				heroScroll.current = innerWidth > innerHeight ? scrollY * 0.7 : scrollY * 0.65;
				current.style.transform = `translateY(-${ heroScroll.current }px)`;
				arrowWrap.current.style.transform = `translate(-50%, -${ heroScroll.current }px)`;
				arrowWrap.current.style.opacity = 1 - ( heroScroll.current * 0.005 );
				current.style.opacity = 1 - ( heroScroll.current * 0.0025 );
			}

		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}

	})


	return (
		<section ref={ props.innerRef } className={ styles.wrapper }>

			<div ref={ heroTitle } className={ styles.heroTitleWrap }>

				<h1>Justin Minyard</h1>
				<div className={ styles.titleAccentWrap }>
					<img src='/img/hero-accent.svg' width={ 1000 } height={ 50 } alt='' />
				</div>
				<h2>full-stack web developer</h2>

				<Link href="/work">
					<a className={ styles.btn }>View work</a>
				</Link>

			</div>

			<div ref={ arrowWrap } onClick={ () => window.location = '#about' }  className={ styles.scrollArrowWrap }>

				<img src='/img/scroll-arrow.svg' width={ 10 } height={ 71 } alt='' />

			</div>

		</section>
	)

}