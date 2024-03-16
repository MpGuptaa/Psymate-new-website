import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const PsymateNews = () => {
	const latestNewsData = [
		{
			image: '../assets/imgs/times/news1.png',
			title: 'Globally maximize high standards in benefits before user friendly.',
			date: '18 June',
			category: 'Education',
		},
		{
			image: '../assets/imgs/times/news1.png',
			title: 'Globally maximize high standards in benefits before user friendly.',
			date: '18 June',
			category: 'Education',
		},
		{
			image: '../assets/imgs/times/news1.png',
			title: 'Globally maximize high standards in benefits before user friendly.',
			date: '18 June',
			category: 'Education',
		},
		// Add more news items as needed
	];
	return (
		<div style={{marginTop:"2rem"}}>
			<h4 className='color-brand-1'>Latest And Trending News</h4>
			<div className='latest-news-section'>
				<Swiper
					slidesPerView={2}
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
							slidesPerView: 2,
							spaceBetween: 30,
						},
					}}
					className='swiper-wrapper pb-5'>
					{latestNewsData.map((news, index) => (
						<SwiperSlide key={index} className='latest-news-container'>
							<div className='d-flex justify-content-between' style={{ gap: '2rem' }}>
								<div className='latest-news-background-imgae'>
									<img src={news.image} alt='news' />
								</div>
								<div>
									<h6>{news.title}</h6>
									<div className='d-flex align-items-center justify-content-between'>
										<p className='font-sm'>{news.date}</p>
										<div className='news-format'>
											<p className='font-sm'>{news.category}</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default PsymateNews;
