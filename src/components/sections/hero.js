// Styles
import heroStyles from '../../styles/hero.module.scss';

// Components
import Nav from './nav';
import Link from 'next/link';

export default function Hero(props) {

		return (
			<section className={ heroStyles.wrapper }>

				<Nav />

				<div className={ heroStyles.videoWrap }>
					<video className={ heroStyles.videoWrap} src="/mov/bg-video.m4v" loop autoPlay muted/>
				</div>

				<div className={ heroStyles.heroTitleWrap }>

					<h1>Justin Minyard</h1>
					<div className={ heroStyles.titleAccentWrap }>

					</div>
					<h2>full-stack web developer</h2>

					<a className={ heroStyles.btn } href="#work">View work</a>

				</div>

			</section>
		)

}