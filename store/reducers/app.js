//@flow
import { actionTypes } from './../../constants';

type State = {
  error: any,
}

const initial:State = {
  error: null
}

export default (state:State = initial, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SHOW_POPUP:
        return { ...state, showPopup: payload}
    case actionTypes.RUNTIME_ERROR:
        return { ...state, error: payload}
    default:
      return state;
  }
}

export const storetTestData = (state:any) => state.data.bloodTestConfig 