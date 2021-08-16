import styles from '../styles/components/back-to-top.module.scss';

export default function BackToTopArrow() {

	return (
		<div className={ styles.buttonWrap }>

			<svg className={ styles.backToTopArrow } viewBox="0 0 75.04 75.04">
				<circle className={ styles.buttonEllipse } cx="37.52" cy="37.52" r="37.52"/>
				<path className={ styles.arrowTip } d="M37.67,21.23,46.86,35H28.48Z" transform="translate(0.04 0.21)"/>
				<rect className={ styles.arrowBody } x="36.56" y="35.22" width="2.3" height="17.99"/>
			</svg>

		</div>
	)

}