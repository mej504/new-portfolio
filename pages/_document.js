import Document, { Html, Head, Main, NextScript } from 'next/document';
const path = require('path');

require('dotenv').config({
	path: path.join(__dirname, '../.env')
});

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>

					<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
					<script dangerouslySetInnerHTML={{

						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){
								dataLayer.push(arguments)
							}
							gtag('js', new Date());

							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
						`
					}} />

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument;