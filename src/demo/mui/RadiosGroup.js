import React from 'react'
import Form from '@concrete-form/react-hook-form'
import RadiosGroup from '@concrete-form/mui/RadiosGroup'

const Demo = () => (
  <Form>
    Vertical :
    <RadiosGroup name="demo-vertical" options={['foo', 'bar', 'baz']} />

    <br /> Horizontal :
    <RadiosGroup name="demo-horizontal" orientation="horizontal" options={[
      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },
      'bar',
      { label: 'baz', value: 'baz', props: { disabled: true } },
    ]} />
  </Form>
)

export default Demo
