import Link from 'next/link';

import styles from '../../styles/buttons/button-with-shadow.module.scss';

export default function ButtonWithDropShadow( props ) {

	return (

		<Link href="/work">
			<a className={ styles.btn }>{ props.btnText }</a>
		</Link>

	)

}