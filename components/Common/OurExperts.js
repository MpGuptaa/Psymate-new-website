import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetching from './DataFetch';
import Link from 'next/link';
import UseLoader from './UseLoader';
import Image from 'next/image';

const OurExperts = () => {
	const { loading, data } = useDataFetching(`data/users?searchBy=type&search=doctor`);

	return (
		<section className='section mt-100'>
			<div className='container'>
				<div className='row align-items-end'>
					<div className='col-lg-8 col-md-8'>
						<h2 className='color-brand-1 mb-20'>Our Mental Health Experts</h2>
					</div>
				</div>

				<UseLoader loading={loading}>
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						loop={true}
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
						className='swiper-wrapper'>
						<div className='d-flex justify-content-between align-items-center'>
							{data.map((expert, index) => (
								<SwiperSlide className='swiper-slide' key={index}>
									<div className='row mx-50 my-50'>
										<div className=''>
											<div className='card-offer hover-up'>
												<div
													className='d-flex justify-content-between align-center'
													style={{ gap: '2rem' }}>
													<div className='doc-card'>
														<Image
															height={150}
															width={150}
															src={
																expert.photoURL ||
																'/assets/imgs/doctors/doctor.png'
															}
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
															Experience: {expert.yearsOfExperience}{' '}
															years
														</p>
														<p
															style={{ marginBottom: '8px' }}
															className=' color-grey-500 mb-8 doc-related-text'>
															Starts @ ₹{expert.price * 15} for 15
															mins
														</p>
													</div>
												</div>
												<div className='d-flex align-items-center justify-content-between mt-20'>
													<Link href={`/expert/${expert._id}`}>
														<button className='view-profile-btn'>
															View Profile
														</button>
													</Link>
													<Link
														href={`/booking/appointment/${expert._id}`}>
														<button className='book-appointment-btn'>
															Book Appointment
														</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</UseLoader>

				<p className=' color-grey-500 mb-8 font-md text-center hover-up '>
					<Link href='/experts' style={{ cursor: 'pointer' }}>
						View All
					</Link>
				</p>
			</div>
		</section>
	);
};

export default OurExperts;
