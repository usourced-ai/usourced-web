import "../styles/global.css";

import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </RecoilRoot>
  );
}
