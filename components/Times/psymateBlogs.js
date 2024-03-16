import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetching from '../Common/DataFetch';
import Link from 'next/link';

const PsymateBlogs = ({ type }) => {
	const { loading, data } = useDataFetching(`data/${type}?searchBy=published&search=Published`);
	return (
		<div style={{ margin: '4% 0' }}>
			<h4 className='color-brand-1'>Blogs</h4>
			<div className='articles-outer-container'>
				<Swiper
					slidesPerView={3}
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
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className='swiper-wrapper pb-5'>
					{' '}
					{data.map((blog, index) => (
						<SwiperSlide className='col-lg-4 col-md-6 mb-30 item-article times-article-box' key={index}>
							<div className={`card-blog-grid card-blog-grid-3 hover-up ${blog?.category}`}>
								<div className='card-image'>
									{/* <Link href={data?.link}> */}
									<img src='/assets/imgs/page/blog/img3.png' alt='psymate' />
									{/* </Link> */}
									<label className='lbl-border'>{blog?.category}</label>
								</div>
								<div className='card-info'>
									<Link href='/blog-detail'>
										<h5 className='color-brand-1'>{blog?.displayName}</h5>
									</Link>

									<p
										className='font-sm color-grey-500 mt-20'
										dangerouslySetInnerHTML={{ __html: blog.description }}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>{' '}
			</div>
		</div>
	);
};

export default PsymateBlogs;
