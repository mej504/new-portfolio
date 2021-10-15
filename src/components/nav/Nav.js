import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './nav.module.scss';

import { Squeeze as Hamburger } from 'hamburger-react';

export default function Nav({ location, screenType, setMenuOpen }) {

	const [ thresholdReached, updateThresholdReached ] = useState( false );
	const scrollDirection = useRef(0);
	const navBar = useRef(null);
	const navHidden = useRef(false);
	const prevScrollY = useRef(0);

	const animateNavBar = ( direction, element ) => {

		let yStart = direction === 'out' ? 'translateY(0)' : 'translateY(-100%)';
		let yShift = direction === 'out' ? 'translateY(-100%)' : 'translateY(0)';

		element.animate([
			{ transform: yStart },
			{ transform: yShift }
		], {
			duration:300,
			iterations:1,
			fill:'forwards'
		})

		return;

	}


	const handleScroll = () => {

		let { scrollY, innerHeight } = window;

		if( scrollY > innerHeight && !thresholdReached ) {
			updateThresholdReached(true);
		} else if( scrollY < innerHeight && thresholdReached ){
			updateThresholdReached(false)
		}

		if( thresholdReached ) {

			if( scrollY >= prevScrollY.current ) scrollDirection.current = 1;
			if( scrollY <= prevScrollY.current ) scrollDirection.current = -1;

			if( scrollDirection.current === -1 && navHidden.current ) {
				animateNavBar('in', navBar.current );
				navHidden.current = false;
			} else if( scrollDirection.current === 1 && !navHidden.current ) {
				animateNavBar('out', navBar.current );
				navHidden.current = true;
			}

			prevScrollY.current = scrollY;
			scrollDirection.current = 0;

		}

		return;

	}

	useEffect(() => {

		prevScrollY.current = window.scrollY;

		if( location === '/' ) {

			window.addEventListener('scroll', handleScroll );

			return () => {
				window.removeEventListener('scroll', handleScroll);
			}

		}

	}, [ thresholdReached, location ]);

	return (

		<nav ref={ navBar } className={ `${location === '/' ? styles.navWrapper : location === '/work' ? styles.workNavWrapper : null } ${thresholdReached ? styles.fixed : '' }` }>

			<p onClick={() => window.location = '/' } className={ styles.logoMark }>JM</p>

			{ location === '/' &&

				<ul className={ styles.nav }>

					<li><a href="#about">About</a></li>
					<li><a href="#work">Work</a></li>
					<li><a href="#contact">Contact</a></li>

				</ul>

			}

			{ ( location === '/work' && (screenType === 'small-desktop' || screenType === 'mid-desktop')) &&

				<ul className={ styles.nav }>

					<li>
						<Link href="/#about">
							<a>About</a>
						</Link>
					</li>

					<li>
						<Link href="/#skills">
							<a>Skills</a>
						</Link>
					</li>

					<li>
						<Link href="/#contact">
							<a>Contact</a>
						</Link>
					</li>

				</ul>

			}

			{ (location === '/work' && (!(screenType === 'mid-desktop' || screenType === 'small-desktop') ) ) &&

				<Hamburger onToggle={toggled => {
					if( toggled ) {
						setMenuOpen(true);
					} else {
						setMenuOpen(false);
					}
				}} color='white' label="Show menu" rounded={true} />

			}

		</nav>

	)

}