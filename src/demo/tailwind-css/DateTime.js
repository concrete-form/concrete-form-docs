import React from 'react'
import Form from '@concrete-form/react-hook-form'
import DateTime from '@concrete-form/html5/DateTime'

const Demo = () => (
  <Form>
    date: <DateTime name="date" type="date" className="/* exclude-start */ form-input border-solid /* exclude-end */ mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    time: <DateTime name="time" type="time" className="/* exclude-start */ form-input border-solid /* exclude-end */ mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    datetime: <DateTime name="datetime" type="datetime" className="/* exclude-start */ form-input border-solid /* exclude-end */ mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    { /* example from https://tailwindcss-forms.vercel.app/ (simple) */ }
  </Form>
)

export default Demo




