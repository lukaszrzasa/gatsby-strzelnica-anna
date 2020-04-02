import { SET_DAY, SET_MONTH } from './types'

const initialState = {
  dayStatus: {},
  monthStatus: {},
};

const calendarDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        dayStatus: {
          ...action.payload,
        }
      }
    case SET_MONTH:
      return {
        ...state,
        monthStatus: {
          ...action.payload,
        }
      };
    default:
      return state
  }
}

export default calendarDataReducer;