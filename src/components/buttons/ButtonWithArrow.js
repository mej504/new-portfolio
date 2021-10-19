import styles from './styles/button-with-arrow.module.scss';

const ButtonWithArrow = ({ url, text }) => {

	const Arrow = () => (

		<svg role='image' className={ styles.arrow } viewBox="0 0 40 16">
			<line className={ styles.arrowLine } x1="0" y1="8" x2="27.8" y2="8"/>
			<polygon className={ styles.arrowHead } points="40 8 25.94 0 25.94 16 40 8"/>
		</svg>

	);

	return (
		<a href={ url } target="_blank" rel='noopener' className={ styles.buttonWithArrow }>
			<span>{ text }</span>
			<Arrow />
		</a>
	)
}

export default ButtonWithArrow;