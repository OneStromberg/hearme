import dataReducer, { initialState } from './../store/reducers/data'
import Action from './../actions/Action';
import { actionTypes } from './../constants';

test('Action', () => {
  expect(Action(actionTypes.SHOW_POPUP)).toEqual({
    type: actionTypes.SHOW_POPUP,
    payload: null
  });
  expect(Action(actionTypes.SHOW_POPUP, true)).toEqual({
    type: actionTypes.SHOW_POPUP,
    payload: true
  });
});

test('data reducer', () => {
  expect(dataReducer(undefined, {})).toEqual(initialState);
  expect(dataReducer(initialState, Action(actionTypes.MEASURMENT_DATA))).toEqual(initialState);
});