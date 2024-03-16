import Link from 'next/link';
import React from 'react';
import useDataFetching from './DataFetch';
import UseLoader from './UseLoader';

const OurExpertsCards = () => {
	const { loading, data } = useDataFetching(`data/users?searchBy=type&search=doctor`);
	return (
		<UseLoader loading={loading}>
			<section>
				<div className='container'>
					<div className='doc-card-container '>
						{data.map((expert, index) => (
							<div key={expert.displayName} className='row mx-50 my-50'>
								<div className=''>
									<div className='card-offer hover-up'>
										<div className='d-flex justify-content-between align-center'>
											<div className='doc-card'>
												<img
													src='assets/imgs/doctors/doctor.png'
													alt={expert.displayName}
												/>
											</div>
											<div className='card-info'>
												<h4 className='color-brand-1 mb-15 doc-name'>
												{expert.prefix} {expert.displayName}
												</h4>
												<p className=' color-grey-500 mb-4 doc-related-text'>
													{expert.qualifications}
												</p>
												<p className=' color-grey-500 mb-4 doc-related-text'>
													Experience: {expert.yearsOfExperience}
												</p>
												<p className=' color-grey-500 mb-4 doc-related-text'>
													Starts @ ₹{expert.price * 15} for 15 mins
												</p>
											</div>
										</div>
										<div className='d-flex align-items-center justify-content-between mt-20'>
											<Link href={`/expert/${expert._id}`}>
												<button className='view-profile-btn'>
													View Profile
												</button>
											</Link>
											<Link href={`/booking/appointment/${expert._id}`}>
												<button className='book-appointment-btn'>
													Book Appointment
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</UseLoader>
	);
};

export default OurExpertsCards;
