import SkillCard from '../skill-card';
import skills from '../../../lib/skills';
import styles from '../../styles/skills.module.scss';

export default function Skills() {

	return (

		<section className={ styles.skillsSectionContainer }>

			<h2 className={ styles.skillsHeader }>Skills</h2>

			<div className={ styles.skillsContainer }>

				{ skills.map(skill => {
					return (
						<SkillCard imgPath={ skill.imgPath } skillName={ skill.skill } key={ skill.skill } />
					)
				})}

			</div>

		</section>

	)

}