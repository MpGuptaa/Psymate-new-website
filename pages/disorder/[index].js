import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

import React from "react";
import ContactUsForm from "../../components/Common/contactUsForm";
import { useEffect } from "react";

const DynamicDisorder = () => {
	//   const [isWideScreen, setIsWideScreen] = useState(
	// 		typeof window !== 'undefined' && window.innerWidth > 769,
	//   );
	//   const [isSmallScreen, setIsSmallScreen] = useState(
	// 		typeof window !== 'undefined' && window.innerWidth < 769,
	//   );

	//   useEffect(() => {
	//     const handleResize = () => {
	//       setIsWideScreen(typeof window !== 'undefined' && window.innerWidth > 769);
	// 		setIsSmallScreen(typeof window !== 'undefined' && window.innerWidth < 769);
	//     };

	//     if (typeof window !== 'undefined') {
	// 		handleResize();
	// 		window.addEventListener('resize', handleResize);
	// 		return () => {
	// 			window.removeEventListener('resize', handleResize);
	// 		};
	// 	}
	//   }, []);

	//   useEffect(() => {
	//     const handleSmallResize = () => {
	//       setIsSmallScreen(typeof window !== 'undefined' && window.innerWidth < 769);
	//     };

	//     window.addEventListener("resize", handleSmallResize);

	//     return () => {
	//       window.removeEventListener("resize", handleSmallResize);
	//     };
	//   }, []);

	const router = useRouter();
	const { pathname } = router.query;
	console.log('Pathname : ', pathname);

	const [sections] = useState([
		{ id: 'overview', title: 'Overview' },
		{ id: 'statistics', title: 'Statitics' },
		{ id: 'science', title: 'Science' },
		{ id: 'symptoms', title: 'Symptoms' },
		{ id: 'diagnosis', title: 'Diagnosis' },
		{ id: 'treatment', title: 'Treatment' },
		{ id: 'related_disorders', title: 'Related Disorders' },
		{ id: 'myths_facts', title: 'Myths & Facts' },
		{ id: 'faq', title: 'Price FAQs' },
		{ id: 'article', title: 'Articles' },
		{ id: 'blog', title: 'Blogs' },
	]);

	const symptoms = [
		'Hallucinations',
		'Delusions',
		'Confused Thoughts',
		'Disconnected',
		'Disorganized',
		'Unusual',
		'Bizarre',
		'Strange Thought content',
		'Eccentric Thinking',
		'Irrelevant Talk',
		'Lack of spontaneity and flow in conversation',

		'Muttering/talking to self',
		'Smiling to oneself',
		'Making gestures even when alone',
		'Odd/peculiar behaviour',
		'Poor impulse control',
		'Violent/Aggressive behaviour',
		'Uncooperative',
		'Resentment',
		'Disconnected from others',
		'Decreased motivation',
		'Catatonic symptoms',
		'Inappropriate affect',
		'Blunted emotional tone',
		'Decreased emotional responsiveness',

		'Feeling one’s thoughts are known to others',
		'Feeling that thoughts are being inserted into one’s mind',
		'Feeling that other people are controlling one’s thoughts',
		'Suspicion that people are talking about them',
		'Suspicion of harm/is planning conspiracy',
	];
	return (
		<>
			<Layout>
				<div className='section pt-40 content-term'>
					<div className='box-bg-term' />
					<div className='container'>
						<div className='content-main mt-50'>
							<div className='text-center'>
								<h2 className='color-brand-1 mb-10'>Bipolar Disorders</h2>

								<div className='box-image-head mt-50 mb-50'>
									{' '}
									<img
										className='bd-rd8'
										src='../../assets/imgs/Disorder/anxity.png'
										alt='disorder'
									/>
								</div>
							</div>
							<div className='row mt-70'>
								<div className='col-lg-1 col-md-1' />
								<div className='col-lg-3 col-md-3'>
									<h6 className='color-brand-1 mb-15'>Table of contents</h6>
									<ul className='list-terms'>
										{sections.map((section) => (
											<li key={section.id}>
												<a href={`#${section.id}`}>{section.title}</a>
											</li>
										))}
									</ul>
									{/* {isWideScreen && ( */}
									<div>
										<ContactUsForm />
									</div>
									{/* )} */}
								</div>
								<div className='col-lg-7 col-md-7'>
									<h4 className='color-brand-1 mb-20' id='overview'>
										Overview
									</h4>
									<p className='font-md color-grey-500 mb-30'>
										Schizophrenia is a mental health disorder that is complex
										and chronic in nature. It is characterised by a range of
										symptoms, which includes delusions, hallucinations,
										disorganised speech or behaviour, and cognitive impairment.
										The disorder's early onset and chronic course make it highly
										disabling for patients and their families. Disability often
										arises from negative symptoms that cause loss or deficits,
										as well as cognitive symptoms that impair attention, working
										memory, and executive function. Moreover, relapse is
										possible due to positive symptoms such as suspiciousness,
										delusions, and hallucinations. The complexity of
										schizophrenia has led to a lack of consensus regarding its
										diagnostic criteria, aetiology, and pathophysiology.
									</p>
									<h4 className='color-brand-1 mb-20' id='statistics'>
										Statistics
									</h4>
									<p className='font-md color-grey-500 mb-30'>
										According to the data at hand, it appears that around
										one-third to one-half of patients may encounter a relapse of
										depressive episodes.
										<br />
										Patient J had been experiencing symptoms of schizophrenia
										for several years before seeking treatment. He reported
										hearing voices that others could not hear, and frequently
										became paranoid and suspicious of those around him. He had
										trouble concentrating and often felt disconnected from
										reality. Upon evaluation, J was diagnosed with paranoid
										schizophrenia. We worked together to develop a treatment
										plan that included medication management and therapy.
										Through therapy, J learned coping skills and strategies to
										manage his symptoms. Over time, J's symptoms began to
										improve. He reported feeling more in control of his thoughts
										and emotions, and his relationships with others improved. He
										was able to return to work and lead a more fulfilling life.
										<br />
										This case study highlights the importance of early
										intervention and a comprehensive treatment plan for
										individuals with schizophrenia. With the right support and
										resources, those with schizophrenia can lead successful and
										fulfilling lives.
									</p>
									<h4 className='color-brand-1 mb-20' id='symptoms'>
										Symptoms
									</h4>
									<p className='font-md color-grey-500 mb-30'>
										Schizophrenia, a severe mental illness, has been reported to
										have a prevalence rate of 2-3 per 1000 in India. The effects
										of this disorder on patients, their families, and society as
										a whole are consistent with those observed globally. As
										professionals, it is crucial to recognize and address the
										significant impact of schizophrenia on individuals and
										society.
									</p>
									<div
										className='d-flex justify-content-between align-items-center'
										style={{ flexWrap: 'wrap' }}>
										{symptoms.map((symptom, index) => (
											<p
												className='symptoms-bg font-md color-grey-500 mb-30'
												key={index}>
												{symptom}
											</p>
										))}
									</div>
								</div>

								{/* {isSmallScreen && (
                  <div>
                    <ContactUsForm />
                  </div>
                )} */}
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default DynamicDisorder;
