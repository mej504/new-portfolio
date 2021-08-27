import { useEffect, useRef } from 'react';

import styles from '../../styles/work/components/project.module.scss';

import Image from 'next/image';

export default function ProjectCard({ project, index }) {

	const container = useRef(null);
	const offsetFromTop = useRef(null);

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

	const flushAnimations = ( animations ) => {

		if( animations.length <= 0 ) {
			return;
		}

		animations.forEach( (animation) => {
			if( !animation.transitionProperty ) {
				animation.cancel();
			}
		})

		return;

	}

	const animateIn = (container) => {

		container.animate([
			{transform: 'translateY(0)', opacity:1}
		], {
			duration:300,
			easing:'ease-in-out',
			iterations:1,
			delay: index * 75 
		})

		let animations = container.getAnimations();
		let targetAnimation = animations.find( animation => !animation.transitionProperty );

		targetAnimation.onfinish = function() {
			container.style.transform = 'translateY(0)';
			container.style.opacity = 1;
		}

		return;

	}

	const animateOnHover = () => {

		container.current.animate([
			{ transform: 'translateY(-10px)'}
		], {
			duration:300,
			easing:'ease-in-out',
			iterations:1,
			fill:'forwards',
			delay:0
		})

		return;

	}

	const animateOut = () => {

		let animations = container.current.getAnimations();

		if( animations.length > 0 ) {

			let targetAnimation = animations.find((animation) => !animation.transitionProperty );

			if( targetAnimation ) {
				targetAnimation.reverse();
			}

			return;
		}

		flushAnimations( animations );

		return;
	}

	useEffect(() => {
		animateIn(container.current);
	}, []);

	return (

		<div ref={ container } onMouseEnter={ animateOnHover } onMouseLeave={ animateOut } className={ styles.projectCardContainer }>

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