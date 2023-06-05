import React, { useState, useContext } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import { UserContext } from '../App'
import moment from 'moment'





const EndDatePicker = ( ) => {


    const { endDateValue, setEndDateValue } = useContext( UserContext )




    return (
        <LocalizationProvider dateAdapter={ AdapterMoment } >
            <DatePicker
                label='Check-out'
                value={ endDateValue }
                onChange={ ( newValue ) => {
                    // const date = new Date( newValue ).toLocaleDateString('fr-FR')
                    // console.log( date )
                    // setEndDateValue( date )
                    const date = newValue._d.toLocaleDateString('fr-FR')
                    setEndDateValue( date )
                    console.log( date )
                    }
                }
                renderInput={ ( params ) => <TextField {...params} /> }
                className='start-date-picker-styling'
            />
        </LocalizationProvider>
    )

}




export default EndDatePicker