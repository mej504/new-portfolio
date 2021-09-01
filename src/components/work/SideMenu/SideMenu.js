import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './sidemenu.module.scss';

export default function SideMenu({ open }) {

	const menuContainer = useRef(null);

	const flushAnimationClasses = ( menu ) => {
		// Since these are entry/exit animations, there should only ever be
		// one additional class on the menu element at any given point.
		menu.classList.remove(menu.classList[1]);
		return;
	}

	const handleMenu = ( menu ) => {

		if( open === null ) return;

		if( menu.classList.length > 1 ) {
			flushAnimationClasses( menu );
		}

		if( open ) {
			menu.classList.add( styles.animateIn );
		} else {
			menu.classList.add( styles.animateOut );
		}

	}

	useEffect(() => {
		handleMenu( menuContainer.current );
	}, [ open ])

	return (
		<div ref={ menuContainer } className={`${styles.menuContainer}`}>

			<ul className={ styles.menuList }>

				<li key={1}>
					<Link href="/#about">
						About
					</Link>
				</li>

				<li key={2}>
					<Link href="/#skills">
						Skills
					</Link>
				</li>

				<li key={3}>
					<Link href="/#contact">
						Contact
					</Link>
				</li>

			</ul>

		</div>
	)

}