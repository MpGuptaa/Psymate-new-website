import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';

const PsymateAudio = () => {
	const audioData = [
		{
			audioUrl: '../assets/imgs/times/audio.mp3',
			title: 'Audio 1',
			imageUrl: '../assets/imgs/times/news1.png',
		},
		{
			audioUrl: '../assets/imgs/times/audio.mp3',
			title: 'Audio 2',
			imageUrl: '../assets/imgs/times/news1.png',
		},
		{
			audioUrl: '../assets/imgs/times/audio.mp3',
			title: 'Audio 3',
			imageUrl: '../assets/imgs/times/news1.png',
		},
	];

	const [isPlaying, setIsPlaying] = useState(Array(audioData.length).fill(false));
	const [playingIndex, setPlayingIndex] = useState(null);

	const handlePlayPause = (index) => {
		const newIsPlaying = Array(audioData.length).fill(false);
		newIsPlaying[index] = !isPlaying[index];

		setIsPlaying(newIsPlaying);

		if (newIsPlaying[index]) {
			setPlayingIndex(index);
		} else {
			setPlayingIndex(null);
		}
	};

	return (
		<div style={{ margin: '4% 0' }}>
			<h4 className='color-brand-1'>Audio</h4>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					767: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					991: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1199: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1350: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				className='swiper-wrapper pb-5'>
				{audioData.map((data, index) => (
					<SwiperSlide className='audio-outer-container' key={index}>
						<div
							className='d-flex align-items-start justify-content-between'
							style={{ gap: '2rem' }}>
							<div className='audio-image'>
								<img src={data?.imageUrl} alt='audio' />
							</div>
							<div>
								<h6 className='color-brand-1'>{data?.title}</h6>
								<div
									className='audio-play-container d-flex align-items-center'
									style={{ cursor: 'pointer', paddingTop: '2rem' }}
									onClick={() => handlePlayPause(index)}>
									{isPlaying[index] ? <PauseIcon /> : <PlayArrowIcon />}
									<p className='font-sm'>{isPlaying[index] ? 'Now Playing' : 'Listen Now'}</p>
								</div>
							</div>
						</div>
						{isPlaying[index] && playingIndex === index && (
              <ReactPlayer url={data.audioUrl} playing={isPlaying[index]} />
            )}
					</SwiperSlide>
				))}
			</Swiper>{' '}
		</div>
	);
};

export default PsymateAudio;
