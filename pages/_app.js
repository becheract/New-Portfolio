import "../styles/index.css";
import "../styles/about.css";
import Nav from "../components/nav";
import "../styles/nprogress.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

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
    <ThemeProvider>
      <div className="w-screen h-screen flex flex-col p-1">
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
