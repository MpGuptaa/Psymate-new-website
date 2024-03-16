import React from 'react';

const ClinicTreatment = ({ cardsData }) => {
	return (
		<section className='section mt-50'>
			<div className='container'>
				<div className='box-radius-16 pt-20 '>
					<div className='row mt-50'>
						{cardsData.map((card, index) => (
							<div key={index} className='col-lg-6 col-md-12'>
								<div className='card-offer card-we-do card-marketing hover-up'>
									<div className='card-info'>
										<h4 className='color-brand-1 mb-10'>{card.title}</h4>
										<p className='font-md color-grey-500 mb-5'>
											{card.description}
										</p>
										{card.link && <p className='color-brand-1'>{card.title}</p>}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClinicTreatment;
