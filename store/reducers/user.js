//@flow
import { actionTypes } from './../../constants';

type State = {
  testResult: number,
  error: boolean
}

const initial: State = {
  testResult: NaN,
  error: false
}

export default (state:State = initial, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.MEASURMENT_RESPONSE: 
      return { ...state, error: !payload.value, testResult: payload.value}
    default:
      return state;
  }
}