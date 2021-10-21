import { useRef, useEffect } from 'react';

import styles from './styles/background.module.scss';

import Image from 'next/image';

const Background = () => {

	// Refs
	const videoLoaded = useRef(false);
	
	// Element refs
	const container = useRef(null);
	const placeholder = useRef(null);

	const loadVideo = () => new Promise((res, rej) => {

		//Elements
		const vidEl = document.createElement('video');

		/** VIDEO CONFIG **/
		vidEl.src = '/mov/bg-lines.m4v';

		// Tell the browser to begin fetching the media the source specified above
		vidEl.load();

		/**
		 * * NOTE *
		 * The video WILL NOT play without muted and autoplay set to true in this way.
		 * Attempting to set these properties by setAttribute() yields negative results
		 * 
		*/

		// Options
		vidEl.muted = true;
		vidEl.loop = true;
		vidEl.playsInline = true;
		vidEl.autoplay = true;
		vidEl.setAttribute('type','video/mp4');

		// Just reject if we get an error. The placeholder image isn't ideal, but it does serve
		// as a decent background image
		vidEl.addEventListener('error', (e) => {
			rej();
		})

		vidEl.addEventListener('loadeddata', (e) => {

			// If the video is ready, update the videoLoaded bool, remove the placeholder
			// image, add the video to the DOM, then play it
			if( vidEl.readyState === 4 ) {
				videoLoaded.current = true;
				res(vidEl);
			}

		})

	});

	useEffect(() => {

		if( !videoLoaded.current ) {
			loadVideo().then((vid) => {
				placeholder.current.remove();
				container.current.append(vid);
				vid.play();
			}).catch((err) => {
				return;
			})
		}

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