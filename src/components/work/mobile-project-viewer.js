// Modules
import projects from '../../../lib/projects';
import { useState } from 'react';

// Styles
import styles from '../../styles/work/sections/mobile-project-viewer.module.scss';

// Components
import ProjectSection from '../work/project-section';

export default function MobileProjectViewer() {

	return (

		<section className={ styles.mobileProjectViewerContainer }>

			<h1>Projects</h1>

			{ projects.map( (client, index) => <ProjectSection client={ client } key={ index } /> )}

		</section>

	)

}