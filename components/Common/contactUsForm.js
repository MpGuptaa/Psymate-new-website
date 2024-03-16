import Link from 'next/link';
import React from 'react';

const ContactUsForm = () => {
	return (
		<div>
			<div className='box-banner-login mt-25'>
				<h4 className='color-brand-1 mb-15'>Contact Us</h4>

				<div className='line-login mt-10 mb-10' />
				<div className='row'>
					<div className='col-lg-12'>
						<div className='form-group mb-25'>
							<input
								className='form-control icon-user'
								type='text'
								placeholder='Full Name'
							/>
						</div>
					</div>

					<div className='col-lg-12'>
						<div className='form-group mb-25'>
							<input
								className='form-control icon-email'
								type='email'
								placeholder='Email Address'
							/>
						</div>
					</div>

					<div className='col-lg-12'>
						<div className='form-group mb-25'>
							<textarea
								rows={4}
								className='form-control icon-message'
								type='text'
								placeholder='Your Message'
							/>
						</div>
					</div>
					<div className='col-lg-6 col-6 mt-15'></div>

					<div className='col-lg-12 mb-25'>
						<button className='btn btn-brand-lg btn-full font-md-bold ' type='submit'>
							Send Message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsForm;
