import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'





const EndDatePicker = ( ) => {

    const [ value, setValue ] = useState( null )


    return (
        <LocalizationProvider dateAdapter={ AdapterMoment } >
            <DatePicker
                label='End Date'
                value={ value }
                onChange={ ( newValue) => setValue( newValue )}
                renderInput={ ( params ) => <TextField {...params} /> } 
            />
        </LocalizationProvider>
    )

}




export default EndDatePicker