import Link from 'next/link';
import React from 'react';
import useDataFetching from '../Common/DataFetch';
import Pagination from '../Common/Pagination';

import UseLoader from '../Common/UseLoader';

const Columns = ({
	url,
	navItems,
	currentPage,
	setCurrentPage,
	searchTerm,
	setSearchTerm,
	search,
	heading,
	children,
	headColor,
}) => {
	const { data, pages, loading } = useDataFetching(url);

	return (
		<div className=''>
			<section className='section'>
				<div className={`${headColor} banner-6 pt-80`}>
					{heading && (
						<div className='row'>
							<div className='col-lg-12 text-center'>
								<h3 className='color-brand-1 mb-20'>{heading}</h3>
							</div>
						</div>
					)}
					{search && (
						<div className='row mx-auto container mb-40'>
							<div className='col-lg-12 '>
								<div className='box-notify-me mt-15'>
									<div className='inner-notify-me rounded'>
										<input
											className='form-control'
											type='text'
											placeholder='Search for products ..'
											value={searchTerm}
											onChange={(e) => {
												setSearchTerm(e.target.value);
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					)}
					{navItems?.length > 0 && (
						<div className='mt-30 mb-60'>
							<ul className='list-buttons list-buttons-round'>
								{navItems.map((item, index) => (
									<li key={index} className={searchTerm === index ? 'active' : ''}>
										<Link
											onClick={() => {
												setSearchTerm(item.label);
											}}
											href='#'
											data-type={item.type}>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<UseLoader loading={loading}>
					<div className='container bg-black row mt-50 mx-auto'>
						{data.map((product, index) => children(product, index, loading))}
						{pages > 1 && (
							<span className='mt-4'>
								<Pagination
									pages={pages}
									currentPage={currentPage}
									setCurrentPage={setCurrentPage}
								/>
							</span>
						)}
					</div>
				</UseLoader>
			</section>
		</div>
	);
};

export default Columns;
