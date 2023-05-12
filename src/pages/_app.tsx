import "../styles/global.css";

import type { AppProps } from "next/app";
import Script from "next/script";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </RecoilRoot>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EDYBRW20MH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EDYBRW20MH');
        `}
      </Script>
    </>
  );
}
