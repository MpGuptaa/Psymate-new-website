import Image from "next/image";
import React from "react";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

const SideButtons = () => {
  return (
		<div>
			<section className='book-btns'>
				<a href='#' className='d-flex align-items-center appointment-btn'>
					<img
						src='/assets/imgs/mobileapp/book.png'
						alt='book appointment'
						className='side-icons'
					/>
					<span className='ml-3'>Book Appointment</span>
				</a>

				<a href="tel:6399006060"className='d-flex align-items-center medicine-btn'>
					<PhoneEnabledOutlinedIcon/>
					<span className='ml-3'>Call Us</span>
				</a>

				<a href='#' className='d-flex align-items-center assessment-btn'>
					<img
						src='/assets/imgs/mobileapp/book assessment.png'
						alt='book assessment'
						className='side-icons'
					/>
					<span className='ml-3'>Book Assessment</span>
				</a>
			</section>
		</div>
	);
};

export default SideButtons;
