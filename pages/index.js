import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Tab from '../components/elements/Tab';
import Testimonial2 from '../components/slider/Testimonial2';
import Ourservices from '../components/Common/Ourservices';
import MobileApp from '../components/Common/MobileApp';
import MultiFaq from '../components/Common/MultiFaq';
import DiverseOfferings from '../components/Common/DiverseOfferings';
import { PsymateServices } from '../components/Common/PsymateServices';
import PsymateBrand from '../components/Common/PsymateBrand';
import OurExperts from '../components/Common/OurExperts';
import OurCenters from '../components/Common/OurCenters';
import Carousel from '../components/Common/Carousel';
import { createUrlFromName } from '../Utilities/CommonFunctions/Helper';
import PageHead from '../components/layout/PageHead';
import Image from 'next/image';

const HomePage6 = () => {
	const psymateContent = {
		heading: 'Passion for healing meets Power of Technology',
		description:
			'PSYMATE exists to integrate the best of psychiatry, psychology, health-tech, eastern wisdom and most importantly an unending passion for treating patients under a seamlessly delightful mental health care platform. We create holistic, customized, integrated plans and provide state-of-the-art treatments focused towards a single-minded goal - patient care at any cost.',
		downloadLink: 'https://apps.apple.com/in/app/psymate/id6443472769',
		learnMoreLink: '#',
		img: '/assets/imgs/page/homepage6/psymate.gif',
	};

	return (
		<>
			<Head>
				<meta
					name='description'
					content='Explore a world of mental wellness with Psymate. Our platform offers expert insights, counseling services, and resources to support your mental health journey.'
				/>
				<meta
					name='title'
					content='Explore a world of mental wellness with Psymate. Discover trusted information and Services on psychology, therapies, and mental well-being. Empower yourself with Psymate today.'
				/>
				<meta
					name='keywords'
					content='mental health professional, mental health therapy, online psychiatrist, anxiety psychiatrist near me,mental health psychologist'
				/>
			</Head>

			<Layout title='Mental Health | Psymate'>
				<section className='section banner-6'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-xl-6 d-none d-xl-block'>
								<div className='box-banner-6'>
									<div className='img-testimonials-1 shape-1'>
										<img src='assets/imgs/page/homepage6/calenderr.png' alt='psymate' />
									</div>
									<div className='img-testimonials-2 shape-2'>
										<img src='assets/imgs/page/homepage6/Patientss.png' alt='psymate' />
									</div>
									<img
										className='img-main'
										src='assets/imgs/page/homepage6/brain.png'
										alt='psymate'
									/>
								</div>
							</div>
							<div className='col-xl-6'>
								<div className='box-banner-right-home6'>
									<span className='title-line line-48'>Reboot. Rejuvenate. Rediscover</span>
									<h1 className='color-brand-1 mb-20 mt-5 homepage-heading'>
										Innovative solutions for your Mental Wellbeing
									</h1>
								</div>
							</div>
						</div>
					</div>
				</section>

				<DiverseOfferings />

				<PsymateServices />

				<PsymateBrand content={psymateContent} />

				<Ourservices />

				<Carousel
					navigation={{
						prevEl: 'swiper-button-prev-group-4',
						nextEl: 'swiper-button-next-group-4',
					}}
					description='Stress, Anxiety Disorders, Depression, Bipolar Disorder, OCD, PTSD, Panic Disorder, ADSD, Schizophrenia, Substance Used Disorders'
					head='No matter what your mental health problem is at Psymate we will take care of you'
					url='data/disorders'>
					{(item) => (
						<div className=''>
							<div className='card-blog-grid card-blog-grid-2 hover-up'>
								<div className='card-image'>
									<img src={item.photoURL} alt={item.displayName} />
								</div>
								<div className='card-info'>
									<Link href={`/disorder/${createUrlFromName(item.displayName)}`}>
										<h6 className='color-brand-1'>{item.displayName}</h6>
									</Link>
								</div>
							</div>
						</div>
					)}
				</Carousel>
				{/* <Disorders disordersData={disordersData} /> */}

				<section className='section mt-20'>
					<div className='container'>
						<div className='row align-items-center mt-50'>
							<div className='col-lg-4 col-md-12 col-sm-12 mb-30'>
								{' '}
								<h2 className='color-brand-1 mt-10 mb-20'>
									It might seem there is no why out, but trust us, there is.
								</h2>
								<p> It's just the matter of getting the right help</p>
								<div className='mt-45'>
									<Link className='btn btn-brand-4 hover-up' href='#'>
										Download App{' '}
									</Link>
									<Link className='btn btn-default font-sm-bold hover-up' href='#'>
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
									</Link>
								</div>
							</div>
							<div className='col-lg-4 col-md-6 col-sm-6'>
								<div className='card-offer-style-2 card-left bg-white'>
									<div className='card-offer hover-up'>
										<div className='card-image'>
											<img src='assets/imgs/treatment/neuromodulation.png' alt='psymate' />
										</div>
										<div className='card-info'>
											<h4 className='color-brand-1 mb-15'>RTMS</h4>
											<p className='font-md color-grey-500 mb-15'>
												rTMS is a non-invasive and painless technique extensively used to study
												cognitive functions and investigate the brain-behavior relationship.
											</p>
											<div className='box-button-offer'>
												<a className='btn btn-default font-sm-bold pl-0 color-brand-1'>
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
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-4 col-md-6 col-sm-6'>
								<div className='card-offer-style-2 card-left bg-grey-60'>
									<div className='card-offer hover-up'>
										<div className='card-image'>
											<img src='assets/imgs/treatment/psychotherapy.png' alt='psymate' />
										</div>
										<div className='card-info'>
											<h4 className='color-brand-1 mb-15'>Psychotherapy</h4>
											<p className='font-md color-grey-500 mb-15'>
												Psychotherapy refers to a variety of treatments that aim to help a person
												identify and change troubling emotions, thoughts, and behaviors.
											</p>
											<div className='box-button-offer'>
												<a className='btn btn-default font-sm-bold pl-0 color-brand-1'>
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
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-2 col-md-4 col-sm-6 col-12'>
								<div className='card-small'>
									<div className='card-image'>
										<Link href='#'>
											<div className='box-image'>
												<img src='assets/imgs/treatment/medication.png' alt='psymate' />
											</div>
										</Link>
									</div>
									<div>
										<h6 className='color-brand-1 icon-up'>Medication</h6>
									</div>
								</div>
							</div>
							<div className='col-lg-2 col-md-4 col-sm-6 col-12'>
								<div className='card-small'>
									<div className='card-image'>
										<Link href='#'>
											<div className='box-image'>
												<img src='assets/imgs/treatment/discussion.png' alt='psymate' />
											</div>
										</Link>
									</div>
									<div>
										<h6 className='color-brand-1 icon-up'>Counselling</h6>
									</div>
								</div>
							</div>
							<div className='col-lg-2 col-md-4 col-sm-6 col-12'>
								<div className='card-small'>
									<div className='card-image'>
										<Link href='#'>
											<div className='box-image'>
												<img src='assets/imgs/treatment/nutrition.png' alt='psymate' />
											</div>
										</Link>
									</div>
									<div>
										<h6 className='color-brand-1 icon-up'>Nutrition</h6>
									</div>
								</div>
							</div>
							<div className='col-lg-2 col-md-4 col-sm-6 col-12'>
								<div className='card-small'>
									<div className='card-image'>
										<Link href='#'>
											<div className='box-image'>
												<img src='assets/imgs/treatment/art therapy.png' alt='psymate' />
											</div>
										</Link>
									</div>
									<div>
										<h6 className='color-brand-1 icon-up'>Art Based Therapy</h6>
									</div>
								</div>
							</div>
							<div className='col-lg-2 col-md-4 col-sm-6 col-12'>
								<div className='card-small'>
									<div className='card-image'>
										<Link href='#'>
											<div className='box-image'>
												<img src='assets/imgs/treatment/YOGA.png' alt='psymate' />
											</div>
										</Link>
									</div>
									<div>
										<h6 className='color-brand-1 icon-up'>Yoga</h6>
									</div>
								</div>
							</div>
							<div className='col-lg-2 col-md-4 col-sm-6 col-12'>
								<div className='card-small'>
									<div className='card-image'>
										<Link href='#'>
											<div className='box-image'>
												<img src='assets/imgs/treatment/wellness.png' alt='psymate' />
											</div>
										</Link>
									</div>
									<div>
										<h6 className='color-brand-1 icon-up'>Wellness</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<OurExperts />

				<OurCenters />

				<MobileApp />

				<section className='section mt-50 mb-50 bg-brand-3 pt-100 pb-100 bg-explore'>
					<div className='container'>
						<div className='text-center'>
							<h2 className='color-brand-2 mb-60 mt-15'>Psymate Times</h2>
						</div>
						<div className='mt-30 mb-60'>
							<Tab />
						</div>
					</div>
				</section>

				<section className='section mt-50 bg-grey-60'>
					<div className='container'>
						<div className='pt-120 pb-120'>
							<h2 className='color-brand-1'>
								What are our users <br className='d-none d-lg-block' />
								saying about us
							</h2>
							<div className='mt-50'>
								<div className='box-swiper'>
									<div className='swiper-container swiper-group-2'>
										<Testimonial2 />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<MultiFaq />
				<div className='mt-50' />
			</Layout>
		</>
	);
};

export default HomePage6;
