import React from "react";

export const PsymateServices = () => {
  return (
		<section className='section mt-15'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 text-center'>
						<h2 className='color-brand-1 mb-20 psymate-service-text'>
							Revolutionizing Mental Healthcare: Serving the Entire Ecosystem
						</h2>
					</div>
				</div>
				<div className='mt-50'>
					<div className='row'>
						<div className='col-lg-4'>
							<div className='card-offer card-offer-2 hover-up'>
								<div className='card-info'>
									<h4 className='color-brand-1 mb-15'>Individuals</h4>
									<p className='font-sm color-grey-500 mb-15'>
										Free educational content and an online connection platform to match individuals
										with practitioners who can help
									</p>
								</div>
								<div className='card-image-bottom mt-50'>
									{' '}
									<img
										className='w-100 bd-rd16'
										src='../assets/imgs/page/homepage6/individual.png'
										alt='image'
									/>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='card-offer card-offer-2 hover-up'>
								<div className='card-image-bottom mb-35'>
									{' '}
									<img
										className='w-100 bd-rd16'
										src='/assets/imgs/page/homepage6/organisation.png'
										alt='image'
									/>
								</div>
								<div className='card-info'>
									<h4 className='color-brand-1 mb-15'>Organisations</h4>
									<p className='font-sm color-grey-500 mb-15'>
										Educational mental health content for employees and a customized connection
										platform to promote in-network practitioners
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='card-offer card-offer-2 hover-up'>
								<div className='card-info'>
									<h4 className='color-brand-1 mb-15'>Mental Health Experts</h4>
									<p className='font-sm color-grey-500 mb-15'>
										Learning paths in various specialized competencies including symptoms,
										interventions, communities, and ages; shareable companion tools; and inclusion
										in a verified education and connection platform used by individuals seeking care
									</p>
								</div>
								<div className='card-image-bottom mt-50'>
									{' '}
									<img
										className='w-100 bd-rd16'
										src='/assets/imgs/page/homepage6/M H E.png'
										alt='image'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
