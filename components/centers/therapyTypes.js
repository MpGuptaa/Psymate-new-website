import Link from 'next/link';
import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
const TherapyTypes = ({ city }) => {
	const therapyData = [
		{
			id: 1,
			title: 'Psychiatric care',
			image: '/assets/imgs/page/homepage7/payment.png',
			description:
				'Discover unparalleled psychiatric care at our clinic, where our expert team combines empathy and clinical excellence. From comprehensive evaluations to personalized treatment plans, we are committed to helping you achieve mental wellness.',
		},
		{
			id: 2,
			title: 'Psychotherapy',
			image: '/assets/imgs/page/homepage7/money.png',
			description: `Uncover a path to emotional wellness at our clinic through expert-led psychotherapy. Our calming environment, unwavering support, personalized approaches and practical tools help individuals to navigate and overcome life's obstacles. `,
		},
		{
			id: 3,
			title: 'Psychological assessments',
			image: '/assets/imgs/page/homepage7/support.png',
			description:
				'Unlock a nuanced understanding of your mental landscape through  psychological assessments. We employ advanced techniques to assess various aspects of cognition and emotion, offering you a roadmap for self-discovery and targeted therapeutic strategies',
		},
		{
			id: 4,
			title: 'rTMS',
			image: '/assets/imgs/page/homepage7/support.png',
			description: `Discover a new era in mental health with our clinic's advanced rTMS services. Our expert practitioners employ non-invasive magnetic pulses to activate crucial brain regions, providing a progressive and research-backed method for addressing issues like depression and anxiety. `,
		},
	];

	return (
		<section className='section mt-20'>
			<div className='container'>
				<h3 className=' mb-10'>Services</h3>
				<div className='services-outer-container'>
					<div className='services-inner-container'>
						{therapyData.map(
							(therapy, index) =>
								// Conditionally render "rTMS" therapy type only if city is "Noida"
								!(city !== 'noida' && therapy.title === 'rTMS') && (
									<div className='d-flex align-items-center' key={index}>
										<DoneIcon style={{ color: '#ffa300', fontWeight: 'bold' }} />
										<h6 className='pb-5' style={{ marginLeft: '5px' }}>
											{therapy.title}
										</h6>
									</div>
								),
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TherapyTypes;
