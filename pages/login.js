import Link from 'next/link';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Tools from '../components/Common/Builder/Tools';
import axios from 'axios';
import axiosInstance from '../components/Common/server/auth/axiosInstance';
import { validateForm } from '../Utilities/CommonFunctions/Helper';
import { toast } from 'react-toastify';
import AuthContext from '../components/context/authContext';
import { useRouter } from 'next/router';
import handleLogin from '../components/Common/server/auth/handleLogin';

const pageLogin = () => {
	const initialState = {};
	const { setUser, userData } = useContext(AuthContext);
	const router = useRouter();

	// useEffect(() => {
	// 	if (userData) {
	// 		router.push('/');
	// 	}
	// }, [userData, router]);

	const initialInputs = [
		{
			colCssClasses: 'my-2',
			required: true,
			placeholder: 'Phone Number',
			name: 'phone',
			element: 'text',
			icon: 'icon-phone',
		},
		{
			colCssClasses: 'my-2',
			required: false,
			placeholder: 'One Time Password',
			name: 'otp',
			element: 'number',
			icon: 'icon-password',
		},
	];

	initialInputs.forEach((input) => {
		initialState[input.name] = '';
	});

	const [state, setState] = useState({});
	const [inputs, setInputs] = useState(
		initialInputs.map((input) => ({
			...input,
			disabled: input.name === 'otp' && !state.isPasswordReady,
		})),
	);

	useEffect(() => {
		setState(initialState);
	}, []);

	useEffect(() => {
		setInputs((prevInputs) =>
			prevInputs.map((input) => ({
				...input,
				disabled: input.name === 'otp' && !state.isPasswordReady,
				required: input.name === 'otp' && state.isPasswordReady,
			})),
		);
	}, [state.isPasswordReady]);

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>

			<Layout>
				<section className='section banner-login position-relative float-start'>
					<div className='box-banner-abs'>
						<div className='container'>
							<div className='row align-items-center'>
								<div className='col-xxl-5 col-xl-12 col-lg-12'>
									<div className='box-banner-login'>
										<h2 className='color-brand-1 mb-15'>Welcome back</h2>
										<p className='font-md color-grey-500'>
											Fill your email address and password to sign in.
										</p>
										<div className='line-login mt-25 mb-50' />
										<form
											onSubmit={(e) => {
												e.preventDefault();
												const success = validateForm(
													inputs,
													setInputs,
													state,
												);
												if (success) {
													handleLogin(
														router,
														state,
														setState,
														setUser,
														router.query.redirectRoute
															?.replace(/\./g, '?')
															?.replace(/,/g, '&'),
													);
												}
											}}
											className='row'>
											<Tools
												state={state}
												setState={setState}
												inputs={inputs}
											/>

											<div className='col-lg-6 col-6 mt-15'>
												<div className='form-group mb-25'>
													<label className='cb-container'>
														<input
															type='checkbox'
															defaultChecked='checked'
														/>
														<span className='text-small'>
															Remember me
														</span>
														<span className='checkmark' />
													</label>
												</div>
											</div>
											<div className='col-lg-6 col-6 mt-15'>
												<div className='form-group mb-25 text-end'>
													<Link
														className='font-xs color-grey-500'
														href='#'>
														Forgot password?
													</Link>
												</div>
											</div>
											<div className='col-lg-12 mb-25'>
												<button
													className='btn btn-brand-lg btn-full font-md-bold'
													type='submit'>
													Sign in
												</button>
											</div>
											<div className='col-lg-12'>
												<span className='color-grey-500 d-inline-block align-middle font-sm'>
													Don’t have an account?
												</span>
												<Link
													className='d-inline-block align-middle color-success ml-3'
													href='register'>
													{' '}
													Sign up now
												</Link>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row mb-60'>
						<div className='col-xxl-5 col-xl-7 col-lg-6' />
						<div className='col-xxl-7 col-xl-5 col-lg-6 pr-0'>
							<div className='d-none d-xxl-block pl-70'>
								<img
									className='w-100 d-block'
									src='assets/imgs/page/login/banner.png'
									alt='psymate'
								/>
							</div>
						</div>
					</div>
				</section>
				
				
			</Layout>
		</>
	);
};

export default pageLogin;
