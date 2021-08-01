import Image from 'next/image';
import styles from '../../styles/work.module.scss';

import WorkCard from '../work-card';
import ButtonWithDropShadow from '../buttons/button-with-shadow';

import workDetails from '../../../lib/work-cards';

export default function Work() {

	const btnText = 'More work';

	return (

		<section className={ styles.workContainer }>

			<div className={ styles.bg }>
			</div>

			<h2 className={ styles.header }>Selected Works</h2>

			<div className={ styles.workCardsContainer }>

				{workDetails.map( work => {
					return (
						<WorkCard title={ work.name } builtWith={ work.builtWith } category={ work.category } imgPath= { work.bgImagePath } key={ work.name }/>
					)
				})}

			</div>

			<ButtonWithDropShadow btnText={ btnText } />

		</section>

	)

}