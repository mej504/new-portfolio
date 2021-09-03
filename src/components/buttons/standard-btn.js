import { useEffect, useRef, useState } from 'react';

import styles from '../../styles/buttons/standard-btn.module.scss';

/*
// text defaults to 'Click here'
// isForm defaults to false
*/

export default function StandardBtn({ text = 'Click here', isForm = false, isDisabled = false, trackYPos = false, bottomLimit, formBtnPosition, onClick, targetLocation } ) {

	const thisBtn = useRef();

	const getButtonPosition = () => {
		return thisBtn.current.getBoundingClientRect();
	}

	useEffect(() => {

		if( window.location.pathname === '/' ) {
			let buttonHeight = Math.floor(thisBtn.current.getBoundingClientRect().height);
			let currentOffset = thisBtn.current.offsetTop;
			let buttonBottom = currentOffset + buttonHeight;

			bottomLimit.current = buttonBottom;
			formBtnPosition.current = currentOffset;
		}

	})

	return (
		isForm ? (
			<button ref={ thisBtn } className={ styles.btn } disabled={ isDisabled } type='submit'>{ text }</button>
		) : (
			<button onClick={ () => {
				if( targetLocation === null ) return;
				onClick(targetLocation);
			} }ref={ thisBtn } className={ styles.btn } type='click'>{ text }</button>
		)
	)

}