import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

	render() {

		return (
			<Html lang="en">
				<Head>
					<title>Justin Minyard | Full-Stack Developer</title>
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