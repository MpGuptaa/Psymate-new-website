import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Item = ({ product, addToCart, cart }) => {
	const [quantity, setQuantity] = useState(0);
	const found = cart.find((i) => i._id === product._id);

	useEffect(() => {
		setQuantity(found?.cartQuantity || 0);
	}, [found?.cartQuantity]);

	return (
		<div className='col-lg-3 col-md-6'>
			<div className='card-product'>
				<div className='card-image'>
					<Link href='product-detail'>
						<img
							src={
								product.photoURL ||
								'https://ik.imagekit.io/Yash/Thewebvale/Console/vecteezy_document-file-not-found-search-no-result-concept_9007126_VN0rj24o-.jpg?updatedAt=1696518480881'
							}
							alt='psymate'
						/>
					</Link>
				</div>
				<div className='card-info'>
					<Link href='/product-detail'>
						<h6 className='text-capitalize color-grey-900 mb-10'>
							{product.displayName}
						</h6>
					</Link>
					<div className='d-flex align-items-center mb-20'>
						<div className='rating'>
							{/* <img
													src='../../assets/imgs/template/icons/star.svg'
													alt='psymate'
												/>
												<img
													src='../../assets/imgs/template/icons/star.svg'
													alt='psymate'
												/>
												<img
													src='../../assets/imgs/template/icons/star.svg'
													alt='psymate'
												/>
												<img
													src='../../assets/imgs/template/icons/star.svg'
													alt='psymate'
												/>
												<img
													src='../../assets/imgs/template/icons/star-gray.svg'
													alt='psymate'
												/> */}
							<span className='color-grey-200 font-xs d-inline-block align-middle'>
								{product.company}
							</span>
						</div>
						<div className='price'>
							<span className='text-price'>₹{product.mrp}</span>
						</div>
					</div>
					<div className='box-quantity'>
						<div className='form-quantity mr-10'>
							<input
								className='product-qty'
								type='number'
								name='product-qty'
								value={quantity}
								onChange={(e) => {
									setQuantity(Number(e.target.value));
								}}
							/>
							<span
								className='button-quantity button-up'
								onClick={() => {
									setQuantity(quantity + 1);
								}}
							/>
							<span
								onClick={() => {
									setQuantity(quantity >= 1 ? quantity - 1 : 1);
								}}
								className='button-quantity button-down'></span>
						</div>
						<button
							onClick={() => {
								if (quantity <= 0)
									toast.error(t('Add Atleast 1 Item to Cart'), {
										toastId: 'Add Atleast 1 Item to Cart',
									});
								else addToCart({ ...product, cartQuantity: quantity }, true);
							}}
							className='btn btn-border-80 mr-10'>
							Add To Cart
						</button>
						<Link className='btn btn-border-80 btn-wish' href='#'>
							<svg
								className='w-6 h-6 icon-16'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
								/>
							</svg>
						</Link>
					</div>
					<p className='color-grey-300 mt-4 font-xs'>
						Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit
					</p>
				</div>
			</div>
		</div>
	);
};

export default Item;
