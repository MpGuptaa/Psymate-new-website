import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const HomePage2 = () => {
	const [pricing, setPricing] = useState(1);

	const handlePricing = (index) => {
		setPricing(index); // remove the curly braces
	};
	const [social, setSocial] = useState(1);

	const handleSocial = (index) => {
		setSocial(index); // remove the curly braces
	};
	return (
		<>
			<Head>
				<title>psymate - Multipurpose Startup & SaaS Template2</title>
			</Head>

			<Layout>
				<section className='section banner-2'>
					<div className='container'>
						<div className='banner-1'>
							<div className='row align-items-center'>
								<div className='col-lg-7'>
									<h1 className='color-brand-1 mb-20'>
										Psymate dashboard will help your payments fast and secure
									</h1>
									<div className='row'>
										<div className='col-lg-9'>
											<p className='font-md color-grey-500'>
												Social media networks are open to all. Social media
												is typically used for social interaction and access
												to news and information, and decision making.
											</p>
										</div>
									</div>
									<div className='mt-30'>
										<h5 className='color-brand-1'>Available on</h5>
									</div>
									<div className='box-button mt-20'>
										{' '}
										<Link className='btn-app mb-15 hover-up' href='#'>
											{' '}
											<img
												src='assets/imgs/template/appstore-btn.png'
												alt='psymate'
											/>
										</Link>
										<Link className='btn-app mb-15 hover-up' href='#'>
											{' '}
											<img
												src='assets/imgs/template/google-play-btn.png'
												alt='psymate'
											/>
										</Link>
										<Link
											className='btn btn-default mb-15 pl-10 font-sm-bold hover-up'
											href='#'>
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
								<div className='col-lg-5 d-none d-lg-block'>
									<img
										src='assets/imgs/page/homepage2/banner.png'
										alt='psymate'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className='section'>
					<div className='container'>
						<div className='box-radius-logo'>
							<div className='text-center'>
								<p className='font-lg color-brand-1'>
									Loved By Developers, Trusted By Enterprises
								</p>
							</div>
							<div className='mt-30'>
								<ul className='list-partners'>
									<li>
										<img
											src='assets/imgs/page/homepage1/placed.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/cuebiq.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/factual.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/placeiq.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/airmeet.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/spen.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/klippa.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage2/reed.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage2/vuori.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage2/versed.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/matrix.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/klippa.png'
											alt='psymate'
										/>
									</li>
									<li>
										<img
											src='assets/imgs/page/homepage1/factual.png'
											alt='psymate'
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<section className='section mt-100'>
					<div className='container'>
						<div className='row align-items-end'>
							<div className='col-lg-12 text-center'>
								<h2 className='color-brand-1 mb-20'>
									Take your social media marketing{' '}
									<br className='d-none d-lg-block' />
									prowess to the next level
								</h2>
							</div>
						</div>
						<div className='text-center mt-25 mb-65'>
							<div className='box-social-media'>
								<ul className='tabs-plan change-media' role='tablist'>
									<li>
										{' '}
										<a
											className={social === 1 ? 'active' : ''}
											onClick={() => handleSocial(1)}>
											Personal
										</a>
									</li>
									<li>
										{' '}
										<a
											className={social === 2 ? 'active' : ''}
											onClick={() => handleSocial(2)}>
											Enterprise
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='row mt-50'>
							{social == 1 && (
								<>
									<div className='col-lg-4 col-md-6 social-media enterprise'>
										<div className='card-offer-style-2'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage1/cross2.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Cross-Platform
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media enterprise'>
										<div className='card-offer-style-2 bg-5'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage1/cross.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Social Media
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media personal'>
										<div className='card-offer-style-2'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage1/cross2.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Cross-Platform
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media personal'>
										<div className='card-offer-style-2 bg-5'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage1/cross.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Social Media
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media personal'>
										<div className='card-offer-style-2 bg-2'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage2/identity.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Brand Identity
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media enterprise'>
										<div className='card-offer-style-2 bg-1'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage1/cross4.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Customer Service
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
								</>
							)}
							{social == 2 && (
								<>
									<div className='col-lg-4 col-md-6 social-media personal'>
										<div className='card-offer-style-2 bg-1'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage1/cross4.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Customer Service
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media personal'>
										<div className='card-offer-style-2 bg-7'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage1/cross5.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Social advertising
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media enterprise'>
										<div className='card-offer-style-2 bg-4'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage2/creation.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Content creation
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
									<div className='col-lg-4 col-md-6 social-media personal'>
										<div className='card-offer-style-2 bg-4'>
											<div className='card-offer hover-up'>
												<div className='card-image'>
													<img
														src='assets/imgs/page/homepage2/creation.png'
														alt='psymate'
													/>
												</div>
												<div className='card-info'>
													<h4 className='color-brand-1 mb-15'>
														Content creation
													</h4>
													<p className='font-md color-grey-500 mb-15'>
														Discover powerful features to boost your
														productivit. You are always welcome to visit
														our little den. Professional in teir craft!
														All products were super amazing with strong
														attension to details, comps and overall
														vibe.
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
								</>
							)}
						</div>
					</div>
				</section>
				<section className='section mt-100'>
					<div className='container'>
						<div className='row mt-50 align-items-center'>
							<div className='col-lg-6 mb-30'>
								<div className='title-line mb-10'>What We Do, What You Get</div>
								<h2 className='color-brand-1'>
									We facilitate the creation of strategy and design
								</h2>
							</div>
							<div className='col-lg-6'>
								<div className='card-offer card-we-do hover-up'>
									<div className='card-image'>
										<img
											src='assets/imgs/page/homepage2/we-do3.png'
											alt='psymate'
										/>
									</div>
									<div className='card-info'>
										<h4 className='color-brand-1 mb-10'>
											<a
												className='color-brand-1'
												href='What makes us different from others? We give holistic solutions with strategy, design & technology.'>
												Employee Assessments
											</a>
										</h4>
										<p className='font-md color-grey-500 mb-5'>
											Your site is not complete with only landings. Get
											essential inner pages using our ready demos.
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
							<div className='col-lg-6'>
								<div className='card-offer card-we-do hover-up'>
									<div className='card-image'>
										<img
											src='assets/imgs/page/homepage2/we-do.png'
											alt='psymate'
										/>
									</div>
									<div className='card-info'>
										<h4 className='color-brand-1 mb-10'>
											<a
												className='color-brand-1'
												href='No lag time, no lost effort when prpsymateties change, no email black hole. As team collaboration improves'>
												Smart Installation Tools
											</a>
										</h4>
										<p className='font-md color-grey-500 mb-5'>
											Your site is not complete with only landings. Get
											essential inner pages using our ready demos.
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
							<div className='col-lg-6'>
								<div className='card-offer card-we-do hover-up'>
									<div className='card-image'>
										<img
											src='assets/imgs/page/homepage2/we-do4.png'
											alt='psymate'
										/>
									</div>
									<div className='card-info'>
										<h4 className='color-brand-1 mb-10'>
											<a
												className='color-brand-1'
												href='Share updates instantly within our project management software, and get the entire team collaborating'>
												Collaborative to the core.
											</a>
										</h4>
										<p className='font-md color-grey-500 mb-5'>
											Your site is not complete with only landings. Get
											essential inner pages using our ready demos.
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
							<div className='col-lg-6'>
								<div className='card-offer card-we-do hover-up'>
									<div className='card-image'>
										<img
											src='assets/imgs/page/homepage2/we-do2.png'
											alt='psymate'
										/>
									</div>
									<div className='card-info'>
										<h4 className='color-brand-1 mb-10'>
											<a
												className='color-brand-1'
												href='Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.'>
												Manage budgets and resources
											</a>
										</h4>
										<p className='font-md color-grey-500 mb-5'>
											Your site is not complete with only landings. Get
											essential inner pages using our ready demos.
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
							<div className='col-lg-6'>
								<div className='card-offer card-we-do hover-up'>
									<div className='card-image'>
										<img
											src='assets/imgs/page/homepage2/we-do5.png'
											alt='psymate'
										/>
									</div>
									<div className='card-info'>
										<h4 className='color-brand-1 mb-10'>
											<a
												className='color-brand-1'
												href='What makes us different from others? We give holistic solutions with strategy, design & technology.'>
												Unlimited ways to work
											</a>
										</h4>
										<p className='font-md color-grey-500 mb-5'>
											Your site is not complete with only landings. Get
											essential inner pages using our ready demos.
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
						<div className='box-button text-center mt-10'>
							{' '}
							<Link className='btn btn-brand-1 hover-up' href='#'>
								Download App
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
				</section>
				<section className='section mt-100'>
					<div className='container'>
						<div className='row mt-50 align-items-center'>
							<div className='col-lg-6'>
								<div className='box-images-project'>
									<div className='box-images'>
										{' '}
										<img
											className='img-main-2'
											src='assets/imgs/page/homepage2/img2.png'
											alt='psymate'
										/>
										<div className='shape-1 image-4'>
											{' '}
											<img
												src='assets/imgs/page/homepage2/certify.png'
												alt='psymate'
											/>
										</div>
										<div className='shape-2 image-5'>
											{' '}
											<img
												src='assets/imgs/page/homepage2/fly.png'
												alt='psymate'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='title-line mb-10'>How to start?</div>
								<h2 className='color-brand-1 mb-40'>
									Bring your target users together on social media
								</h2>
								<div className='item-number hover-up'>
									<div className='num-ele'>1</div>
									<div className='info-num'>
										<h5 className='color-brand-1 mb-15'>Create an account</h5>
										<p className='font-md color-grey-500'>
											What makes us different from others? We give holistic
											solutions with strategy, design &amp; technology.
										</p>
									</div>
								</div>
								<div className='item-number hover-up'>
									<div className='num-ele'>2</div>
									<div className='info-num'>
										<h5 className='color-brand-1 mb-15'>
											Build your founding team
										</h5>
										<p className='font-md color-grey-500'>
											What makes us different from others? We give holistic
											solutions with strategy, design &amp; technology.
										</p>
									</div>
								</div>
								<div className='item-number hover-up'>
									<div className='num-ele'>3</div>
									<div className='info-num'>
										<h5 className='color-brand-1 mb-15'>Launch and Scale</h5>
										<p className='font-md color-grey-500'>
											What makes us different from others? We give holistic
											solutions with strategy, design &amp; technology.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='section mt-50'>
					<div className='container'>
						<div className='row mt-50'>
							<div className='col-xl-6 col-lg-5'>
								<div className='box-images-project'>
									<div className='title-line mb-10'>Why choose us?</div>
									<h2 className='color-brand-1 mb-25'>
										See why we are trusted the world over
									</h2>
									<p className='color-grey-500 mb-15'>
										Necessary to deliver white glove, fully managed campaigns
										that surpass industry benchmarks.Take your career to next
										level. Apply to our team and see what we can do together.
										You’re good enough.
									</p>
									<p className='color-grey-500'>
										Contrary to popular belief, Lorem Ipsum is not simply random
										text. It has roots in a piece of classical Latin literature
										Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea
										pri graeco tritani partiendo. Omittantur No tale choro
										fastidii his, pri cu epicuri perpetua. Enim dictas
										omittantur et duo, vocent lucilius quaestio mea ex. Ex illum
										officiis id.
									</p>
									<div className='box-button text-start mt-40'>
										{' '}
										<Link className='btn btn-brand-1 hover-up' href='#'>
											Download App
										</Link>
										<Link
											className='btn btn-default font-sm-bold hover-up'
											href='#'>
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
							</div>
							<div className='col-xl-6 col-lg-7'>
								<div className='row pt-40'>
									<div className='col-lg-6 col-md-6'>
										<div className='cardNumber hasBorder mt-50'>
											<div className='card-head'>465k</div>
											<div className='card-description'>Social followers</div>
										</div>
										<div className='cardNumber bg-brand-2'>
											<div className='card-head'>756+</div>
											<div className='card-description'>Project Done</div>
										</div>
									</div>
									<div className='col-lg-6 col-md-6'>
										<div className='cardNumber bg-2'>
											<div className='card-head'>5000+</div>
											<div className='card-description'>Happy Clients</div>
										</div>
										<div className='cardNumber bg-4'>
											<div className='card-head'>100%</div>
											<div className='card-description'>
												Client Satisfaction
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='section mt-50 bg-plan-2 pt-110 pb-110'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-12 text-center'>
								<h2 className='color-brand-1 mb-20'>Choose The Best Plan</h2>
								<p className='font-lg color-gray-500'>
									Pick your plan. Change whenever you want.
									<br className='d-none d-lg-block' />
									No switching fees between packages
								</p>
								<ul className='tabs-plan change-price-plan' role='tablist'>
									<li>
										{' '}
										<a
											className={pricing === 1 ? 'active' : ''}
											onClick={() => handlePricing(1)}>
											Monthly
										</a>
									</li>
									<li>
										{' '}
										<a
											className={pricing === 2 ? 'active' : ''}
											onClick={() => handlePricing(2)}>
											Yearly
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='row mt-50'>
							<div className='col-xl-4 col-lg-6 col-md-6'>
								<div className='card-plan card-plan-2 hover-up'>
									<div className='card-image-plan'>
										<div className='icon-plan'>
											<img
												src='assets/imgs/page/homepage1/free.svg'
												alt='psymate'
											/>
										</div>
										<div className='info-plan'>
											<h4 className='color-brand-1'>Trial Plan</h4>
											<p className='font-md color-grey-400'>
												Protect for testing
											</p>
										</div>
									</div>
									<div className='box-day-trial box-trial-two'>
										<div className='trial-col-1'>
											<span className='font-lg-bold color-brand-1'>FREE</span>
											<span className='font-md color-grey-500'>
												- 30 days trial
												<br />
											</span>
											<span className='font-xs color-grey-500'>
												No Credit card required
											</span>
										</div>
										<div className='trial-col-2'>
											<Link
												className='btn btn-brand-1-full hover-up'
												href='#'>
												Try for free
												<svg
													className='w-6 h-6 icon-16 ml-10'
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
									<div className='mt-30 mb-30'>
										<ul className='list-ticks list-ticks-2'>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Brand Awareness Ads
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Retargeting Ads
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Contextual, Demographic
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Facebook Advertising
											</li>
											<li className='mutted'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
												Global Certificates
											</li>
											<li className='mutted'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
												Snapchat Advertising
											</li>
											<li className='mutted'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
												TikTok Advertising
											</li>
											<li className='mutted'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
												Advanced List Building
											</li>
										</ul>
									</div>
									<div className='mt-20'>
										<Link className='btn btn-default font-sm-bold' href='#'>
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
							</div>
							<div className='col-xl-4 col-lg-6 col-md-6'>
								<div className='card-plan card-plan-2 hover-up'>
									<label className='popular'>Popular</label>
									<div className='card-image-plan'>
										<div className='icon-plan bg-1'>
											<img
												src='assets/imgs/page/homepage1/standard.svg'
												alt='psymate'
											/>
										</div>
										<div className='info-plan'>
											<h4 className='color-brand-1'>Standard</h4>
											<p className='font-md color-grey-400'>
												Advanced project
											</p>
										</div>
									</div>
									<div className='box-day-trial box-trial-two'>
										<div className='trial-col-1'>
											<span className='font-lg-bold color-brand-1 text-price-standard'>
												${pricing == 1 ? '29' : '348'}
											</span>
											<span className='font-md color-grey-500 text-type-standard'>
												- user / month
											</span>
											<br />
											<span className='font-xs color-grey-500'>
												Billed annually
											</span>
										</div>
										<div className='trial-col-2'>
											<Link
												className='btn btn-brand-1-full hover-up'
												href='#'>
												Get Started
												<svg
													className='w-6 h-6 icon-16 ml-10'
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
									<div className='mt-30 mb-30'>
										<ul className='list-ticks list-ticks-2'>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Brand Awareness Ads
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Retargeting Ads
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Contextual, Demographic
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Facebook Advertising
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Global Certificates
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Snapchat Advertising
											</li>
											<li className='mutted'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
												TikTok Advertising
											</li>
											<li className='mutted'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
												Advanced List Building
											</li>
										</ul>
									</div>
									<div className='mt-20'>
										<Link className='btn btn-default font-sm-bold' href='#'>
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
							</div>
							<div className='col-xl-4 col-lg-6 col-md-6'>
								<div className='card-plan card-plan-2 hover-up'>
									<div className='card-image-plan'>
										<div className='icon-plan bg-2'>
											<img
												src='assets/imgs/page/homepage2/creation.png'
												alt='psymate'
											/>
										</div>
										<div className='info-plan'>
											<h4 className='color-brand-1'>Enterprise</h4>
											<p className='font-md color-grey-400'>
												Protect for testing
											</p>
										</div>
									</div>
									<div className='box-day-trial box-trial-two'>
										<div className='trial-col-1'>
											<span className='font-lg-bold color-brand-1 text-price-enterprise'>
												${pricing == 1 ? '299' : '3,588'}
											</span>
											<span className='font-md color-grey-500 text-type-enterprise'>
												- user / month
											</span>
											<br />
											<span className='font-xs color-grey-500'>
												Billed annually
											</span>
										</div>
										<div className='trial-col-2'>
											<Link
												className='btn btn-brand-1-full hover-up'
												href='#'>
												Get Started
												<svg
													className='w-6 h-6 icon-16 ml-10'
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
									<div className='mt-30 mb-30'>
										<ul className='list-ticks list-ticks-2'>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Brand Awareness Ads
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Retargeting Ads
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Contextual, Demographic
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Facebook Advertising
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Global Certificates
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Snapchat Advertising
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												TikTok Advertising
											</li>
											<li>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												Advanced List Building
											</li>
										</ul>
									</div>
									<div className='mt-20'>
										<Link className='btn btn-default font-sm-bold' href='#'>
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
							</div>
						</div>
						<div className='box-button text-center mt-20'>
							{' '}
							<Link className='btn btn-brand-1 hover-up' href='#'>
								Contact Us
							</Link>
							<Link className='btn btn-default font-sm-bold hover-up' href='#'>
								Compare Plans
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
				</section>
				<section className='section mt-100 box-testimonial-2'>
					<div className='container'>
						<div className='row align-items-start'>
							<div className='col-lg-4 text-start pt-50'>
								<div className='row'>
									<div className='col-md-9'>
										<img
											className='mb-30'
											src='assets/imgs/page/homepage2/customer.png'
											alt='psymate'
										/>
									</div>
								</div>
								<h2 className='color-brand-1 mb-20'>
									What our custommers are saying
								</h2>
								<p className='font-lg color-gray-500'>
									Hear from our users who have saved thousands on their Startup
									and SaaS solution spend.
								</p>
								<div className='mt-20'>
									{' '}
									<a className='btn btn-default font-sm-bold pl-0'>
										View All
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
							<div className='col-lg-8'>
								<div className='row'>
									<div className='col-lg-6 col-md-6'>
										<div className='mb-30 mt-50'>
											<div className='card-testimonial-grid'>
												<div className='box-author mb-10'>
													<Link href='#'>
														<img
															src='assets/imgs/page/homepage1/author.png'
															alt='psymate'
														/>
													</Link>
													<div className='author-info'>
														<Link href='#'>
															<span className='font-md-bold color-brand-1 author-name'>
																Guy Hawkins
															</span>
														</Link>
														<span className='font-xs color-grey-500 department'>
															Bank of America
														</span>
													</div>
												</div>
												<p className='font-md color-grey-500'>
													Access the same project through five different
													dynamic views: a kanban board, Gantt chart,
													spreadsheet, calendar or simple task list. When
													team members can choose the work style that
													suits them best, productivity and engagement
													skyrocket. Maecenas lobortis risus.
												</p>
												<div className='card-bottom-info'>
													<span className='font-xs color-grey-500 date-post'>
														29 November 2022
													</span>
													<div className='rating text-end'>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
													</div>
												</div>
											</div>
										</div>
										<div className='mb-30 testimonial-warning'>
											<div className='card-testimonial-grid'>
												<div className='box-author mb-10'>
													<Link href='#'>
														<img
															src='assets/imgs/page/homepage2/author2.png'
															alt='psymate'
														/>
													</Link>
													<div className='author-info'>
														<Link href='#'>
															<span className='font-md-bold color-brand-1 author-name'>
																Guy Hawkins
															</span>
														</Link>
														<span className='font-xs color-grey-500 department'>
															Bank of America
														</span>
													</div>
												</div>
												<p className='font-md color-grey-500'>
													Access the same project through five different
													dynamic views: a kanban board, Gantt chart,
													spreadsheet, calendar or simple task list. When
													team members can choose the work style that
													suits them best, productivity and engagement
													skyrocket. Maecenas lobortis risus.
												</p>
												<div className='card-bottom-info'>
													<span className='font-xs color-grey-500 date-post'>
														29 November 2022
													</span>
													<div className='rating text-end'>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-lg-6 col-md-6'>
										<div className='mb-30'>
											<div className='card-testimonial-grid'>
												<div className='box-author mb-10'>
													<Link href='#'>
														<img
															src='assets/imgs/page/homepage2/author3.png'
															alt='psymate'
														/>
													</Link>
													<div className='author-info'>
														<Link href='#'>
															<span className='font-md-bold color-brand-1 author-name'>
																Guy Hawkins
															</span>
														</Link>
														<span className='font-xs color-grey-500 department'>
															Bank of America
														</span>
													</div>
												</div>
												<p className='font-md color-grey-500'>
													Access the same project through five different
													dynamic views: a kanban board, Gantt chart,
													spreadsheet, calendar or simple task list. When
													team members can choose the work style that
													suits them best, productivity and engagement
													skyrocket. Maecenas lobortis risus.
												</p>
												<div className='card-bottom-info'>
													<span className='font-xs color-grey-500 date-post'>
														29 November 2022
													</span>
													<div className='rating text-end'>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
													</div>
												</div>
											</div>
										</div>
										<div className='mb-30'>
											<div className='card-testimonial-grid'>
												<div className='box-author mb-10'>
													<Link href='#'>
														<img
															src='assets/imgs/page/homepage2/author4.png'
															alt='psymate'
														/>
													</Link>
													<div className='author-info'>
														<Link href='#'>
															<span className='font-md-bold color-brand-1 author-name'>
																Guy Hawkins
															</span>
														</Link>
														<span className='font-xs color-grey-500 department'>
															Bank of America
														</span>
													</div>
												</div>
												<p className='font-md color-grey-500'>
													Access the same project through five different
													dynamic views: a kanban board, Gantt chart,
													spreadsheet, calendar or simple task list. When
													team members can choose the work style that
													suits them best, productivity and engagement
													skyrocket. Maecenas lobortis risus.
												</p>
												<div className='card-bottom-info'>
													<span className='font-xs color-grey-500 date-post'>
														29 November 2022
													</span>
													<div className='rating text-end'>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
														<img
															src='assets/imgs/template/icons/star.svg'
															alt='psymate'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='section mt-50 pt-50 pb-40'>
					<div className='container'>
						<div className='box-cover-border'>
							<div className='row align-items-center'>
								<div className='col-lg-6'>
									<img
										className='d-block'
										src='assets/imgs/page/homepage2/img-marketing.png'
										alt='psymate'
									/>
								</div>
								<div className='col-lg-6'>
									<div className='box-info-video'>
										<span className='btn btn-tag'>Get in touch</span>
										<h2 className='color-brand-1 mt-15 mb-20'>
											Want to talk to a marketing expert?
										</h2>
										<p className='font-md color-grey-500'>
											Excepteur sint occaecat cupidatat non proident, sunt in
											culpa qui officia deserunt mollit laborum — semper quis
											lectus nulla. Interactively transform magnetic growth
											strategies whereas prospective "outside the box"
											thinking.
										</p>
										<div className='box-button text-start mt-65'>
											{' '}
											<Link className='btn btn-brand-1 hover-up' href='#'>
												Contact Us
											</Link>
											<Link
												className='btn btn-default font-sm-bold hover-up'
												href='#'>
												Support Center
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
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='section mt-50'>
					<div className='container'>
						<div className='row align-items-end'>
							<div className='col-lg-8 col-md-8'>
								<h2 className='color-brand-1 mb-20'>From our blog </h2>
								<p className='font-lg color-gray-500'>
									Aenean velit nisl, aliquam eget diam eu, rhoncus tristique
									dolor.
									<br className='d-none d-lg-block' />
									Aenean vulputate sodales urna ut vestibulum
								</p>
							</div>
							<div className='col-lg-4 col-md-4 text-md-end text-start'>
								<a className='btn btn-default font-sm-bold pl-0'>
									View All
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
						<div className='row mt-55'>
							<div className='col-xl-3 col-lg-6 col-md-6'>
								<div className='card-blog-grid card-blog-grid-2 hover-up'>
									<div className='card-image'>
										<Link href='blog-detail'>
											<img
												src='assets/imgs/page/homepage2/news1.png'
												alt='psymate'
											/>
										</Link>
									</div>
									<div className='card-info'>
										<Link href='blog-detail'>
											<h6 className='color-brand-1'>
												Easy Ways to Make Money While You Sleep
											</h6>
										</Link>
										<p className='font-sm color-grey-500 mt-20'>
											Fusce dictum ullamcorper dui, id dignissim arcu volutpat
											vitae. Aenean mattis vestibulum odio eu facilisis.
											Aenean quam arcu, blandit at aliquet sit amet, convallis
											nec risus.
										</p>
										<div className='mt-20 d-flex align-items-center border-top pt-20'>
											<Link
												className='btn btn-border-brand-1 mr-15'
												href='blog'>
												Technology
											</Link>
											<span className='date-post font-xs color-grey-300 mr-15'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
													/>
												</svg>
												29 May 2022
											</span>
											<span className='time-read font-xs color-grey-300'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
													/>
												</svg>
												3 mins read
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-6 col-md-6'>
								<div className='card-blog-grid card-blog-grid-2 hover-up'>
									<div className='card-image'>
										<Link href='blog-detail'>
											<img
												src='assets/imgs/page/homepage2/news2.png'
												alt='psymate'
											/>
										</Link>
									</div>
									<div className='card-info'>
										<Link href='blog-detail'>
											<h6 className='color-brand-1'>
												Tiktok video size guide: Everything you need to know
											</h6>
										</Link>
										<p className='font-sm color-grey-500 mt-20'>
											Fusce dictum ullamcorper dui, id dignissim arcu volutpat
											vitae. Aenean mattis vestibulum odio eu facilisis.
											Aenean quam arcu, blandit at aliquet sit amet, convallis
											nec risus.
										</p>
										<div className='mt-20 d-flex align-items-center border-top pt-20'>
											<Link
												className='btn btn-border-brand-1 mr-15'
												href='blog'>
												Marketting
											</Link>
											<span className='date-post font-xs color-grey-300 mr-15'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
													/>
												</svg>
												29 May 2022
											</span>
											<span className='time-read font-xs color-grey-300'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
													/>
												</svg>
												3 mins read
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-6 col-md-6'>
								<div className='card-blog-grid card-blog-grid-2 hover-up'>
									<div className='card-image'>
										<Link href='blog-detail'>
											<img
												src='assets/imgs/page/homepage1/news2.png'
												alt='psymate'
											/>
										</Link>
									</div>
									<div className='card-info'>
										<Link href='blog-detail'>
											<h6 className='color-brand-1'>
												How to convert video to MP4 for free online
											</h6>
										</Link>
										<p className='font-sm color-grey-500 mt-20'>
											Fusce dictum ullamcorper dui, id dignissim arcu volutpat
											vitae. Aenean mattis vestibulum odio eu facilisis.
											Aenean quam arcu, blandit at aliquet sit amet, convallis
											nec risus.
										</p>
										<div className='mt-20 d-flex align-items-center border-top pt-20'>
											<Link
												className='btn btn-border-brand-1 mr-15'
												href='blog'>
												Media
											</Link>
											<span className='date-post font-xs color-grey-300 mr-15'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
													/>
												</svg>
												29 May 2022
											</span>
											<span className='time-read font-xs color-grey-300'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
													/>
												</svg>
												3 mins read
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-6 col-md-6'>
								<div className='card-blog-grid card-blog-grid-2 hover-up'>
									<div className='card-image'>
										<Link href='blog-detail'>
											<img
												src='assets/imgs/page/homepage2/news3.png'
												alt='psymate'
											/>
										</Link>
									</div>
									<div className='card-info'>
										<Link href='blog-detail'>
											<h6 className='color-brand-1'>
												5 fastest ways to increase search engine rankings
											</h6>
										</Link>
										<p className='font-sm color-grey-500 mt-20'>
											Fusce dictum ullamcorper dui, id dignissim arcu volutpat
											vitae. Aenean mattis vestibulum odio eu facilisis.
											Aenean quam arcu, blandit at aliquet sit amet, convallis
											nec risus.
										</p>
										<div className='mt-20 d-flex align-items-center border-top pt-20'>
											<Link
												className='btn btn-border-brand-1 mr-15'
												href='blog'>
												SEO
											</Link>
											<span className='date-post font-xs color-grey-300 mr-15'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
													/>
												</svg>
												29 May 2022
											</span>
											<span className='time-read font-xs color-grey-300'>
												<svg
													className='w-6 h-6 icon-16'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
													/>
												</svg>
												3 mins read
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='section mt-50'>
					<div className='container'>
						<div className='box-newsletter'>
							<div className='row align-items-center'>
								<div className='col-lg-5 col-md-12'>
									<div className='box-image-newsletter'>
										{' '}
										<img
											className='img-main'
											src='assets/imgs/template/newsletter_img.png'
											alt='psymate'
										/>
										<div className='shape-2 image-1'>
											{' '}
											<img
												src='assets/imgs/template/newsletter_finger.png'
												alt='psymate'
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-6 col-md-12'>
									<span className='font-lg color-brand-1'>Newsletter</span>
									<h2 className='color-brand-1 mb-15 mt-5'>
										Subcribe our newsletter
									</h2>
									<p className='font-md color-grey-500'>
										By clicking the button, you are agreeing with our Term &amp;
										Conditions
									</p>
									<div className='form-newsletter mt-30'>
										<form action='#'>
											<input type='text' placeholder='Enter you mail ..' />
											<button
												className='btn btn-submit-newsletter'
												type='submit'>
												<svg
													className='w-6 h-6 icon-16'
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
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default HomePage2;
