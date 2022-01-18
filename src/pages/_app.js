import { useEffect, useState } from "react";
import Router from "next/router";
import NextNprogress from "nextjs-progressbar";

import "../assets/scss/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

Router.events.on("beforeHistoryChange", (url) => {
  window.analytics.page(url);
});

const MyApp = ({ Component, pageProps }) => {
  const [loaderVisible, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const delay = 500; // in milliseconds

    let timer;
    const load = () => {
      timer = setTimeout(function () {
        setLoaderVisibility(true);
      }, delay);
    };

    const stop = () => {
      clearTimeout(timer);
      setLoaderVisibility(false);
    };

    Router.events.on("routeChangeStart", () => load());
    Router.events.on("routeChangeComplete", () => stop());
    Router.events.on("routeChangeError", () => stop());
  }, []);

  return (
    <>
      <Header />
      <main>
        <NextNprogress
          color={loaderVisible ? "#0556f3" : "transparent"}
          height={2}
          showOnShallow={false}
        />
        <Component {...pageProps} />
      </main>
      <Footer footerClass={pageProps.footerClass} />
    </>
  );
};

export default MyApp;
