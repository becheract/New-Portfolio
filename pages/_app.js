import "../styles/index.css";
import "../styles/about.css";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  //init theme check

  return (
    <ThemeProvider>
      <div className="w-screen h-100 flex flex-col p-5" id="container">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
