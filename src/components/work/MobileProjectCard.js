// Modules
import Image from 'next/image';

// Styles
import styles from './styles/mobile-project-card.module.scss';

// Components
import StandardBtn from '@/components/buttons/StandardBtn';

export default function MobileProjectCard({ project, single }) {

	const imageStyles = {
		borderBottom: '2px solid var(--purple)',
	}

	const setLocation = ( location ) => {
		return window.location = location;
	}

	return (
		<>
			<li className={`${styles.mobileProjectCard} ${single && styles.centered}`}>

				<div style={ imageStyles }>
					<Image src={ project.images[0] }
						width={200}
						height={120}
						layout='responsive'
						alt=''
						objectFit='cover'
						objectPosition='left'
					/>
				</div>

				<div className={ styles.projectDetails }>

					<div className={ styles.projectDetailsText }>
						<h3>{ project.title }</h3>
						<span>{ project.type } | { project.builtWith }</span>

						<p>{ project.description || project.problem }</p>
					</div>

					<StandardBtn onClick={ setLocation } targetLocation={ project.link } text={project.title === 'Membership Manager' ? 'No preview availabile' : 'See project' } />
				</div>


			</li>
		</>
	)

}