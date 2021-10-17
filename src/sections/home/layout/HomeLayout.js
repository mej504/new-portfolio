import { homeLayout } from './home-layout.module.scss';

const HomeLayout = ({ children }) => {

	return (

		<div className={ homeLayout }>
			{ children }
		</div>

	)

}

export default HomeLayout;