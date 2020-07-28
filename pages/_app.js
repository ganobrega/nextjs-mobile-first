import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import {
  Context as MediaContext,
  MediaContextProvider,
} from '../components/media';

import '../assets/index.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  static async getInitialProps(ctx) {
    const appProps = await App.getInitialProps(ctx);

    const device = ctx.ctx.req.device;

    return { ...appProps, device };
  }

  render() {
    const { Component, pageProps, device } = this.props;

    return (
      <MediaContext.Provider value={device}>
        {device === 'desktop' ? (
          <MediaContextProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </MediaContextProvider>
        ) : (
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </MediaContext.Provider>
    );
  }
}
