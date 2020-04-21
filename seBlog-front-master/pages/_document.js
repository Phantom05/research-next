import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles';
import flush from 'styled-jsx/server';

class CustomDocument extends Document {

  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          {sheets.getStyleElement()}
          {flush() || null}
        </React.Fragment>
      ),
    };
  }

  render() {
    return (
      <html>
        <Head />
        <link href="/static/css/reset.css" rel="stylesheet" />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
