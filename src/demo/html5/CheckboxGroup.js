import React from 'react'
import Form from '@concrete-form/react-hook-form'
import CheckboxGroup from '@concrete-form/html5/CheckboxGroup'

const Demo = () => (
  <Form>
    Vertical :
    <CheckboxGroup name="demo-vertical" options={['foo', 'bar', 'baz']} />

    <br /> Horizontal :
    <CheckboxGroup name="demo-horizontal" orientation="horizontal" options={[
      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },
      'bar',
      { label: 'baz', value: 'baz', props: { disabled: true } },
    ]} />
  </Form>
)

export default Demo
