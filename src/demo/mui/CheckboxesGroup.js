import React from 'react'
import Form from '@concrete-form/react-hook-form'
import CheckboxesGroup from '@concrete-form/mui/CheckboxesGroup'

const Demo = () => (
  <Form>
    Vertical :
    <CheckboxesGroup name="demo-vertical" options={['foo', 'bar', 'baz']} />

    <br /> Horizontal :
    <CheckboxesGroup name="demo-horizontal" orientation="horizontal" options={[
      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },
      'bar',
      { label: 'baz', value: 'baz', props: { disabled: true } },
    ]} />
  </Form>
)

export default Demo
