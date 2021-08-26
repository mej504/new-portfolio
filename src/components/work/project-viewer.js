import ScrollBar from '../work/scrollbar';
import ProjectCard from '../work/project-card';

import styles from '../../styles/work/components/project-viewer.module.scss';

export default function ProjectViewer({ currentlyViewing, client }) {

	let text;
	let { projects } = client;

	return (
		<div className={ styles.projectViewer }>
			{projects.map((project) => {
				return <ProjectCard project={ project } />
			})}
		</div>
	)

}