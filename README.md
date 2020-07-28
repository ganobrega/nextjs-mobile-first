# NextJS Mobile First (Experimental)

This example shows how to do a [optimized website for mobile](https://support.google.com/google-ads/answer/7323900?hl=en) and a [responsive website for desktop](https://web.dev/responsive-web-design-basics/) in the same stack.

## Requirements

- [NextJS with Custom Server](https://nextjs.org/docs/advanced-features/custom-server)
- [NextJS with styled-components SSR](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)
- [@artsy/fresnel](https://npmjs.com/package/@artsy/fresnel)
- [device](https://npmjs.com/package/device)

## Setup

### server.js

```diff
+ const device = require('device');

app.prepare().then(() => {
   createServer((req, res) => {
+     const _device = device(req.headers['user-agent']);
+     req.device = _device.type;

      handle(req, res, parsedUrl)
   }).listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
   })
})
```

### \_document.js

#### with styled-components SSR

```diff
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
+import { mediaStyles } from '../components/media';

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
+            {ctx.req.device === 'desktop' && (
+             <style type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyles }} />
+            )}
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

```

### \_app.js

```diff
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
+import { Context as MediaContext, MediaContextProvider, } from '../components/media';


export default class MyApp extends App {
+  static async getInitialProps(ctx) {
+    const appProps = await App.getInitialProps(ctx);
+
+    const device = ctx.ctx.req.device;
+
+    return { ...appProps, device };
+  }

  render() {
    const { Component, pageProps, device } = this.props;

    return (
+      <MediaContext.Provider value={device}>
+        {device === 'desktop' ? (
+          <MediaContextProvider>
+            <ThemeProvider theme={theme}>
+              <Component {...pageProps} />
+            </ThemeProvider>
+          </MediaContextProvider>
+        ) : (
+          <ThemeProvider theme={theme}>
+            <Component {...pageProps} />
+          </ThemeProvider>
+        )}
+      </MediaContext.Provider>
    );
  }
}

```

### components/media.js

```
import React, { useContext } from 'react';
import { createMedia } from '@artsy/fresnel';

export const Context = React.createContext();

/**
 * Components
 */
export const Mobile = ({ children }) => {
  const context = useContext(Context);

  return context === 'phone' ? (
    children
  ) : (
    <Media lessThan="lg">{children}</Media>
  );
};

export const Desktop = ({ children }) => {
  const context = useContext(Context);

  return context === 'desktop' ? (
    <Media greaterThan="md">{children}</Media>
  ) : null;
};

export const NotDesktop = ({ children }) => {
  const context = useContext(Context);

  if (context === 'phone') {
    return children;
  }

  return context !== 'desktop' ? (
    children
  ) : (
    <Media lessThan="lg">{children}</Media>
  );
};

const Medias = createMedia({
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1200,
  },
});

export const mediaStyles = Medias.createMediaStyle();

export const { Media, MediaContextProvider } = Medias;

```
