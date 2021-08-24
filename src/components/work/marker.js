import styles from '../../styles/work/components/marker.module.scss';

export default function Marker({ innerRef }) {

	return (
		<span ref={ innerRef } className={ styles.marker }></span>
	)

}