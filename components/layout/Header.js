import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authContext';

const Header = ({ handleOpen, handleRemove, openClass, addClass, menu, account }) => {
	const [scroll, setScroll] = useState(0);
	const { setUser, userData } = useContext(AuthContext);

	const [isSearchToggled, setSearchToggled] = useState(false);
	const [isLanguageToggled, setLanguageToggled] = useState(false);
	const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
	const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
	useEffect(() => {
		document.addEventListener('scroll', () => {
			const scrollCheck = window.scrollY > 100;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});

	return (
		<>
			<header className={`${scroll ? 'header sticky-bar stick' : 'header sticky-bar'} ${addClass}`}>
				<div className='container'>
					<div className='main-header'>
						<div className='header-left'>
							<div className='header-logo'>
								<Link className='d-flex' href='/'>
									<img
										alt='Ecom'
										src='	https://ik.imagekit.io/9wtikbbcz/psymate-logo-%20footer.svg'
									/>
								</Link>
							</div>
							<div className='header-nav'>
								<nav className='nav-main-menu d-none d-xl-block'>
									<ul className='main-menu'>
										{menu.map((item) => (
											<li className={item.children ? 'has-children' : ''}>
												<Link href={item.link}>{item.name}</Link>
												{item.children && (
													<ul className='sub-menu'>
														{item.children.map((child) => (
															<li>
																<Link href={child.link}>{child.name}</Link>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</nav>
								<div
									className={`burger-icon burger-icon-white ${openClass && 'burger-close'}`}
									onClick={() => {
										handleOpen();
										handleRemove();
									}}>
									<span className='burger-icon-top' />
									<span className='burger-icon-mid' />
									<span className='burger-icon-bottom' />
								</div>
							</div>
							<div className='header-right'>
								<div className='d-inline-block box-search-top'>
									<div
										className={
											isSearchToggled ? 'form-search-top d-block' : ' form-search-top d-none'
										}>
										<form action='#'>
											<input className='input-search' type='text' placeholder='Search...' />
											<button className='btn btn-search'>
												<svg
													className='w-6 h-6'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
													/>
												</svg>
											</button>
										</form>
									</div>
								</div>

								{userData ? (
									<div
										className='d-inline-block box-dropdown-cart'
										onClick={toggleLanguageTrueFalse}>
										<span className='font-lg icon-list icon-account'>
											<span className='font-lg color-grey-900 arrow-down'>Profile</span>
										</span>
										<div
											className={
												isLanguageToggled ? 'dropdown-account dropdown-open' : 'dropdown-account'
											}>
											<ul>
												{account.map((item) => (
													<li>
														<Link className='font-md' href={item.link}>
															{item.name}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								) : (
									<div className='d-none d-sm-inline-block'>
										<Link className='btn btn-brand-1 hover-up' href='register'>
											Get Started
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
