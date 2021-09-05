import { useRef, useEffect } from 'react';
import SimpleBar from 'simplebar';

import styles from '../../styles/work/components/project-section.module.scss';

import MobileProjectCard from '../work/mobile-project-card';

export default function ProjectSection( { client } ) {

	const container = useRef(null);

	useEffect(() => {
		new SimpleBar( container.current );
	}, [])

	return (
		<section className={ styles.projectSectionContainer}>

			<h2 className={ styles.clientName }>{ client.client }</h2>

			<div ref={ container }>

				<ul className={`${styles.projectsContainer} ${client.projects.length === 1 && styles.centered}`}>

					<li className={ styles.spacer }></li>

					{ client.projects.map( (project, i) => (
						<MobileProjectCard project={ project } key={ i } />
					))}

					<li className={ styles.spacer }></li>

				</ul>

			</div>

		</section>
	)
}