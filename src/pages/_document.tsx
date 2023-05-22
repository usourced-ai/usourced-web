import Document, { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "@/config/AppConfig";

// Need to create a custom _document because i18n support is not compatible with `next export`.
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale} className="h-full">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Tenor+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
