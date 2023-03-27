import React from 'react'
import Form from '@concrete-form/react-hook-form'
import RadioGroup from '@concrete-form/html5/RadioGroup'

const Demo = () => (
  <Form>
    Vertical :
    <RadioGroup name="demo-vertical" options={['foo', 'bar', 'baz']} />

    <br /> Horizontal :
    <RadioGroup name="demo-horizontal" orientation="horizontal" options={[
      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },
      'bar',
      { label: 'baz', value: 'baz', props: { disabled: true } },
    ]} />
  </Form>
)

export default Demo
