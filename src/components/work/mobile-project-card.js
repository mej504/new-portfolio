// Modules
import Image from 'next/image';

// Styles
import styles from '../../styles/work/components/mobile-project-card.module.scss';

export default function MobileProjectCard({ project, single }) {

	const imageStyles = {
		borderBottom: '2px solid var(--purple)',
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
					<h3>{ project.title }</h3>
					<span>{ project.type } | { project.builtWith }</span>

					<p>{ project.description || project.problem }</p>
				</div>

			</li>
		</>
	)

}