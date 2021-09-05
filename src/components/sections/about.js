import aboutStyles from '../../styles/sections/about.module.scss';

export default function About() {

	return (

		<section id='about' className={ aboutStyles.aboutContainer }>

			<div className={ aboutStyles.aboutContentContainer }>

				<div className={ aboutStyles.picContainer }>

					<img src="/img/Justin_Pic_MEDIUM.JPG" />

					{
					/*
						<Image src="/img/CC2.png" width={ 600 } height={ 600 } objectFit='cover' />
					*/
					}

				</div>

				<div className={ aboutStyles.aboutCopyContainer }>
					<h2>Developer. Problem solver. Nerd slayer.</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat assumenda ut culpa corporis nam tenetur perferendis dolore. Ab deserunt officia assumenda vero fugit libero omnis repudiandae debitis eum architecto?</p>
				</div>

			</div>


		</section>

	)

}