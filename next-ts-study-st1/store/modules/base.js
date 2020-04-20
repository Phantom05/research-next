import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';

export const COUNT_PLUS = 'COUNT_PLUS'; 
export const COUNT_MINUS = 'COUNT_MINUS';

export const countPlusAction = () => ({ // 액션 생성 함수
  type : COUNT_PLUS
});

export const countMinusAction = () => ({
  type : COUNT_MINUS
})

export const initialState = {
  count:0,
  todo:{
    items:[]
  }
}


export default handleActions({
  // NOTE: Base
  [COUNT_PLUS]:(state, { payload: diff }) => {
      return produce(state, draft => {
        draft.count++;
      })
    },
    [COUNT_MINUS]:(state, { payload: diff }) => {
      return produce(state, draft => {
        draft.count--;
      })
    },
}, initialState);




