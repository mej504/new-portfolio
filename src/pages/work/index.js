// Modules
import { useEffect, useState, useRef } from 'react';
import SimpleBar from 'simplebar';

// Data
import projects from '../../../lib/projects';

// Components
import ClientNav from '../../components/work/client-nav';
import ProjectViewer from '../../components/work/project-viewer';
import Nav from '../../components/sections/nav';
import Layout from '../../components/work/layout';
import Head from 'next/head';

// Styles
import styles from '../../styles/work/sections/ui.module.scss';
import 'simplebar/dist/simplebar.css';

export default function WorkPage (props) {
	
	const [ location, updateLocation ] = useState();
	const [ currentlyViewing, updateCurrentlyViewing ] = useState('hecom');
	const [ breakPointReached, updateBreakPointReached ] = useState(false);
	const projectViewerContainer = useRef(null);
	const windowSize = useRef(0);

	const handleResize = () => {
		windowSize.current = window.innerWidth;
		windowSize.current <= 835 ? updateBreakPointReached(true) : updateBreakPointReached(false);
	}

	const getProjects = () => {
		return projects.find((projects) => projects.clientSlug === currentlyViewing );
	}

	const getNumberOfProjects = () => {
		let client = getProjects()
		return client.projects.length;
	}

	useEffect(() => {

		let scrollBar = new SimpleBar( projectViewerContainer.current, {
			autoHide: false
		});

		// Sets initial state once rendered
		updateLocation( window.location.pathname );
		windowSize.current = window.innerWidth;
		windowSize.current <= 835 ? updateBreakPointReached(true) : updateBreakPointReached(false);

		window.addEventListener('resize', handleResize);

		// Remove listener upon unmount
		return () => {
			window.removeEventListener('resize', handleResize );
		}

	}, [ currentlyViewing, breakPointReached ])

	return (
		<Layout>

			<Head>
				<title>Work | Justin Minyard</title>
				<meta name="description" content="A history of professional and personal projects by Justin Minyard. Justin is a Louisville-based full-stack developer." />
			</Head>

			<Nav location={ location }/>

			<div className={ styles.uiContainer }>

				<div className={ styles.ui }>
					<ClientNav windowSize={ windowSize.current } currentlyViewing={ currentlyViewing } updateViewing={ updateCurrentlyViewing } />
					<ProjectViewer innerRef={ projectViewerContainer } numberOfProjects={ getNumberOfProjects() } client={ getProjects() } windowSize={ windowSize.current } currentlyViewing={ currentlyViewing } />
				</div>

			</div>


		</Layout>
	)

}