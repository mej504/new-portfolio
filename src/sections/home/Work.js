import { useState, useEffect } from 'react';
import workDetails from 'lib/work-cards';

import WorkCard from '@/home-components/WorkCard';
import ButtonWithDropShadow from '@/components/buttons/ButtonWithShadow';

import styles from './styles/work.module.scss';

export default function Work({ btnTarget }) {

	// State
	const [ deviceSize, setDeviceSize ] = useState(null);

	const btnText = 'More work';

	const handleResize = () => {

		if( window.innerWidth <= 1024 && deviceSize === 'desktop' ) {
			setDeviceSize('tablet');
		}

		if( window.innerWidth > 1024 && deviceSize === 'tablet' ) {
			setDeviceSize('desktop');
		}

	}

	useEffect(() => {

		// Intention was to function across a broad range of resolutions 
		// Swapping between two ranges is sufficient for this component
		if( window.innerWidth <= 1024 ) {
			setDeviceSize('tablet');
		} else { 
			setDeviceSize('desktop');
		}

		window.addEventListener('resize', handleResize );

		return () => {
			window.removeEventListener( 'resize', handleResize );
		}

	}, [ deviceSize ])

	return (

		<section id="work" className={ styles.workContainer }>

			<div className={ styles.bg } />

			<h2 className={ styles.header }>Selected Works</h2>

			<div className={ styles.workCardsContainer }>

				{workDetails.map( work => {
					return (
						<WorkCard
							deviceSize={ deviceSize }
							title={ work.name }
							url={ work.url }
							description={ work.description }
							builtWith={ work.builtWith }
							category={ work.category }
							imgPath= { work.bgImagePath }
							key={ work.name }/>
					)
				})}

			</div>

			<ButtonWithDropShadow target={ btnTarget } style={{ marginTop: '1em' }} btnText={ btnText } />

		</section>

	)

}