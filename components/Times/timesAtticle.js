import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetching from '../Common/DataFetch';

const TimesArticle = ({type}) => {
	const { loading, data } = useDataFetching(`data/${type}?searchBy=published&search=Published`);
const truncateName = (name) => {
	if (name.length > 10) {
		return name.slice(0, 100) + ' ...';
	}
	return name;
};
	const articlesData = [
		{
			category: 'OCD',
			title: 'Interactively fashion covalent users vis-a-vis emerging strategic.',
			date: '30 June',
			readLink: '/article1', // Add your actual link
		},
		{
			category: 'OCD',
			title: 'Interactively fashion covalent users vis-a-vis emerging strategic.',
			date: '30 June',
			readLink: '/article1', // Add your actual link
		},
		{
			category: 'OCD',
			title: 'Interactively fashion covalent users vis-a-vis emerging strategic.',
			date: '30 June',
			readLink: '/article1', // Add your actual link
		},
	];
	return (
		<div style={{ margin: '4% 0' }}>
			<h4 className='color-brand-1'>Articles</h4>
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
					{data.map((article, index) => (
					<SwiperSlide className='times-article-box' key={index}>

						<div >
							<div className='news-format'>
								<p className='font-sm'>{article?.keywords[0]}</p>
							</div>
							<h5 style={{ padding: '15px 0' }}>{article?.displayName}</h5>
							<div className='times-article-image'>
								<img src='../assets/imgs/times/ArticleImage.png' alt='article' />{' '}
							</div>
							<div className='times-article-content'>
								<p className='font-sm' dangerouslySetInnerHTML={{ __html: truncateName(article?.description) }}/>
								
							</div>
							<div className='d-flex justify-content-between align-items-center'>
								<p className='font-sm'>
									<span>Published </span>
								</p>
								<a href={article.readLink}>
									<div className='times-articles-read'>
										<p className='font-sm'>Read full story</p>
									</div>
								</a>
							</div>
						</div>
						</SwiperSlide>
					))}
				</Swiper>{' '}
			</div>
		</div>
	);
};

export default TimesArticle;
