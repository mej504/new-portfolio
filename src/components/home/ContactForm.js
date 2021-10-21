const axios = require('axios');
import { useEffect, useState, useRef } from 'react';

import styles from './styles/contact-form.module.scss';

import InputField from './InputField';
import StandardBtn from '@/components/buttons/StandardBtn';
import Notification from './Notification';

export default function ContactForm({ bottomLimit, formBtnPosition }) {

	const notificationDefaults = {
		shouldRender: false,
		shouldAnimateIn: false,
		shouldAnimateOut: false,
		shouldPersist: false
	}

	// STATE
	const [ notificationStatus, updateNotificationStatus ] = useState(notificationDefaults)

	// REFS
	const requiredFieldsEntered = useRef([]);
	const btnEnabled = useRef(false);
	const notificationContents = useRef({
		message:'',
		status:''
	})


	/**
	 * Disable the form button and update the btnEnabled ref
	 * @returns void
	 */

	const disableBtn = () => {

		let btn = document.getElementById('form-submit');

		// Do nothing if the button is already disabled
		if( btn.hasAttribute('disabled') ) return;

		btn.setAttribute('disabled', '');
		return btnEnabled.current = false;

	}

	/**
	 * Activate the form button and update the btnEnabled ref
	 * @returns void
	 */

	const activateBtn = () => {

		let btn = document.getElementById('form-submit');

		if( btn.hasAttribute('disabled') ) {
			btn.removeAttribute('disabled');
			return btnEnabled.current = true;
		}

		return;

	}

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
			activateBtn();
		} else {
			disableBtn();
		}

	}

	const renderNotification = ( options ) => {

		if( !options ) return;

		notificationContents.current = {
			message: options.message,
			status: options.status,
		}

		updateNotificationStatus(options);

		if( notificationStatus.shouldPersist ) return;

		setTimeout(() => {
			updateNotificationStatus({
				...notificationContents.current,
				shouldRender:true,
				shouldPersist:false,
				shouldAnimateIn:false,
				shouldAnimateOut:true
			})
		}, 2000)

	}

	const handleSubmit = (e) => {

		e.preventDefault();

		const url = process.env.NODE_ENV === 'production' ? 'https://minyard.dev/pm' : 'http://localhost:3011';

		let body = {
			name: e.target[0].value,
			email: e.target[1].value,
			organization: e.target[2].value,
			message: e.target[3].value
		}

		axios.post(url, body ).then((res) => {

			if( res.status === 200 ) {

				requiredFieldsEntered.current = [];
				e.target.reset();
				disableBtn();
				renderNotification({
					...notificationDefaults,
					shouldRender:true,
					shouldAnimateIn:true,
					status:'success',
					message:res.data.message
				})
				return;
			}

			if( res.status > 400 ) {

				requiredFieldsEntered.current = [];
				e.target.reset();
				disableBtn();

				renderNotification({
					...notificationDefaults,
					shouldRender:true,
					shouldAnimateIn:true,
					status:'error',
					message:res.data.message
				})

				return;
			}

		}).catch((err) => {

			if(err) {

				requiredFieldsEntered.current = [];
				e.target.reset();
				disableBtn();

				renderNotification({
					...notificationDefaults,
					shouldRender:true,
					shouldAnimateIn:true,
					status:'error',
					message:err.response.data.msg
				})

				return;
			}

			renderNotification({
				...notificationDefaults,
				status:'error',
				message:'Message failed to send due to an unexpected error'
			})

		});

	}

	return (

		<>

			<form
				className={ styles.contactForm }
				autoComplete='off'
				onInput={ handleInput }
				onSubmit={ handleSubmit }
				encType='application/x-www-form-url-encoded'
			>

				<InputField required={ true } label='Name' type='text' name='name' />
				<InputField required={ true } label='Email' type='email' name='email' />
				<InputField required={ false } label='Organization' type='text' name='organization' />
				<InputField required={ true } textarea={ true } label='How can I help?' type='textarea' name='message' />

				<StandardBtn
					btnEnabled={ btnEnabled.current }
					bottomLimit={ bottomLimit }
					text='Send message'
					isForm={ true }
					formBtnPosition={ formBtnPosition }
				/>

			</form>

			{ notificationStatus.shouldRender ? (
				<Notification notificationStatus={ notificationStatus }	/>
			) : (
				null
			)}

		</>

	)

}