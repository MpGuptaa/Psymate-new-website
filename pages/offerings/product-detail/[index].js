import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../../components/layout/Layout';
import ThumbSlider from '../../../components/slider/ThumbSlider';
import ModalVideo from 'react-modal-video';

function productDetails({ productName }) {
	const [isOpen, setOpen] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (amount) => {
		// Ensure the quantity is greater than or equal to 1
		setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
	};

	const features = [
		{
			id: 1,
			image: '../../assets/imgs/page/product/delivery.svg',
			title: 'Fast Delivery',
			description:
				'We come together wherever we are – across time zones, regions, offices and screens. You will receive support from your teammates anytime and anywhere.',
		},
		{
			id: 2,
			image: '../../assets/imgs/page/product/secure.svg',
			title: 'Secure payment',
			description:
				'Our teams reflect the rich diversity of our world, with equitable access to opportunity for everyone. No matter where you come from.',
		},
		{
			id: 3,
			image: '../../assets/imgs/page/product/support.svg',
			title: 'Support 24/7',
			description:
				'We believe in your freedom to work when and how you work best, to help us all thrive. Only freedom and independent work can bring out the best in you.',
		},
		{
			id: 4,
			image: '../../assets/imgs/page/product/return.svg',
			title: 'Return & Refund',
			description:
				'Knowing that there is real value to be gained from helping people to simplify whatever it is that they do and bring.',
		},
	];

	return (
		<>
			<Head>
				<title>Product Details</title>
			</Head>

			<Layout>
				<section className='section mt-50'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-5 mb-30'>
								<h3 className='color-gray-800 mb-20'>Zubilance</h3>
								<div className='d-flex align-items-center mb-30 box-price-banner'>
									<h3 className='color-success mr-30'>₹199</h3>
								</div>
								<div className='mb-50'>
									<p className='font-md'>
										While we strive to provide complete, accurate, and
										expert-reviewed content on our 'Platform', we make no
										warranties or representations and disclaim all
										responsibility and liability for the completeness, accuracy,
										or reliability of the aforementioned content. The content on
										our platform is for informative purposes only, and may not
										cover all clinical/non-clinical aspects. Reliance on any
										information and subsequent action or inaction is solely at
										the user's risk, and we do not assume any responsibility for
										the same. The content on the Platform should not be
										considered or used as a substitute for professional and
										qualified medical advice. Please consult your doctor for any
										query pertaining to medicines, tests and/or diseases, as we
										support, and do not replace the doctor-patient relationship.
									</p>
								</div>
								<div className='box-quantity'>
									<div className='form-quantity mr-10'>
										<input
											className='input-quantity'
											type='text'
											defaultValue={1}
											value={quantity}
										/>
										<span
											className='button-quantity button-up'
											onClick={() => handleQuantityChange(1)}
										/>
										<span
											className='button-quantity button-down'
											onClick={() => handleQuantityChange(-1)}>
											{' '}
										</span>
									</div>
									<Link className='btn btn-brand-1 mr-10' href='#'>
										Add To Cart
									</Link>
								</div>
							</div>
							<div className='col-lg-7 text-center mb-30'>
								<ThumbSlider />
							</div>
						</div>
					</div>
					<div className='border-bottom bd-grey-80 mt-50' />
				</section>

				<section className='section mt-100'>
					<div className='container'>
						<h2 className='color-brand-1 mb-60'>Product information</h2>
						<h6 className='font-2xl color-brand-1 mb-15'>Key Ingredients</h6>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='table-responsive'>
									<table className='table table-product-info'>
										<tbody>
											<tr>
												<td>Microcrystalline Cellulose</td>
												<td>Magnesium Stearate </td>
											</tr>
											<tr>
												<td>Polyvinylpyrrolidone</td>
												<td>Talc</td>
											</tr>
											<tr>
												<td>Starch</td>
												<td>Lubricant</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className='col-lg-6'>
								<h6 className='font-2xl color-brand-1 mb-15'>Key Benefits</h6>

								<div className='box-info-product'>
									<ul className='list-dots mt-5'>
										<li className='font-md'>Keeps The Mood Swings Away</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='row mt-30'>
							<div className='col-lg-6'>
								<h6 className='font-2xl color-brand-1 mb-15'>Product Form</h6>

								<div className='box-info-product'>
									<ul className='list-dots mt-5'>
										<li className='font-md'>Strip</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-6'>
								<h6 className='font-2xl color-brand-1 mb-15'>Manufacturer</h6>

								<div className='box-info-product'>
									<ul className='list-dots mt-5'>
										<li className='font-md'>
											CELAGENEX RESEARCH [INDIA] PVT LTD{' '}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='section mt-50 mb-40 pt-55 pb-55 bg-grey-80'>
					<div className='container'>
						<div className='row'>
							{features.map((feature) => (
								<div key={feature.id} className='col-lg-3 col-md-6 col-sm-6'>
									<div className='card-small card-small-2'>
										<div className='card-image'>
											<div className='box-image'>
												<img src={feature.image} alt={feature.title} />
											</div>
										</div>
										<div className='card-info'>
											<h6 className='color-brand-1 mb-10'>{feature.title}</h6>

											<p className='font-xs color-grey-500'>
												{feature.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export default productDetails;
