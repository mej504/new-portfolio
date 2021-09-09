import { useRef, useEffect } from 'react';
import SimpleBar from 'simplebar';

import styles from '../../styles/work/components/project-section.module.scss';

import MobileProjectCard from '../work/mobile-project-card';

export default function ProjectSection( { client } ) {

	const container = useRef(null);

	const singleContainerStyles = {
		display:'flex',
		gap:0,
		padding:'4em 0 2.5em 0',
		listStyleType:'none',
		minWidth:'100%'
	}

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