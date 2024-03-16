import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetching from '../Common/DataFetch';

export const PsymateVideo = ({ type }) => {
	const { loading, data } = useDataFetching(`data/${type}?searchBy=published&search=Published`);
	const modalRef = useRef(null);

	// Function to open modal and enter fullscreen
	const openModalAndFullscreen = (videoId) => {
		openModal(videoId);
		const modalElement = modalRef.current;
		if (modalElement && modalElement.requestFullscreen) {
			modalElement.requestFullscreen();
		}
	};

	const [isOpen, setOpen] = useState(null);
	const [watchingNow, setWatchingNow] = useState({});
	const [isPlaying, setIsPlaying] = useState(false);

	const openModal = (id) => {
		setOpen(id);
	};

	const closeModal = () => {
		setOpen(null);
	};

	const handleVideoPlay = (id) => {
		setWatchingNow({ ...watchingNow, [id]: true });
		setIsPlaying(true);
	};

	const handleVideoPause = (id) => {
		setIsPlaying(false);
	};

	const isWatchingNow = (id) => {
		return watchingNow[id] || false;
	};

	return (
		<div style={{ margin: '4% 0' }}>
			<h4 className='color-brand-1'>Video</h4>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
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
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1350: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				className='swiper-wrapper pb-5'>
				{data.map((video) => (
					<SwiperSlide key={video.id} className='audio-outer-container'>
						<div
							className='d-flex align-items-start justify-content-between'
							style={{ gap: '2rem' }}>
							<div className='audio-image'>
								<img src='../assets/imgs/times/news1.png' alt='video' />
							</div>
							<div>
								<h6 className='color-brand-1'>{video.videoTitle}</h6>
								<div>
									<div
										className='audio-play-container d-flex align-items-center'
										style={{ cursor: 'pointer', paddingTop: '2rem' }}>
										<div onClick={() => openModalAndFullscreen(video?._id)}>
											{isPlaying && isOpen === video._id ? <PauseIcon /> : <PlayArrowIcon />}
										</div>
										<div ref={modalRef}>
											<ModalVideo
												channel='youtube'
												autoplay
												isOpen={isOpen === video._id}
												videoId={video.videoId}
												onClose={closeModal}
												onPlay={() => handleVideoPlay(video._id)}
												onPause={() => handleVideoPause(video._id)}
											/>
										</div>
										{/* Watching Now/Watch Now */}
										<p className='font-sm'>
											{isWatchingNow(video.id) ? 'Watching Now' : 'Watch Now'}
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>{' '}
		</div>
	);
};
