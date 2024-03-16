import React from 'react';

const DisorderTag = ({ treatmentData }) => {
	return (
		<section>
			<div className='container'>
				<h4 className='text-center pb-3 pt-3'>Get quality care with our mental health experts</h4>
				<div className='d-flex justify-content-center flex-wrap'>
					{treatmentData.map((treatment, index) => (
						<div key={index} className='mt-1 mb-2' style={{ marginRight: '10px' }}>
							<div className='card-small'>
								<div>
									<p className='color-brand-1 icon-up text-center'>{treatment.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default DisorderTag;
