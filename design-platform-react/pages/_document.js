// Import styled components ServerStyleSheet
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>DOF - Design Platform</title>
          {/* <link rel="apple-touch-icon-precomposed" sizes="57x57" href="assets/img/favicons/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/img/favicons/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/img/favicons/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/img/favicons/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="assets/img/favicons/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="assets/img/favicons/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="assets/img/favicons/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="assets/img/favicons/apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="assets/img/favicons/favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="assets/img/favicons/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="assets/img/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="assets/img/favicons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="assets/img/favicons/favicon-128.png" sizes="128x128" />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="assets/img/favicons/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="assets/img/favicons/mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="assets/img/favicons/mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="assets/img/favicons/mstile-310x150.png" /> */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}