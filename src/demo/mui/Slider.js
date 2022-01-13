import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Slider from '@concrete-form/mui/Slider'

const Demo = () => (
  <Form>
    <Slider name="demo" min={10} max={90} label="Label of the slider" />
  </Form>
)

export default Demo
