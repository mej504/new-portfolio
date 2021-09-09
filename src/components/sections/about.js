import aboutStyles from '../../styles/sections/about.module.scss';

export default function About() {

	return (

		<section id='about' className={ aboutStyles.aboutContainer }>

			<div className={ aboutStyles.aboutContentContainer }>

				<div className={ aboutStyles.picContainer }>

					<img src="/img/Justin_Medium.jpg" />

					{
					/*
						<Image src="/img/CC2.png" width={ 600 } height={ 600 } objectFit='cover' />
					*/
					}

				</div>

				<div className={ aboutStyles.aboutCopyContainer }>
					<h2>Developer. Problem solver. Minimalist.</h2>
					<p>Hey there! I'm Justin, a freelance full-stack developer based out of Louisville, Kentucky. I specialize in building scalable back-end infrastructures, and I love the challenge of creating, intuitive front-end experiences.</p>
				</div>

			</div>


		</section>

	)

}
