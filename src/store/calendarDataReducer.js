import { SET_CSRF, SET_DAY, SET_MONTH } from './types'

const initialState = {
  dayStatus: {},
  monthStatus: [],
  csrf_token: null,
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
        monthStatus: [
          ...action.payload,
        ]
      };
    case SET_CSRF:
      return {
        ...state,
        csrf_token: action.payload,
      };
    default:
      return state
  }
}

export default calendarDataReducer;