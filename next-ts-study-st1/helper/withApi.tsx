import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

type withApiProps ={
  PageComponent:React.ComponentType;
  config:configTypes;
}

type configTypes = {
  url?:string;
  method?:string;
}

const withApi = (PageComponent, config) =>{
  const { url = "/", method = 'GET' } = config;
  const WithComponent = ({...pageProps}) => (
    <PageComponent {...pageProps}/>
  )

  WithComponent.getInitialProps = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return {
      data:data
    }
  }

  return WithComponent;
}

export default withApi;