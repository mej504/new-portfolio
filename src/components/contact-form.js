import { useState } from 'react';

import styles from '../styles/components/contact-form.module.scss';

import InputField from './input-field';
import StandardBtn from './buttons/standard-btn';

export default function ContactForm( props ) {

	const [ btnDisabled, updateBtnStatus ] = useState( false );

	const handleSubmit = ( e ) => {
		e.preventDefault();
	}

	const handleInput = () => {
		updateBtnStatus( true );
	}

	return (

		<form className={ styles.contactForm } autoComplete='off' method="POST" onSubmit={ handleSubmit } encType='application/x-www-form-url-encoded'>

			<InputField label='Name' type='text' name='name' />
			<InputField label='Email' type='text' name='email' />
			<InputField label='Organization' type='text' name='organization' />
			<InputField textarea={ true } label='How can I help?' type='textarea' name='organization' />
			<StandardBtn text='Send message' isForm={ true } isDisabled={ btnDisabled } />

		</form>

	)

}