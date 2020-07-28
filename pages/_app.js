import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Context as MediaContext } from '../components/media';

const theme = {
    colors: {
      primary: '#0070f3',
    },
  };

export default class MyApp extends App {

    static async getInitialProps(ctx) {
        const appProps = await App.getInitialProps(ctx);

        // console.log({ctx})
        const device = ctx.ctx.req.device;
        
        return { ...appProps, device }
    }

  render() {
    const { Component, pageProps, device } = this.props;

    return (
        <MediaContext.Provider value={device}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </MediaContext.Provider>
    );
  }
}