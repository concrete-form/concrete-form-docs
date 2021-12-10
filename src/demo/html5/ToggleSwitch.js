import React from 'react'
import Form from '@concrete-form/react-hook-form'
import ToggleSwitch from '@concrete-form/html5/ToggleSwitch'

const Demo = () => (
  <Form>
    <ToggleSwitch name="demo" label="I'm a toggle switch" />
  </Form>
)

export default Demo
