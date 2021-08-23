import styles from '../../styles/work/components/client-nav.module.scss';

export default function ClientNav() {

	const clients = [
		'HealthEconomics.Com',
		'Women\'s Political Collaborative of Tennessee',
		'Personal Projects'
	]

	return (
		<section className={ styles.clientNavContainer }>

			<h1 className={ styles.header }>Projects</h1>

			<div className={ styles.clientListContainer }>

				<ul className={ styles.clientList }>
					{ clients.map((client) => {
						return <li>{ client }</li>
					})}
				</ul>

			</div>

		</section>
	)

}