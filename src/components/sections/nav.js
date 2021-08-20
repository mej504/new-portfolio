import { useRef, useState, useEffect } from 'react';

import navStyles from '../../styles/components/nav.module.scss';

export default function Nav({ test }) {

	const [ thresholdReached, updateThresholdReached ] = useState( false );
	const scrollDirection = useRef(0);
	const navBar = useRef(null);
	const navHidden = useRef(false);

	useEffect(() => {

		let prevScrollY = window.scrollY;

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

		window.addEventListener('scroll', (e) => {

			let { scrollY, innerHeight } = window;

			if( scrollY > innerHeight && !thresholdReached ) {
				updateThresholdReached(true);
			} else if( scrollY < innerHeight && thresholdReached ){
				updateThresholdReached(false)
			}

			if( thresholdReached ) {


				if( scrollY >= prevScrollY ) scrollDirection.current = 1;
				if( scrollY <= prevScrollY ) scrollDirection.current = -1;

				if( scrollDirection.current === -1 && navHidden.current ) {
					animateNavBar('in', navBar.current );
					navHidden.current = false;
				} else if( scrollDirection.current === 1 && !navHidden.current ) {
					animateNavBar('out', navBar.current );
					navHidden.current = true;
				}

				prevScrollY = scrollY;
				scrollDirection.current = 0;

			}


		})

	}, [ thresholdReached ]);

	return (

		<nav ref={ navBar } className={ `${navStyles.navWrapper} ${thresholdReached ? navStyles.fixed : '' }` }>

			<p>JM</p>

			<ul className={ navStyles.nav }>

				<li><a href="#about">About</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#contact">Contact</a></li>

			</ul>

		</nav>

	)

}