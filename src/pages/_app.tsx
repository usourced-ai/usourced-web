import "@/styles/global.css";

import type { AppProps } from "next/app";
import Script from "next/script";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { RecoilRoot } from "recoil";

import { NotistackProvider } from "@/components/layout/root/NotistackProvider";

function GoogleAnalytics() {
  return (
    <>
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

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <RecoilRoot>
        <SessionProvider session={session}>
          <NotistackProvider>
            <NextNProgress color="#333" />
            <Component {...pageProps} />
          </NotistackProvider>
        </SessionProvider>
      </RecoilRoot>
      <GoogleAnalytics />
    </>
  );
}
