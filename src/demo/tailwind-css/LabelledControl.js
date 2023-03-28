import React from 'react'
import Form from '@concrete-form/react-hook-form'
import LabelledControl from '@concrete-form/html5/LabelledControl'
import Input from '@concrete-form/html5/Input'
import RadioGroup from '@concrete-form/html5/RadioGroup'
import SingleCheckbox from '@concrete-form/html5/SingleCheckbox'

const Demo = () => (
  <Form>
    <LabelledControl label="Label linked to the control">
      <Input name="demo-single" className="/* exclude-start */ form-input border-solid /* exclude-end */ mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    </LabelledControl>

    <LabelledControl label="Label NOT linked to the controls group">
      <RadioGroup name="demo-group" options={['foo', 'bar', 'baz']} className="/* exclude-start */ form-radio border-solid /* exclude-end */ rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" />
    </LabelledControl>

    <LabelledControl label="Label NOT linked to boolean controls">
      <SingleCheckbox name="demo-bool" label="THIS is the real label" className="/* exclude-start */ form-checkbox border-solid /* exclude-end */ rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 " />
    </LabelledControl>

    { /* examples from https://tailwindcss-forms.vercel.app/ (simple) */ }
  </Form>
)

export default Demo
