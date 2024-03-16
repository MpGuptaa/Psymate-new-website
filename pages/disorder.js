import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import Head from 'next/head';
import Columns from '../components/Pharmacy/pharmacyProducts';

const Disorder = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div>
			<Head>
				<meta
					name='keywords'
					content='anxiety disorder,anxiety symptoms,mental health disorders,social anxiety disorder,mental health anxiety,illness anxiety disorder,recurrent depressive disorder'
				/>
			</Head>
			<Layout>
				<Columns
					searchTerm={searchTerm}
					search={true}
					navItems={[
						{ label: 'Depression', type: 'depression' },
						{ label: 'Anxiety', type: 'depression' },
						{ label: 'OCD', type: 'depression' },
						{ label: 'Addiction', type: 'depression' },
					]}
					setSearchTerm={setSearchTerm}
					currentPage={currentPage}
					headColor='banner-6'
					heading={`No matter what your mental health problem is, at Psymate we'll take care of you`}
					setCurrentPage={setCurrentPage}
					url={`data/disorders?limit=12&page=${currentPage}&search=${searchTerm}&searchBy=displayName`}>
					{(item, index, loading) => (
						<div className='col-lg-3 col-md-6 col-xl-2' key={item.alt}>
							<div className='card-blog-grid card-blog-grid-2 hover-up'>
								<div className='card-image'>
									<img
										src={
											item.image ||
											'https://ik.imagekit.io/Yash/Thewebvale/Console/vecteezy_document-file-not-found-search-no-result-concept_9007126_VN0rj24o-.jpg?updatedAt=1696518480881'
										}
										alt={item.alt}
									/>
								</div>
								<div className='card-info'>
									<Link href={`/disorder/${item.displayName}`}>
										<h6 className='color-brand-1'>{item.displayName}</h6>
									</Link>
								</div>
							</div>
						</div>
					)}
				</Columns>
			</Layout>
		</div>
	);
};

export default Disorder;
