import workDetails from 'lib/work-cards';

import WorkCard from '@/home-components/WorkCard';
import ButtonWithDropShadow from '@/components/buttons/ButtonWithShadow';

import styles from './styles/work.module.scss';

export default function Work() {

	const btnText = 'More work';

	return (

		<section id="work" className={ styles.workSectionContainer }>

			<h2 className={ styles.header }>Selected Works</h2>

			<div className={ styles.workCardsContainer }>

				{workDetails.map( work => {
					return (
						<WorkCard
							title={ work.name }
							url={ work.url }
							description={ work.description }
							builtWith={ work.builtWith }
							category={ work.category }
							imgPath= { work.bgImagePath }
							key={ work.name }
						/>
					)
				})}

			</div>

			<ButtonWithDropShadow target='/work' style={{ marginTop: '5em' }} btnText={ btnText } />

		</section>

	)

}