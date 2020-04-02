import { combineReducers, createStore } from 'redux'
import reservation from './reservationReducer'
import calendarData from './calendarDataReducer';


const rootReducer = combineReducers({
  reservation,
  calendarData,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());