/*exclude-start*/
import React from 'react'
import { LocalizationProvider } from '@mui/lab/'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
/*exclude-end*/
import Form from '@concrete-form/react-hook-form'
import DateTime from '@concrete-form/mui/DateTime'

const Demo = () => (
  <Form>{ /*exclude-start*/ }<LocalizationProvider dateAdapter={AdapterDateFns}>{ /*exclude-end*/ }
    date: <DateTime name="date" type="date" />
    time: <DateTime name="time" type="time" />
    datetime: <DateTime name="datetime" type="datetime" />
  { /*exclude-start*/ }</LocalizationProvider>{ /*exclude-end*/ }</Form>
)

export default Demo
