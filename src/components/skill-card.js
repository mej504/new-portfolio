import cardStyles from '../styles/skill-card.module.scss';

import Image from 'next/image';

export default function SkillCard( props ) {

	return (

		<div className={ cardStyles.cardContainer }>

			<div className={ cardStyles.imgContainer }>
				<Image src={ props.imgPath } width={ 90 } height={ 90 } objectFit='contain' />
			</div>
			<p className={ cardStyles.skillName }>{ props.skillName }</p>

		</div>

	)

}