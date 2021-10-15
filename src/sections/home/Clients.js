// MISC
import styles from './styles/clients.module.scss';
import clients from 'lib/past-clients';

// COMPONENTS
import ClientCard from '@/home-components/ClientCard';

export default function Clients() {

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