import "../styles/index.css";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  //init theme check

  return (
    <div className="w-screen h-screen flex flex-col ">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
