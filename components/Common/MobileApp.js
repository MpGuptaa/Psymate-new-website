import Link from 'next/link';
import React from 'react';

const MobileApp = () => {
	return (
		<section className='section mt-90'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='color-brand-1 mb-20'>
						One app for all your Mental Health needs
					</h2>
				</div>
				<div className='row mt-75 align-items-center'>
					<div className='col-lg-4 mb-30'>
						<div className='card-become'>
							<div className='card-title text-end'>
								<h6 className='color-brand-1 mb-15'>
									{' '}
									<span>Appointment booking</span>
									<img
										className='ml-15'
										src='/assets/imgs/mobileapp/appointment.png'
										alt='appointment'
									/>
								</h6>
							</div>
							<div className='card-desc'>
								<p className='text-end color-grey-500'>
									Say goodbye to waiting and hello to seamless healthcare with our
									clinic's advanced appointment booking feature on our
									application. Taking control of your health has never been easier
									– simply open our app, choose a preferred date and time, and
									schedule your appointment with just a few taps.
								</p>
							</div>
						</div>
						<div className='card-become'>
							<div className='card-title text-end'>
								<h6 className='color-brand-1 mb-15'>
									{' '}
									<span>Academy</span>
									<img
										className='ml-15'
										src='/assets/imgs/mobileapp/Academy.png'
										alt='academy'
									/>
								</h6>
							</div>
							<div className='card-desc'>
								<p className='text-end color-grey-500'>
									We believe in empowering individuals through knowledge and
									education. Our academy is dedicated to fostering learning and
									personal development in the realm of health and wellness.
								</p>
							</div>
						</div>
						<div className='card-become'>
							<div className='card-title text-end'>
								<h6 className='color-brand-1 mb-15'>
									{' '}
									<span>Wellness programme</span>
									<img
										className='ml-15'
										src='/assets/imgs/mobileapp/wellness.png'
										alt='wellness'
									/>
								</h6>
							</div>
							<div className='card-desc'>
								<p className='text-end color-grey-500'>
									Embark on a transformative journey to holistic well-being with
									our exclusive wellness program at Psymate. Designed with your
									health in mind, our program integrates a unique blend of
									therapeutic approaches and mindful practices to promote overall
									wellness.
								</p>
							</div>
						</div>
					</div>
					<div className='col-lg-4 mb-30 text-center'>
						<img src='/assets/imgs/page/homepage6/Mobileapp.png' alt='psymate' />
					</div>
					<div className='col-lg-4 mb-30'>
						<div className='card-become'>
							<div className='card-title text-start'>
								<h6 className='color-brand-1 mb-15'>
									{' '}
									<img
										className='mr-15'
										src='/assets/imgs/mobileapp/record.png'
										alt='record'
									/>
									<span>Managing records</span>
								</h6>
							</div>
							<div className='card-desc'>
								<p className='text-start color-grey-500'>
									We've simplified the way you manage your health records, putting
									control right at your fingertips. Our user-friendly app allows
									you to effortlessly access and organize your medical information
									anytime, anywhere.
								</p>
							</div>
						</div>
						<div className='card-become'>
							<div className='card-title text-start'>
								<h6 className='color-brand-1 mb-15'>
									{' '}
									<img
										className='mr-15'
										src='/assets/imgs/mobileapp/Pharmacy.png'
										alt='pharmacy'
									/>
									<span>Pharmacy</span>
								</h6>
							</div>
							<div className='card-desc'>
								<p className='text-start color-grey-500'>
									Our in-house pharmacy is committed to providing swift and
									personalized service, ensuring you have easy access to the
									medications prescribed by our healthcare professionals.
								</p>
							</div>
						</div>
						<div className='card-become'>
							<div className='card-title text-start'>
								<h6 className='color-brand-1 mb-15'>
									{' '}
									<img
										className='mr-15'
										src='/assets/imgs/mobileapp/assessment.png'
										alt='assessment'
									/>
									<span>Assessments</span>
								</h6>
							</div>
							<div className='card-desc'>
								<p className='text-start color-grey-500'>
									Accessible at your convenience, our application offers a range
									of comprehensive psychological assessments designed to uncover
									insights into various aspects of mental health. Tailored to
									individual needs, our assessments provide a deep understanding
									of your mental health profile, guiding you on a personalized
									path to well-being
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='border-bottom mt-100' />
		</section>
	);
};

export default MobileApp;
