import Head from 'next/head';
import React, { useState } from 'react';
import ExpertsBanner from '../components/ExpertsBanner';
import Layout from '../components/layout/Layout';
import OurExpertsCards from '../components/Common/OurExpertsCards';
import Image from 'next/image';
import Link from 'next/link';
import Columns from '../components/Pharmacy/pharmacyProducts';

const AllExperts = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<>
			<Head>
				<title>Psymate</title>
			</Head>

			<Layout>
				<ExpertsBanner />
				<Columns
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					url={`data/users?searchBy=type&search=doctor`}>
					{(expert, index, loading) => (
						<div className='col-md-4'>
							<div className='card-offer hover-up'>
								<div
									className='d-flex justify-content-between align-center'
									style={{ gap: '2rem' }}>
									<div className='doc-card'>
										<img
											src={expert.photoURL || '/assets/imgs/doctors/doctor.png'}
											alt={expert.displayName}
										/>
									</div>
									<div className='card-info'>
										<h4 className='color-brand-1 mb-15 doc-name'>{expert?.prefix} {expert.displayName}</h4>
										<p
											style={{ marginBottom: '8px' }}
											className=' color-grey-500 mb-8 doc-related-text'>
											{expert.qualifications}
										</p>
										<p
											style={{ marginBottom: '8px' }}
											className=' color-grey-500 mb-8 doc-related-text'>
											Experience: {expert.yearsOfExperience} years
										</p>
										<p
											style={{ marginBottom: '8px' }}
											className=' color-grey-500 mb-8 doc-related-text'>
											Starts @ ₹{expert.price * 15} for 15 mins
										</p>
									</div>
								</div>
								<div className='d-flex align-items-center justify-content-between mt-20'>
									<Link href={`/expert/${expert._id}`}>
										<button className='view-profile-btn'>View Profile</button>
									</Link>
									<Link href={`/booking/appointment/${expert._id}`}>
										<button className='book-appointment-btn'>Book Appointment</button>
									</Link>
								</div>
							</div>
						</div>
					)}
				</Columns>
			</Layout>
		</>
	);
};

export default AllExperts;
