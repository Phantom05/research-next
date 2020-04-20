import React from "react";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";


const withApi = (PageComponent, config = {url:"",method:""}) => {
  const { url = "/", method = "GET" } = config;
  console.log('dmd?');
  const WithComponent = ({ ...pageProps }) => <PageComponent {...pageProps} />;

  WithComponent.getInitialProps = async (context) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data,'!');
    return {
      data: data,
    };
  };

  return WithComponent;
};

export default withApi;
