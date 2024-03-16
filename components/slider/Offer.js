import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);
const Offer = () => {
	const data = [
		{
			title: 'Clinic',
			color: 'head-bg-10',
			img: 'hospital.svg',
			desc: 'Access personalized, in-person consultations or virtual consultations, World Class Assessments, State of the Art treatment protocols. ',
		},
		{
			title: 'Rehab',
			color: 'head-bg-11',
			img: 'rehabilitation.svg',
			desc: 'Embrace space agnostic comprehensive rehabilitation services supporting recovery and overall well-being.',
		},
		{
			title: 'Pharmacy',
			color: 'head-bg-12',
			img: 'medication.svg',
			desc: 'Seamlessly access prescribed medications through our integrated pharmacy service.',
		},
		{
			title: 'Wellness',
			color: 'head-bg-13',
			img: 'lotus-position.svg',
			desc: 'Engage in holistic wellness programs designed to complement your mental health journey.',
		},
		{
			title: 'Academy',
			color: 'head-bg-14',
			img: 'school.svg',
			desc: 'Access educational resources and programs for continuous learning and mental health awareness.',
		},
		{
			title: 'Tech',
			color: 'head-bg-15',
			img: 'thinking.svg',
			desc: 'Experience cutting-edge technology integrated for an enhanced user-centric mental health care journey.',
		},
	];

	return (
		<>
			<Swiper
				slidesPerView={4}
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
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
				className='swiper-wrapper'>
				{data.map((item, i) => (
					<SwiperSlide key={item.title} className={`swiper-slide ${item.color}`}>
						<Link href={`offerings/${item.title.toLowerCase()}`}>
							<div className='card-offer-style-3'>
								<div className='card-head'>
									<div className='card-image'>
										<img src={`/assets/imgs/${item.img}`} alt={item.img} />
									</div>
									<div className='carrd-title'>
										<h4 className='color-brand-1'>{item.title}</h4>
									</div>
								</div>
								<div className='card-info'>
									<p className='font-sm color-grey-500 mb-15'>{item.desc}</p>
									<div className='box-button-offer'>
										<p className='btn btn-default font-sm-bold pl-0 color-brand-1 hover-up'>
											Learn More
											<svg
												className='w-6 h-6 icon-16 ml-5'
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
										</p>
									</div>
								</div>
							</div>
						</Link>
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
		</>
	);
};

export default Offer;
