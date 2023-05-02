import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";

class MyDocument extends Document<DocumentProps> {
	render() {
		return (
			<Html lang={"en"}>
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="assets/icons/icon.png"></link>
					<meta name="theme-color" content="#fff" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
