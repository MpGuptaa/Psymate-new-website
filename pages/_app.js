import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/navigation';
import '../public/assets/css/style.css';
import 'react-modal-video/css/modal-video.css';
import { useEffect, useState } from 'react';
import Preloader from '../components/elements/Preloader';
import { AuthContextProvider } from '../components/context/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);

		const WOW = require('wowjs');
		window.wow = new WOW.WOW({
			live: false,
		});
		window.wow.init();
	}, []);
	return (
		<AuthContextProvider>
			<ToastContainer position={'bottom-center'} />
			{!loading ? <Component {...pageProps} /> : <Preloader />}
		</AuthContextProvider>
	);
}

export default MyApp;
