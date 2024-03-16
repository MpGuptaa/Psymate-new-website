import Link from "next/link";
import React from "react";

const PsymateBrand = ({ content }) => {
	return (
		<section className='section mt-50 bg-back-5'>
			<div className='container'>
				<div className='row align-items-center mt-30 mb-10'>
					<div className='col-lg-5 mb-30'>
						<h2 className='color-brand-1 mt-10 mb-15'>{content.heading}</h2>
						<p className='font-md color-grey-400'>{content.description}</p>
						<div className='mt-40 text-start'>
							<Link className='btn btn-brand-4 hover-up' href={content.downloadLink}>
								Download App
							</Link>
						</div>
					</div>
					{content.img ? (
						<div className='col-lg-7 text-center position-relative mb-30'>
							<img src={content.img} alt={content.img} />
						</div>
					) : (
						<div className='col-lg-7 text-center position-relative mb-30'>
							<div className='iframe-container'>
								<iframe
									width='560'
									height='315'
									src={content.video}
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PsymateBrand;
