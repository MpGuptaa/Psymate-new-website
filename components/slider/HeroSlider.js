import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const HeroSlider = () => {
	const data = [
		{ img: 'placed.png' },
		{ img: 'cuebiq.png' },
		{ img: 'factual.png' },
		{ img: 'placeiq.png' },
		{ img: 'airmeet.png' },
		{ img: 'spen.png' },
		{ img: 'klippa.png' },
		{ img: 'matrix.png' },
	];

	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				pagination={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={{
					prevEl: '.swiper-button-prev-style-3',
					nextEl: '.swiper-button-next-style-3',
				}}
				className='swiper-wrapper'>
				<SwiperSlide className='swiper-slide'>
					<div
						className='banner-slide-11'
						style={{ backgroundImage: 'url(assets/imgs/page/homepage11/banner2.png)' }}>
						<div className='banner-abs'>
							<div className='container'>
								<div className='row'>
									<div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12'>
										<div className='box-info-banner11'>
											<h3 className='color-brand-1 mb-30'>
												Your Mental Health is Our Responsibility and that is
												a Promise.
											</h3>
											{/* <p className="color-grey-500 font-sm">Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa. Praesent quam diam, faucibus tristique enim in, rhoncus aliquam lorem. Vestibulum vestibulum pellentesque nunc sit amet ullamcorper. Praesent ligula felis</p> */}
											<div className='mt-30 d-flex'>
												<img
													className='w-50 mr-10'
													src='assets/imgs/template/Apple.png'
													alt='psymate'
												/>
												<img
													className='w-50'
													src='assets/imgs/template/playstore.png'
													alt='psymate'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='swiper-slide'>
					<div
						className='banner-slide-11'
						style={{ backgroundImage: 'url(assets/imgs/page/homepage11/banner3.jpg)' }}>
						<div className='banner-abs'>
							<div className='container'>
								<div className='row'>
									<div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12'>
										<div className='box-info-banner11'>
											<h3 className='color-brand-1 mb-30'>
												No Matter What your Mental Health Problem is At
												Psymate We'll Take Care Of You
											</h3>
											{/* <p className="color-grey-500 font-sm">/\Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa. Praesent quam diam, faucibus tristique enim in, rhoncus aliquam lorem. Vestibulum vestibulum pellentesque nunc sit amet ullamcorper. Praesent ligula felis</p> */}
											<div className='mt-30 d-flex'>
												<img
													className='w-50 mr-10'
													src='assets/imgs/template/Apple.png'
													alt='psymate'
												/>
												<img
													className='w-50'
													src='assets/imgs/template/playstore.png'
													alt='psymate'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='swiper-slide'>
					<div
						className='banner-slide-11'
						style={{ backgroundImage: 'url(assets/imgs/page/homepage11/banner1.jpg)' }}>
						<div className='banner-abs'>
							<div className='container'>
								<div className='row'>
									<div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12'>
										<div className='box-info-banner11'>
											<h3 className='color-brand-1 mb-30'>
												Passion for Healing Meets Power of Technology
											</h3>
											{/* <p className="color-grey-500 font-sm">Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa. Praesent quam diam, faucibus tristique enim in, rhoncus aliquam lorem. Vestibulum vestibulum pellentesque nunc sit amet ullamcorper. Praesent ligula felis</p> */}
											<div className='mt-30 d-flex'>
												<img
													className='w-50 mr-10'
													src='assets/imgs/template/Apple.png'
													alt='psymate'
												/>
												<img
													className='w-50'
													src='assets/imgs/template/playstore.png'
													alt='psymate'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide className="swiper-slide">
                    <div className="banner-slide-11" style={{ backgroundImage: 'url(assets/imgs/page/homepage11/hero-5.png)' }}>
                        <div className="banner-abs">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
                                        <div className="box-info-banner11">
                                            <h2 className="color-brand-1 mb-30">Flex will remind you when to complete a task</h2>
                                            <p className="color-grey-500 font-sm">Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa. Praesent quam diam, faucibus tristique enim in, rhoncus aliquam lorem. Vestibulum vestibulum pellentesque nunc sit amet ullamcorper. Praesent ligula felis</p>
                                            <div className="mt-30 d-flex"><img className="w-50 mr-10" src="assets/imgs/template/Apple.png" alt="psymate" /><img className="w-50" src="assets/imgs/template/playstore.png" alt="psymate" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
			</Swiper>
		</>
	);
};

export default HeroSlider;
