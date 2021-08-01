import Head from 'next/head'
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Work from '../components/sections/work';

export default function Home() {

	return (
		<>

		<Head>
			<title>Justin Minyard | Full-Stack Developer</title>
		</Head>
		<Hero/>
		<About />
		<Skills />
		<Work />

		</>

	)

}
