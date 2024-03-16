import { useState } from 'react';
import DisorderTag from '../../components/Common/disorderTags';
import CenterBanner from '../../components/centers/centerBanner';
import Layout from '../../components/layout/Layout';
import TherapyTypes from '../../components/centers/therapyTypes';
import OpeningHours from '../../components/centers/openingHours';
import ContactUsForm from '../../components/Common/contactUsForm';
import DocCards from '../../components/Common/docCards';
import { useRouter } from 'next/router';

function establishmentCenter({ name }) {
	const [currentPage, setCurrentPage] = useState(1);

	const router = useRouter();
	
  // Get the last part of the URL
  const location = router.asPath.split('/').pop();

  // Split the location string by "-"
  const locationParts = location.split('psymate-clinic-');

  // Get the last part of the location string
  const city = locationParts.pop().replace(/-/g, ' ').trim();

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
			<Layout>
				<div className='container'>
					<div
						className='d-flex flex-column-reverse flex-md-row align-items-start justify-content-between'
						style={{ gap: '2rem' }}>
						<div className='center-top-cont' style={{ position: 'sticky', left: 0, top: 0 }}>
							<OpeningHours  currentCity={city} />
							<ContactUsForm />
						</div>

						<div className='col-12 col-md-9'>
							<CenterBanner city={city}/>
							<DisorderTag treatmentData={treatmentData} />
							<TherapyTypes city={city} />
							<DocCards />
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default establishmentCenter;
