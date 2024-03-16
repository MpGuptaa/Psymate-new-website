import React, { useState } from 'react';

const Accordion = ({ data }) => {
	const [isActive, setIsActive] = useState({
		status: false,
		key: 0,
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
			<div className='accordion' id='accordionFAQ'>
				{data.map((faq, index) => (
					<div key={faq.displayName} className='accordion-item'>
						<h5 className='accordion-header' onClick={() => handleToggle(index)}>
							<button
								className={
									isActive.key == index
										? 'accordion-button text-heading-5 '
										: 'accordion-button text-heading-5 collapsed'
								}>
								{faq.displayName}
							</button>
						</h5>
						<div
							className={
								isActive.key == index
									? 'accordion-collapse collapse show'
									: 'accordion-collapse collapse'
							}>
							<div className='accordion-body'>{faq.summary}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Accordion;
