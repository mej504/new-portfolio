import styles from './styles/testimonials.module.scss';

import testimonials from 'lib/testimonials';

import Testimonial from '@/home-components/Testimonial';

export default function Testimonials() {

	return (

		<section className={ styles.testimonialsSectionContainer }>

			<h2 className={ styles.header }>Testimonials</h2>

			<div className={ styles.testimonialsContainer }>

				{
					testimonials.map( (testimonial, i) => {
						return (
							<Testimonial
								clientOrg={ testimonial.clientOrg }
								clientName={ testimonial.clientName }
								clientTitle={ testimonial.clientTitle }
								testimonialText={ testimonial.testimonialText }
								key={ i }
							/>
						)
					})
				}

			</div>


		</section>
	)

}