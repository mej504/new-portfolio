import { useRef, useEffect, useState } from 'react';

import styles from './styles/background.module.scss';

import Image from 'next/image';

const Background = () => {

	const videoLoaded = useRef(false);
	const container = useRef(null);
	const placeholder = useRef(null);

	const loadVideo = () => {

		//Elements
		const vidEl = document.createElement('video');

		vidEl.src = '/mov/bg-lines.m4v';
		vidEl.load();
		vidEl.muted = true;
		vidEl.loop = true;
		vidEl.playsInline = true;
		vidEl.autoplay = true;
		vidEl.setAttribute('type','video/mp4');

		vidEl.addEventListener('loadeddata', (e) => {

			if( vidEl.readyState === 4 ) {

				videoLoaded.current = true;
				placeholder.current.remove();
				container.current.append(vidEl);
				vidEl.play();
			}

		})

	};

	useEffect(() => {

		if( !videoLoaded.current ) loadVideo();

	}, [])

	return (

		<div ref={ container } className={ styles.backgroundVideo }>
			<div ref={placeholder} className={ styles.placeholderImgContainer }>
				<Image src="/img/bg-video-still.png" priority="preload" layout="fill" objectFit="cover" />
			</div>
		</div>
	)

}

export default Background;