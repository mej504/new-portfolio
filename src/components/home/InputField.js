import styles from './styles/input-field.module.scss';

export default function InputField({ required, textarea, label, type, name }) {

	return (

		!textarea ? (

			<div className={ styles.formField }>

				<label className='field-label' htmlFor={ name }>
					{ required && <span className={ styles.required }>*</span> }{ label }
				</label>
				<input required={ required } name={ name } className='field-input' type={ type } />

			</div>


		) : (

			<div className={ styles.formField }>

				<textarea placeholder='How can I help? (required)' className='field-input' name={ name } />

			</div>


		)

	)

}