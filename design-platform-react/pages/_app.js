import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import 'styles/main.scss';
import Core from 'containers/base/Core';
// _error 페이지 만들기
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Core />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}