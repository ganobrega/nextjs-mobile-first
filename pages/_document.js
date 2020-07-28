import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { mediaStyles } from '../components/media';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {ctx.req.device === 'desktop' ? (
              <style
                type="text/css"
                dangerouslySetInnerHTML={{ __html: mediaStyles }}
              />
            ) : null}
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
