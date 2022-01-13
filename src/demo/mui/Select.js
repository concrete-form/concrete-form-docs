import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Select from '@concrete-form/mui/Select'

const Demo = () => (
  <Form>
    Single select :
    <Select name="select1" options={['foo', 'bar', 'baz', 'biz']} />

    Multiple select :
    <Select name="select2" options={['foo', 'bar', 'baz', 'biz']} multiple />

    Native select :
    <Select name="select3" native options={[
      { label: 'First option', value: 'foo' },
      'bar',
      { label: 'Third option', value: 'baz', props: { disabled: true } },
    ]} />

    Groups (allowEmpty) :
    <Select name="select4" allowEmpty options={[
      'foo',
      { group: 'Group 1', options: ['bar', 'baz'] }
    ]} />

    Childrens (native + allowEmpty) :
    <Select name="select5" native allowEmpty>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="baz">Baz</option>
    </Select>
  </Form>
)

export default Demo
