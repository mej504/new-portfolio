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
	
	// State
	const [ currentlyViewing, updateCurrentlyViewing ] = useState('hecom');
	const [ breakPointReached, updateBreakPointReached ] = useState(false);
	const cardsAnimated = useRef(false);

	// Refs
	const projectViewerContainer = useRef(null);
	const windowSize = useRef(0);

	const printRef = ({ current }) => {
		console.log(current);
	}

	const handleResize = () => {
		windowSize.current = window.innerWidth;

		if( windowSize.current <= 835 && breakPointReached === false ) {
			updateBreakPointReached( true );
		}

		if( windowSize.current >= 836 && breakPointReached === true ) {
			updateBreakPointReached( false );
		}

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
		windowSize.current = window.innerWidth;
		windowSize.current <= 835 && updateBreakPointReached(true);

		window.addEventListener('resize', handleResize);

		// Remove listener upon unmount
		return () => {
			window.removeEventListener('resize', handleResize );
		}

	}, [])

	return (
		<Layout>

			<Head>
				<title>Work | Justin Minyard</title>
				<meta name="description" content="A history of professional and personal projects by Justin Minyard. Justin is a Louisville-based full-stack developer." />
			</Head>

			<Nav location='/work'/>

			<div className={ styles.uiContainer }>

				<div className={ styles.ui }>

					<ClientNav
						windowSize={ windowSize.current }
						currentlyViewing={ currentlyViewing } 
						updateCurrentlyViewing={ updateCurrentlyViewing }
						cardsAnimated={ cardsAnimated }
					/>

					<ProjectViewer
						innerRef={ projectViewerContainer }
						cardsAnimated={ cardsAnimated }
						numberOfProjects={ getNumberOfProjects() }
						client={ getProjects() } windowSize={ windowSize.current }
						currentlyViewing={ currentlyViewing }
					/>

				</div>

			</div>

		</Layout>
	)

}