import React, { useContext, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

// modules
import { UserContext } from '../App';

const EndDatePicker = () => {
  // destructure values from context
  const { endDateValue, setEndDateValue, setEndDateMilliseconds } =
    useContext(UserContext);

  // store end date value in local storage
  useEffect(() => {
    window.localStorage.setItem('endDateValue', JSON.stringify(endDateValue));
  }, [endDateValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Check-out"
        value={endDateValue}
        onChange={(newValue) => {
          if (newValue !== null) {
            const date = newValue._d;
            setEndDateMilliseconds(date);
            const day = date.getDate();
            let stringDay = day.toString();
            if (stringDay.length < 2) {
              stringDay = '0' + stringDay;
            }

            const month = date.getMonth() + 1;
            let stringMonth = month.toString();
            if (stringMonth.length < 2) {
              stringMonth = '0' + stringMonth;
            }

            const year = date.getFullYear();
            let stringYear = year.toString();

            let finalDate = stringMonth + '/' + stringDay + '/' + stringYear;
            setEndDateValue(finalDate);
          }
        }}
        renderInput={(params) => <TextField {...params} />}
        className="start-date-picker-styling"
      />
    </LocalizationProvider>
  );
};

export default EndDatePicker;
