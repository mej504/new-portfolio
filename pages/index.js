// Modules
import { useRef, useState, useEffect } from 'react';

// Styles
import sectionStyles from '../src/styles/components/sections.module.scss';

// Components
import Head from 'next/head'
import Hero from '../src/components/sections/hero';
import About from '../src/components/sections/about';
import Skills from '../src/components/sections/skills';
import Work from '../src/components/sections/work';
import Clients from '../src/components/sections/clients';
import Testimonials from '../src/components/sections/testimonials';
import Contact from '../src/components/sections/contact';
import BackToTopArrow from '../src/components/back-to-top';

export default function Home() {

	// State
	const [ location, updateLocation ] = useState(null);

	// Refs
	const bottomLimit = useRef(0);
	const formBtnPosition = useRef(null);
	const heroSection = useRef(null);

	useEffect(() => {
		updateLocation( window.location.pathname );
	})

	return (
		<>

			<Head>
				<title>Justin Minyard | Full-Stack Developer</title>
				<meta name="description" content="Justin Minyard is a Louisville-based full-stack web developer. He specializes in NodeJS applications." />
			</Head>

			<Hero innerRef={ heroSection } location={ location } />

			<section className={ sectionStyles.section2 }>

				<div className={ sectionStyles.honeycomb1 }>
					<img src='/img/honeycomb_1.svg' width={ 600 } height={ 600 } alt='' />

					{
					/*
						<Image src='/img/honeycomb_1.svg' width={ 600 } height={ 600 } alt='' />
					*/
					}

				</div>

				<div className={ sectionStyles.honeycomb2 }>

					<img src='/img/honeycomb_2.svg' width={ 600 } height={ 600 } alt='' />

					{
					/*
						<Image src='/img/honeycomb_2.svg' width={ 600 } height={ 600 } alt='' />
					*/
					}
				</div>

				<About />
				<Skills location={ location }/>
			</section>

			<Work btnTarget='/work' />

			<Clients />

			<Testimonials />

			<Contact bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />

			<BackToTopArrow location={ location } heroSectionRef={ heroSection } bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />

		</>

	)

}
