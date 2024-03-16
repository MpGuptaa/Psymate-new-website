import React from 'react';

const ClinicBanner = () => {
	return (
		<section className='section mt-90'>
			<div className='container'>
				<div className='text-center'>
					{/* <h6 className='color-grey-500 mb-15'>Take a look at our current openings</h6> */}
					<h2 className='color-brand-1'>
					Experience holistic care: Your health, our priority
					{/* <br className='d-none d-lg-block' />
						Amazing People to Join Our Team.{' '} */}
					</h2>
				</div>
				<div className='box-video mt-70'>
					{' '}
					<img src='../assets/imgs/clinic/clinic-banner.png' alt='clinic' />
				</div>
			</div>
		</section>
	);
};

export default ClinicBanner;
