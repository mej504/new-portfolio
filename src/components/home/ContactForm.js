const axios = require('axios');
import { useState, useRef } from 'react';

import styles from './styles/contact-form.module.scss';

import InputField from './InputField';
import StandardBtn from '@/components/buttons/StandardBtn';
import Notification from './Notification';

export default function ContactForm( props ) {

	/**
	 * 
	 * TODO
	 * 
	 * btnDisabled might not need to be a state object.
	 * When the contact form is submitted and a response is received,
	 * I want the button to revert back to disabled without causing a second
	 * re-render.
	 * 
	 */

	const [ btnDisabled, updateBtnStatus ] = useState( true );
	const { bottomLimit, formBtnPosition } = props;
	const [ notification, updateNotification ] = useState(null);

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

		let body = {
			name: e.target[0].value,
			email: e.target[1].value,
			organization: e.target[2].value,
			message: e.target[3].value
		}

		axios.post('/pm', body ).then((res) => {

			if( res.status === 200 ) {

				requiredFieldsEntered.current = [];
				e.target.reset();
				updateNotification({
					error:false,
					message:'Message sent!'
				})
				return;
			}

			if( res.status > 400 ) {
				requiredFieldsEntered.current = [];
				e.target.reset();
				updateNotification({
					error: true,
					message: res.data.message,
				})
				return;
			}

		}).catch((err) => {

			if(err) {

				requiredFieldsEntered.current = [];
				e.target.reset();
				updateNotification({
					error:true,
					message:err
				})
				return;
			}

		});

	}

	return (

		<form className={ styles.contactForm } autoComplete='off' onInput={ handleInput } onSubmit={ handleSubmit } encType='application/x-www-form-url-encoded'>

			<InputField required={ true } label='Name' type='text' name='name' />
			<InputField required={ true } label='Email' type='email' name='email' />
			<InputField required={ false } label='Organization' type='text' name='organization' />
			<InputField required={ true } textarea={ true } label='How can I help?' type='textarea' name='message' />
			<StandardBtn bottomLimit={ bottomLimit } text='Send message' isForm={ true } isDisabled={ btnDisabled } formBtnPosition={ formBtnPosition }/>

			{ notification && <Notification message={ notification.message } error={ notification.error } /> }

		</form>

	)

}