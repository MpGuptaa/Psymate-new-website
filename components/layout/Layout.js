import React, { useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header from './Header';
import PageHead from './PageHead';
import Sidebar from './Sidebar';
import SideButtons from '../Common/sideBtns';
import Head from 'next/head';
import Meta from './PageHead';
import Cart from './Cart';
import { createUrlFromName } from '../../Utilities/CommonFunctions/Helper';

const Layout = ({ children, title }) => {
	const [openClass, setOpenClass] = useState('');

	const handleOpen = () => {
		document.body.classList.add('mobile-menu-active');
		setOpenClass('sidebar-visible');
	};

	const handleRemove = () => {
		if (openClass === 'sidebar-visible') {
			setOpenClass('');
			document.body.classList.remove('mobile-menu-active');
		}
	};
	const menuItems = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about-us' },
		{
			name: 'Offerings',
			link: '#',
			children: [
				{ name: 'Clinic', link: '/offerings/clinic' },
				// 	{ name: 'Rehab', link: '/offerings/rehab' },
				// 	{ name: 'Pharmacy', link: '/offerings/pharmacy' },
				// 	{ name: 'Academy', link: '/offerings/academy' },
				// 	{ name: 'Wellness', link: '/offerings/wellness' },
				// 	{ name: 'Tech', link: '/offerings/tech' },
			],
		},
		{ name: 'Disorders', link: '/disorder' },

		{
			name: 'Treatments',
			link: '#',
			children: [
				{ name: 'RTMS', link: '/treatment/rtms' },
				// { name: 'Psychotherapy', link: '/treatment/psychotherapy' },
			],
		},
		{ name: 'Experts', link: '/experts' },
		{
			name: 'Centers',
			link: '/clinic',
			children: [
				{
					name: 'Psymate Clinic Noida',
					link: `/center/${createUrlFromName('Psymate Clinic Noida')}`,
				},
				{
					name: 'Psymate Clinic Gurgaon',
					link: `/center/${createUrlFromName('Psymate Clinic Gurgaon')}`,
				},
				{
					name: 'Psymate Clinic South Delhi',
					link: `/center/${createUrlFromName('Psymate Clinic South Delhi')}`,
				},
			],
		},
		{ name: 'Times', link: '/times' },
		// { name: 'Connect', link: '/register' },
	];

	const footerItems = [
		{
			title: 'Company',
			links: [
				{ name: 'Psychotherapy', href: '/about' },
				{ name: 'rTMS', href: '/about' },
				{ name: 'Psymate Clinic', href: '/about' },
				{ name: 'Psymate Pharmacy', href: '/team' },
				{ name: 'Psymate Academy', href: '/career' },
				{ name: 'Psymate Rehab', href: '#' },
				{ name: 'Psymate Wellness', href: '#' },
				{ name: 'Psymate Lab', href: '#' },
			],
		},
		{
			title: 'Centers',
			links: [
				{ name: 'Pymate Clinic Noida', href: '/center/psymate-clinic-noida' },
				{ name: 'Pymate Clinic South Delhi', href: '/center/psymate-clinic-south-delhi' },
				{ name: 'Pymate Clinic Gurgaon', href: '/center/psymate-clinic-gurgaon' },
			],
		},
		{
			title: 'Psymate Times',
			links: [
				{ name: 'Articles', href: '#' },
				{ name: 'Blogs', href: '/blog' },
				{ name: 'Videos', href: '#' },
				{ name: 'Audios', href: '#' },
			],
		},
		{
			title: 'Contact Us',
			links: [
				{ name: '+91 6399006060', href: 'tel:6399006060' },
				{ name: 'info@psymate.org', href: 'mailto:info@psymate.org' },
			],
		},
	];

	const account = [
		{ name: 'My Profile', link: '/login', isActive: true },
		{ name: 'Settings', link: '#' },
		{ name: 'Go Pro', link: '#' },
		{ name: 'Sign Out', link: '/logout' },
	];

	return (
		<>
			<Meta title={title} />

			<SideButtons />
			<div className='body-overlay-1' onClick={handleRemove} />
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-5867TVK9'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5867TVK9');
            `,
					}}
				/>
			</Head>

			<Header
				menu={menuItems}
				handleOpen={handleOpen}
				handleRemove={handleRemove}
				openClass={openClass}
				account={account}
				addClass='header-home7'
			/>
			<Sidebar account={account} menu={menuItems} openClass={openClass} />
			<Cart account={account} menu={menuItems} />
			<main className='main'>{children}</main>
			<Footer menu={footerItems} />
			<BackToTop />
		</>
	);
};

export default Layout;
