import createEmotionServer from '@emotion/server/create-instance';
import { DateTime } from 'luxon';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import data from '../data.json';
import createEmotionCache from '../utils/createEmotionCache';

export default class extends Document<{ emotionStyleTags: React.ReactNode[] }> {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map<React.ReactNode>((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Eike Foken" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Eike Foken" />
          <meta
            name="description"
            content={`I am Eike Foken, a ${Math.floor(
              DateTime.fromISO(data.about.birthDate).diffNow('years').years * -1,
            )} years old Web and Frontend Developer with nearly ${Math.ceil(
              DateTime.fromISO(data.experience.slice(-1)[0].startDate).diffNow('years').years * -1,
            )} years of experience with modern web technologies and frameworks, living in Berlin.`}
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#4e4e5b" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#4e4e5b" />
          <link rel="apple-touch-icon" href="/images/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/touch-icon-ipad.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,800|Saira+Extra+Condensed:500,700&display=swap"
            rel="stylesheet"
          />
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-41952111-1"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag () { window.dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-41952111-1');
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
