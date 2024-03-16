import { useState, useEffect } from 'react';
import Loader from '../elements/Loader';

const UseLoader = ({ loading, children }) => {
	if (loading)
		return (
			<span className='d-flex justify-content-center align-items-center'>
				<Loader />
			</span>
		);
	else return children;
};

export default UseLoader;
