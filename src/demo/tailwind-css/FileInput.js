import React from 'react'
import Form from '@concrete-form/react-hook-form'
import FileInput from '@concrete-form/html5/FileInput'

const Demo = () => (
  <Form>
    <FileInput name="demo" className="/* exclude-start */ form-input border-solid /* exclude-end */ mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    { /* example from https://tailwindcss-forms.vercel.app/ (simple) */ }
  </Form>
)

export default Demo
