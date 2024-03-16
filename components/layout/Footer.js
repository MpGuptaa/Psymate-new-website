import Link from 'next/link';
import React from 'react';

const Footer = ({ menu }) => {
	return (
		<footer className='footer mt-80'>
			<div className='footer-1'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 width-20'>
							<div className='mb-10'>
								<img alt='Ecom' src='	https://ik.imagekit.io/9wtikbbcz/psymate-logo-%20footer.svg' />
							</div>
							<p className='font-md mb-20 color-grey-400'>
								PSYMATE exists to integrate the best of psychiatry, psychology, health-tech, eastern
								wisdom and most importantly an unending passion for treating patients under a
								seamlessly delightful mental health care platform.We create holistic, customized,
								integrated plans and provide state-of-the-art treatments focused towards a
								single-minded goal - patient care at any cost.
							</p>
							<div className='row d-flex'>
								<div className='mb-15'>
									<h6 className='color-brand-1'>Follow Us</h6>
									<div className='mt-15'>
										<Link
											className='icon-socials icon-facebook'
											href='https://www.facebook.com/psymatehealthcr'
										/>
										<Link
											className='icon-socials icon-instagram'
											href='https://www.instagram.com/psymatehealthcare/'
										/>
										<Link
											className='icon-socials icon-twitter'
											href='https://twitter.com/psymatehealthcr'
										/>
										<Link
											className='icon-socials icon-linkedin'
											href='https://www.linkedin.com/in/psymate-healthcare-851377202/?original_referer=https%3A%2F%2Fwww.psymate.org%2F'
										/>
										<Link
											className='icon-socials icon-youtube'
											href='https://www.youtube.com/channel/UCTIRGKH4BxD-DmC8-JCBBtQ'
										/>
									</div>
								</div>
								<div className=''>
									<h5 className='mb-10 color-brand-1'>Download our app</h5>
									<div>
										<div className=''>
											<Link
												className='mr-10'
												href='https://apps.apple.com/in/app/psymate/id6443472769'>
												<img src='/assets/imgs/template/Apple.png' alt='apple icon' />
											</Link>
											<Link href='https://play.google.com/store/apps/details?id=com.psymatehealthcare'>
												<img src='/assets/imgs/template/playstore.png' alt='playstore' />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{menu.map((section) => (
							<div className='col-lg-3 width-16 mb-30'>
								<h5 className='mb-10 color-brand-1'>{section.title}</h5>
								<ul className='menu-footer'>
									{section.links.map((link) => (
										<li>
											<Link href={link.href}>{link.name}</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='footer-2'>
				<div className='container'>
					<div className='footer-bottom'>
						<div className='row'>
							<div className='col-lg-6 col-md-12 text-center text-lg-start'>
								<ul className='menu-bottom'>
									<li>
										<Link className='font-sm color-grey-300' href='/privacy-policy'>
											Privacy policy
										</Link>
									</li>

									<li>
										<Link className='font-sm color-grey-300' href='/terms-condition'>
											Terms of service
										</Link>
									</li>
								</ul>
							</div>
							<div className='col-lg-6 col-md-12 text-center text-lg-end'>
								<span className='color-grey-300 font-md'>
									©Psymate Healthcare Pvt Ltd 2024. All right reserved.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
