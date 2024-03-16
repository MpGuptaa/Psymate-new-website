import Link from 'next/link';
import React, { useState } from 'react';
import Accordion from '../elements/Accordion';
import useDataFetching from './DataFetch';

const MultiFaq = () => {
	const [activeIndex, setActiveIndex] = useState(1);
	const { data } = useDataFetching(`data/faqs`);
	const handleOnClick = (index) => {
		setActiveIndex(index); // remove the curly braces
	};
	const categories = [
		{ index: 1, label: 'Psychotherapy' },
		{ index: 2, label: 'Consultation' },
	];
	return (
		<section className='section pt-80 mb-30 bg-faqs'>
			<div className='container'>
				<div className='row align-items-end'>
					<div className='col-lg-8 col-md-8'>
						<h2 className='color-brand-1 mb-20'>Frequently asked questions</h2>
						<p className='font-lg color-gray-500'>
							Feeling inquisitive? Have a read through some of our FAQs or
							<br className='d-none d-lg-block' /> contact our supporters for help
						</p>
					</div>
				</div>
				<div className='row mt-50 mb-100'>
					<div className='col-xl-3 col-lg-4'>
						<ul className='list-faqs nav nav-tabs' role='tablist'>
							{categories.map(({ index, label }) => (
								<li key={label + index}>
									<a
										className={activeIndex === index ? 'active' : ''}
										onClick={() => handleOnClick(index)}>
										<span>{label}</span>
										<svg
											className='w-6 h-6 icon-16 ml-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M14 5l7 7m0 0l-7 7m7-7H3'
											/>
										</svg>
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className='col-xl-9 col-lg-8'>
						<div className='tab-content tab-content-slider'>
							{categories.map(({ index, label }) => (
								<div
									key={label}
									className={
										activeIndex === index
											? 'tab-pane fade active show'
											: 'tab-pane fade'
									}>
									<Accordion
										data={data.filter((_) =>
											_?.category?.includes(label.toLowerCase()),
										)}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='border-bottom' />
		</section>
	);
};

export default MultiFaq;
