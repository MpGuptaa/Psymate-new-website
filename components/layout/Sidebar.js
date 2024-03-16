import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Link from 'next/link';
import { useState } from 'react';

const Sidebar = ({ openClass, menu }) => {
	const [isActive, setIsActive] = useState({
		status: false,
		key: '',
	});

	const handleToggle = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			});
		} else {
			setIsActive({
				status: true,
				key,
			});
		}
	};
	return (
		<>
			<div
				className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
				<div className='mobile-header-wrapper-inner'>
					<div className='mobile-header-content-area'>
						<div className='mobile-logo'>
							<Link className='d-flex' href='/'>
								<img
									alt='PSYMATE'
									src='https://ik.imagekit.io/9wtikbbcz/psymate-logo-%20footer.svg'
								/>
							</Link>
						</div>
						<div className='perfect-scroll'>
							<div className='mobile-menu-wrap mobile-header-border'>
								<Tabs
									defaultActiveKey='menu'
									id='fill-tab-example'
									className='nav nav-tabs nav-tabs-mobile mt-25'
									fill>
									<Tab eventKey='menu' title='Menu'>
										<div className='tab-pane'>
											<nav className='mt-15'>
												<ul className='mobile-menu font-heading'>
													{menu.map((item, index) => (
														<li
															className={
																isActive.key == index ? 'has-children active' : 'has-children'
															}
															onClick={() => handleToggle(index)}>
															{item?.children?.length && (
																<span className='menu-expand'>
																	<svg
																		className='w-6 h-6 icon-16'
																		fill='none'
																		stroke='currentColor'
																		viewBox='0 0 24 24'
																		xmlns='http://www.w3.org/2000/svg'>
																		<path
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			strokeWidth='2'
																			d='M19 9l-7 7-7-7'></path>
																	</svg>
																</span>
															)}
															<Link href={item.link}>{item.name}</Link>
															{item?.children?.length > 0 && (
																<ul
																	className={
																		isActive.key == index ? 'sub-menu d-block' : 'sub-menu d-none'
																	}>
																	{item.children.map((sub) => (
																		<li>
																			<Link href={sub.link}>{sub.name}</Link>
																		</li>
																	))}
																</ul>
															)}
														</li>
													))}
												</ul>
											</nav>
										</div>
									</Tab>
									<Tab eventKey='account' title='Account'>
										<nav className='mt-15'>
											<ul className='mobile-menu font-heading'>
												<li>
													<Link className='active' href='login'>
														My Profile
													</Link>
												</li>
												<li>
													<Link href='#'>Work Preferences</Link>
												</li>
												<li>
													<Link href='#'>My Boosted Shots</Link>
												</li>
												<li>
													<Link href='#'>My Collections</Link>
												</li>
												<li>
													<Link href='#'>Account Settings</Link>
												</li>
												<li>
													<Link href='#'>Go Pro</Link>
												</li>
												<li>
													<Link href='/register'>Sign Out</Link>
												</li>
											</ul>
										</nav>
									</Tab>
									<Tab eventKey='notification' title='Notification'>
										<p className='font-sm-bold color-brand-1 mt-30'>Today</p>
										<div className='notifications-item'>
											<div className='item-notify'>
												<div className='item-image'>
													<img src='assets/imgs/template/user1.png' alt='psymate' />
												</div>
												<div className='item-info'>
													<p className='color-grey-500 font-xs'>
														<strong className='font-xs-bold'>Steven Job</strong>
														like started a poll in your post “How to be a good trader in 2023”
													</p>
												</div>
												<div className='item-time'>
													<span className='color-grey-500 font-xs'>Just now</span>
												</div>
											</div>
											<div className='item-notify'>
												<div className='item-image'>
													<img src='assets/imgs/template/user2.png' alt='psymate' />
												</div>
												<div className='item-info'>
													<p className='color-grey-500 font-xs'>
														<strong className='font-xs-bold'>Steven Job</strong>
														like started a poll in your post “How to be a good trader in 2023”
													</p>
												</div>
												<div className='item-time'>
													<span className='color-grey-500 font-xs'>Just now</span>
												</div>
											</div>
										</div>
										<p className='font-sm-bold color-brand-1 mt-30'>Yesterday</p>
										<div className='notifications-item'>
											<div className='item-notify'>
												<div className='item-image'>
													<img src='assets/imgs/template/user3.png' alt='psymate' />
												</div>
												<div className='item-info'>
													<p className='color-grey-500 font-xs'>
														<strong className='font-xs-bold'>Steven Job</strong>
														like started a poll in your post “How to be a good trader in 2023”
													</p>
												</div>
												<div className='item-time'>
													<span className='color-grey-500 font-xs'>Just now</span>
												</div>
											</div>
											<div className='item-notify'>
												<div className='item-image'>
													<img src='assets/imgs/template/user4.png' alt='psymate' />
												</div>
												<div className='item-info'>
													<p className='color-grey-500 font-xs'>
														<strong className='font-xs-bold'>Steven Job</strong>
														like started a poll in your post “How to be a good trader in 2023”
													</p>
												</div>
												<div className='item-time'>
													<span className='color-grey-500 font-xs'>Just now</span>
												</div>
											</div>
											<div className='item-notify'>
												<div className='item-image'>
													<img src='assets/imgs/template/user5.png' alt='psymate' />
												</div>
												<div className='item-info'>
													<p className='color-grey-500 font-xs'>
														<strong className='font-xs-bold'>Steven Job</strong>
														like started a poll in your post “How to be a good trader in 2023”
													</p>
												</div>
												<div className='item-time'>
													<span className='color-grey-500 font-xs'>Just now</span>
												</div>
											</div>
										</div>
									</Tab>
								</Tabs>
							</div>
							<div className='site-copyright color-grey-400 mt-0'>
								<div className='box-download-app'>
									<p className='font-xs color-grey-400 mb-25'>
										Download our Apps and get extra 15% Discount on your first Order…!
									</p>
									<div className='mb-25'>
										<Link className='mr-10' href='#'>
											<img src='assets/imgs/template/appstore.png' alt='psymate' />
										</Link>
										<Link href='#'>
											<img src='assets/imgs/template/google-play.png' alt='psymate' />
										</Link>
									</div>
									<p className='font-sm color-grey-400 mt-20 mb-10'>Secured Payment Gateways</p>
									<img src='assets/imgs/template/payment-method.png' alt='psymate' />
								</div>
								<div className='mb-0'>
									Copyright 2022 © PSYMATE - Marketplace Template.
									<br />
									Designed by
									<Link href='/http:/Psymatetech.com' target='_blank'>
										&nbsp; Psymatetech
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
