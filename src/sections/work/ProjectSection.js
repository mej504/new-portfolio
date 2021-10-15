import { useRef, useEffect } from 'react';
import SimpleBar from 'simplebar';

import styles from './styles/project-section.module.scss';

import MobileProjectCard from '@/work-components/MobileProjectCard';

export default function ProjectSection( { client } ) {

	const container = useRef(null);

	useEffect(() => {
		if( client.projects.length > 1 ) {
			new SimpleBar( container.current );
		} 
	}, [])

	return (
		<section className={ styles.projectSectionContainer}>

			<h2 className={ styles.clientName }>{ client.client }</h2>

			<div ref={ container }>

				<ul className={`${client.projects.length > 1 ? styles.projectsContainer : styles.singleProjectsContainer } ${client.projects.length === 1 && styles.centered}`}>

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