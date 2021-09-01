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
import MobileProjectViewer from '../../components/work/mobile-project-viewer';
import SideMenu from '../../components/work/SideMenu/SideMenu';

// Styles
import styles from '../../styles/work/sections/ui.module.scss';
import 'simplebar/dist/simplebar.css';

export default function WorkPage (props) {
	
	// State
	const [ currentlyViewing, updateCurrentlyViewing ] = useState('hecom');
	const [ screenType, setScreenType ] = useState(null);
	const [ breakPointReached, updateBreakPointReached ] = useState(false);

	// This must initially be null to avoid any complications with the side menu
	// on the Work page. An intitial state of 'false' will trigger an animation
	// on the menu once the page loads
	const [ menuOpen, setMenuOpen ] = useState(null);

	const cardsAnimated = useRef(false);

	// Refs
	const projectViewerContainer = useRef(null);
	const windowSize = useRef(0);

	const printRef = ({ current }) => {
		console.log(current);
	}

	const handleResize = () => {

		windowSize.current = window.innerWidth;
		updateScreenSize( windowSize.current );


		return;
	}

	const getProjects = () => {
		return projects.find((projects) => projects.clientSlug === currentlyViewing );
	}

	const getNumberOfProjects = () => {
		let client = getProjects()
		return client.projects.length;
	}

	const updateScreenSize = ( innerWidth ) => {

		if( innerWidth >= 1201 ) {
			setScreenType('mid-desktop');
			return;
		}

		if( innerWidth >= 1056 && innerWidth <= 1200 ) {
			setScreenType('small-desktop');
			return;
		}

		if( innerWidth >= 481 && innerWidth <= 1054 ) {
			setScreenType('tablet');
			return;
		}

		if( innerWidth >= 0  && innerWidth <= 480 ) {
			setScreenType('mobile');
			return;
		}

		return;

	}

	useEffect(() => {

		// Sets initial state once rendered
		windowSize.current = window.innerWidth;
		updateScreenSize( windowSize.current );

		if( screenType === 'small-desktop' || screenType === 'mid-desktop' ) {

			new SimpleBar( projectViewerContainer.current, {
				autoHide: false
			});

		}

		window.addEventListener('resize', handleResize);

		// Remove listener upon unmount
		return () => {
			window.removeEventListener('resize', handleResize );
		}

	}, [ screenType ])

	return (
		<Layout>

			<Head>
				<title>Work | Justin Minyard</title>
				<meta name="description" content="A history of professional and personal projects by Justin Minyard. Justin is a Louisville-based full-stack developer." />
			</Head>

			<Nav menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } location='/work' screenType={ screenType } />

			<div className={ styles.uiContainer }>

				{ (screenType === 'small-desktop' || screenType === 'mid-desktop') ? <div className={ styles.ui }>

					{ (screenType === 'mid-desktop' || screenType === 'small-desktop') && <ClientNav
						windowSize={ windowSize.current }
						currentlyViewing={ currentlyViewing } 
						updateCurrentlyViewing={ updateCurrentlyViewing }
						cardsAnimated={ cardsAnimated }
					/> }

					<ProjectViewer
						screenType={ screenType }
						innerRef={ projectViewerContainer }
						cardsAnimated={ cardsAnimated }
						numberOfProjects={ getNumberOfProjects() }
						client={ getProjects() } windowSize={ windowSize.current }
						currentlyViewing={ currentlyViewing }
					/>

				</div> :

				<MobileProjectViewer />

				}

				<SideMenu open={ menuOpen } />

			</div>


		</Layout>
	)

}