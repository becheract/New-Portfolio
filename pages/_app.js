import "../styles/index.css";
import "../styles/about.css";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  //init theme check

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
