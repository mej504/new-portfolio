import { useEffect, useRef, useState } from 'react';

import styles from '../../styles/buttons/standard-btn.module.scss';

/*
// text defaults to 'Click here'
// isForm defaults to false
*/

export default function StandardBtn({ text = 'Click here', isForm = false, isDisabled = false, trackYPos = false, bottomLimit } ) {

	const [y, updateY] = useState(0);
	const thisBtn = useRef();

	useEffect(() => {

		let buttonHeight = Math.floor(thisBtn.current.getBoundingClientRect().height);
		let currentOffset = thisBtn.current.offsetTop;
		let buttonBottom = currentOffset + buttonHeight;

		console.log(`Button Height: ${buttonHeight}\ncurrentOffset: ${currentOffset}\nbuttonBottom: ${buttonBottom}`);

		updateY( currentOffset + (buttonHeight / 2));
		bottomLimit.current = buttonBottom;

	}, [] )

	return (
		isForm ? (
			<button ref={ thisBtn } className={ styles.btn } disabled={ isDisabled } type='submit'>{ text }</button>
		) : (
			<button ref={ thisBtn } className={ styles.btn } type='click'>{ text }</button>
		)
	)

}
/*
		isForm ? (
			<>
				<button ref={ thisBtn } className={ styles.btn } disabled={ isDisabled } type='submit'>{ text }</button>
				<span className='line'></span>
				<style jsx>{`
					.line {
						position:absolute;
						left:0;
						top:${y}px;
						width:100%;
						height:2px;
						background:red;
					}
				`}</style>
			</>
		) : (
			<>
				<button ref={ thisBtn } className={ styles.btn } type='click'>{ text }</button>
			</>
		)
	)
*/