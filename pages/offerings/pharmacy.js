import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import PharmacyBanner from '../../components/Pharmacy/pharmacyBanner';
import Item from '../../components/Pharmacy/Item';
import UseLocalStorage from '../../components/Common/UseLocalStorage';
import Columns from '../../components/Pharmacy/pharmacyProducts';

const shopList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const [cart, setCart] = useState([]);
	const [localCart, _] = UseLocalStorage('cart', []);

	useEffect(() => {
		setCart(localCart);
	}, [localCart]);

	return (
		<>
			<Head>
				<title>psymate Shop</title>
			</Head>

			<Layout>
				<PharmacyBanner />
				<Columns
					navItems={[
						{ label: 'Prescribe Medicine', type: 'prescribe-medicine' },
						{ label: 'Vitamins & Nutritions', type: 'vitamins-nutrition' },
						{ label: 'Personal Care', type: 'personal-care' },
						{ label: 'Health Device', type: 'health-device' },
						{ label: 'Skin Products', type: 'skin-products' },
						{ label: 'Health Supplements', type: 'health-supplements' },
						{ label: 'Brain Nutrition', type: 'brain-nutrition' },
						{ label: 'Medicines', type: 'medicines' },
					]}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					currentPage={currentPage}
					heading='Latest Products'
					setCurrentPage={setCurrentPage}
					url={`data/items?limit=12&page=${currentPage}&search=${searchTerm}&searchBy=displayName`}>
					{(product, index) => (
						<Item
							addToCart={(data, hard) => {
								addToCart(data, cart, setCart, hard);
							}}
							index={index}
							cart={cart}
							setCart={setCart}
							product={product}
							key={product._id}
						/>
					)}
				</Columns>
			</Layout>
		</>
	);
};

export default shopList;
