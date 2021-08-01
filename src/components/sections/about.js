import aboutStyles from '../../styles/about.module.scss';

import Image from 'next/image';

export default function About() {

	return (

		<section className={ aboutStyles.aboutContainer }>

			<div className={ aboutStyles.aboutContentContainer }>

				<div className={ aboutStyles.picContainer }>
					<Image src="/img/Justin_Pic_MEDIUM.jpg" width={ 600 } height={ 600 } objectFit='cover'></Image>
				</div>

				<div className={ aboutStyles.aboutCopyContainer }>
					<h2>Developer. Problem solver. Nerd slayer.</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat assumenda ut culpa corporis nam tenetur perferendis dolore. Ab deserunt officia assumenda vero fugit libero omnis repudiandae debitis eum architecto?</p>
				</div>

			</div>


		</section>

	)

}