// Modules
import { useEffect, useRef, useState } from 'react';

import SkillCard from '@/home-components/SkillCard';
import skills from 'lib/skills';
import styles from './styles/skills.module.scss';

export default function Skills() {

	const [scrollTargetHit, updateScrollTargetHit] = useState(false);
	const cardCount = useRef(skills.length);
	const header = useRef( null );

	/**
	 * 
	 * Checks if the user has scrolled to a certain point, and if so, update
	 * the scrollTargetHit state to mount and animate in the skill cards
	 * 
	 * @returns void
	 * 
	 */
	const handleHeaderUpdate = () => {

			let { top } = header.current.getBoundingClientRect();
			let { innerHeight } = window;
			let offset = 200;

			/*
			Since getBoundingClientRect().top measures the distance between the top of the viewport
			to the top of the  element's current location on the page, I'm getting the difference of
			those two values plus some offset to produce a more actionable threshold. Of course,
			I also want to short-circuit if we've already updated that piece of state
			*/
			if( scrollTargetHit || !(( top - innerHeight ) + offset <= 0 ) ) return;

			updateScrollTargetHit(true);

			return;

	}

	useEffect(() => {

		window.addEventListener('scroll', handleHeaderUpdate);

		return () => {
			window.removeEventListener('scroll', handleHeaderUpdate);
		}

	})

	return (

		<section id='skills' className={ styles.skillsSectionContainer }>

			<h2 ref={ header } className={ styles.skillsHeader }>Skills</h2>

			<div className={ styles.skillsContainer }>

				{ scrollTargetHit ? (

					skills.map( (skill, index) => {
						return (
							<SkillCard
								cardCount={ cardCount.current }
								imgPath={ skill.imgPath }
								skillName={ skill.skill }
								i={ index }
								key={ index }
							/>
						)
					})

				) : null

				}

			</div>

		</section>

	)

}
/*
				{ scrollTargetHit ? (

					skills.map( (skill, index) => {
						return (
							<SkillCard
								elementsAnimated={ elementsAnimated }
								cardCount={ cardCount.current }
								scrollTargetHit={ scrollTargetHit }
								imgPath={ skill.imgPath }
								i={ index }
								skillName={ skill.skill }
								key={ index }
							/>
						)
					})

				) : null

				}
				*/