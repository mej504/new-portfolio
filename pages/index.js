// Modules
import { useRef } from 'react';

// Layout
import HomeLayout from '@/home-sections/layout/HomeLayout';

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
import Background from '@/home-components/Background';
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

	return (

		<HomeLayout>

			<Head>
				<title>Justin Minyard | Full-Stack Developer</title>
				<meta name="description" content="Justin Minyard is a Louisville-based full-stack web developer. He specializes in building Node.js applications, and has deployed front-ends built with React, Vue and Next." />
			</Head>

			<Nav location={ path } />

			<Background />

			<Hero location={ path } />

			<div>

				<About />

				<Skills location={ path }/>

				<Work btnTarget='/work' />

				<Clients />

				<Testimonials />

				<Contact bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />

			</div>

		</HomeLayout>

	)

}
			// <BackToTopArrow location={ path } bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition } />