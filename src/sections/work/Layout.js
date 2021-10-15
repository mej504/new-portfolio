// Styles
import styles from './styles/layout.module.scss';


export default function Layout({ children }) {

	return (
		<section className={ styles.mainContainer }>
			{ children }
		</section>
	)

}