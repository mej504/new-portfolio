import aboutStyles from '../../styles/sections/about.module.scss';

export default function About() {

	return (

		<section id='about' className={ aboutStyles.aboutContainer }>

			<div className={ aboutStyles.aboutContentContainer }>

				<div className={ aboutStyles.picContainer }>

					<img src="/img/Justin_Medium.jpg" />

				</div>

				<div className={ aboutStyles.aboutCopyContainer }>
					<h2>Developer. Problem solver. Minimalist.</h2>
					<p>Hey there! I'm Justin, a freelance full-stack developer based out of Louisville, Kentucky. I specialize in building Node applications and clean, intuitive front-end experiences from the ground up.</p>
				</div>

			</div>


		</section>

	)

}
