//@flow
import { actionTypes } from './../../constants';
import { buildMapFromArrayData } from './../../utils';

type State = {
  bloodTestConfig: any
}

export const initialState:State = {
  bloodTestConfig: null
}

export default (state:State = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.MEASURMENT_DATA:
      if (payload && payload.bloodTestConfig) {
        return { ...state, bloodTestConfig: buildMapFromArrayData(payload.bloodTestConfig) }
      }
      return state;
    default:
      return state;
  }
}

export const storetTestData = (state:any) => state.data.bloodTestConfig 