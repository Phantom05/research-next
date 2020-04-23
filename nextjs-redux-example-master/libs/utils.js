
import React, {
  useEffect,
  useRef,
  useReducer,
  useState,
  useLayoutEffect
} from 'react';
import * as actions from "store/actions/usersActions";
import MobileDetect from "mobile-detect";
import { useDispatch, useSelector } from "react-redux";
import { call } from 'redux-saga/effects';
import { AlertFn } from 'libs/library';
import _ from 'lodash';
// import makeActionCreator from 'make-action-creator';
// import {dispatch} from 'store/actionCreators';
// import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import {storage,keys} from 'lib/library';
import {configure} from 'store';

// console.log(configure);
// DEBUG: 이부분



// SECTION: Redux Saga, Actions


/**
 * makeActionCreator
 * @param {*} actionType 
 * @param {*} payload 
 */
export function makeActionCreator(actionType, payload) {
  // const dispatch = useDispatch();
  // return dispatch({ type: actionType, payload:payload })
  // return dispatch({ type: actionType, payload: payload });
}

/**
 * Actions Name
 * @param {*} actionName string
 */
export function makeAsyncActions(actionName) {
  console.log('makeAsyncActions');
  const prefix = actionName;
  const prefixObj = {
    INDEX: 'INDEX',
    INIT: `INIT`,
    REQUEST: `REQUEST`,
    PENDING: `PENDING`,
    SUCCESS: `SUCCESS`,
    FAILURE: `FAILURE`,
    CANCEL: `CANCEL`,
  }
  for (const item in prefixObj) {
    prefixObj[item] = prefix + `_${item}`;
  }
  prefixObj.init = (payload)=>makeActionCreator(prefixObj.INIT,payload);
  return prefixObj;
}

/**
 * makeAsyncActions
 * @param {*} actions Object
 */
export function makeAsyncCreateActions(actions) {
  const ActionsFunction = (payload) => makeActionCreator(actions.INDEX, payload);
  return (api) => {
    if (typeof api !== 'function') new Error('api must be Function');

    ActionsFunction.index = actions.INDEX;
    ActionsFunction.request = (data) => api(data);
    ActionsFunction.init = (payload) => makeActionCreator(actions.INIT, payload);
    ActionsFunction.pending = (payload) => makeActionCreator(actions.PENDING, payload);
    ActionsFunction.success = (payload) => makeActionCreator(actions.SUCCESS, payload);
    ActionsFunction.failure = (payload) => makeActionCreator(actions.FAILURE, payload);
    return ActionsFunction
  }
}


/**
 * 
 * @param {*} type 
 * @param {*} promiseCreator 
 */
export const createPromiseSaga = ({
  type,
  tag,
  pending = () => { },
  success = () => { },
  failure = () => { }
}) => {

  return function* saga(action) {
    AlertFn(tag);
    if (!type) {
      console.warn(`createPromiseSaga Need type`);
      return null;
    };
    try {
      const payload = action.payload;
      console.log(`${type.index} PENDING`);
      pending(action);
      type.pending();
      console.log(` %cRequest Data :\n`, "color:red;padding:5px;font-weight:bold", payload);
      const { data, error, cancel } = yield call(type.request, payload);
      console.log(` %cResponse Data :\n`, "color:red;padding:5px;font-weight:bold", data);

      if (cancel) {
        type.pending({ type: "cancel" });
        return;
      }
      data.payload = payload || {};
      if (data && !error) {
        if (data.result === 1) {
          console.log(`${type.index} SUCCESS`);
          success(data, payload);
          type.success(data);
        } else {
          console.log(`${type.index} FAILURE`);
          failure(data);
          type.failure(data);
        }
      } else {
        console.log(`${type.index} FAILURE`);
        failure(data);
        type.failure(data);
      }
    } catch (e) {
      console.log(`${type.index} ERROR`);
      console.log(e, 'error');
    }
  };
};

/**
 * 
 * @param {*} draft 
 * @param {*} type 
 */
export function IPSFset(draft, type) {
  draft.pending = false;
  draft.success = false;
  draft.failure = false;
  if (type !== 'init') {
    draft[type] = true;
  }
}

// SECTION: use
/**
 * usePromise
 * @param {*} promiseCreator Promise Object
 * @param {*} deps array
 */
// export function usePromise(promiseCreator, deps) {
//   const [resolved, setResolved] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const processor = async () => {
//     setLoading(true);
//     try {
//       const result = await promiseCreator();
//       setResolved(result);
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     processor();
//   }, [deps,processor]);

//   return [loading, resolved, error];
// }


/**
 * useInput
 * @param {*} initialForm object
 */
export const useInput = (function () {
  function reducer(state, action) {
    return { ...state, [action.name]: action.value }
  }

  return function useInput(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = e => {
      dispatch(e.target);
    }
    return [state, onChange];
  }
})();



/**
 * DidUpdateMount를 구현한 Custom hooks
 * @param {*} fn 
 * @param {*} inputs 
 */
export function useDidUpdateEffect(fn, inputs) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      fn();
    }
    else {
      didMountRef.current = true;
    }
  }, inputs);
}

/**
 * 
 * @param {*} f 
 */
export const useDidMount = f => useEffect(() => f && f(), []);



/**
 * 
 * @param {*} value 
 * @param {*} delay 
 */
export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
}



export const useActiveElement = () => {
  const [active, setActive] = React.useState(document.activeElement);

  const handleFocusIn = (e) => {
    setActive(document.activeElement);
  }

  React.useEffect(() => {
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('focusin', handleFocusIn)
    };
  }, [])

  return active;
}



export function useDeviceType(userAgent) {
  const md = new MobileDetect(userAgent);
  let mobile = false,
    tablet = false,
    desktop = false;
  if (md.tablet()) {
    tablet = true;
  } else if (md.mobile()) {
    mobile = true;
  } else {
    desktop = true;
  }
  return {
    mobile,
    tablet,
    desktop
  };
}


export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
// export default useIsomorphicLayoutEffect;


export function useIsMounted() {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}


/**
 * 리덕스 사가 요청을 편하게하기위한 함수
 * actions 함수 규격을
 *  export const getTodo =async dispatch => {
      const url = `https://jsonplaceholder.typicode.com/todos/1`;
      const { data } = await Axios.get(url);
      return dispatch({ type: actions.GET_TODO, payload: data });
    }
    이런식으로 맞춰줘야함
 * @param {*} config 
 */
export function useApi(config = {}) {
  const { type = "", dispatch = () => { } } = config;
  const dispatchFn = type === 'init' ? dispatch : useDispatch();
  const newActionsObject = _.reduce(actions, (x, y) => {
    x[y.name] = async () => y(dispatchFn)
    return x;
  }, {});

  return newActionsObject;
}


//SECTION: Hign Order Component (HOC)
/**
 * 
 * @param {*} url 
 */
export const withLoading = (WrappedComponent) => (props) => {
  return props.isLoading
    ? (console.log('Base landing...'), <div>Loading ...</div>)
    : <WrappedComponent {...props} />
}




export const withUseEffect = (fn, arr) => {
  // arr.forEach((item)=>{
  //   useEffect(()=>{
  //   },[item]);
  // });
}


//SECTION: Reducer 
/**
 * 
 * @param {*} reducerInitalize 
 */
export function initReducer(typeAction) {
  dispatch(typeAction)
}