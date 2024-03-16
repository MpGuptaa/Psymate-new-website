import React, { useEffect, useState } from 'react';

const OpeningHours = ({ currentCity }) => {
	const openingHoursData = {
		noida: {
			Monday: '04:00 PM - 08:00 PM',
			Tuesday: '04:00 PM - 08:00 PM',
			Wednesday: '04:00 PM - 08:00 PM',
			Thursday: '04:00 PM - 08:00 PM',
			Friday: '04:00 PM - 08:00 PM',
			Saturday: '04:00 PM - 08:00 PM',
		},
		'south delhi': {
			Monday: '10:00 AM - 07:00 PM',
			Tuesday: '10:00 AM - 07:00 PM',
			Wednesday: '10:00 AM - 07:00 PM',
			Thursday: '10:00 AM - 07:00 PM',
			Friday: '10:00 AM - 07:00 PM',
			Saturday: '10:00 AM - 02:00 PM',
		},
		gurgaon: {
			Monday: '08:00 AM - 05:00 PM',
			Tuesday: '08:00 AM - 05:00 PM',
			Wednesday: '08:00 AM - 05:00 PM',
			Thursday: '08:00 AM - 05:00 PM',
			Friday: '08:00 AM - 05:00 PM',
			Saturday: '08:00 AM - 12:00 PM',
		},
	};
	const [openingHours, setOpeningHours] = useState([]);

	useEffect(() => {
		const cityOpeningHours = openingHoursData[currentCity];

		// Check if cityOpeningHours is available
		if (cityOpeningHours) {
			const hoursArray = Object.entries(cityOpeningHours).map(([day, time]) => ({
				day,
				time,
			}));
			setOpeningHours(hoursArray);
		} else {
			// Handle case where currentCity doesn't match any keys in openingHoursData
			setOpeningHours([]);
		}
	}, [currentCity]);

	return (
		<div className='opening-outer-container'>
			<div className='opening-inner-container'>
				<h3 className='text-center'>Opening Hours</h3>
				<div className='opening-days-time-container pt-10'>
					{openingHours.map((dayTime, index) => (
						<div
							key={index}
							className='d-flex align-items-center justify-content-between'
							style={{
								borderBottom: index !== openingHours.length - 1 ? '1px solid #fff' : 'none',
								paddingTop: '2rem',
							}}>
							<p>{dayTime.day}</p>
							<p className='font-md'>{dayTime.time}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OpeningHours;
