import Link from 'next/link';
import React from 'react';

const SocialConnection = () => {
	return (
		<div
			style={{
				background: '#fff',
				boxShadow: ' 0px 4px 50px 0px rgba(78, 86, 96, 0.10)',
				padding: '2rem',
			}}
			className='mt-10'>
			<h6 className='color-brand-1'>Social Connections</h6>
			<div className='pt-20'>
				<div className='d-flex alignitems-center justify-content-between'>
					<Link href='https://www.facebook.com/psymatehealthcr?mibextid=qi2Omg'>
						<img src='../assets/imgs/times/facebook.png' alt='fb' />
					</Link>
					<Link href='https://www.instagram.com/psymatehealthcare/?igsh=MXNmYjVlZjBzNGlrNw%3D%3D'>
						<img src='../assets/imgs/times/instagram.png' alt='ig' />
					</Link>
					<Link href=''>
						<img src='../assets/imgs/times/twitter.png' alt='twitter' />
					</Link>
					<Link href='https://www.youtube.com/channel/UCTIRGKH4BxD-DmC8-JCBBtQ'>
						<img src='../assets/imgs/times/youtube.png' alt='youtube' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SocialConnection;
