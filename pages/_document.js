import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
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
