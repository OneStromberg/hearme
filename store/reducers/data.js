//@flow
import { actionTypes } from './../../constants';

type State = {
  bloodTestConfig: any
}

const initial:State = {
  bloodTestConfig: null
}

export default (state:State = initial, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.MEASURMENT_DATA:
        return { ...state, bloodTestConfig: payload.bloodTestConfig.reduce((acc, item)=> {
          acc[item.name.toLowerCase()] = item.threshold;
          return acc;
        }, {})}
    default:
      return state;
  }
}

export const storetTestData = (state:any) => state.data.bloodTestConfig 