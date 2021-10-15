import styles from './styles/contact.module.scss';

import ContactForm from '@/home-components/ContactForm';

export default function Contact({ bottomLimit, formBtnPosition }) {

	return (

		<section id="contact" className={ styles.contactSectionWrap }>

			<div className={ styles.header }>
				<h2>Contact</h2>
				<p>Shoot me a message! I'm available for freelance work, and I'll gladly answer any questions!</p>
			</div>

			<ContactForm bottomLimit={ bottomLimit } formBtnPosition={ formBtnPosition }/>

		</section>

	)

}