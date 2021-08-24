// Modules
import { useEffect, useRef, useState } from 'react';

// Components
import Marker from '../work/marker';

// Styles
import styles from '../../styles/work/components/client-nav.module.scss';

export default function ClientNav() {

	const list = useRef(null);
	const 

	const clients = [
		'HealthEconomics.Com',
		'Women\'s Political Collaborative of Tennessee',
		'Personal Projects'
	]

	return (
		<section className={ styles.clientNavContainer }>

			<h1 className={ styles.header }>Projects</h1>

			<div className={ styles.clientListContainer }>

				<Marker />

				<ul ref={ list } className={ styles.clientList }>
					{ clients.map((client, i) => {
						return <li key={ i }>{ client }</li>
					})}
				</ul>

			</div>

		</section>
	)

}