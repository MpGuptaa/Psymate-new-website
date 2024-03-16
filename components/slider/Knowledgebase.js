import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);
const Knowledgebase = ({ data }) => {
	const [noSwiping, setNoSwiping] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setNoSwiping(window.innerWidth >= 769);
		};

		// Initial check
		handleResize();

		// Attach event listener for window resize
		window.addEventListener('resize', handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={{
					prevEl: '.swiper-button-prev-style-2',
					nextEl: '.swiper-button-next-style-2',
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
				noSwiping={noSwiping}
				className='swiper-wrapper'>
				{data.map((item, i) => (
					<SwiperSlide className='swiper-slide' key={item.establishmentAddress}>
						<div className='card-guide'>
							<div className='card-image'>
								<Image
									width={180}
									height={180}
									src={item.thumbnail}
									alt='psymate'
								/>
							</div>
							<div className='card-info'>
								<h5 className='color-brand-1 mb-15'>{item.establishmentName}</h5>
								<p className='font-xs color-grey-500'>
									{item.establishmentAddress}
								</p>
								
								<Link
									target='_blank'
									href={item.directions}
									className='d-flex align-items-center justify-content-between mt-20'>
									<button className='view-profile-btn'>View Directions</button>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Knowledgebase;
