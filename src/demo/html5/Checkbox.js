import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Checkbox from '@concrete-form/html5/Checkbox'

const Demo = () => (
  <Form>
    Vertical :
    <Checkbox name="demo-vertical" options={['foo', 'bar', 'baz']} />

    <br /> Horizontal :
    <Checkbox name="demo-horizontal" orientation="horizontal" options={[
      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },
      'bar',
      { label: 'baz', value: 'baz', props: { disabled: true } },
    ]} />
  </Form>
)

export default Demo
