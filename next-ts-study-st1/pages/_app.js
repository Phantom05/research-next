import { AppProps } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { withRouter } from "react-router-dom";
import rootReducer from "store/modules";

function ExtendedApp(props) {
  const { Component, pageProps, store } = props;
  console.log(props, "app");

  return (
    <Provider store={store}>
      <>
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

const configureStore = (initialState, options) => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

export default withRedux(configureStore)(ExtendedApp);
