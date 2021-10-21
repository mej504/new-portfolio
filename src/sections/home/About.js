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
						<p>Hey there! I'm Justin, a full-stack web developer based out of Louisville, Kentucky. I build and deploy Node applications coupled with clean, intuitive front-end experiences from scratch. My philosophy is simple: to develop performant, stress-free experiences. I'm constantly learning new and improved ways to reach those benchmarks, and I'm loving every minute of it!</p>
					</div>

			</div>


		</section>

	)

}
