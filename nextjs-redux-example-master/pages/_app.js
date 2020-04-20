import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import 'styles/reset.css';
import withReduxSaga from 'next-redux-saga';// next와 redux-saga를 연결하기 위한 라이브러리
import { configure } from "store";
import { useDeviceType } from 'libs/utils';
function ExtendedApp(props) {
  const { Component, pageProps, store, query, userAgent } = props;
  const deviceType = useDeviceType(userAgent);
  return (

    <Provider store={store}>
      <Component {...pageProps} deviceType={deviceType} />
    </Provider>

  )
}
ExtendedApp.getInitialProps = async appContext => {
  const pageProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { ...pageProps, userAgent, query };
};


export default withRedux(configure)(withReduxSaga(ExtendedApp));



// import {Actions} from 'store/actionCreators';

// class ExtendedApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};
//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps, store } = this.props;
//     console.log(this.props, 'ggg');
//     return (
//       <Container>
//         <Provider store={store}>
//           <Component {...pageProps} />
//         </Provider>
//       </Container>
//     );
//   }
// }
