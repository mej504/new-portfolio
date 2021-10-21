import styles from './styles/icon-tray.module.scss';

const IconTray = () => {

	return (
		<div role="group" aria-label="Social media links" className={ styles.trayContainer }>

			<a href="https://github.com/mej504" aria-label="Visit my GitHub page" target="_blank" rel="noopener" className={ styles.trayIcon }>

				<svg viewBox="0 0 90 90">
					<path className={ styles.whiteIcon } d="M45,.69A45,45,0,0,0,34.1,89.31a6.61,6.61,0,0,1-.35-2.19V79.43H28.09A7.84,7.84,0,0,1,21,75.64c-1.47-2.73-1.73-6.91-5.38-9.47-1.08-.85-.26-1.82,1-1.69a11.8,11.8,0,0,1,6,4.58c1.79,2.35,2.63,2.89,6,2.89a43,43,0,0,0,6.34-.46c1.23-3.12,3.36-6,6-7.35-15-1.55-22.14-9-22.14-19.12a18.44,18.44,0,0,1,5-12.13c-1-3.52-2.33-10.71.4-13.45A15.68,15.68,0,0,1,35.93,25a34,34,0,0,1,21.88,0,15.68,15.68,0,0,1,11.81-5.56c2.74,2.74,1.43,10,.38,13.48A18.36,18.36,0,0,1,75,45c0,10.11-7.14,17.56-22.1,19.11C57,66.28,60,72.32,60,76.87V87.12a7.15,7.15,0,0,1-.13,1A45,45,0,0,0,45,.69Z"/>
				</svg>

			</a>

			<a href="https://www.linkedin.com/in/justin-minyard-24a55937/" aria-label="Connect with me on LinkedIn" target="_blank" rel="noopener" className={ styles.trayIcon }>

				<svg viewBox="0 0 90 90">
					<path className={ styles.whiteIcon } d="M20.12,86.47H.54V32.12H20.12ZM10,22.16c-6,0-10-4-10-9.31S4,3.53,10.64,3.53c6,0,10,4,10,9.32S16.64,22.16,10,22.16ZM90,86.47H71V56.77c0-8.22-5.05-10.11-7-10.11s-8.21,1.26-8.21,10.11v29.7H36.29V32.12H55.88v7.59c2.52-4.43,7.57-7.59,17.05-7.59S90,39.71,90,56.77Z"/>
				</svg>

			</a>

			<a href="https://stackoverflow.com/users/11628130/a3gis" aria-label="Visit my Stack Overflow page" target="_blank" rel="noopener" className={ styles.trayIcon }>

				<svg viewBox="0 0 90 90">
					<path className={ styles.whiteIcon } d="M57.66,78.15l-35.14.14-.19-5.86H57.66Zm16-41.58L67.15,1l6-1,6.06,35.84Zm-16,32L22.33,65.29l.49-5.83,35.23,4.19Zm.71-10L23.76,49.79l1.45-5.85,33.7,9.37ZM60.59,49l-30-18.15,3.29-5.21L63.32,44.29Zm5.47-7.73L46.14,12.08l5.6-3.37L71,38.23Z"/>
					<path className={ styles.whiteIcon } d="M63.51,52.91V84.14H16.67V52.91H10.81V90l58.37,0v0c.06,0,.19-37.06.19-37.06Z"/>
				</svg>


			</a>

			<a href="https://twitter.com/StellarA3gis" aria-label="Follow my Twitter" target="_blank" rel="noopener" className={ styles.trayIcon }>

				<svg viewBox="0 0 90 90">
					<path className={ styles.whiteIcon } d="M89.85,17.18a36.46,36.46,0,0,1-10.57,2.9A18.47,18.47,0,0,0,87.37,9.9a37,37,0,0,1-11.69,4.47A18.41,18.41,0,0,0,43.85,27a18.62,18.62,0,0,0,.48,4.19A52.26,52.26,0,0,1,6.4,11.92a18.43,18.43,0,0,0,5.69,24.57,18.49,18.49,0,0,1-8.33-2.3v.23a18.4,18.4,0,0,0,14.76,18,18.43,18.43,0,0,1-4.85.65,18.71,18.71,0,0,1-3.46-.33A18.42,18.42,0,0,0,27.4,65.56,36.9,36.9,0,0,1,4.54,73.44a37.5,37.5,0,0,1-4.39-.26,52.12,52.12,0,0,0,28.21,8.26c33.85,0,52.35-28,52.35-52.35,0-.8,0-1.59,0-2.38A37.51,37.51,0,0,0,89.85,17.18Z"/>
				</svg>

			</a>


		</div>
	)

}

export default IconTray;