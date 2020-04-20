import { AppProps } from "next/app";

function ExtendedApp(props) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default ExtendedApp;
