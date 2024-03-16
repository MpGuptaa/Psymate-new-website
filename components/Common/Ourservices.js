import React from 'react';

const Ourservices = () => {
	const servicesData = [
		{
			title: 'State of Treatment',
			description:
				'At the forefront of mental health care, our state-of-treatment delivers unmatched precision and compassion',
			image: 'assets/imgs/page/homepage2/treatment.png',
			link: 'What makes us different from others? We give holistic solutions with strategy, design & technology.',
		},
		{
			title: 'Appointment',
			description:
				'Empowering mental well-being through expert guidance – our psychiatrist consultations pave the way to a healthier mind',
			image: 'assets/imgs/page/homepage2/consultation.png',
			link: 'No lag time, no lost effort when prpsymateties change, no email black hole. As team collaboration improves',
		},
		{
			title: 'Collaborative care',
			description:
				'Harmonizing health with collaborative care, where professionals work together for your holistic well-being',
			image: 'assets/imgs/page/homepage2/care.png',
			link: 'Share updates instantly within our project management software, and get the entire team collaborating',
		},
		{
			title: 'Multidimensional Assessments',
			description:
				'Unlocking the layers of mental health with precision through our multidimensional psychological assessments',
			image: 'assets/imgs/page/homepage2/assessment.png',
			link: 'Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.',
		},
		{
			title: 'Hybrid Care Model',
			description:
				'Revolutionizing healthcare, our hybrid care model seamlessly integrates in-person and virtual services, putting your well-being first',
			image: 'assets/imgs/page/homepage2/model.png',
			link: 'What makes us different from others? We give holistic solutions with strategy, design & technology.',
		},
	];
	return (
		<section className='section mt-15'>
			<div className='container'>
				<div className='row mt-50 align-items-center'>
					<div className='col-lg-6 mb-30'>
						<h2 className='color-brand-1'>
							Your Mental Health is our responsibility and that is a promise.{' '}
						</h2>
					</div>
					{servicesData.map((service, index) => (
						<div key={service.title} className='col-lg-6 mb-30'>
							<div className='card-offer card-we-do '>
								<div className='card-image'>
									<img src={service.image} alt={service.image} />
								</div>
								<div className='card-info'>
									<h4 className='color-brand-1 mb-10'>{service.title}</h4>
									<p className='font-md color-grey-500 mb-5'>
										{service.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Ourservices;
