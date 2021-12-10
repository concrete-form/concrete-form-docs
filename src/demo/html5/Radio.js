import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Radio from '@concrete-form/html5/Radio'

const Demo = () => (
  <Form>
    Vertical :
    <Radio name="demo-vertical" options={['foo', 'bar', 'baz']} />

    <br /> Horizontal :
    <Radio name="demo-horizontal" orientation="horizontal" options={[
      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },
      'bar',
      { label: 'baz', value: 'baz', props: { disabled: true } },
    ]} />
  </Form>
)

export default Demo
