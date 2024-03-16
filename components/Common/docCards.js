import React from 'react';
import useDataFetching from './DataFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const DocCards = () => {
	const { loading, data } = useDataFetching(`data/users?searchBy=type&search=doctor`);
	return (
		<div className='mt-20'>
			<div className='container'>
				<h3 className='color-brand-1'>Meet Our Experts</h3>
				<Swiper
					slidesPerView={2}
					spaceBetween={30}
					loop={true}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					autoplay={{
						delay: 3000,
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
						1450: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className='swiper-wrapper' style={{padding:"1rem 0"}}>
					{data.map((expert, i) => (
						<SwiperSlide key={i} className={`swiper-slide `}>
							<div className=''>
								<div className='card-offer hover-up'>
									<div
										className='d-flex justify-content-between align-center'
										style={{ gap: '2rem' }}>
										<div className='doc-card'>
											<img
												src={expert.photoURL || '/assets/imgs/doctors/doctor.png'}
												alt={expert.displayName}
											/>
										</div>
										<div className='card-info'>
											<h4 className='color-brand-1 mb-15 doc-name'>
												{expert?.prefix} {expert.displayName}
											</h4>
											<p
												style={{ marginBottom: '8px' }}
												className=' color-grey-500 mb-8 doc-related-text'>
												{expert.qualifications}
											</p>
											<p
												style={{ marginBottom: '8px' }}
												className=' color-grey-500 mb-8 doc-related-text'>
												Experience: {expert.yearsOfExperience} years
											</p>
											<p
												style={{ marginBottom: '8px' }}
												className=' color-grey-500 mb-8 doc-related-text'>
												Starts @ ₹{expert.price * 15} for 15 mins
											</p>
										</div>
									</div>
									<div className='d-flex align-items-center justify-content-between mt-20'>
										<Link href={`/expert/${expert._id}`}>
											<button className='view-profile-btn'>View Profile</button>
										</Link>
										<Link href={`/booking/appointment/${expert._id}`}>
											<button className='book-appointment-btn'>Book Appointment</button>
										</Link>
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

export default DocCards;
