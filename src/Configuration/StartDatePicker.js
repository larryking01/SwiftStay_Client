import React, { useContext, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import { UserContext } from '../App'






const StartDatePicker = () => {

  // destructuring values from context
  const { startDateValue, setStartDateValue, setStartDateMilliseconds, } = useContext( UserContext )


  // effect hook to store start date value in local storage
  useEffect(() => {
    window.localStorage.setItem( 'startDateValue', JSON.stringify( startDateValue ) )
    console.log(`local storage start date value = ${ startDateValue }`)

  }, [ startDateValue ])






  
  return (
    <LocalizationProvider dateAdapter={ AdapterMoment }>
        <DatePicker
            label='Check-in'
            value={ startDateValue }
            onChange={ ( newValue ) => {
              if ( newValue !== null ) {
                  const date = newValue._d
                  setStartDateMilliseconds( date )
                  console.log( `date = ${ date }` )

                  const day = date.getDate()
                  let stringDay = day.toString()
                  if( stringDay.length < 2 ) {
                    stringDay = '0' + stringDay
                  }

                  const month = date.getMonth() + 1
                  let stringMonth = month.toString()
                  if( stringMonth.length < 2 ) {
                    stringMonth = '0' + stringMonth
                  }

                  const year = date.getFullYear()
                  let stringYear = year.toString()

                  let finalDate = stringMonth + '/' + stringDay + '/' +  stringYear
                  console.log(`final date = ${ finalDate }`)
                  setStartDateValue( finalDate )
                  
              }

                }
            }
            renderInput={ ( params ) => <TextField {...params} /> }
            className='start-date-picker-styling'
        />
    </LocalizationProvider>

  )

}



export default StartDatePicker