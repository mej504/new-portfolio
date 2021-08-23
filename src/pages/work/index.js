import { useEffect, useState } from 'react';

import Nav from '../../components/sections/nav';

export async function getStaticProps({ params }) {

	let props = {};

	props.key = '/work';

	return {
		props: props
	}
}

export default function WorkPage (props) {

	const [ location, updateLocation ] = useState();

	useEffect(() => {
		updateLocation( window.location.pathname );
	})

	return (
		<Nav location={ location }/>
	)

}