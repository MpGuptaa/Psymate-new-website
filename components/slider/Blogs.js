import React from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetching from '../Common/DataFetch';
import UseLoader from '../Common/UseLoader';

SwiperCore.use([Autoplay, Navigation]);

const Blogs = ({ type }) => {
	const { loading, data } = useDataFetching(`data/${type}?searchBy=published&search=Published`);
	const truncateName = (name) => {
		if (name.length > 10) {
			return name.slice(0, 30) + ' ...';
		}
		return name;
	};

	return (
		<UseLoader loading={loading}>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				// autoplay={{
				//   delay: 2500,
				//   disableOnInteraction: false,
				// }}
				navigation={{
					prevEl: '.swiper-button-prev-group-4',
					nextEl: '.swiper-button-next-group-4',
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
				className='swiper-container swiper-group-4'>
				{data.map((item, i) => (
					<SwiperSlide key={i} className='swiper-slide'>
						<div className={`card-member-2 mb-30 ${item.color}`}>
							<div className='card-image'>
								<img src={`/assets/imgs/blog/blog.png`} alt='psymate' />
							</div>
							<div className='card-info'>
								<a className='font-lg-bold color-brand-1' href='#'>
									{truncateName(item.displayName)}
								</a>
								<div>
									<p className='font-xs color-grey-200'>{item.author}</p>
									<p className='font-xs color-grey-200'>
										{new Date(item.publishedDate).toDateString()}
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className='box-button-slider-bottom'>
				<div className='swiper-button-prev swiper-button-prev-group-4'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M10 19l-7-7m0 0l7-7m-7 7h18'
						/>
					</svg>
				</div>
				<div className='swiper-button-next swiper-button-next-group-4'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M14 5l7 7m0 0l-7 7m7-7H3'
						/>
					</svg>
				</div>
			</div>
		</UseLoader>
	);
};

export default Blogs;
