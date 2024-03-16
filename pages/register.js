import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Tools from '../components/Common/Builder/Tools';
import { validateForm } from '../Utilities/CommonFunctions/Helper';

const pageRegister = () => {
	const [inputs, setInputs] = useState([
		{
			colCssClasses: 'my-2',
			placeholder: 'Your Full Name',
			name: 'displayName',
			element: 'text',
			required: true,
			width: 'col-lg-6 col-sm-6',
			icon: 'icon-name',
		},
		{
			colCssClasses: 'my-2',
			required: true,
			placeholder: 'Phone Number',
			name: 'phone',
			element: 'number',
			width: 'col-lg-6 col-sm-6',
			icon: 'icon-phone',
		},
		{
			colCssClasses: 'my-2',
			required: true,
			placeholder: 'Your Email Address',
			name: 'email',
			element: 'email',
			width: 'col-lg-6 col-sm-6',
			icon: 'icon-email',
		},
		{
			colCssClasses: 'my-2',
			required: true,
			placeholder: 'User Name',
			name: 'userId',
			element: 'text',
			width: 'col-lg-6 col-sm-6',
			icon: 'icon-user',
		},
		{
			colCssClasses: 'my-2',
			required: true,
			placeholder: 'Password',
			name: 'password',
			element: 'text',
			width: 'col-lg-6 col-sm-6',
			icon: 'icon-password',
		},
		{
			colCssClasses: 'my-2',
			required: true,
			placeholder: 'Re-password',
			name: 'repassword',
			element: 'text',
			width: 'col-lg-6 col-sm-6',
			icon: 'icon-password',
		},
	]);

	const initialState = {};
	inputs.forEach((input) => {
		initialState[input.name] = '';
	});

	const [state, setState] = useState(initialState);

	return (
		<>
			<Head>
				<title>Register</title>
			</Head>

			<Layout>
				<section className='section box-page-register'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-5'>
								<div className='box-steps-small'>
									<div className='item-number hover-up active'>
										<div className='num-ele'>1</div>
										<div className='info-num'>
											<h5 className='color-brand-1 mb-15'>Register</h5>
											<p className='font-md color-grey-500'>
												All you need is your name, email and a strong
												password, Or use your social media accounts.
											</p>
										</div>
									</div>
									<div className='item-number hover-up'>
										<div className='num-ele'>2</div>
										<div className='info-num'>
											<h5 className='color-brand-1 mb-15'>Activate</h5>
											<p className='font-md color-grey-500'>
												Use the code sent to your email to activate your
												account.
											</p>
										</div>
									</div>
									<div className='item-number hover-up'>
										<div className='num-ele'>3</div>
										<div className='info-num'>
											<h5 className='color-brand-1 mb-15'>
												Open a trading account
											</h5>
											<p className='font-md color-grey-500'>
												Create a real or demo trading account on our
												platform. No credit card required.
											</p>
										</div>
									</div>
									<div className='item-number hover-up'>
										<div className='num-ele'>4</div>
										<div className='info-num'>
											<h5 className='color-brand-1 mb-15'>
												Connect with investors
											</h5>
											<p className='font-md color-grey-500'>
												With a real-time analysis system you will become a
												professional investor.
											</p>
										</div>
									</div>
									<div className='item-number hover-up'>
										<div className='num-ele'>5</div>
										<div className='info-num'>
											<h5 className='color-brand-1 mb-15'>Almost done</h5>
											<p className='font-md color-grey-500'>
												Start your amazing journey on our platform.
											</p>
										</div>
									</div>
								</div>
							</div>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									const success = validateForm(inputs, setInputs, state);
									console.log(success);
								}}
								className='col-lg-7'>
								<div className='box-register'>
									<h2 className='color-brand-1 mb-15'>Create an account</h2>
									<p className='font-md color-grey-500'>
										Create an account today and start using our platform
									</p>
									<div className='line-register mt-25 mb-50' />
									<div className='row'>
										<Tools state={state} setState={setState} inputs={inputs} />

										{/* <div className="col-lg-12">
                                            <div className="form-group mb-25">
                                                <p className="font-sm-bold text-center color-grey-500">Or continue with</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className="form-group mb-25"><a className="btn btn-border-80 btn-full" href="#"><img className="d-inline-block align-middle mr-5" src="assets/imgs/page/register/google.svg" alt="psymate" />Google</a></div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className="form-group mb-25"><a className="btn btn-border-80 btn-full" href="#"><img className="d-inline-block align-middle mr-5" src="assets/imgs/page/register/microsoft.svg" alt="psymate" />Microsoft</a></div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className="form-group mb-25"><a className="btn btn-border-80 btn-full" href="#"><img className="d-inline-block align-middle mr-5" src="assets/imgs/page/register/tw.svg" alt="psymate" />Twitter</a></div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className="form-group mb-25"><a className="btn btn-border-80 btn-full" href="#"><img className="d-inline-block align-middle mr-5" src="assets/imgs/page/register/fb.svg" alt="psymate" />Facebook</a></div>
                                        </div> */}
										<div className='col-lg-12 mt-15'>
											<div className='form-group mb-25'>
												<label className='cb-container'>
													<input
														type='checkbox'
														defaultChecked='checked'
													/>
													<span className='text-small'>
														I have read and agree to the Terms &amp;
														Conditions and the Privacy Policy of this
														website.
													</span>
													<span className='checkmark' />
												</label>
											</div>
											<div className='form-group mb-25'>
												<label className='cb-container'>
													<input
														type='checkbox'
														defaultChecked='checked'
													/>
													<span className='text-small'>
														I want to receive design inspiration and
														product updates. (No spam. You can opt-out
														anytime.)
													</span>
													<span className='checkmark' />
												</label>
											</div>
										</div>
									</div>
									<div className='row align-items-center mt-30'>
										<div className='col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6'>
											<div className='form-group'>
												<button
													className='btn btn-brand-lg btn-full font-md-bold'
													type='submit'>
													Sign up now
												</button>
											</div>
										</div>
										<div className='col-xl-7 col-lg-7 col-md-7 col-sm-6 col-6'>
											<span className='d-inline-block align-middle font-sm color-grey-500'>
												Already have an account?
											</span>
											<Link
												className='d-inline-block align-middle color-success ml-3'
												href='/login'>
												{' '}
												Sign In
											</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
				<section className='section mt-80 mb-30'>
					<div className='container'>
						<div className='text-start'>
							<h3 className='color-brand-1 mb-20'>
								Loved By Developers <br className='d-none d-lg-block' />
								Trusted By Enterprises
							</h3>
							<p className='font-lg color-grey-500'>
								We helped these brands turn online assessments into success stories.{' '}
							</p>
						</div>
						<div className='mt-50'>
							<ul className='list-partners list-partners-left text-start'>
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
									<img src='assets/imgs/page/homepage1/spen.png' alt='psymate' />
								</li>
								<li>
									<img
										src='assets/imgs/page/homepage1/klippa.png'
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
									<img src='assets/imgs/page/homepage2/reed.png' alt='psymate' />
								</li>
								<li>
									<img src='assets/imgs/page/homepage2/vuori.png' alt='psymate' />
								</li>
								<li>
									<img
										src='assets/imgs/page/homepage2/versed.png'
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
				</section>
				<section className='section mt-50'>
					<div className='container'>
						<div className='box-newsletter box-newsletter-2'>
							<div className='row align-items-center'>
								<div className='col-lg-6 col-md-7 m-auto text-center'>
									<span className='font-lg color-brand-1'>Newsletter</span>
									<h2 className='color-brand-1 mb-15 mt-5'>
										Subcribe our newsletter
									</h2>
									<p className='font-md color-grey-500'>
										Do not miss the latest information from us about the
										trending in the market. By clicking the button, you are
										agreeing with our Term &amp; Conditions
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

export default pageRegister;
