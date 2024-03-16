import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({ title, keywords, description, image, index }) => {
	const router = useRouter();
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='keywords' content={keywords} />
			<meta charSet='utf-8' />
			<meta httpEquiv='content-language' content='en' />
			<meta name='googlebot' content={index ? index : 'index'} />
			<meta name='robots' content={index ? index : 'index'} />
			<meta name='author' content='Yash jain' />
			<meta name='twitter:creator' content='@psymatehealthcr' />
			<meta property='og:site_name' content='Psymate Healthcare' />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />

			<title>{title}</title>
			<meta name='title' content={title} />
			<link rel='canonical' href={'https://www.psymate.org/' + router.asPath} />

			<meta name='description' content={description} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={'https://www.psymate.org/' + router.asPath} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={'https://www.psymate.org/' + router.asPath} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={image} />
			<meta
				name='twitter:image:alt'
				content="Your mental health is our responsibility and that's a promise"
			/>

			<link rel='icon' href='/favicon.ico' type='image/x-icon' />
			<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
			<link rel='manifest' href='/manifest.json' />
			<meta name='theme-color' content='#ffffff' />
			<meta name='msapplication-TileColor' content='#ffffff' />
		</Head>
	);
};

Meta.defaultProps = {
	title: "Your mental health is our responsibility and that's a promise",
	keywords: ['depression', 'anxiety', 'mental health', 'psychiatry', 'psychology', 'health-tech'],
	description:
		'PSYMATE exists to integrate the best of psychiatry, psychology, health-tech, eastern wisdom and most importantly an unending passion for treating patients under a seamlessly delightful mental health care platform. We create holistic, customized, integrated plans and provide state-of-the-art treatments focused towards a single-minded goal - patient care at any cost',
	index: 'index',
	image: 'https://ik.imagekit.io/9wtikbbcz/psymate-logo-%20footer.svg',
};

export default Meta;
