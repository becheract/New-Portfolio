import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Bechera's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <React.StrictMode>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </React.StrictMode>
    </Html>
  );
}
