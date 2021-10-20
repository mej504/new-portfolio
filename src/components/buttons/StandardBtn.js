import { useEffect, useRef } from 'react';

import styles from './styles/standard-btn.module.scss';

export default function StandardBtn({ text = 'Click here', isForm = false, btnEnabled, bottomLimit, formBtnPosition, onClick, targetLocation } ) {

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
			<button id='form-submit' ref={ thisBtn } className={ styles.btn } disabled={ !btnEnabled } type='submit'>{ text }</button>
		) : (
			<button onClick={ () => {
				if( targetLocation === null ) return;
				onClick(targetLocation);
			} }ref={ thisBtn } className={ styles.btn } type='click'>{ text }</button>
		)
	)

}