import { useContext, useEffect, useRef } from 'react';

import styles from '../../styles/work/components/project.module.scss';

export default function ProjectCard({ project, currentlyViewing, cardsAnimated, numberOfProjects, index }) {

	const container = useRef(null);
	const offsetFromTop = useRef(null);

	const setLocation = ( location ) => {

		if( location === null ) return;
		return window.location = location;

	}

	const printDetails = () => {

		if( project.description ) {
			return ( 
				<p>{ project.description }</p>
			)

		}

		return (
			<>
				<p><strong>The problem: </strong>{ project.problem }</p>
				<p><strong>The solution: </strong>{ project.solution }</p>
			</>
		)

	}

	return (

		<div onClick={() => setLocation(project.link) } ref={ container } className={ styles.projectCardContainer }>

			<div className={ styles.imageContainer }>

				<img src={ project.images[0] } height={230} width={400} layout='responsive' objectFit='cover' objectPosition='top' alt='' />

				{
				/*
					<Image src={ project.images[0] } priority={ true } height={230} width={400} layout='responsive' objectFit='cover' objectPosition='top' alt='' />
				*/
				}

			</div>

			<div className={ styles.projectDetailsContainer }>
				<h2>{ project.title }</h2>
				
				<div className={ styles.projectMeta }>
					<span className={ styles.type }>{ project.type } | </span>
					<span className={ styles.builtWith }>{ project.builtWith }</span>
				</div>

				{ printDetails() }

			</div>

		</div>

	)

}