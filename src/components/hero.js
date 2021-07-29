import heroStyles from '../styles/hero.module.scss';
import { useStore } from '../store/store';

const updateThing = () => {

	let store = useStore();
	store.dispatch({
		type:'UPDATE_WORK_SELECTED_PAGE',
		workPageSelected: true
		
	})
}

export default function Hero(props) {

	const test = props.test;
	console.log(test);
	updateThing();
	console.log(test);

	return test ? (
		<section className={ heroStyles.wrapper }>
			<div className={ heroStyles.videoWrap }>
				<video className={ heroStyles.videoWrap} src="/mov/bg-video.m4v" loop autoPlay muted/>
			</div>
		</section>
	) : (
		<section className={ heroStyles.wrapper }>

			<p>{ test }</p>

		</section>
	)

}