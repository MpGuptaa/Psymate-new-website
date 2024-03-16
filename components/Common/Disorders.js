import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pagination from '@mui/material/Pagination';
import { createUrlFromName } from '../../Utilities/CommonFunctions/Helper';
import useDataFetching from './DataFetch';

const Disorders = ({ url }) => {
	const { loading, data, pages } = useDataFetching(url);
	const [searchTerm, setSearchTerm] = useState('');
	const tags = ['Depression', 'Anxiety', 'OCD', 'Addiction'];

	return (
		<div className='container'>
			<section className='section pt-90'>
				<div className='container'>
					<div className=''>
						<div className=' mb-40'>
							<h3 className='color-brand-1 mt-15 mb-30 text-center'>
								No matter what your mental health problem is, at Psymate we'll take care of you
							</h3>

							<div className='row'>
								<div className='col-lg-12'>
									<div className='box-notify-me mt-15'>
										<div className='inner-notify-me'>
											<input
												className='form-control'
												type='text'
												placeholder='Search the disorder ..'
												value={searchTerm}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='d-flex align-items-center tags-gap'>
								<div className='mt-45'>
									<p className='font-sm-bold color-brand-1'>Suggested Search:</p>
								</div>
								<div className='mt-45'>
									{tags.map((tag, index) => (
										<div key={index} className='btn btn-tag-circle mr-10 '>
											{tag}
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='col-lg-7 mb-40 d-none d-md-block'>
							<div className='box-banner-help'>
								{/* <div className='banner-img-1'>
										<img src='assets/imgs/page/help/small.png' alt='psymate' />
									</div> */}
								{/* <div className='banner-img-2'>
										<img src='assets/imgs/page/help/medium.png' alt='psymate' />
									</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<div>
				<div className='disorder-outer-container'>
					{data.map((item, i) => (
						<div key={item.alt}>
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
									<Link href={`/disorder/${createUrlFromName(item.displayName)}`}>
										<h6 className='color-brand-1'>{item.displayName}</h6>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* Pagination */}
				{/* {data.items.length > 10 && (
					<Pagination
						count={totalPages}
						page={currentPage}
						onChange={handlePageChange}
						variant='outlined'
						shape='rounded'
					/>
				)} */}
			</div>
		</div>
	);
};

export default Disorders;
