import Image from 'next/image';

import styles from './styles/about.module.scss';

export default function About() {

	return (

		<section id='about' className={ styles.aboutContainer }>

			<div className={ styles.aboutContentContainer }>

					<div className={ styles.picContainer }>

						<Image src="/img/Justin_Medium.jpg"
							priority
							width={ 200 }
							height={ 200 }
							layout="responsive"
							objectFit="cover"
							quality={ 100 }
							alt="Full-stack web developer Justin Minyard smiling in an outdoor headshot"
						/>

					</div>


					<div className={ styles.aboutCopyContainer }>
						<h2>Developer. Problem solver. Minimalist.</h2>
						<p>Hey there! I'm Justin, a freelance full-stack developer based out of Louisville, Kentucky. I specialize in building Node applications and clean, intuitive front-end experiences from the ground up.</p>
					</div>

			</div>


		</section>

	)

}
