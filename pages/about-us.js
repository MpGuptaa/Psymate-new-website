import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Team from '../components/slider/Team';
import ModalVideo from 'react-modal-video';
import Head from 'next/head';
import Tab from '../components/elements/Tab';
import HeroSlider from '../components/slider/HeroSlider';
import MobileApp from '../components/Common/MobileApp';
import TrustPsymate from '../components/Common/TrustPsymate';
import MobileAppDescription from '../components/Common/MobileAppDescription';
import PageHead from '../components/layout/PageHead';
import CoreValue from '../components/Common/coreValues';

const HomePage8 = () => {
	const [isOpen, setOpen] = useState(false);
	const whyTrustedData = {
		stars: [
			'assets/imgs/template/icons/star.svg',
			'assets/imgs/template/icons/star.svg',
			'assets/imgs/template/icons/star.svg',
			'assets/imgs/template/icons/star.svg',
			'assets/imgs/template/icons/star.svg',
		],
		title: 'See why we are trusted the world over',
		description:
			'PSYMATE exists to integrate the best of psychiatry, psychology, health-tech, eastern wisdom and most importantly an unending passion for treating patients under a seamlessly delightful mental health care platform. We create holistic, customized, integrated plans and provide state-of-the-art treatments focused towards a single-minded goal - patient care at any cost.',
		stats: [
			{ value: '469k', label: 'Happy Users' },
			{ value: '10k+', label: ' Appointments' },
			{ value: '8k+', label: 'Rtms Sessions' },
			{ value: '50+', label: 'Team' },
		],
	};

	return (
		<>
			<Head>
				<meta
					name='description'
					content='Join Psymate on a global journey of mental well-being. Embrace empathy, expertise, and innovation for a transformative mental health experience.'
				/>
				<meta name='title' content='Psymate: Changing the Face of Mental Health Worldwide' />
			</Head>

			<Layout title='About | Psymate'>
				<section className='section banner-11'>
					<div className='box-banner-home11'>
						<div className='box-swiper'>
							<div className='swiper-container swiper-group-1 right-pagination'>
								<HeroSlider />
							</div>
						</div>
						<div className='swiper-pagination right-pagination swiper-pagination-group-11' />
					</div>
				</section>

				<TrustPsymate {...whyTrustedData} />

				{/* <section className="section pt-100 pb-100 ">
          <div className="container">
            <div className="box-story box-story-1">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video">
                    <img
                      className="bd-rd8 d-block"
                      src="assets/imgs/page/about/vision.png"
                      alt="psymate"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video mt-30 mb-30">
                    <span className="btn btn-tag">OUR VISION</span>
                    <h3 className="color-brand-1 mt-10 mb-15">
                      Psymate's Vision: Merging Science with Tradition for
                      Global Mental Well-being and Empathy
                    </h3>
                    <p className="font-md color-grey-400">
                      Psymate envisions a world where mental well-being is
                      universally embraced, merging science with tradition.
                      Beyond accessibility, our vision is an empathetic mental
                      health journey, creating a global community where everyone
                      feels genuinely understood and supported.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-story box-story-2">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video mt-30 mb-30">
                    <span className="btn btn-tag">OUR MISSION</span>
                    <h3 className="color-brand-1 mt-10 mb-15">
                      Revolutionizing Mental Healthcare: Bringing Advanced,
                      Inclusive Solutions to India and Beyond!
                    </h3>
                    <p className="font-md color-grey-400">
                      Deliver technologically advanced, universally accessible
                      mental health care globally, with a focus on India. We're
                      dedicated to solving mental health issues for those
                      outside mainstream healthcare access, ensuring safety,
                      inclusivity, and effectiveness.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video">
                    <img
                      className="bd-rd8 d-block"
                      src="assets/imgs/page/about/mission.png"
                      alt="psymate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

				<section className='section mt-50'>
					<div className='container'>
						<div className='row align-items-start mt-50'>
							<div className='col-xl-6 col-lg-6 mb-30'>
								<div className='card-radius-32 bg-back-5 '>
									<div className='box-info-video mt-30 mb-30'>
										<span className='btn btn-tag'>OUR VISION</span>
										<h3 className='color-brand-1 mt-10 mb-15'>
											Psymate's Vision: Merging Science with Tradition for Global Mental Well-being
											and Empathy
										</h3>
										<p className='font-md color-grey-400'>
											Psymate envisions a world where mental well-being is universally embraced,
											merging science with tradition. Beyond accessibility, our vision is an
											empathetic mental health journey, creating a global community where everyone
											feels genuinely understood and supported.
										</p>
									</div>
								</div>
							</div>
							<div className='col-xl-6 col-lg-6 mb-30'>
								<div className='card-radius-32 bg-back-6'>
									<div className='box-info-video mt-30 mb-30'>
										<span className='btn btn-tag'>OUR MISSION</span>
										<h3 className='color-brand-1 mt-10 mb-15'>
											Revolutionizing Mental Healthcare: Bringing Advanced, Inclusive Solutions to
											India and Beyond!
										</h3>
										<p className='font-md color-grey-400'>
											Deliver technologically advanced, universally accessible mental health care
											globally, with a focus on India. We're dedicated to solving mental health
											issues for those outside mainstream healthcare access, ensuring safety,
											inclusivity, and effectiveness.
										</p>
									</div>
								</div>
							</div>
							<div className='col-xl-12 mb-30'>
								<div className='card-radius-32 bg-back-7'>
									<div className='row align-items-center'>
										<div className='box-cover-pd box-cover-pd-3 pt-30 pb-30 mb-30'>
											<h2 className='color-brand-1 mt-10 mb-15'>Our Story</h2>
											<p className='font-md color-grey-400'>
												From the initial spark of an idea to a flourishing space for holistic care,
												our journey reflects a deep-seated belief in the power of patient centric
												treatments. Together, let’s explore the narrative of empathy, expertise and
												a commitment that defines us at Psymate, where your mental health is not
												just a destination, but an ongoing journey of strength and healing.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<CoreValue />

				<section className='section mt-50 pt-50 pb-90'>
					<div className='container'>
						<div className='bg-back-1 box-cover-video'>
							<div className='row align-items-center'>
								<div className='col-xl-6 col-lg-6'>
									<img className='d-block' src='../assets/imgs/sir imagee.png' alt='psymate' />
								</div>
								<div className='col-xl-6 col-lg-6'>
									<div className='box-info-video'>
										<h3 className=' mt-10 mb-15'>Founder's Note</h3>
										<p className='font-md color-white'>
											Psymate is a passion project and a labour of love; it's a platform that is
											enabling unprecedented convergence of world class, evidence-based Psychiatry
											and Psychology services for the treatment of mental health disorders with a
											personalised and integrative treatment approach, powered by cutting edge
											technology and a deep commitment for treating people.We are revolutionizing &
											democratizing mental healthcare for every single person who needs help.
										</p>
										<h3 className=' mt-10 mb-15 font-md'>
											Dr Samant Darshi
											<p>MBBS, MD, cTMS</p>
											<p>Consultant Psychiatrist & Psychotherapis</p>
											<p>Neuromodulation Expert & De-addiction Specialist</p>
										</h3>
										{/* <div className="box-button-video">
                      <a
                        className="btn btn-play font-sm-bold popup-youtube hover-up"
                        onClick={() => setOpen(true)}
                      >
                        Play Video
                      </a>
                      <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId="lOO7qKcWgOQ"
                        onClose={() => setOpen(false)}
                      />
                    </div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<MobileAppDescription />

				<div className='mt-100' />
				<div className='section'>
					<div className='container'>
						<div className='box-radius-logo'>
							<div className='text-center'>
								<p className='font-lg color-brand-1'>We've also been Featured</p>
							</div>
							<div className='mt-30'>
								<ul className='list-partners'>
									<li>
										<img
											src='https://ik.imagekit.io/9wtikbbcz/image%2018%201.png?updatedAt=1706940577597'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='https://ik.imagekit.io/9wtikbbcz/image%2017%201.png?updatedAt=1706940577698'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='	https://ik.imagekit.io/9wtikbbcz/image%2025%201.png?updatedAt=1706940577659'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='	https://ik.imagekit.io/9wtikbbcz/image%2026%201.png?updatedAt=1706940577699'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='	https://ik.imagekit.io/9wtikbbcz/image%2023%201.png?updatedAt=1706940577559'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='https://ik.imagekit.io/9wtikbbcz/image%2019%201.png?updatedAt=1706940577704'
											alt='psymate'
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<section className='section mt-150'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6'>
								<span className='title-line line-48'>Why using our app</span>
								<h3 className='color-brand-1 mb-20 mt-15'>
									Our app is great for individuals, startups and enterprises. It have never been
									easier to manage your finances
								</h3>
								<div className='row'>
									<div className='col-lg-9'>
										<p className='font-sm color-grey-500'>
											Eos eveniet nesciunt et accusamus suscipit est magnam consequatur aut quisquam
											perferendis a reprehenderit quis aut voluptatem repellat est beatae
											reiciendis? Cum omnis corrupti cum incidunt veritatis vel libero provident aut
											reiciendis animi ut quod quaerat et velit animi et omnis illo. Sit quae harum
											eos incidunt sequi eum iste fugit ex omnis aliquam a explicabo quam.
										</p>
									</div>
								</div>
								<div className='mt-35'>
									<div className='row'>
										<div className='col-lg-5 col-md-6 col-sm-6 col-6 mb-20'>
											<h2 className='color-brand-1'>469k</h2>
											<p className='font-lg color-brand-1'>Social followers</p>
										</div>
										<div className='col-lg-5 col-md-6 col-sm-6 col-6 mb-20'>
											<h2 className='color-brand-1'>25k+</h2>
											<p className='font-lg color-brand-1'>Happy Clients</p>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-6 text-center'>
								<div className='box-charts'>
									<div className='box-chart-1 text-end'>
										<div className='box-number-2 bg-brand-2'>
											<h2 className='color-brand-1'>756+</h2>
											<p className='font-lg color-brand-1'>Project Done</p>
										</div>
									</div>
									<div className='box-chart-2'>
										<div className='item-chart-inner'>
											<img src='/assets/imgs/page/homepage8/chart1.png' alt='psymate' />
										</div>
									</div>
								</div>
								<div className='box-charts'>
									<div className='box-chart-1'>
										<div className='item-chart-inner'>
											<img src='/assets/imgs/page/homepage8/chart2.png' alt='psymate' />
										</div>
									</div>
									<div className='box-chart-2'>
										<div className='item-chart-inner'>
											<img src='/assets/imgs/page/homepage8/chart3.png' alt='psymate' />
										</div>
									</div>
								</div>
								<div className='box-charts'>
									<div className='box-reviews'>
										<div className='item-chart-inner'>
											<div className='row'>
												<div className='col-lg-6 mb-20'>
													<div className='card-comment'>
														<div className='card-image'>
															{' '}
															<img src='/assets/imgs/page/homepage8/author1.png' alt='psymate' />
														</div>
														<div className='card-info'>
															<div className='card-title'>
																<span className='font-md-bold color-brand-1 title-comment'>
																	Bessie Cooper
																</span>
																<div className='rating'>
																	{' '}
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																</div>
															</div>
															<p className='font-xs color-grey-500'>
																Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa
															</p>
														</div>
													</div>
												</div>
												<div className='col-lg-6 mb-20'>
													<div className='card-comment'>
														<div className='card-image'>
															{' '}
															<img src='/assets/imgs/page/homepage8/author2.png' alt='psymate' />
														</div>
														<div className='card-info'>
															<div className='card-title'>
																<span className='font-md-bold color-brand-1 title-comment'>
																	Albert Flores
																</span>
																<div className='rating'>
																	{' '}
																	<img src='' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																	<img src='/assets/imgs/template/icons/star.svg' alt='psymate' />
																</div>
															</div>
															<p className='font-xs color-grey-500'>
																Vivamus hendrerit molestie mi, a volutpat ipsum vol
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='border-bottom mt-90' />
				</section>

				<MobileApp />

				<div className='mt-80'>
					<div className='container'>
						<div className='row align-items-start'>
							<div className='col-lg-6'>
								<h6 className='color-brand-1 mb-20'>Our leadership team</h6>
								<h2 className='color-brand-1 mb-50'>Meet the amazing team behind Psymate</h2>
							</div>
						</div>
					</div>
					<div className='box-swiper'>
						<div className='swiper-container swiper-group-7-center'>
							<Team />
						</div>
					</div>
				</div>
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
				<div className='mt-50' />
			</Layout>
		</>
	);
};

export default HomePage8;
