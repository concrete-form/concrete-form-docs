import React from 'react'
import Form from '@concrete-form/react-hook-form'
import DateTime from '@concrete-form/html5/DateTime'

const Demo = () => (
  <Form>
    date: <DateTime name="date" type="date" />
    time: <DateTime name="time" type="time" />
    datetime: <DateTime name="datetime" type="datetime" />
  </Form>
)

export default Demo
