import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, pages }) => {
	return (
		<div className='text-center mt-30'>
			<nav className='box-pagination'>
				<ul className='pagination'>
					{Array.from({ length: pages }, (_, index) => index + 1).map(
						(page, index, array) => {
							if (array.length <= 10) {
								return (
									<li
										key={index}
										className={`page-item ${
											currentPage === page ? 'active' : ''
										}`}
										onClick={() => setCurrentPage(page)}>
										<span className='page-link color cursor-pointer'>
											{page}
										</span>
									</li>
								);
							} else {
								if (
									index < 3 ||
									index >= array.length - 3 ||
									(index >= currentPage - 2 && index <= currentPage + 2)
								) {
									return (
										<li
											onClick={() => setCurrentPage(page)}
											key={index}
											className={`page-item ${
												currentPage === page ? 'active' : ''
											}`}>
											<a className='page-link'>{page}</a>
										</li>
									);
								} else if (index === 3 || index === array.length - 4) {
									return (
										<li key={index} className='page-item'>
											<a className='page-link'>.....</a>
										</li>
									);
								} else {
									return null;
								}
							}
						},
					)}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
