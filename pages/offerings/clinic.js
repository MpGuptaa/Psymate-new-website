import React, { useState } from 'react';
import Tab from '../../components/elements/Tab';
import Layout from '../../components/layout/Layout';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import SideButtons from '../../components/Common/sideBtns';
import ClinicBanner from '../../components/ClinicPage/banner';
import ClinicTreatment from '../../components/ClinicPage/clinicTreatment';
import DisorderTag from '../../components/Common/disorderTags';
import RtmsPsych from '../../components/ClinicPage/rtmsPsych';
import Head from 'next/head';

const HomePage10 = () => {
	const [isOpen, setOpen] = useState(false);
	const cardsData = [
		{
			title: 'State of the art treatments',
			description:
				'Step into a new era of mental wellness with us, where our state-of-the-art treatments pave the way for personalized and progressive care. Experience the forefront of mental health, tailored to meet your unique needs.',
			link: null,
		},
		{
			title: 'Hybrid care model',
			description:
				'We embrace a hybrid care model that seamlessly blends in-person and virtual services. Our innovative approach ensures flexibility and accessibility, providing you with personalized support wherever you are on your mental health journey.',
			link: 'job-detail',
		},
		{
			title: 'Personalized care plans',
			description:
				'We believe in your unique journey to well-being. Our team of experts designs customized plans to address your unique challenges, empowering you to achieve lasting mental health and balance.',
			link: 'job-detail',
		},
		{
			title: 'Modern tech',
			description:
				"We leverage cutting-edge technology to enhance your mental health experience. From virtual therapy platforms to customized assessment tools, our clinic integrates modern tech seamlessly, ensuring you receive the most advanced and convenient care in today's digital age.",
			link: 'job-detail',
		},
	];

	const treatmentData = [
		{
			title: 'Addiction',
		},
		{
			title: 'Anger',
		},
		{
			title: 'Anxiety',
		},
		{
			title: 'Bipolar Disorder',
		},
		{
			title: 'Depression',
		},
		{
			title: 'OCD',
		},
		{
			title: 'Overthinking',
		},
		{
			title: 'Schizophrenia',
		},
		{
			title: 'Personality',
		},
		{
			title: 'Stress',
		},
		{
			title: 'Adult ADHD',
		},
		{
			title: 'Loneliness',
		},
		{
			title: 'Trauma',
		},
		{
			title: 'Sleep Disorder',
		},
		{
			title: 'Relationship',
		},
		
	];
	return (
		<>
			<Head>
				<meta
					name='description'
					content='Personalised treatment, hybrid approaches, and state-of-the-art technology usher in a new age of mental health at Psymate.'
				/>
				<meta name='title' content="Book now for Psymate's holistic mental wellness program!" />
			</Head>
			<Layout>
				<SideButtons />
				<ClinicBanner />
				<ClinicTreatment cardsData={cardsData} />
				<DisorderTag treatmentData={treatmentData} />
				<div className='border-bottom mt-50' />
				<RtmsPsych />
			</Layout>
		</>
	);
};

export default HomePage10;
