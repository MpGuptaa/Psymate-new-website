import Link from 'next/link';
import React from 'react';

const PsychoBanner = () => {
	return (
		<div>
			<section className='section banner-7'>
				<div className='container'>
					<div className='box-radius-32 ml-minus-85 mr-minus-85'>
						<div className='row align-items-center h-100'>
							<div className='col-xl-6'>
								<div className='box-banner-left-home7'>
									<span className='title-line line-48'>
										Think. Creative. Solve
									</span>
									<h1 className='color-brand-1 mb-20 mt-5'>
										We take care of your business to grow
									</h1>
									<div className='row'>
										<div className='col-lg-10'>
											<p className='font-md color-grey-500 mb-25'>
												Collaborate, plan projects and manage resources with
												powerful features that your whole team can use. The
												latest news, tips and advice to help you run your
												business with less fuss.
											</p>
										</div>
									</div>
									<div className='box-join-now'>
										<div className='box-form-join'>
											<form action='#'>
												<input
													className='form-control'
													type='text'
													placeholder='Enter you mail...'
												/>
												<button className='btn btn-join'>
													Join Now
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
												</button>
											</form>
										</div>
									</div>
									<div className='box-joined'>
										<div className='box-authors'>
											{' '}
											<span className='item-author'>
												{' '}
												<img
													src='../assets/imgs/page/homepage7/author1.png'
													alt='psymate'
												/>
											</span>
											<span className='item-author'>
												{' '}
												<img
													src='../assets/imgs/page/homepage7/author2.png'
													alt='psymate'
												/>
											</span>
											<span className='item-author'>
												{' '}
												<img
													src='../assets/imgs/page/homepage7/author3.png'
													alt='psymate'
												/>
											</span>
											<span className='item-author'>
												{' '}
												<span className='text-num-author font-md-bold color-brand-1'>
													+2k
												</span>
											</span>
										</div>
										<span className='join-thousands font-sm color-grey-400 d-inline-block'>
											Join thousands of users in using the{' '}
											<Link className='font-sm-bold color-brand-1' href='#'>
												psymate platform!
											</Link>
										</span>
									</div>
								</div>
							</div>
							<div className='col-xl-6 d-none d-xl-block h-100'>
								<div className='box-banner-7'>
									<div className='banner-7-img-1 scroll-1'>
										{' '}
										<img
											src='/assets/imgs/page/homepage7/banner1.png'
											alt='psymate'
										/>
										<img
											src='/assets/imgs/page/homepage7/banner1-2.png'
											alt='psymate'
										/>
										<img
											src='/assets/imgs/page/homepage7/banner1-3.png'
											alt='psymate'
										/>
									</div>
									<div className='banner-7-img-2 scroll-2'>
										{' '}
										<img
											src='/assets/imgs/page/homepage7/banner2.png'
											alt='psymate'
										/>
										<img
											src='/assets/imgs/page/homepage7/banner2-2.png'
											alt='psymate'
										/>
										<img
											src='/assets/imgs/page/homepage7/banner2-3.png'
											alt='psymate'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PsychoBanner;
