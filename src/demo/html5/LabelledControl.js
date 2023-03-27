import React from 'react'
import Form from '@concrete-form/react-hook-form'
import LabelledControl from '@concrete-form/html5/LabelledControl'
import Input from '@concrete-form/html5/Input'
import RadioGroup from '@concrete-form/html5/RadioGroup'
import SingleCheckbox from '@concrete-form/html5/SingleCheckbox'

const Demo = () => (
  <Form>
    <LabelledControl label="Label linked to the control">
      <Input name="demo-single" />
    </LabelledControl>

    <LabelledControl label="Label NOT linked to the controls group">
      <RadioGroup name="demo-group" options={['foo', 'bar', 'baz']} />
    </LabelledControl>

    <LabelledControl label="Label NOT linked to boolean controls">
      <SingleCheckbox name="demo-bool" label="THIS is the real label" />
    </LabelledControl>
  </Form>
)

export default Demo
