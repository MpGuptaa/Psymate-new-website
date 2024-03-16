import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetching from './DataFetch';
import Image from 'next/image';
import AuthContext from '../context/authContext';
import { useRouter } from 'next/router';
import { paymentHandler } from '../../Utilities/CommonFunctions/Helper';
import axiosInstance from './server/auth/axiosInstance';
import { toast } from 'react-toastify';
import Loader from '../elements/Loader';

const BookAppointment = ({ id, profile }) => {
	const { userData } = useContext(AuthContext);
	const router = useRouter();
	const establishments = useDataFetching(`data/establishments?searchBy=active&search=true`);
	const [state, setState] = useState({
		date: router.query.date || '',
		time: router.query.time || '',
		duration: Number(router.query.duration) || '',
		establishment: router.query.establishment || '',
	});
	const [slots, setSlots] = useState([]);
	const [loading, setloading] = useState(false);
	const [redeem, setRedeem] = useState(false);

	const [coupon, setCoupon] = useState('');
	const [discount, setDiscount] = useState(0);
	const [status, setStatus] = useState(false);
	const [amount, setAmount] = useState(0);
	const [couponApplied, setCouponApplied] = useState(false);
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				if (userData) {
					if (!state.duration) {
						toast.error('No duration Selected');
						return;
					}
					if (!state.establishment) {
						toast.error('No establishment Selected');
						return;
					}
					if (!state.date) {
						toast.error('No Date Selected');
						return;
					}
					if (!state.time) {
						toast.error('No Time Selected');
						return;
					}

					const onSubmit = async (response) => {
						const bookingData = {
							patient: userData?._id,
							doctorId: id,
							startTime: new Date(state.time).toISOString(),
							establishmentId: state.establishment,
							duration: state.duration,
							payment: [{ ...response, amtPaid: amount, method: 'RazorPay' }],
						};
						if (coupon && coupon !== '' && redeem) {
							bookingData.coupon = coupon;
						}
						await axiosInstance
							.post('booking/appointment', bookingData)
							.then(async (res) => {
								toast.success('Appointment Booked');
								router.push(`/payment-success/${res.data.appointment.bookingId}`);
							})
							.catch((err) => {
								console.log(err);
							});
					};
					setStatus(true);
					await paymentHandler(userData, amount, onSubmit, setStatus);
				} else {
					const redirectRoute = `/login?redirectRoute=${encodeURIComponent(
						router.asPath,
					)}.time=${encodeURIComponent(state.time)},date=${encodeURIComponent(
						state.date,
					)},establishment=${encodeURIComponent(
						state.establishment,
					)},duration=${encodeURIComponent(state.duration)}`;

					router.push(`/login?redirectRoute=${redirectRoute}`);
				}
			}}
			className='mt-25 card p-5 rounded'>
			<div className='d-flex flex-row'>
				<div
					onClick={() => {
						setState({ ...state, establishment: '6512639f52c96144938834c9' });
					}}
					className={'d-flex flex-row'}>
					<p
						className={`d-flex flex-column justift-content-center align-items-center btn btn-border-80 me-2 font-md ${
							'6512639f52c96144938834c9' === state.establishment && 'card-active'
						}`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-4'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z'
							/>
						</svg>

						<p>In-Video</p>
					</p>
				</div>
				<div
					onClick={() => {
						setState({ ...state, establishment: establishments?.data?.[0]?._id });
					}}
					className={`d-flex flex-row`}>
					<p
						className={`d-flex flex-column justift-content-center align-items-center btn btn-border-80 font-md ${
							'6512639f52c96144938834c9' !== state.establishment && 'card-active'
						}`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-4'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819'
							/>
						</svg>
						<p>On-Site</p>
					</p>
				</div>
			</div>
			{state.establishment !== '6512639f52c96144938834c9' && (
				<div className='mt-3'>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 30,
							},
							575: {
								slidesPerView: 1,
								spaceBetween: 30,
							},
							767: {
								slidesPerView: 1,
								spaceBetween: 30,
							},
							991: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							1199: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
							1350: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
						className='swiper-wrapper'>
						{establishments.data.map((item, i) => (
							<SwiperSlide className='swiper-slide' key={item.establishmentAddress}>
								<div
									onClick={() => {
										setState({
											...state,
											establishment: item._id,
										});
									}}
									className={`btn btn-border-80 d-flex flex-column ${
										state.establishment === item._id && 'card-active'
									}`}>
									<Image
										width={220}
										height={180}
										src={item.thumbnail}
										alt='psymate'
										className='rounded'
									/>
									<div className='card-info'>
										<h5 className='color-brand-1 text-truncate mt-3'>
											{item.establishmentName
												.replace(/Clinic/g, '')
												.replace(/clinic/g, '')}
										</h5>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
			{state.establishment && (
				<span>
					<h5 className='color-brand-1 mt-20'>Select Session Duration: </h5>
					<div className='mt-3'>
						{[15, 30, 60].map((item) => (
							<button
								type='button'
								onClick={() => {
									setAmount(Number(profile?.price * item));
									setState({ ...state, duration: item });
								}}
								className={`btn btn-border-80 me-2 font-md-bold ${
									state.duration === item && 'card-active'
								}`}>
								{item} minutes
							</button>
						))}
					</div>
				</span>
			)}
			{state.establishment && (
				<div>
					<h5 className='color-brand-1 mt-20'>Check Available Date(s): </h5>
					<div className='box-button-slider-bottom justify-content-center align-items-center d-flex'>
						<Swiper slidesPerView={9} spaceBetween={1} className='swiper-wrapper'>
							{Array.from({ length: 50 }, (_, i) => {
								const currentDate = new Date();
								currentDate.setDate(currentDate.getDate() + i);
								return (
									<SwiperSlide
										onClick={async () => {
											setState({
												...state,
												date: currentDate.toDateString(),
											});
											setloading(true);
											try {
												const response = await fetch(
													process.env
														.NEXT_PUBLIC_DEFAULT_SERVER_BASE_URL +
														`sessions?doctorId=${id}&establishmentId=${state.establishment}&slotDuration=${state.duration}&date=${currentDate}&days=0-1`,
												);
												setloading(false);
												if (!response.ok) {
													throw new Error('Failed to fetch data');
												}
												const data = await response.json();
												setSlots(data?.[0]?.slots || []);
												setloading(false);
											} catch (error) {
												console.error('Error fetching data:', error);
												setloading(false);
											}
										}}
										key={i}>
										<button
											type='button'
											className={`btn btn-border-80 me-2 font-md-bold ${
												state.date === currentDate.toDateString() &&
												'card-active'
											}`}>
											{currentDate.getDate()}{' '}
											{currentDate.toLocaleString('default', {
												month: 'short',
											})}{' '}
											<br />
											{currentDate.getFullYear()}
										</button>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			)}
			{state.date && (
				<div>
					<h5 className='color-brand-1 mt-20'>Select Time Duration: </h5>
					<div className='mt-3'>
						{loading
							? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
									<button
										type='button'
										className='btn btn-border-80-skeleton me-2 mb-2 font-md-bold'
									/>
							  ))
							: Object?.entries(slots)?.[0]?.[1]?.length > 0
							? Object?.entries(slots)?.[0]?.[1].map((slot) => (
									<button
										type='button'
										onClick={() => {
											setState({ ...state, time: slot.time.split('-')[0] });
										}}
										className={`btn btn-border-80 me-2 mb-2 font-md-bold ${
											state.time === slot.time.split('-')[0] && 'card-active'
										}`}>
										{new Date(slot.time.split('-')[0]).toLocaleTimeString()} -{' '}
										{new Date(slot.time.split('-')[1]).toLocaleTimeString()}
									</button>
							  ))
							: 'No Slots Found'}
					</div>
				</div>
			)}
			{userData && (
				<div className='row mt-4'>
					<h5>Apply or redeem Coupon</h5>

					<div className='col-lg-6 mt-4 col-sm-6'>
						<div className='form-group mb-25'>
							<input
								className='form-control icon-name'
								type='text'
								onChange={(e) => {
									setCoupon(e.target.value);
									setCouponApplied(false);
									setDiscount(0);
								}}
								placeholder='Enter Coupon Code'
							/>
						</div>
					</div>
					<div className='col-lg-6 col-sm-6'>
						{!couponApplied && (
							<button
								onClick={(e) => {
									e.preventDefault();
									axiosInstance
										.get(`coupon/validate/${coupon}/${userData._id}`)
										.then((res) => {
											console.log(res?.data?.coupon);
											if (res?.data?.coupon?.type) {
												if (res?.data?.coupon?.type == 'percentage') {
													toast.success('Coupon Applied');
													setCouponApplied(true);
													setDiscount(
														Number(
															(amount * res.data.coupon.discount) /
																100,
														),
													);
													setAmount(
														Number(amount) -
															Number(
																(amount *
																	res.data.coupon.discount) /
																	100,
															),
													);
												} else {
													console.log(res?.data?.coupon);
													setRedeem(true);
												}
											} else {
												toast.error(res.data.message || 'Coupon Is Valid');
											}
										})
										.catch((err) => {
											console.log(err);
											toast.error(
												err?.response?.data?.error ||
													'Error in applying coupon',
											);
										});
								}}
								className='btn btn-border-80 btn-full font-md-bold mt-4'>
								Check Validatity
							</button>
						)}
					</div>
				</div>
			)}
			<h5 className='color-primary'>Total : {amount}</h5>

			{status ? (
				<div className='m-auto'>
					<Loader />
				</div>
			) : (
				<div className='col-lg-12 mb-25'>
					<button className='btn btn-border-80 btn-full font-md-bold mt-4' type='submit'>
						Book Appointment
					</button>
				</div>
			)}
		</form>
	);
};

export default BookAppointment;
