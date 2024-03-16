import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const PharmacyBanner = () => {
	const swiperSlides = [
		{ image: '../assets/imgs/pharmacy/banner.png' },
		{ image: '../assets/imgs/pharmacy/banner 2.png' },
	];
	return (
		<div>
			<section className='section mt-30'>
				<Swiper
					slidesPerView={1}
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
							slidesPerView: 1,
							spaceBetween: 30,
						},
						1199: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						1350: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
					}}
					className='swiper-wrapper'>
					{swiperSlides.map((slide, index) => (
						<SwiperSlide key={index} className={`box-banner-shop-list swiper-slide`}>
							<img
								style={{ width: '100%' }}
								src={slide.image}
								alt={`slide-${index}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</div>
	);
};

export default PharmacyBanner;
