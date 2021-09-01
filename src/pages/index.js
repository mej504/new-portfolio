// Modules
import { useRef, useState, useEffect } from 'react';

// Styles
import sectionStyles from '../styles/components/sections.module.scss';

// Components
import Head from 'next/head'
import Image from 'next/image';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Work from '../components/sections/work';
import Clients from '../components/sections/clients';
import Testimonials from '../components/sections/testimonials';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';
import BackToTopArrow from '../components/back-to-top';

export async function getStaticProps({ params }) {

	let props = {};
	props.key = 'home';

	return {
		props: props
	}
}

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
			</Head>

			<Hero innerRef={ heroSection } location={ location } />

			<section className={ sectionStyles.section2 }>
				<div className={ sectionStyles.honeycomb1 }>
					<Image src='/img/honeycomb_1.svg' width={ 600 } height={ 600 } />
				</div>

				<div className={ sectionStyles.honeycomb2 }>
					<Image src='/img/honeycomb_2.svg' width={ 600 } height={ 600 } />
				</div>
				<About />
				<Skills location={ location }/>
			</section>

			<Work btnTarget='/work' />

			<Clients />

			<Testimonials />

			<Contact bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />

			<Footer />

			<BackToTopArrow location={ location } heroSectionRef={ heroSection } bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />

		</>

	)

}
