import styles from '../../styles/sections/contact.module.scss';

import ContactForm from '../contact-form';

export default function Contact({ bottomLimit }) {

	return (

		<section className={ styles.contactSectionWrap }>

			<div className={ styles.header }>
				<h2>Contact</h2>
				<p>Holler at me! I'm available for freelance work, and I'll gladly<br />answer any questions you have!</p>
			</div>

			<ContactForm bottomLimit={ bottomLimit } />

		</section>

	)

}