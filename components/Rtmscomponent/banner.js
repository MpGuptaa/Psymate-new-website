import Link from 'next/link';
import React from 'react';

const RtmsBanner = ({ heading }) => {
	return (
		<section className='section banner-4'>
			<div className='container'>
				{' '}
				<Link className='scrollbar shape-1' href='#' />
				<div className='banner-1'>
					<div className='row align-items-center'>
						<div className='col-lg-7'>{heading}</div>
						<div className='col-lg-5 text-start position-relative'>
							<span className='arrow-down-banner shape-1' />
							<span className='arrow-right-banner shape-2' />
							<div className='box-signup'>
								<h4 className='color-brand-1 mb-30'>Contact Us</h4>
								<div className='form-group mb-25'>
									<label className='font-sm color-grey-900 mb-10'>
										Your email *
									</label>
									<input
										className='form-control'
										type='text'
										placeholder='stevenjob@gmail.com'
									/>
								</div>
								<div className='form-group mb-25'>
									<label className='font-sm color-grey-900 mb-10'>
										Your password
									</label>
									<input
										className='form-control'
										type='password'
										placeholder='****'
									/>
								</div>
								<div className='form-group mb-25'>
									<label>
										<input className='form-cb' type='checkbox' />
										Remeber me
									</label>
								</div>
								<div className='form-group mb-15'>
									<button className='btn btn-brand-1-full' type='submit'>
										Sign In
									</button>
								</div>
								<div className='form-group mb-25'>
									{' '}
									<Link
										className='btn btn-border btn-full signin-google'
										href='#'>
										{' '}
										<img
											src='../assets/imgs/page/homepage4/google.png'
											alt='psymate'
										/>
										Sign in with Google
									</Link>
								</div>
								<div className='text-already text-center'>
									{' '}
									<span className='font-xs color-grey-400'>
										Already have an account?{' '}
									</span>
									<Link className='color-brand-1 font-xs' href='login'>
										Sign in
									</Link>
									<span className='font-xs color-grey-400'>.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RtmsBanner;
