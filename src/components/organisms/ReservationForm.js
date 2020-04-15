import React, { useEffect, useState } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Color from '../atoms/Color'
import Range from '../molecules/Range'
import {
  setCsrf,
  setDay,
  setErrors,
  setHours, setHourStart,
  setInfo,
  setMonth,
  setName,
  setPeople,
  setPhone,
} from '../../store/actions'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'
import axios from 'axios';
import { getFirstDay } from '../molecules/CalendarBody'
import { API_URL } from '../../core/config'
import { Link } from 'gatsby';
import Button from '../atoms/Button'


const Text = styled.div``;

const networkErrorMsg = 'Przepraszamy, nie możemy nawiązać połączenia z serwerem obsługującym rezerwacje. Prosimy spróbować później. Jeżeli problem będzie dalej występował prosimy o informację. Numer telefonu oraz adres email znajdują się w zakładce kontakt. '

export const formatHour = (hour) => { // range: 1 - 3, and no more
  if(hour===1) return '1 godzinę';
  else return `${hour} godziny`;
}
export const formatHourNum = (hour) => `${hour}:00`;
export const formatPeople = (people) => { // range: 1 - 15
  if(people===1) return '1 osoba';
  else if(people<=4) return `${people} osoby`;
  else return `${people} osób`;
}
export const showError = (key,errors) => {
  if(Object.keys(errors).find(k=>k===key)){
    const msg = typeof errors[key]==='string' ? errors[key] : errors[key][0];
    return (<Color color="red">{msg}</Color>);
  }
  return null;
};

// leading zero
export const lz = (e) => e<10 ? `0${e}` : `${e}`;

const ReservationForm = () => {
  const { year, month, day, hourStart, hours, people, phone, info, name, errors } = useSelector(({reservation}) => reservation);
  const { dayStatus, csrf_token } = useSelector(({calendarData}) => calendarData);
  const [ isUpdating, setIsUpdating ] = useState(false);
  const dispatch = useDispatch();
  const { hour_open, hour_close } = dayStatus;


  const handlePhoneChange = ({target}) => {
    dispatch(setPhone(
      target
        .value
        .replace(/\D/g,'')
        .substring(0,9)
    ));
  };
  const handleInfoChange = ({target}) => {
    dispatch(setInfo(target.value));
  };
  const handleNameChange = ({target}) => {
    dispatch(setName(target.value));
  };

  const handleClick = async () => {
    const y = year;
    const m = month;
    const d= day;
    // people
    let chosenHours = [];
    for(let i=0; i<hours; i++){
      chosenHours.push(hourStart+i);
    }
    try {
      const response = await axios({
        url: `${API_URL}/calendar/put-reservation`,
        method:'POST',
        data: {
          y,
          m:m+1,
          d,
          people,
          hours: chosenHours,
          phone,
          name,
          info,
          _method: 'PUT',
        },
        headers: {
          'X-CSRF-TOKEN': csrf_token,
        }
      });
      const { errors } = response.data;
      dispatch(setErrors(errors || {}));
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    // get entire month info (status of each day) from db
    let isCanceled = false;
    const getMonthData = async () => {
      const firstDay = getFirstDay(year, month);
      const from = new Date(year, month, 1-firstDay);
      const url = `${API_URL}/calendar/get-month-info/${from.getFullYear()}/${from.getMonth()+1}/${from.getDate()}`;
      try {
        const response = await axios.get(url);
        if(response.data && !isCanceled){
          dispatch(setMonth(response.data));
        }
      } catch (e) {
        dispatch(setErrors({ network:networkErrorMsg }))
      }

    };
    // noinspection JSIgnoredPromiseFromCall
    getMonthData();
    return () => {
      isCanceled = true; // if unmount of new promise was called
    }
  }, [year, month]);

  useEffect(() => {
    // get info about day (available hours)
    let isCanceled = false;
    const getMonthData = async () => {
      setIsUpdating(true);
      const url = `${API_URL}/calendar/get-day-info/${year}/${month+1}/${day}`;
      try {
        const response = await axios.get(url);
        if(response.data && !isCanceled){
          dispatch(setDay(response.data));
        }
      } catch (e) {
        dispatch(setErrors({ network:networkErrorMsg }))
      }
      setIsUpdating(false);
    };
    // noinspection JSIgnoredPromiseFromCall
    getMonthData();
    return () => {
      isCanceled = true; // if unmount of new promise was called
    }
  }, [year, month, day]);

  return (
    <div>
      {isUpdating && <>Ładowanie...</>}
      {!isUpdating && <>
        {showError('network', errors)}
        {!errors.network && <>
          <Text>Wybrałeś dzień {lz(day)}.{lz(month+1)}.{year}</Text>
          <Text>O której godzinie chcesz zacząć?</Text>
          {hour_open && hour_close && <Range
            evSetValue={(hourStart) => dispatch(setHourStart(hourStart))}
            min={hour_open}
            max={hour_close}
            step={1}
            stepLarge={4}
            format={formatHourNum}
            value={hourStart || hour_open}
          />}
          <Text>Jak długo chcesz u Nas być?</Text>
          <Range
            evSetValue={(hours) => dispatch(setHours(hours))}
            min={1}
            max={3}
            step={1}
            format={formatHour}
            value={hours}
          />
          {showError('hours', errors)}
          <Text>Dla ilu osób chcesz zarezerwować?</Text>
          <Range
            evSetValue={(people) => dispatch(setPeople(people))}
            min={1}
            max={15}
            step={1}
            format={formatPeople}
            value={people}
          />
          {showError('people', errors)}
          <Text>Podaj nam swój numer telefonu</Text>
          <Input
            value={phone}
            onChange={handlePhoneChange}
            type="text"
          />
          {showError('phone', errors)}
          <Text>Imię i nazwisko</Text>
          <Input
            value={name}
            onChange={handleNameChange}
            type="text"
          />
          {showError('name', errors)}
          <Text>Czy chcesz nam przekazać dodatkowe informacje?</Text>
          <Textarea
            value={info}
            onChange={handleInfoChange}
          />
          <Text>
            <Link to='/polityka-prywatnosci'>Polityka prywatności</Link>
          </Text>
          <Button
            variant="orange"
            color="white"
            onClick={handleClick}
          >
            Wyślij
          </Button>
        </>}
      </>}
    </div>
  )
}

export default ReservationForm