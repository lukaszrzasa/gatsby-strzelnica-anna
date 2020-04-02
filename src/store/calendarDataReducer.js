import { SET_DAY_DATA } from './types'

const initialState = {};

const calendarDataReducer = (state = initialState, action) => {
  if (action.type === SET_DAY_DATA) {
    return {
      ...state,
      ...action.payload,
    }
  } else {
    return state;
  }
}

export default calendarDataReducer;