import { useEffect, useRef } from 'react';

import styles from '../../styles/work/components/project.module.scss';

import Image from 'next/image';

export default function ProjectCard({ project, lastElement }) {

	const container = useRef(null);

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

	const animateOnHover = () => {

		container.current.animate([
			{ transform: 'translateY(-10px)'}
		], {
			duration:200,
			easing:'ease-in-out',
			iterations:1,
			fill:'forwards',
			delay:0
		})

		return;

	}

	const animateOut = () => {
		let animations = container.current.getAnimations()
	}

	return (

		<div ref={ container } onMouseEnter={ animateOnHover } onMouseExit={ animateOut } className={ styles.projectCardContainer }>

			<div className={ styles.imageContainer }>
				<Image src={ project.images[0] } loading='eager' height={230} width={400} layout='responsive' objectFit='cover' objectPosition='top'/>
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