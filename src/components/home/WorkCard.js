import Image from 'next/image';

import ButtonWithArrow from '@/components/buttons/ButtonWithArrow';

import styles from './styles/work-card.module.scss';

export default function WorkCard({ builtWith, category, title, url, imgPath, description }) {

	return (

		<div className={ styles.workCardContainer }>

			<div className={ styles.workCardImage } >

				<Image
					className={ styles.workImage }
					src={ imgPath }
					alt={`Image preview of my ${ title } application`}
					width={ 200 }
					height={ 125 } 
					layout='responsive'
					objectFit='cover'
					objectPosition={ title === 'AeroFX' ? 'center' : 'top left' }
				/>

			</div>

			<div className={ styles.workDetailsContainer }>

				<div className={ styles.detailsSubgroup }>

					<h2>{ title }</h2>

					<div className={ styles.workMeta }>
						<span className={ styles.projectType }>{ category }</span>
						<span className={ styles.projectBuiltWith }>&nbsp;|&nbsp;{ builtWith }</span>
					</div>

					<p>{ description }</p>

				</div>


			</div>

			<ButtonWithArrow url={ url } text='Test drive app' />

		</div>

	)

}