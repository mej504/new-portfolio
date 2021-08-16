import styles from '../styles/components/input-field.module.scss';

export default function InputField({ textarea, label, type, name }) {

	return (

		!textarea ? (

			<div className={ styles.formField }>

				<label className='field-label' htmlFor={ name }>
					<span className={ styles.required }>*</span>{ label }
				</label>
				<input className='field-input' type={ type } />

			</div>


		) : (

			<div className={ styles.formField }>

				<textarea placeholder='How can I help?' className='field-input' name={ name } />

			</div>


		)

	)

}