import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga';
import 'styles/reset.css';
import { configure } from "store";
import { useDeviceType } from 'libs/utils';

class ExtendedApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    const { req, query } = ctx;
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    return { pageProps, userAgent, query };
  }

  render() {
    const { Component, pageProps, store, query, userAgent } = this.props;
    const deviceType = useDeviceType(userAgent);

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} deviceType={deviceType}/>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configure)(ExtendedApp);
