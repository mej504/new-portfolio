export default function Notification({ message, error }) {

	let wrapperStyles = {
		position:'absolute',
		width:'100%',
		bottom:'-15%',
		left:'50%',
		padding:'1em 2em',
		transform:'translateX(-50%)',
	}

	let notificationStyles = {
		color: error ? 'var(--error)' : 'var(--success)',
		fontWeight:300,
		textAlign:'center'
	}

	return (
		<div style={ wrapperStyles }>
			<p style={ notificationStyles }>{ message }</p>
		</div>
	)

}