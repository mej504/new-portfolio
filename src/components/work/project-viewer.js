import { useState, useEffect, useRef } from 'react';

import ProjectCard from '../work/project-card';

import styles from '../../styles/work/components/project-viewer.module.scss';

export default function ProjectViewer({ currentlyViewing, client, numberOfProjects, innerRef }) {

	let { projects } = client;
	let viewerContainer = useRef(null);
	let mainContainer = useRef(null);

	// Generates random integer between 1-10,0000 to ensure cards are always re-rendered upon currentlyViewing change
	const generateKey = () => {
		return Math.floor( Math.random() * (100000-1) + 1 );
	}

	useEffect(() => {
	}, [])

	return (

		<div ref={ innerRef } className={ styles.projectViewerContainer }>

			<div ref={ viewerContainer } className={ projects.length > 1 ? styles.projectViewer : styles.projectViewerSingle }>

				{projects.map((project, index) => {
					return <ProjectCard project={ project } index={ index } key={ generateKey() } />
				})}

			</div>


		</div>

	)

}