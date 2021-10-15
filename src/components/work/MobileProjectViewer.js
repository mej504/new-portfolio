// Modules
import projects from 'lib/projects';

// Styles
import styles from './styles/mobile-project-viewer.module.scss';

// Components
import ProjectSection from '@/work-sections/ProjectSection';

export default function MobileProjectViewer() {

	return (

		<section className={ styles.mobileProjectViewerContainer }>

			<h1>Projects</h1>

			{ projects.map( (client, index) => <ProjectSection client={ client } key={ index } /> )}

		</section>

	)

}