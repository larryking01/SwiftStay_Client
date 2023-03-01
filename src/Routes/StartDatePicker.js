import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { Dayjs } from 'dayjs'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'






const StartDatePicker = () => {


  const [value, setValue] = useState(null)



  return (
    <LocalizationProvider dateAdapter={ AdapterMoment }>
        <DatePicker 
            label='Start Date'
            value={ value }
            onChange={ ( newValue ) => setValue( newValue )}
            renderInput={ ( params ) => <TextField {...params} /> }
        />
    </LocalizationProvider>

  )

}



export default StartDatePicker