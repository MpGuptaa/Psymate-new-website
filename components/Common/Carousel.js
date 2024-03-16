import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetching from './DataFetch';
import Link from 'next/link';
import UseLoader from './UseLoader';

const Carousel = ({ url, children, navigation, head, description, breakpoints }) => {
	const { loading, data, pages } = useDataFetching(url);

	return (
		data &
		(
			<div className='container'>
				<div className='d-flex justify-content-between align-items-center'>
					<div>
						{head && <h2 className='disorder-heading color-brand-1 my-4'>{head}</h2>}
						{description && <p className='font-md color-grey-400 my-4'>{description}</p>}
					</div>
					{navigation.viewAll && (
						<Link href={navigation.viewAll}>
							<p className='color-grey-500 btn-border-80 btn  mb-8 text-center cursor-pointer'>
								View All
							</p>
						</Link>
					)}
				</div>
				<UseLoader loading={loading}>
					<Swiper
						slidesPerView={4}
						spaceBetween={30}
						allowTouchMove={false}
						loop={true}
						preventClicks={false}
						preventClicksPropagation={false}
						navigation={{
							prevEl: `.${navigation.prevEl}`,
							nextEl: `.${navigation.nextEl}`,
						}}
						breakpoints={
							breakpoints || {
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
							}
						}
						className='swiper-wrapper'>
						{data.map((item, i) => (
							<SwiperSlide key={i} className={`swiper-slide ${item?.color}`}>
								{children(item)}
							</SwiperSlide>
						))}
					</Swiper>

					{navigation.nextEl && navigation.prevEl && (
						<div className='box-button-slider-bottom'>
							{navigation.prevEl && (
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
							)}
							{navigation.nextEl && (
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
							)}
						</div>
					)}
				</UseLoader>
			</div>
		)
	);
};

export default Carousel;
