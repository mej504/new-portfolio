import { useEffect } from 'react';

import navStyles from '../../styles/components/nav.module.scss';

export default function Nav({ test }) {

	return (

		<nav className={ navStyles.navWrapper }>

			<p>JM</p>

			<ul className={ navStyles.nav}>

				<li><a href="#about">About</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#contact">Contact</a></li>

			</ul>

		</nav>

	)

}