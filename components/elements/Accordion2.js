import React, { useState } from 'react';

const Accordion2 = ({ faqItems }) => {
	// const [isActive, setIsActive] = useState({
	// 	status: false,
	// 	key: 0,
	// });

	// const handleToggle = (key) => {
	// 	if (isActive.key === key) {
	// 		setIsActive({
	// 			status: false,
	// 		});
	// 	} else {
	// 		setIsActive({
	// 			status: true,
	// 			key,
	// 		});
	// 	}
	// };

	const [isActive, setIsActive] = useState(null);

	const handleToggle = (index) => {
		setIsActive(isActive === index ? null : index);
	};
	return (
		<>
			<div className='accordion accordionStyle2' id='accordionFAQ'>
				<div className='row'>
					{faqItems.map((item, index) => (
						<div className='col-lg-6' key={index}>
							<div className='accordion-item'>
								<h5
									className='accordion-header'
									onClick={() => handleToggle(index + 1)}>
									<button
										className={
											isActive === index + 1
												? 'accordion-button text-heading-5'
												: 'accordion-button text-heading-5 collapsed'
										}>
										{item.question}
									</button>
								</h5>
								<div
									className={
										isActive === index + 1
											? 'accordion-collapse collapse show'
											: 'accordion-collapse collapse'
									}>
									<div className='accordion-body'>{item.answer}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Accordion2;