import Link from 'next/link';
import React from 'react';

const PsyFeatures = () => {
	const cardData = [
		{
			title: 'Daily Updates',
			description:
				'Share updates instantly within our project management software, and get the entire team collaborating',
			link: '/#',
			icon: (
				<svg
					className='w-6 h-6'
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
			),
		},
		{
			title: 'Daily Updates',
			description:
				'Share updates instantly within our project management software, and get the entire team collaborating',
			link: '/#',
			icon: (
				<svg
					className='w-6 h-6'
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
			),
		},
		{
			title: 'Daily Updates',
			description:
				'Share updates instantly within our project management software, and get the entire team collaborating',
			link: '/#',
			icon: (
				<svg
					className='w-6 h-6'
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
			),
		},
		{
			title: 'Daily Updates',
			description:
				'Share updates instantly within our project management software, and get the entire team collaborating',
			link: '/#',
			icon: (
				<svg
					className='w-6 h-6'
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
			),
		},
		// Add similar objects for other cards
	];
	return (
		<section className='section mt-50'>
			<div className='container'>
				<div className='row'>
					{cardData.map((card, index) => (
						<div className='col-lg-3 ' key={index}>
							<div className='card-support'>
								<div className='card-image'>
									<div className='box-circle-img'>{card.icon}</div>
								</div>
								<div className='card-info'>
									<h4 className='color-brand-1 mb-15'>{card.title}</h4>
									<p className='font-md color-grey-500 mb-15'>
										{card.description}
									</p>
									<Link
										className='btn btn-default pl-0 font-sm-bold hover-up'
										href={card.link}>
										Learn More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PsyFeatures;
