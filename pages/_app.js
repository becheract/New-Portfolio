import "../styles/index.css";
import "../styles/about.css";
import Nav from "../components/nav";
import "../styles/nprogress.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import NProgress from "nprogress";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());

    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <>
      <ThemeProvider enableSystem={false} forcedTheme="light">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
        </Head>

        <div className="w-screen h-screen flex flex-col p-1">
          <Nav />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
