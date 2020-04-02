import { SET_DATE, SET_HOUR_START, SET_HOURS, SET_INFO, SET_PEOPLE, SET_PHONE } from './types'

const initialState = {
  year: 0,
  month: 0,
  day: 0,
  hourStart: null,
  hours: 1,
  people: 1,
  phone: '',
  info: '',
};


const reservationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_HOUR_START:
      return {
        ...state,
        hourStart: action.payload,
      };
    case SET_HOURS:
      return {
        ...state,
        hours: action.payload,
      };
    case SET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SET_INFO:
      return {
        ...state,
        info: action.payload,
      }
    case SET_DATE:
      const { year, month, day } = action.payload;
      return {
        ...state,
        year,
        month,
        day,
      }
    default:
      return state;
  }
}

export default reservationReducer;