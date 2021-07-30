import Head from 'next/head'
import Hero from '../components/hero';
import About from '../components/about';

import { useStore } from '../store/store';

export async function getStaticProps() {

	const store = useStore();
	const state = store.getState();

	const selected = state.workPageSelected;

	return {
		props: {
			selected
		}
	}


}

export default function Home({ selected }) {

	return (
		<>

		<Head>
			<title>Justin Minyard | Full-Stack Developer</title>
		</Head>
		<Hero/>
		<About />


		</>

	)

}
