import styles from './styles/marker.module.scss';

export default function Marker({ innerRef }) {

	return (
		<span ref={ innerRef } className={ styles.marker }></span>
	)

}