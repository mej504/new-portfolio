import styles from '../styles/components/testimonial.module.scss';

export default function Testimonial( props ) {

	let { clientOrg, clientName, clientTitle, testimonialText } = props;

	return (
		<div className={ styles.testimonialContainer }>

			<p className={ styles.testimonialText }>{ testimonialText }</p>

			<div className={ styles.testimonialClient }>
				<p>{ clientName }</p>
				<p>{`${clientOrg} ${clientTitle}`}</p>
			</div>

		</div>
	)

}