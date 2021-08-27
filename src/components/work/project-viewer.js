import { useEffect, useRef } from 'react';

import ScrollBar from '../work/scrollbar';
import ProjectCard from '../work/project-card';

import styles from '../../styles/work/components/project-viewer.module.scss';

export default function ProjectViewer({ currentlyViewing, client, numberOfProjects }) {

	let { projects } = client;
	let viewerContainer = useRef(null);

	const animateCardsIn = () => {

		let viewerChildren = Array.from(viewerContainer.current.children);

		children.forEach( (child, index) => {

			child.animate

		})

	}

	const renderSpacer = () => {
		return <span className={ styles.spacer }></span>
	}

	useEffect(() => {

	}, [ currentlyViewing ] )

	return (
		<div className={ styles.projectViewerContainer }>

			<div ref={ viewerContainer } className={ styles.projectViewer }>
				{projects.map((project, index) => {
					return <ProjectCard project={ project } lastElement={ index === ( projects.length - 1 ) } key={ index } />
				})}
			</div>

			{/* */}
			{ numberOfProjects > 1 && renderSpacer() }

		</div>
	)

}