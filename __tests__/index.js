import dataReducer, { initialState } from './../store/reducers/data'
import Action from './../actions/Action';
import { buildMapFromArrayData } from './../utils';
import { actionTypes } from './../constants';

const mockedData = [  
    {  
      "name":"HDL Cholesterol",
      "threshold":40
    },
    {  
      "name":"LDL Cholesterol",
      "threshold":100
    },
    {  
      "name":"A1C",
      "threshold":4
    }
]

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

test('utils buildMapFromData', () => {
  expect(buildMapFromArrayData([
    {
      "name": "A1C",
      "threshold": 4
    }
  ])).toEqual({['a1c']: 4});
});

test('data reducer', () => {
  expect(dataReducer(undefined, {})).toEqual(initialState);
  expect(dataReducer(initialState, Action(actionTypes.MEASURMENT_DATA))).toEqual(initialState);
  expect(dataReducer(initialState, Action(actionTypes.MEASURMENT_DATA, { bloodTestConfig: mockedData }))).toEqual({
    ...initialState,
    bloodTestConfig: buildMapFromArrayData(mockedData)
  });
});