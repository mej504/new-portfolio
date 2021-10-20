import styles from './styles/notification.module.scss';

export default function Notification({ notificationStatus }) {

	return (

		<div className={
			`${styles.notificationWrapper}
			 ${notificationStatus.shouldAnimateIn && styles.animateIn}
			 ${notificationStatus.shouldAnimateOut && styles.animateOut}`
			}
		>
			<p style={{ color: notificationStatus.status === 'success' ? 'var(--success)' : 'var(--error)' }}
				className={ styles.notificationStyles }
			>
				{notificationStatus.message}
			</p>

		</div>
	)

}