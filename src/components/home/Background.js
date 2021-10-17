import styles from './styles/background.module.scss';

const Background = () => {

	return (

		<div className={ styles.backgroundVideo }>

			<video
				src="/mov/bg-lines.m4v"
				playsInline
				loop
				autoPlay
				muted
			/>

		</div>
	)

}

export default Background;