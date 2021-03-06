import { takeEvery, put, call, fork, select } from 'redux-saga/effects';

import Action from '../actions/Action';
import { storetTestData } from './reducers/data';
import { actionTypes } from './../constants';

const DATA_URL = 'https://s3.amazonaws.com/s3.helloheart.home.assignment/bloodTestConfig.json';

function* measurmentRequest({ payload }){
  put(Action(actionTypes.MEASURMENT_RESPONSE));
}

const delay = (value) => new Promise(resolve => setTimeout(resolve, value));

export function* error(e){
  yield put(Action(actionTypes.SHOW_POPUP, true));
  yield put(Action(actionTypes.RUNTIME_ERROR, e));
  yield delay(2000);
  yield put(Action(actionTypes.SHOW_POPUP, false));
}

export function* runTest({ payload }){
  yield put(Action(actionTypes.RUNTIME_ERROR, null));
  if (payload) {
    const { testName, value } = payload;
    if (testName && value && value >= 0) {
      if (!testName.replace(/[A-Za-z0-9(),-:/!]/gi,'')) {
        try {
          const testData = yield select(storetTestData);
          const testThreshold = testData[testName.toLowerCase()];
          if (testThreshold) {
            const result = value / testThreshold
            return yield put(Action(actionTypes.MEASURMENT_RESPONSE, { value: result }));
          }
        } catch (e) {
          return yield error(e);
        }
      }
    }
    return yield error('Wrong input');
  }
  yield put(Action(actionTypes.MEASURMENT_RESPONSE, { value: null }));
}

export function* initialData(){
  yield put(Action(actionTypes.SHOW_POPUP, true));
  try {
    const response = yield call(fetch, DATA_URL);
    const data = yield response.json();
    yield put(Action(actionTypes.MEASURMENT_DATA, data));
  } catch(e) {
    return yield error(e);
  }
  yield put(Action(actionTypes.SHOW_POPUP, false));
}

export function* init(){
  yield takeEvery(actionTypes.RUN_TEST, runTest);
  yield fork(initialData);
}

export default function* rootSaga() {
  yield init();
}