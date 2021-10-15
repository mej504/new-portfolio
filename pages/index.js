// Modules
import { useRef, useEffect } from 'react';

// Sections
import Head from 'next/head'
import Hero from '@/home-sections/Hero';
import About from '@/home-sections/About';
import Skills from '@/home-sections/Skills';
import Work from '@/home-sections/Work';
import Clients from '@/home-sections/Clients';
import Testimonials from '@/home-sections/Testimonials';
import Contact from '@/home-sections/Contact';

// Components
import Nav from '@/components/nav/Nav';
import BackToTopArrow from '@/home-components/BackToTop';

// Just looking to get the resolved path here for use in the Nav component
export async function getServerSideProps({ resolvedUrl }) {
	return {
		props: {
			path: resolvedUrl
		}
	}
}

export default function Home({ path }) {

	// Refs
	const bottomLimit = useRef(0);
	const formBtnPosition = useRef(null);
	const heroSection = useRef(null);
	const location = useRef(path);

	const test = {
		transform:'translateY(100vh)'
	}

	return (

		<>

			<Head>
				<title>Justin Minyard | Full-Stack Developer</title>
				<meta name="description" content="Justin Minyard is a Louisville-based full-stack web developer. He specializes in NodeJS applications." />
			</Head>

			<Nav location={ location } />

			<Hero innerRef={ heroSection } location={ location } />

			<div style={ test }>

				<About />

				<Skills location={ location }/>

				<Work btnTarget='/work' />

				<Clients />

				<Testimonials />

				<Contact bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />

			</div>


			<BackToTopArrow location={ location } heroSectionRef={ heroSection } bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />

		</>

	)

}
