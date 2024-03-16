import Link from "next/link";
import React from "react";
import { expertBanner } from "../public/assets/imgs/experts/experts-banner.png";
import Image from "next/image";

const ExpertsBanner = () => {
  return (
		<section className='experts-banner-outer-container'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-xl-6 '>
						<div className=''>
							<h6 className='title-line line-48'>WHY CHOOSE US</h6>
							<h2 className='color-brand-1 mb-20 mt-5'>Meet Our Experts</h2>
							<p className='font-md color-grey-500 mb-30'>
								Unlock the path to mental well-being with our multidimensional team
								of experts. Tailored care for every need, our team works together
								ensuring compassionate support for individuals seeking comprehensive
								mental health services.
							</p>
						</div>
					</div>
					<div className='col-xl-6'>
						<div className='box-banner-right-home6'>
							<img src='../assets/imgs/experts/experts-banner.png' alt='banner' />
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default ExpertsBanner;
