import { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta name="google-site-verification" content="t6jb-5GaXOOP3wlVlD1PzUr40WpanOKumO-i5TlbpfI" />
          {/* Insert your meta tag here */}
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