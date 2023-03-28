import React from 'react'
import Form from '@concrete-form/react-hook-form'
import CheckboxGroup from '@concrete-form/html5/CheckboxGroup'

const Demo = () => (
  <Form>
    Vertical :
    <CheckboxGroup name="demo-vertical" options={['foo', 'bar', 'baz']} className="/* exclude-start */ form-checkbox border-solid /* exclude-end */ rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" />

    <br /> Horizontal :
    <CheckboxGroup name="demo-horizontal" orientation="horizontal" options={[
      { label: <span className="text-pink-500">Foo</span>, value: 'foo' },
      'bar',
      { label: 'baz', value: 'baz', props: { disabled: true } },
    ]} className="/* exclude-start */ form-checkbox border-solid /* exclude-end */ ml-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" />

    { /* example from https://tailwindcss-forms.vercel.app/ (simple) */ }
  </Form>
)

export default Demo
