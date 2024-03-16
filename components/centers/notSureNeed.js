import Link from 'next/link';
import React from 'react';

const NotSureNeed = () => {
	return (
		<section className='section mt-50'>
			<div className='container'>
				<div className='box-newsletter box-newsletter-2'>
					<div className='row align-items-center'>
						<div className='col-lg-6 col-md-7 m-auto text-center'>
							<h2 className='color-brand-1 mb-15 mt-5'>Not sure what you need?</h2>
							<p className='font-md color-grey-500'>
								Navigating your mental health journey begins with identifying the most effective
								treatment for your needs. Consult with our experts to receive a personalized
								recommendation tailored to address your specific concerns
							</p>
							<Link href='/experts'>
								<button className=' mt-30 btn btn-brand-4 hover-up'>Consult Our Experts</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotSureNeed;
