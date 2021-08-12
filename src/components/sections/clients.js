// MISC
import styles from '../../styles/sections/clients.module.scss';
import clients from '../../../lib/past-clients';

// COMPONENTS
import ClientCard from '../client-card';

export default function Clients() {

	console.log(clients);

	return (

		<section className={ styles.clientsSectionContainer }>

			<h2 className={ styles.clientsHeader }>Past Clients</h2>

			<div className={ styles.clientCardsContainer }>

				{ clients.map( client => {

					return <ClientCard key={ client.client } imgPath={ client.logoPath } />

				})}

			</div>

		</section>

	)

}