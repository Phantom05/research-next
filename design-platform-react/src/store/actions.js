import {createAction} from 'redux-actions';

export const counter_increase = 'counter_increase';
export const counter_decrease = 'counter_decrease';

export const COUNTER_INCREASE = createAction(counter_increase);
export const COUNTER_DECREASE = createAction(counter_decrease);