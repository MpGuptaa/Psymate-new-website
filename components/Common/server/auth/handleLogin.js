import { toast } from 'react-toastify';
import axiosInstance from './axiosInstance';

const handleLogin = (router, state, setState, setUser, redirectRoute) => {
	const endpoint = state.isPasswordReady
		? `login/verify/${state.phone}/${state.otp}`
		: `login/${state.phone}`;

	axiosInstance.get(endpoint).then((res) => {
		if (res.data.status === 200) {
			if (!state.isPasswordReady) {
				setState({ ...state, isPasswordReady: res.data.login });
			} else {
				setState({ ...state, user: res.data.userData });
				console.log(res.data.userData);
				if (setUser) {
					setUser(res.data.userData);
					router.push(redirectRoute || '/');
				}
			}
		} else {
			toast.error('Error Occurred');
		}
	});
};

export default handleLogin;
