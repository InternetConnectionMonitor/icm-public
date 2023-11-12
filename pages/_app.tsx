import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';

import { GoogleAnalytics } from 'components';

const env = process.env.NODE_ENV;
const customFont = Raleway({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (env === 'production' && location.protocol !== 'https:') {
      location.replace(
        `https:${location.href.substring(location.protocol.length)}`,
      );
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return (
    <main className={customFont.className}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Internet Connection Monitor — Google Chrome extension for monitoring and testing Internet connectivity. Access log and send to your ISP"
        />
        <meta
          name="keywords"
          content="internet,chrome extension,connection,connectivity,test,icm,internet connection monitor,log,logging,monitoring,interruptions,internet down,latency,ping,wi-fi,wi fi"
        />
        <meta name="author" content="Dmytro Shcherbyna" />

        <title>Internet Connection Monitor — official web page</title>

        <meta
          property="og:title"
          content="Internet Connection Monitor — official web page"
        />
        <meta
          property="og:description"
          content="Internet Connection Monitor — Google Chrome extension for monitoring and testing Internet connectivity. Access log and send to your ISP"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Internet Connection Monitor" />
        <meta property="og:url" content="https://internetmon.org" />
        <meta
          property="og:image"
          content={
            'https://internetmon.org' +
            require('../public/img/ICM-promo-large.png')
          }
        />
      </Head>

      <Component {...pageProps} />

      {env === 'production' ? <GoogleAnalytics id="G-865Y8ZL7M0" /> : null}
    </main>
  );
}
