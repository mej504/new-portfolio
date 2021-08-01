import Image from 'next/image';
import styles from '../styles/work-card.module.scss';

export default function WorkCard( props ) {

	const imgPath = props.imgPath;

	return (

		<div className='workCardContainer'>

			<p>{ props.title }</p>
			<p>{ props.builtWith }</p>
			<p>{ props.category }</p>

			<style jsx>{`
				.workCardContainer {
					flex:1 1 500px;
					padding:2em;
					background-image:url(${imgPath});
					background-position:center;
					background-size:cover;
					background-repeat:no-repeat;
					margin:1em;
					min-height:325px;
					max-width:600px;
				}
			`}</style>

		</div>

	)

}