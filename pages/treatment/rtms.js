import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ModalVideo from 'react-modal-video';
import Accordion2 from '../../components/elements/Accordion2';
import PsymateBrand from '../../components/Common/PsymateBrand';
import ContactUsForm from '../../components/Common/contactUsForm';
import Testimonial2 from '../../components/slider/Testimonial2';
import CircleIcon from '@mui/icons-material/Circle';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tab from '../../components/elements/Tab';
import { createUrlFromName } from '../../Utilities/CommonFunctions/Helper';
import RtmsBanner from '../../components/Rtmscomponent/banner';
import Meta from '../../components/layout/PageHead';

const HomePage5 = () => {
	const [pricing, setPricing] = useState(1);
	const [isOpen, setOpen] = useState(false);
	const [social, setSocial] = useState(1);

	const handleSocial = (index) => {
		setSocial(index); // remove the curly braces
	};

	const handlePricing = (index) => {
		setPricing(index);
	};

	const heading = (
		<h2 className='color-brand-1 mb-20 mt-10'>
			World Class Neuro-modulation Treatments Now Delivered <br />
			in India
		</h2>
	);

	const faqItems = [
		{
			question: 'What is the success rate of RTMS therapy?',
			answer: 'The success rate of TMS therapy is between 58% to 67%. Most patients respond to the treatments within 30 days.',
		},
		{
			question: 'How can I return an item purchased online?',
			answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.',
		},
		{
			question: 'How can I return an item purchased online?',
			answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.',
		},
		// Add more FAQ items as needed
	];

	const services = [
		{
			title: 'Drug-free treatment',
			image: 'assets/imgs/page/homepage1/cross2.png',
			description: `Experience the benefits of TMS therapy, a drug-free approach that eliminates concerns about side effects and dependency commonly associated with traditional medications. By choosing TMS therapy, you can effectively manage your mental health symptoms without compromising your well-being.Say goodbye to the limitations imposed by medication and unlock the potential of TMS therapy. Take charge of your journey towards a brighter and medication-free future. `,
			link: 'job-detail',
		},
		{
			title: 'Long-Lasting Relief',
			image: 'assets/imgs/page/homepage1/cross.png',
			description: `Our approach of proper case conceptualization and personalized, data-driven modern techniques has consistently resulted in a remarkable 95% success rate for our patients. After undergoing TMS therapy, around 80% of patients typically experience complete symptom resolution or achieve long-term remission. However, our tailored approach has allowed us to go above and beyond, helping our patients find lasting relief and empowering them to no longer identify as patients, but rather as happy individuals who have overcome their symptoms.`,
			link: 'job-detail',
		},
		{
			title: 'No Systemic Side-Effects',
			image: 'assets/imgs/page/homepage1/cross4.png',
			description: `Experience the benefits of TMS treatment without the worry of systemic side-effects often associated with antidepressants. Say goodbye to weight gain, loss of libido, and the need to manage additional side effects while treating your depression.`,
			link: 'job-detail',
		},
		{
			title: 'Proven to Work',
			image: 'assets/imgs/page/homepage1/cross5.png',
			description: `Experience the benefits of TMS therapy, a clinically proven treatment cleared by the FDA. Our expertly designed therapy has shown remarkable efficacy in addressing a range of conditions including depression, anxiety, OCD, and smoking cessation. It is also successfully employed in treating substance use disorders, behavioral addiction, and selected neuropsychiatric disorders. Unleash the potential of TMS therapy and take control of your mental well-being today.`,
			link: 'job-detail',
		},
		{
			title: 'Cognitive improvements',
			image: 'assets/imgs/page/homepage1/cross5.png',
			description: `Welcome to Psymate Clinic – the place where your mental health worries are finally laid to rest. Our experienced team of doctors and therapists from across India are dedicated to providing personalized treatment plans to help you achieve optimal mental wellbeing.`,
			link: 'job-detail',
		},
		{
			title: 'Quick onset and better results',
			image: 'assets/imgs/page/homepage1/cross5.png',
			description: `Welcome to Psymate Clinic – the place where your mental health worries are finally laid to rest. Our experienced team of doctors and therapists from across India are dedicated to providing personalized treatment plans to help you achieve optimal mental wellbeing.

			`,
			link: 'job-detail',
		},
	];

	const plans = [
		{
			type: 'RTMS for Depression',
			icon: '../assets/imgs/rtms/depression.png',
		},
		{
			type: 'RTMS for Bipolar Disorder',
			icon: '../assets/imgs/rtms/bipolar.png',
		},
		{
			type: 'RTMS for OCD',
			icon: '../assets/imgs/rtms/ocd.png',
		},
		{
			type: 'RTMS for Anxiety',
			icon: '../assets/imgs/rtms/anx.png',
		},
		{
			type: 'RTMS for Eating Disorder',
			icon: '../assets/imgs/rtms/eating.png',
		},
		{
			type: 'RTMS for Pain Disorder',
			icon: '../assets/imgs/rtms/pain.png',
		},
		{
			type: 'RTMS for Substance Use Disorder',
			icon: '../assets/imgs/rtms/substance-use.png',
		},
		{
			type: 'RTMS for Neuropsychiatric Disorders',
			icon: '../assets/imgs/rtms/neuro.png',
		},
	];

	const psymateContent = {
		heading: 'Understanding Rtms',
		description:
			'RTMS, a revolutionary and modern U.S.F.D.-approved treatment for mental health disorders available at Psymate Healthcare. This cutting-edge technique is helping countless individuals worldwide to find relief from mental health issues and can be a powerful tool in your journey to wellness. With RTMS, you can experience fast, targeted treatment with personalized and long-lasting results.',

		downloadLink: 'https://apps.apple.com/in/app/psymate/id6443472769',
		learnMoreLink: '#',
		video: 'https://www.youtube.com/embed/wCQWFuG3ZBY?si=9lw1w4veW1-m2JSo',
	};

	const rtmsAdvantageData = [
		{
			title: 'No Systemic Side-Effects',
			imageUrl: '/assets/imgs/rtms/side effect.png',
			description:
				'RTMS is a localized treatment that targets specific areas of the brain. Unlike some systemic treatments or medications.',
			learnMoreLink: '#',
		},
		{
			title: 'Drug-Free Treatment',
			imageUrl: '/assets/imgs/rtms/drug free.png',
			description: `RTMS is a form of therapy that doesn't involve the use of medications or drugs.This can be a very beneficial  treatment `,
			learnMoreLink: '#',
		},
		{
			title: 'Long-Lasting Relief',
			imageUrl: '/assets/imgs/rtms/relief.png',
			description: ` RTMS has been associated with prolonged therapeutic effects even after the completion of the treatment sessions.`,
			learnMoreLink: '#',
		},
		{
			title: 'Non-Invasive',
			imageUrl: '/assets/imgs/rtms/non invasive.png',
			description: `RTMS is a non-invasive procedure, meaning it doesn't involve surgery or insertion of instruments into the body.`,
			learnMoreLink: '#',
		},
		{
			title: 'Proven to Work',
			imageUrl: '/assets/imgs/rtms/rec.png',
			description: `RTMS has been clinically studied and demonstrated efficacy in treating certain mental health disorders.`,
			learnMoreLink: '#',
		},
		{
			title: 'Does Not Require Anesthesia',
			imageUrl: '/assets/imgs/rtms/anesthesia.png',
			description: `RTMS sessions are typically conducted without the need for anesthesia or sedation.`,
			learnMoreLink: '#',
		},
	];

	const processSteps = [
		{
			number: 1,
			title: ' Book Appointment',
			description: `Schedule your initial consultation and book an appointment to discuss your suitability for RTMS treatment. Our friendly staff will guide you through the process and address any concerns you may have.`,
		},
		{
			number: 2,
			title: 'Consultation with Doctor',
			description: `Meet with our experienced medical professionals for a thorough consultation. They will assess your medical history, discuss your symptoms, and determine the personalized RTMS treatment plan that best suits your needs.`,
		},
		{
			number: 3,
			title: ' Detailed Assessment',
			description: `Undergo a comprehensive assessment to gather detailed information about your mental health and cognitive functioning. This step ensures that the RTMS treatment is tailored to your specific condition, optimizing its effectiveness.`,
		},
		{
			number: 4,
			title: ' Start Rtms',
			description: `Begin your RTMS sessions under the supervision of our trained professionals. RTMS is a safe and non-invasive procedure that uses magnetic fields to stimulate specific areas of the brain associated with mood regulation. Experience the potential benefits of this innovative treatment for mental health disorders.`,
		},
	];

	const cardsData = [
		{
			title: 'What is RTMS ',
			content: `Transcranial magnetic stimulation (TMS) is a non-invasive technique that harnesses magnetism to stimulate specific brain cells and alleviate symptoms of depression. Unlike traditional treatments, TMS does not require sedation or anesthesia. Instead, it utilizes targeted magnetic pulses to stimulate precise areas of the brain associated with depression symptoms.
			`,
			link: '#',
			bgClass: 'bg-20',
			category: 'enterprise',
		},
		{
			title: 'How RTMS works',
			content: `When undergoing TMS treatment, a gentle electromagnetic pulse is induced in the brain, stimulating nerve cells affected by depression. This process is believed to activate brain regions with reduced activity caused by depression, ultimately enhancing mood.`,
			link: '#',
			bgClass: 'bg-21',
			category: 'enterprise',
		},
		{
			title: 'Why RTMS is done',
			content: `Depression is a prevalent mental health condition that can often be effectively managed through counseling or medication. However, for some individuals, these traditional treatments may not yield the desired results. In such cases, repetitive transcranial magnetic stimulation (rTMS) may be prescribed to alleviate symptoms of depression.`,
			link: '#',
			bgClass: 'bg-22',
			category: 'personal',
		},

		{
			title: 'What you can expect',
			content: `TMS therapy is usually conducted in a medical facility or clinic, typically spanning four to six weeks. Daily sessions are necessary for a sustained period to achieve optimal effectiveness.
				`,
			link: '#',
			bgClass: 'bg-24',
			category: 'personal',
		},
		{
			title: 'Results',
			content: `If rTMS is effective for you, it could lead to a significant improvement or complete alleviation of your depression symptoms. It's important to note that relief from symptoms may take a few weeks of treatment, and the number and location of stimulations may be adjusted based on ongoing research findings.`,
			link: '#',
			bgClass: 'bg-25',
			category: 'enterprise',
		},
	];

	return (
		<>
			<Head>
				<title>Rtms | Psymate</title>
				<meta name='keywords' content='RTMS, rTMS Treatment' />
				<meta
					name='description'
					content='Experience the effectiveness of FDA-approved rTMS at Psymate, the leading destination for mental health in India. Schedule your appointment for customised, medication-free relief. Embark on your path to well-being right now.'
				/>
				<meta name='title' content='World-Class rTMS Treatment in India' />
			</Head>

			<Layout title='Rtms | Psymate'>
				<RtmsBanner heading={heading} />

				<section className='section mt-100'>
					<div className='container'>
						<div className='row mt-50'>
							<div className='col-xl-5 col-lg-12 mb-40'>
								<h2 className='color-brand-1 mt-10 mb-15'>You deserve better Treatment</h2>
								<ul className='font-md color-grey-500' style={{ listStyle: 'square' }}>
									<li>
										Are you struggling with depression, anxiety, OCD, substance use, or other
										neuropsychiatric disorders?
									</li>
									<br />
									<li>
										Have you visited countless clinics and tried numerous treatments and
										medications, only to be disappointed with the results? Well, rest assured, you
										are not alone in this battle.
									</li>
									<br />
									<li>
										At Psymate, we understand the frustration and disappointment that comes with
										seeking help for these conditions. However, there is hope, and we are here to
										support you every step of the way.
									</li>
									<br />
									<li>
										We've brought world-class FDA approved rTMS Treatment for mental illnesses like
										yours to India. rTMS, or repetitive Transcranial Magnetic Stimulation, is a safe
										and non-invasive treatment that doesn't involve medication. It has proven to be
										effective in treating various mental health conditions around the world.
									</li>
								</ul>
							</div>
							<div className='col-xl-7 col-lg-12'>
								<div className='box-video-business'>
									<div className='item-video'>
										<a
											className='btn btn-play-center popup-youtube'
											onClick={() => setOpen(true)}
										/>
										<ModalVideo
											channel='youtube'
											autoplay
											isOpen={isOpen}
											videoId='wCQWFuG3ZBY'
											onClose={() => setOpen(false)}
										/>
										<img className='bd-rd4' src='../assets/imgs/rtms/rtms1.png' alt='rtms' />
									</div>
									<div className='box-image-right'>
										<img className='bd-rd4 mb-20' src='../assets/imgs/rtms/2.png' alt='rtms' />
										<img className='bd-rd4' src='../assets/imgs/rtms/3.jpg' alt='rtms' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='section mt-100' style={{ background: '#F7D497' }}>
					<div className='container pt-10 pb-5'>
						<h2 className='color-brand-1 mt-10 mb-20 text-center'>
							It's time for a quantum shift in mental health care
						</h2>
						<div className='row align-items-center'>
							{rtmsAdvantageData.map((card, index) => (
								<div className='col-lg-4 mb-30' key={index}>
									<div className={`card-guide `}>
										<div className='card-image'>
											<img src={card.imageUrl} alt={card.title} />
										</div>
										<div className=''>
											<h5 className='color-brand-1 mb-15'>{card.title}</h5>
											<p className='font-md color-grey-500'>{card.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<PsymateBrand content={psymateContent} />

				<section className='section mt-100'>
					<div className='container'>
						<div className='row align-items-end'>
							<div className='col-lg-12 text-center'>
								<h2 className='color-brand-1 mb-20'>RTMS Knowledge Hub</h2>
							</div>
						</div>

						<Swiper
							slidesPerView={4}
							spaceBetween={30}
							loop={true}
							navigation={{
								prevEl: '.swiper-button-prev',
								nextEl: '.swiper-button-next',
							}}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 30,
								},
								575: {
									slidesPerView: 1,
									spaceBetween: 30,
								},
								767: {
									slidesPerView: 1,
									spaceBetween: 30,
								},
								991: {
									slidesPerView: 2,
									spaceBetween: 30,
								},
								1199: {
									slidesPerView: 3,
									spaceBetween: 30,
								},
								1350: {
									slidesPerView: 4,
									spaceBetween: 30,
								},
							}}
							className='swiper-wrapper'>
							{cardsData.map((card, index) => (
								// <div
								// 	key={index}
								// 	className={`col-lg-4 col-md-6 social-media ${card.category}`}>
								<SwiperSlide key={index} className={`swiper-slide ${card.category}`}>
									<div className={`card-offer-style-2 ${card.bgClass}`}>
										<div className='card-offer hover-up' style={{ height: '305px' }}>
											<div className='card-info'>
												<h5 className='color-brand-1 mb-15'>{card.title}</h5>
												<p className='font-sm color-grey-500 mb-15'>{card.content}</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div className='box-button-slider-bottom'>
							<div className='swiper-button-prev swiper-button-prev-group-4'>
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
										d='M10 19l-7-7m0 0l7-7m-7 7h18'
									/>
								</svg>
							</div>
							<div className='swiper-button-next swiper-button-next-group-4'>
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
							</div>
						</div>
					</div>
				</section>

				<section className='section mt-100'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-12 text-center'>
								<h2 className='color-brand-1 mb-20'>Disorders Most Effectively Treated By rTMS</h2>
							</div>
						</div>
						<div className='row mt-50'>
							{plans.map((plan, index) => (
								<div key={index} className='col-xl-3 col-lg-6 col-md-6'>
									<div className='card-plan-style-2 hover-up'>
										<div className='card-plan'>
											<div className='box-day-trial'>
												<img style={{ width: '100%' }} src={plan.icon} alt={plan.type} />
											</div>
											<div className='card-image-plan'>
												<div className='info-plan'>
													<Link href={`/rtms-therapy/${createUrlFromName(plan.type)}`}>
														<h4
															style={{
																textAlign: 'center',
																fontSize: '20px',
															}}
															className='color-brand-1'>
															{plan.type}
														</h4>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className='border-bottom mt-30' />
					</div>
				</section>

				<section className='section mt-50'>
					<div className='container'>
						<div className='row align-items-start'>
							<div className='col-xl-12 mb-30'>
								<div className='card-radius-32 bg-grey-60'>
									<div className='row'>
										<div className='col-lg-6 d-flex align-items-center'>
											<div className='box-cover-pd'>
												<div className='box-image-rd-30'>
													{' '}
													<img
														className='w-100'
														src='/assets/imgs/rtms/consult.png'
														alt='new-patient'
													/>
												</div>
											</div>
										</div>
										<div className='col-lg-6'>
											<div className='box-cover-pd-2'>
												<h2 className='color-brand-1 mb-30'>New Patient Process</h2>
												{processSteps.map((step, index) => (
													<div key={index} className='item-number hover-up'>
														<div className='num-ele'>{step.number}</div>
														<div className='info-num'>
															<h5 className='color-brand-1 mb-15'>{step.title}</h5>
															<p className='font-md color-grey-500'>{step.description}</p>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='section mt-50 mb-30'>
					<div className='container'>
						<div className='box-container'>
							<div className='row mt-50 align-items-center'>
								<div className='col-xl-6 col-lg-6 mb-30'>
									<h2 className='color-brand-1 mb-20'>
										Your Access to Convenient and Reliable Healthcare Support
									</h2>

									<p className='font-md color-grey-400'>
										Experience essential care round the clock. We're here for you whenever urgent
										situations arise.
									</p>
								</div>
								<div className='col-xl-6 col-lg-6 mb-30'>
									<ContactUsForm />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='section pt-80'>
					<div className='container'>
						<div className='text-center'>
							<h2 className='color-brand-1 mb-20'>Frequently Asked Questions</h2>
						</div>
						<div className='row mt-50 mb-50'>
							<div className='col-xl-12 col-lg-12 position-relative'>
								<Accordion2 faqItems={faqItems} />
							</div>
						</div>
					</div>
				</section>

				<section className='section mt-50 bg-grey-60'>
					<div className='container'>
						<div className='pt-120 pb-120'>
							<h2 className='color-brand-1'>
								What are our users <br className='d-none d-lg-block' />
								saying about us
							</h2>
							<div className='mt-50'>
								<div className='box-swiper'>
									<div className='swiper-container swiper-group-2'>
										<Testimonial2 />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default HomePage5;
