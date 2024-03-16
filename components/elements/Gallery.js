import Link from 'next/link';
import React from 'react';

const Gallery = () => {
	return (
		<section className='section '>
			<div className='container'>
				<div className='row align-items-end'></div>
				<div className='row mt-45'>
					<div className='col-lg-4 '>
						<div className='card-human'>
							<div className='card-image mb-15'>
								{' '}
								<img src='assets/imgs/gallery/gallery.png' alt='psymate' />
							</div>
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='card-human'>
							<div className='card-image mb-15'>
								{' '}
								<img src='assets/imgs/page/homepage12/human2.png' alt='psymate' />
							</div>
						</div>
					</div>
					<div className='col-lg-4 mt-7'>
						<div className='card-human'>
							<div className='card-image mb-15'>
								{' '}
								<img src='assets/imgs/gallery/gallery.png' alt='psymate' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
