
import { createStore, compose, applyMiddleware } from 'redux';
import modules from 'store/modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga"; // redux-saga를 생성하기 위한 라이브러리
import rootSaga from 'store/sagas'; // sagas의 index.js를 가지고온다.
import thunk from "redux-thunk";

const reduxDevtools =
  typeof window !== "undefined" && process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,
  // thunk
];
const enhancers = compose(
  applyMiddleware(...middlewares),
  reduxDevtools
);

export const configure =  initialState => {
  const store = createStore(modules, initialState, enhancers);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
















// export const configure = (initialState, options) => {
//   const sagaMiddleware = createSagaMiddleware(); // 리덕스 사가 생성
//   const middlewares = [sagaMiddleware]; // 미들웨어 연결
//   const enhancer = process.env.NODE_ENV === 'production' ? 
//     compose(applyMiddleware(...middlewares)) : 
//   const store = createStore(modules, initialState, enhancer); // enhancer에 넣어서 saga가 적용된 store 생성
//   store.sagaTask = sagaMiddleware.run(rootSaga); // store에 rootSaga를 넣은 sagaMiddleware를 실행시켜준다.
//   return store;
// }