// Modules
import { useEffect, useRef, useState } from 'react';

import SkillCard from '../skill-card';
import skills from '../../../lib/skills';
import styles from '../../styles/sections/skills.module.scss';

export default function Skills({ location }) {

	const [scrollTargetHit, updateScrollTargetHit] = useState(false);
	const elementsAnimated = useRef(false);

	const cardCount = useRef(skills.length);
	
	const header = useRef( null );
	const headerPos = useRef({});

	const handleHeaderUpdate = () => {

			headerPos.current = header.current.getBoundingClientRect();
			let pos = headerPos.current;
			let bottom = pos.bottom;
			let { innerHeight, scrollY } = window;
			let offset = 150;

			if( bottom <= (innerHeight - offset ) && !scrollTargetHit ) {
				updateScrollTargetHit(true);
			}

			if( bottom >= (innerHeight - offset) && scrollTargetHit ) {
				updateScrollTargetHit(false);
			}

	}

	useEffect(() => {

		window.addEventListener('scroll', handleHeaderUpdate);

		return () => {
			window.removeEventListener('scroll', handleHeaderUpdate);
		}


	}, [ scrollTargetHit ])

	return (

		<section id='skills' className={ styles.skillsSectionContainer }>

			<h2 ref={ header } className={ styles.skillsHeader }>Skills</h2>

			<div className={ styles.skillsContainer }>

				{ skills.map( (skill, index) => {
					return (
						<SkillCard elementsAnimated={ elementsAnimated } cardCount={ cardCount.current } scrollTargetHit={ scrollTargetHit } imgPath={ skill.imgPath } i={ index } skillName={ skill.skill } key={ index } />
					)
				})}

			</div>

		</section>

	)

}