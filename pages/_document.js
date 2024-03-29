import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<Script
						id='googletagmanager'
						strategy='afterInteractive'
						src={`https://www.googletagmanager.com/gtag/js?id=G-CK1K0LNLNY`}
					/>
					<Script
						id='afterInteractive'
						strategy='afterInteractive'
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CK1K0LNLNY
			', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
