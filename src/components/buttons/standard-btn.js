import styles from '../../styles/buttons/standard-btn.module.scss';

/*
// text defaults to 'Click here'
// isForm defaults to false
*/

export default function StandardBtn({ text = 'Click here', isForm = false, isDisabled = false }) {

	return (
		isForm ? (
			<button className={ styles.btn } disabled={ isDisabled } type='submit'>{ text }</button>
		) : (
			<button className={ styles.btn } type='click'>{ text }</button>
		)
	)

}