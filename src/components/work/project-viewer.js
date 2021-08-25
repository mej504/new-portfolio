import styles from '../../styles/work/components/project-viewer.module.scss';

export default function ProjectViewer({ currentlyViewing }) {

	let text;

	switch (currentlyViewing) {
		case 'hecom':
			text = 'HealthEconomics.Com';
			break;
		case 'wpctn':
			text = 'Women\'s Political Collaborative of Tennessee';
			break;
		case 'personal':
			text = 'Personal Projects';
			break;
		default:
			text = 'Projects';
			break;
	}

	return (
		<div className={ styles.projectViewer }>
			<h2>{ text }</h2>
		</div>
	)

}