import React from 'react'
import Form from '@concrete-form/react-hook-form'
import SingleCheckbox from '@concrete-form/html5/SingleCheckbox'

const Demo = () => (
  <Form>
    <SingleCheckbox name="demo" label={(
      <>I accept the <a href="#void">terms and conditions</a>.</>
    )} className="/* exclude-start */ form-checkbox border-solid /* exclude-end */ rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 " />
    { /* example from https://tailwindcss-forms.vercel.app/ (simple) */ }
  </Form>
)

export default Demo
