import React, { useState, useContext } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { Dayjs } from 'dayjs'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import { UserContext } from '../App'






const StartDatePicker = () => {


  const { startDateValue, setStartDateValue } = useContext( UserContext )

  
  return (
    <LocalizationProvider dateAdapter={ AdapterMoment }>
        <DatePicker
            label='Check-in'
            value={ startDateValue }
            onChange={ ( newValue ) => {
              const d = new Date(newValue).toLocaleDateString('fr-FR');
              console.log(d);
              setStartDateValue( d )
            }
            }
            renderInput={ ( params ) => <TextField {...params} /> }
            className='start-date-picker-styling'
        />
    </LocalizationProvider>

  )

}



export default StartDatePicker