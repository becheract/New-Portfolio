import "../styles/index.css";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  //init theme check

  return (
    <ThemeProvider>
      <div className="w-screen h-screen flex flex-col">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
