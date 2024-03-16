import React from "react";

const MobileAppDescription = () => {
  return (
		<section className='section mt-50 overflow-hidden'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-6 text-center mb-30'>
						<div className='box-phones'>
							<div className='box-phones-inner'>
								<div className='img-phone-1'>
									<img src='/assets/imgs/iphone screen 2.png' alt='iphone' />
								</div>
								<div className='img-phone-2'>
									<img src='/assets/imgs/iphone screen.png' alt='phone' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6 mb-30'>
						<div className='box-our-app'>
							<span className='title-line line-48'>Why using our app</span>
							<h3 className='color-brand-1 mb-20 mt-15'>
								Unlock efficiency and convenience with our app, a blend of
								effortless functionality and user-friendly design.
							</h3>
							<p className='font-sm color-grey-500 mb-40'>
								Revolutionize your mental health journey with our application, where
								a flawless user experience meets unparalleled effectiveness.
								Navigate with ease through a user interface that understands you,
								offering a seamless experience from assessment to personalized
								insights. Our application stands out as a beacon of innovation,
								surpassing others in its intuitive design and user-friendly
								features. Take charge of your mental health effortlessly, accessing
								a comprehensive range of resources, personalized strategies, and
								support—all within the palm of your hand. Join us on a journey where
								excellence meets empathy, and let our application be the catalyst
								for your transformative mental well-being.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default MobileAppDescription;
