import React from 'react'
import Form from '@concrete-form/react-hook-form'
import LabelledControl from '@concrete-form/mui/LabelledControl'
import Input from '@concrete-form/mui/Input'
import RadiosGroup from '@concrete-form/mui/RadiosGroup'
import SingleCheckbox from '@concrete-form/mui/SingleCheckbox'

const Demo = () => (
  <Form>
    <LabelledControl label="Label linked to the control">
      <Input name="demo-single" />
    </LabelledControl>

    <LabelledControl label="Label NOT linked to the controls group">
      <RadiosGroup name="demo-group" options={['foo', 'bar', 'baz']} />
    </LabelledControl>

    <LabelledControl label="Label NOT linked to boolean controls">
      <SingleCheckbox name="demo-bool" label="THIS is the real label" />
    </LabelledControl>
  </Form>
)

export default Demo
