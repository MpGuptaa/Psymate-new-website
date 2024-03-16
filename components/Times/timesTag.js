import React from 'react';

const TimesTag = () => {
	const tagData = ['OCD', 'Anxiety', 'Mood', 'Mood', 'Mood'];

	return (
		<div
			style={{
				background: '#fff',
				boxShadow: ' 0px 4px 50px 0px rgba(78, 86, 96, 0.10)',
				padding: '2rem',
			}}
			className='mt-10'>
			<h6 className='color-brand-1'>Tags</h6>
			<div className='pt-20'>
				<div className='d-flex align-items-center flex-wrap' style={{ gap: '5px' }}>
					{tagData.map((tag, index) => (
						<div className='times-tag-container' key={index}>
							<p className='font-sm color-black-400'>{tag}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TimesTag;
