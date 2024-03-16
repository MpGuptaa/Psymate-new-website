import React, { useRef } from 'react';
import Layout from '../components/layout/Layout';
import TimesBanner from '../components/Times/timesBanner';
import SocialConnection from '../components/Times/socialConnection';
import TimesTag from '../components/Times/timesTag';
import PsymateNews from '../components/Times/psymateNews';
import TimesArticle from '../components/Times/timesAtticle';
import PsymateAudio from '../components/Times/psymateAudio';
import { PsymateVideo } from '../components/Times/psymateVideo';
import PsymateBlogs from '../components/Times/psymateBlogs';

const Times = () => {
	const psymateNewsRef = useRef();
	const psymateArticleRef = useRef();
	const psymateAudioRef = useRef();
	const psymateVideoRef = useRef();
	const psymateBlogRef = useRef();

	const scrollToSection = (ref) => {
		ref?.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const options = [
		{ text: 'News', image: '../assets/imgs/times/news.png', ref: psymateNewsRef },
		{ text: 'Articles', image: '../assets/imgs/times/article.png', ref: psymateArticleRef },
		{ text: 'Blog', image: '../assets/imgs/times/blog.png', ref:psymateBlogRef },
		{ text: 'Audio', image: '../assets/imgs/times/audio.png', ref: psymateAudioRef },
		{ text: 'Videos', image: '../assets/imgs/times/video.png', ref: psymateVideoRef },
	];
	return (
		<Layout>
			<TimesBanner />
			<div className='container'>

				<div className='row'>
					<div className='col-3 d-none d-md-block' style={{ position: 'sticky', left: '0', top:'0' }}>
						<div className='left-side-times ' >
							<div
								style={{
									background: '#fff',
									boxShadow: ' 0px 4px 50px 0px rgba(78, 86, 96, 0.10)',
									padding: '2rem',
								}}>
								<img src='../assets/imgs/times/times.png' alt='times banner image' />
								<div className='d-flex flex-column '>
									{options.map((option, index) => (
										<div
											key={index}
											className='text-center d-flex pb-20 align-items-center'
											style={{ gap: '2rem', cursor: 'pointer' }}
											onClick={() => scrollToSection(option.ref)}>
											<img src={option.image} alt={option.text} />
											<p className='font-md color-black-500 text-left'>{option.text}</p>
										</div>
									))}
								</div>
								<div className='mt-40'>
									<h6 className='color-brand-1'> About Us</h6>
									<p className='font-sm color-grey-400'>
										PSYMATE exists to integrate the best of psychiatry, psychology, health-tech,
										eastern wisdom and most importantly an unending passion for treating patients
										under a seamlessly delightful mental health care platform.We create holistic,
										customized, integrated plans and provide state-of-the-art treatments focused
										towards a single-minded goal - patient care at any cost.
									</p>
								</div>
							</div>
							<SocialConnection />
							<TimesTag />
						</div>
					</div>
					<div className='col-12 col-md-9'>
						<div ref={psymateNewsRef}>
							<PsymateNews />
						</div>

						<div ref={psymateArticleRef}>
							<TimesArticle type="articles"/>
						</div>

						<div ref={psymateBlogRef}>
							<PsymateBlogs type="blog"/>
						</div>

						<div ref={psymateAudioRef}>
							<PsymateAudio type="audio"/>
						</div>

						<div ref={psymateVideoRef}>
							<PsymateVideo type="video"/>
						</div>
					</div>

				</div>
				
			</div>

		</Layout>
	);
};

export default Times;
