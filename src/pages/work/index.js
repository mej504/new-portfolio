// Modules
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Components
import ClientNav from '../../components/work/client-nav';
import ProjectViewer from '../../components/work/project-viewer';
import Nav from '../../components/sections/nav';
import Layout from '../../components/work/layout';

// Styles
import styles from '../../styles/work/sections/ui.module.scss';


export default function WorkPage (props) {

	const [ location, updateLocation ] = useState();
	const [ currentlyViewing, updateCurrentlyViewing ] = useState('hecom');

	useEffect(() => {

		console.log(currentlyViewing);
		updateLocation( window.location.pathname );

	}, [ currentlyViewing ])

	return (
		<Layout>

			<Head>
				<title>Work | Justin Minyard</title>
				<meta name="description" content="A history of professional and personal projects. Justin Minyard is a Louisville-based full-stack developer." />
			</Head>

			<Nav location={ location }/>

			<div className={ styles.uiContainer }>

				<ClientNav currentlyViewing={ currentlyViewing } updateViewing={ updateCurrentlyViewing } />
				<ProjectViewer currentlyViewing={ currentlyViewing } />

			</div>


		</Layout>
	)

}