import { useRef } from 'react';

import React from 'react';

import ProjectCard from '@/work-components/ProjectCard';

import styles from './styles/project-viewer.module.scss';

export default function ProjectViewer({ client, cardsAnimated, innerRef }) {

	let { projects } = client;

	// Refs
	let viewerContainer = useRef(null);

	// Generates random integer between 1-10,0000 to ensure cards are always re-rendered upon currentlyViewing change
	const generateKey = () => {
		return Math.floor( Math.random() * (100000-1) + 1 );
	}

	return (

		<div ref={ innerRef } className={ styles.projectViewerContainer }>

			<div ref={ viewerContainer } className={ projects.length > 1 ? styles.projectViewer : styles.projectViewerSingle }>

				{projects.map((project, index) => {
					return <ProjectCard
						project={ project }
						numberOfProjects={ projects.length } 
						index={ index }
						cardsAnimated={ cardsAnimated }
						key={ generateKey() } />
				})}

			</div>


		</div>

	)

}