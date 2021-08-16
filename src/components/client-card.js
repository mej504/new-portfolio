import styles from '../styles/components/client-card.module.scss';

import Image from 'next/image';

export default function ClientCard( { imgPath } ) {

	return (

		<div className={ styles.clientCard }>

			<Image src={ imgPath } width={ 150 } height={ 150 } objectFit='contain' />

		</div>

	)

}