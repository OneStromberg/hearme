//@flow
import { actionTypes } from './../../constants';

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
      if (payload) {
        return { ...state, bloodTestConfig: payload.bloodTestConfig.reduce((acc, item)=> {
          acc[item.name.toLowerCase()] = item.threshold;
          return acc;
        }, {})}
      }
      return state;
    default:
      return state;
  }
}

export const storetTestData = (state:any) => state.data.bloodTestConfig 