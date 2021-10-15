import styles from './styles/client-card.module.scss';

export default function ClientCard( { imgPath } ) {

	return (

		<div className={ styles.clientCard }>

			<img src={ imgPath } alt=''/>

		</div>

	)

}