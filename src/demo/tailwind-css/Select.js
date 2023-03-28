import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Select from '@concrete-form/html5/Select'

const Demo = () => (
  <Form>
    String options :
    <Select name="select1" options={['foo', 'bar', 'baz', 'biz']} className="/* exclude-start */ form-select border-solid /* exclude-end */ mt-1 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

    Multiple select :
    <Select name="select2" options={['foo', 'bar', 'baz', 'biz']} multiple className="/* exclude-start */ form-multiselect border-solid /* exclude-end */ mt-1 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

    Labelled options :
    <Select name="select3" options={[
      { label: 'First option', value: 'foo' },
      'bar',
      { label: 'Third option', value: 'baz', props: { disabled: true } },
    ]} className="/* exclude-start */ form-select border-solid /* exclude-end */ mt-1 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

    Groups (allowEmpty) :
    <Select name="select4" allowEmpty options={[
      'foo',
      { group: 'Group 1', options: ['bar', 'baz'] }
    ]} className="/* exclude-start */ form-select border-solid /* exclude-end */ mt-1 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

    Childrens (allowEmpty) :
    <Select name="select5" allowEmpty className="/* exclude-start */ form-select border-solid /* exclude-end */ mt-1 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="baz">Baz</option>
    </Select>

    { /* example from https://tailwindcss-forms.vercel.app/ (simple) */ }
  </Form>
)

export default Demo
