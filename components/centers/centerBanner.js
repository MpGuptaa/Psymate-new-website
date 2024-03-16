import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CenterBanner = ({ city }) => {
	return (
		<section className='section mt-50 ' style={{ background: '#F6F6F6' }}>
			<div className='container'>
				<div className='d-flex flex-column align-items-center ' style={{padding:"2rem"}}>
					<div className=' mb-30'>
						{' '}
						<h2 className='color-brand-1 mt-10 mb-15 text-left'>
							Holistic Wellness: {city.charAt(0).toUpperCase() + city.slice(1)}
						</h2>
					</div>
					<div className='col-lg-7 text-center position-relative mb-30'>
						<img src='/assets/imgs/clinic/clinicimage.png' alt='psymate' />
					</div>
					<p className='font-md text-left about-center'>
						A serene space, where tranquility intersects with healing. Situated in a calming
						setting, we provide comprehensive care to every patient, encompassing the mind, body,
						and soul. Our committed team cultivates a secure space for self-discovery and personal
						development, accompanying individuals on their path to well-being. From therapy to
						mindfulness techniques to psychiatric care, we customize our methods to meet specific
						needs, guaranteeing thorough support. Enter our healing sanctuary, where empathy and
						comprehension take center stage, empowering you to welcome a brighter future.
					</p>
				</div>
			</div>
		</section>
	);
};

export default CenterBanner;
