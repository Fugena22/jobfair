import { GoogleAnalytics } from "@next/third-parties/google";
import Image from "next/image";
import Script from "next/script";
import React from "react";

export default function ThirdParties() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CZNCR7MCL2"
      />
      <Script
        id="ga4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CZNCR7MCL2', { 'debug_mode':true });`,
        }}
      ></Script>

      {/* <!-- Meta Pixel Code --> */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '865110215480975');
  fbq('track', 'PageView');`,
        }}
      ></Script>
      <noscript>
        <Image
          height={1}
          width={1}
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=629989147826585&ev=PageView&noscript=1"
          alt="Meta Pixel"
        />
      </noscript>
    </>
  );
}
