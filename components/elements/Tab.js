import Link from 'next/link';
import React, { useState } from 'react';
import Blogs from '../slider/Blogs';
import Gallery from './Gallery';

const Tab = () => {
	const [activeIndex, setActiveIndex] = useState(1);
	const handleOnClick = (index) => {
		setActiveIndex(index); // remove the curly braces
	};
	const content = [
		{ index: 1, label: 'Blogs', content: <Blogs type='blog' /> },
		{ index: 2, label: 'Articles', content: <Blogs type='articles' /> },
		{ index: 3, label: 'Gallery', content: <Gallery /> },
		{
			index: 4,
			label: 'Videos',
			content: (
				<div className='row align-items-center'>
					<div className='col-xl-6 col-lg-5'>
						<img
							className='bd-rd16'
							src='/assets/imgs/page/blog2/img1.png'
							alt='psymate'
						/>
					</div>
					<div className='col-xl-6 col-lg-7'>
						<div className='box-business-tab'>
							<span className='btn btn-tag'>Business</span>
							<h3 className='color-brand-1 mt-10 mb-15'>
								Integrate with over 1,000 project management apps
							</h3>
							<p className='font-md color-grey-400'>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit laborum — semper quis lectus nulla.
								Interactively transform magnetic growth strategies whereas
								prospective "outside the box" thinking.
							</p>
							<div className='mt-20'>
								<ul className='list-ticks'>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Task tracking
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Create task dependencies
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Task visualization
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										hare files, discuss
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Meet deadlines faster
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Track time spent on each project
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			index: 5,
			label: 'Podcast',
			content: (
				<div className='row align-items-center'>
					<div className='col-xl-6 col-lg-5'>
						<img
							className='bd-rd16'
							src='/assets/imgs/page/homepage10/img-tab.png'
							alt='psymate'
						/>
					</div>
					<div className='col-xl-6 col-lg-7'>
						<div className='box-business-tab'>
							<span className='btn btn-tag'>Business</span>
							<h3 className='color-brand-1 mt-10 mb-15'>
								Integrate with over 1,000 project management apps
							</h3>
							<p className='font-md color-grey-400'>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit laborum — semper quis lectus nulla.
								Interactively transform magnetic growth strategies whereas
								prospective "outside the box" thinking.
							</p>
							<div className='mt-20'>
								<ul className='list-ticks'>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Task tracking
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Create task dependencies
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Task visualization
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										hare files, discuss
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Meet deadlines faster
									</li>
									<li>
										<svg
											className='w-6 h-6 icon-16'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Track time spent on each project
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			),
		},
	];
	return (
		<>
			<ul className='list-buttons list-buttons-circle nav nav-tabs' role='tablist'>
				{content.map(({ index, label }) => (
					<li key={label} onClick={() => handleOnClick(index)}>
						<a className={activeIndex === index ? 'active' : ''}>{label}</a>
					</li>
				))}
			</ul>
			<div className='tab-content'>
				{content.map(({ index, content }) => (
					<div
						key={content}
						className={
							activeIndex === index ? 'tab-pane fade active show' : 'tab-pane fade'
						}>
						<div className='box-tab-32'>{content}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Tab;
