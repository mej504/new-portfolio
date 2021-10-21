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

		// Once the video can play, do it to it
		vidEl.addEventListener('canplay', () => {
			videoLoaded.current = true;
			res(vidEl);
		})

		// Safari hack to stop video from pausing when user clicks a link on the page that opens
		// in a new tab. Because, Safari.
		vidEl.addEventListener('pause', () => {
			vidEl.play();
		})

		// Just reject if we get an error. The placeholder image isn't ideal, but it does serve
		// as a decent background image
		vidEl.addEventListener('error', (e) => {
			rej();
		})


		/*
		* ------------------------------------------------------------------------------------------------

		* I'm keeping this here for future reference. While this works on literally every other browser,
		* it DOES NOT work on Safari. The solution is to listen for the 'canplay' event (above), then play
		* the video with .play(). I had a great deal of fun debugging that on a Windows system.

		! vidEl.addEventListener('loadeddata', (e) => {
		!	if( vidEl.readyState === 4 ) {
		!		videoLoaded.current = true;
		!		res(vidEl);
		!	}
		! })

		* ------------------------------------------------------------------------------------------------
		*/


	});

	useEffect(() => {

		const playVideo = () => {
			let video = document.querySelector('video');
			if( video ) video.play();
		}

		window.addEventListener('focus', playVideo);

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

		<div role="img" aria-label="Background video with connected lines and triangles fading in the distance" ref={ container } className={ styles.backgroundVideo }>
			<div ref={placeholder} className={ styles.placeholderImgContainer }>
				<Image src="/img/bg-video-still.png" priority loading="eager" layout="fill" objectFit="cover" />
			</div>
		</div>
	)

}

export default Background;