import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../components/context/authContext';
import { removeCookies } from '../Utilities/CommonFunctions/Helper';

const logout = () => {
	const router = useRouter();
	const { setUser } = useContext(AuthContext);

	useEffect(() => {
		if (setUser) {
			setUser();
			removeCookies('insider_authUsername');
			localStorage.removeItem('insider_authUsername');
		}
		router.push(`/login`);
	});
	return <div></div>;
};

export default logout;
