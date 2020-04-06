import {
  SET_DATE,
  SET_DAY,
  SET_HOUR_START,
  SET_HOURS,
  SET_INFO,
  SET_PEOPLE,
  SET_PHONE,
  SET_MONTH, SET_NAME, SET_ERROR, SET_CSRF,
} from './types'

export const setHourStart = (hour) => ({
  type: SET_HOUR_START,
  payload: hour,
});

export const setHours = (hours) => ({
  type: SET_HOURS,
  payload: hours,
});

export const setPeople = (people) => ({
  type: SET_PEOPLE,
  payload: people,
});

export const setPhone = (phone) => ({
  type: SET_PHONE,
  payload: phone,
})

export const setInfo = (info) => ({
  type: SET_INFO,
  payload: info,
});

export const setDate = (year, month, day) => ({
  type: SET_DATE,
  payload: {
    year,
    month,
    day,
  },
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});



export const setMonth = (data) => ({
  type: SET_MONTH,
  payload: data,
});

export const setDay = (data) => ({
  type: SET_DAY,
  payload: data,
});

export const setCsrf = (token) => ({
  type: SET_CSRF,
  payload: token,
});
