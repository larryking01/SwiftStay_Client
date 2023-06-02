import React, { useState, useContext } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import { UserContext } from '../App'





const EndDatePicker = ( ) => {


    const { endDateValue, setEndDateValue } = useContext( UserContext )



    return (
        <LocalizationProvider dateAdapter={ AdapterMoment } >
            <DatePicker
                label='Check-out'
                value={ endDateValue }
                onChange={ ( newValue ) => {
                    const d = new Date(newValue).toLocaleDateString('fr-FR');
                    console.log(d);
                    setEndDateValue( d )
                  }
                }
                renderInput={ ( params ) => <TextField {...params} /> } 
                className='end-date-picker-styling'
            />
        </LocalizationProvider>
    )

}




export default EndDatePicker