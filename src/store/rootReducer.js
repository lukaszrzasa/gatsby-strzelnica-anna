import { combineReducers, createStore } from 'redux'
import reservation from './reservationReducer'
import calendarData from './calendarDataReducer';
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
  reservation,
  calendarData,
});

export const store = createStore(rootReducer, composeWithDevTools());