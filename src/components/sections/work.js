import Image from 'next/image';
import styles from '../../styles/work.module.scss';

import WorkCard from '../work-card';
import ButtonWithDropShadow from '../buttons/button-with-shadow';

import workDetails from '../../../lib/work-cards';

export default function Work() {

	const btnText = 'More work';

	return (

		<section className={ styles.workContainer }>

			<div className={ styles.bg } />

			<h2 className={ styles.header }>Selected Works</h2>

			<div className={ styles.workCardsContainer }>

				{workDetails.map( work => {
					return (
						<WorkCard title={ work.name } url={ work.url } builtWith={ work.builtWith } category={ work.category } imgPath= { work.bgImagePath } key={ work.name }/>
					)
				})}

			</div>

			<ButtonWithDropShadow style={{ marginTop: '5em' }} btnText={ btnText } />

		</section>

	)

}