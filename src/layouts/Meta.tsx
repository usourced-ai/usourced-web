import Head from "next/head";
import { NextSeo } from "next-seo";

import { AppConfig } from "@/config/AppConfig";

type MetaProps = {
  title: string | string[];
  description?: string;
  canonical?: string;
};

export function Meta(props: MetaProps) {
  const title = Array.isArray(props.title)
    ? props.title.join(" | ")
    : props.title;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="/images/site/usourced-icon-192.png"
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/site/favicon-32x32.png"
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/site/favicon-16x16.png"
          key="icon16"
        />
        <link rel="icon" href="/images/favicon.ico" key="favicon" />
      </Head>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${AppConfig.site_name}`}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: "/images/seo/usourced-social-banner.png",
            },
          ],
        }}
      />
    </>
  );
}
