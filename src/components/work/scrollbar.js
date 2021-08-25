import styles from '../../styles/work/components/scrollbar.module.scss';

export default function ScrollBar() {

	return (
		<div className={ styles.scrollBarWrap }>
			<span className={ styles.scrollLine } draggable='true'></span>
			<span className={ styles.scrollIndicator } draggable='true'></span>
		</div>
	)

}