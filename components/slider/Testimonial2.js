import React from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);
const Testimonial2 = () => {
	const data = [
		{
			img: '1.webp',
			text: `I appreciate that the clinic takes a holistic approach to mental health and offers resources such as nutritional counseling and yoga classes. It's clear that they prpsymatetize the well-being of their patients in every way possible.`,
			name: 'Shivam Sharma',
		},
		{
			img: '2.webp',
			text: `I appreciate that the clinic takes a holistic approach to mental health and offers resources such as nutritional counseling and yoga classes. It's clear that they prpsymatetize the well-being of their patients in every way possible.`,
			name: 'Nikhil Ahuja',
		},
		{
			img: '3.webp',
			text: `I appreciate that the clinic takes a holistic approach to mental health and offers resources such as nutritional counseling and yoga classes. It's clear that they prpsymatetize the well-being of their patients in every way possible.`,
			name: 'Karan Saxena',
		},
	];

	return (
		<>
			<Swiper
				slidesPerView={2}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={{
					prevEl: '.swiper-button-prev-style-3',
					nextEl: '.swiper-button-next-style-3',
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
				className='swiper-wrapper'>
				{data.map((item, i) => (
					<SwiperSlide key={i} className='swiper-slide'>
						<div className='card-review'>
							<div className='card-info'>
								<div className='rating-review'>
									{' '}
									<img src='/assets/imgs/page/homepage7/star.png' alt='psymate' />
									<img src='/assets/imgs/page/homepage7/star.png' alt='psymate' />
									<img src='/assets/imgs/page/homepage7/star.png' alt='psymate' />
									<img src='/assets/imgs/page/homepage7/star.png' alt='psymate' />
									<img src='/assets/imgs/page/homepage7/star.png' alt='psymate' />
								</div>
								<h5 className='color-grey-800 mb-20'>{item.text}</h5>
								<div className='box-author'>
									<a href='#'>
										<img
											src='/assets/imgs/page/homepage7/author4.png'
											alt='psymate'
										/>
									</a>
									<div className='author-info'>
										<a href='#'>
											<span className='font-md-bold color-brand-1 author-name'>
												{item.name}
											</span>
										</a>
										<span className='font-xs color-grey-500 department'>
											Bank of America
										</span>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Testimonial2;
