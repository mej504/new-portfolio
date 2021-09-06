const axios = require('axios');
import { useState, useRef, useEffect } from 'react';

import styles from '../styles/components/contact-form.module.scss';

import InputField from './input-field';
import StandardBtn from './buttons/standard-btn';

export default function ContactForm( props ) {

	const [ btnDisabled, updateBtnStatus ] = useState( true );
	const { bottomLimit, formBtnPosition } = props;

	const requiredFieldsEntered = useRef([]);

	const handleInput = (e) => {

		/**
		 * 
		 * TODO
		 * Make this better
		 * 
		 */

		if( e.target.name === 'name' && e.target.value !== '' && requiredFieldsEntered.current.indexOf('name') < 0 ) {
			requiredFieldsEntered.current.push('name');
		} else if (e.target.name === 'name' && e.target.value === '' && requiredFieldsEntered.current.indexOf('name') >= 0 ) {
			let index = requiredFieldsEntered.current.indexOf('name');
			requiredFieldsEntered.current.splice(index, 1);
		}

		if( e.target.name === 'email' && e.target.value !== '' && requiredFieldsEntered.current.indexOf('email') < 0 ) {
			requiredFieldsEntered.current.push('email');
		} else if (e.target.name === 'email' && e.target.value === '' && requiredFieldsEntered.current.indexOf('email') >= 0 ) {
			let index = requiredFieldsEntered.current.indexOf('email');
			requiredFieldsEntered.current.splice(index, 1);
		}

		if( e.target.name === 'message' && e.target.value !== '' && requiredFieldsEntered.current.indexOf('message') < 0 ) {
			requiredFieldsEntered.current.push('message');
		} else if (e.target.name === 'message' && e.target.value === '' && requiredFieldsEntered.current.indexOf('message') >= 0 ) {
			let index = requiredFieldsEntered.current.indexOf('message');
			requiredFieldsEntered.current.splice(index, 1);
		}

		if( requiredFieldsEntered.current.length === 3 ) {
			updateBtnStatus(false);
		} else {
			if( !btnDisabled ) {
				updateBtnStatus(true);
			}
		}

	}

	const handleSubmit = (e) => {
		e.preventDefault();

		axios.post('')

	}

	return (

		<form className={ styles.contactForm } autoComplete='off' method="POST" onInput={ handleInput } onSubmit={ handleSubmit } encType='application/x-www-form-url-encoded'>

			<InputField required={ true } label='Name' type='text' name='name' />
			<InputField required={ true } label='Email' type='email' name='email' />
			<InputField required={ false } label='Organization' type='text' name='organization' />
			<InputField required={ true } textarea={ true } label='How can I help?' type='textarea' name='message' />
			<StandardBtn bottomLimit={ bottomLimit } text='Send message' isForm={ true } isDisabled={ btnDisabled } formBtnPosition={ formBtnPosition }/>

		</form>

	)

}