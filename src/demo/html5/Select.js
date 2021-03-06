import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Select from '@concrete-form/html5/Select'

const Demo = () => (
  <Form>
    String options :
    <Select name="select1" options={['foo', 'bar', 'baz', 'biz']} />

    Multiple select :
    <Select name="select2" options={['foo', 'bar', 'baz', 'biz']} multiple />

    Labelled options :
    <Select name="select3" options={[
      { label: 'First option', value: 'foo' },
      'bar',
      { label: 'Third option', value: 'baz', props: { disabled: true } },
    ]} />

    Groups (allowEmpty) :
    <Select name="select4" allowEmpty options={[
      'foo',
      { group: 'Group 1', options: ['bar', 'baz'] }
    ]} />

    Childrens (allowEmpty) :
    <Select name="select5" allowEmpty>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="baz">Baz</option>
    </Select>
  </Form>
)

export default Demo
