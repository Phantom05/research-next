import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as actions from 'store/actions';




let initialState = {
  count:15,
  // recent:{...initialListingSet}
}


export default handleActions({
  [actions.INCREMENT]: (state, { payload: diff }) => {
    console.log(`>>> HOME_TEST`);
    return produce(state, draft => {
      draft.count++
    })
  }


}, initialState)




