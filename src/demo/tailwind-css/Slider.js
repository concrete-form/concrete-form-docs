import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Slider from '@concrete-form/html5/Slider'

const Demo = () => (
  <Form>
    <Slider name="demo" min={10} max={90} label="Label of the slider" className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer" />
    { /* example from https://flowbite.com/docs/forms/range/ */ }
  </Form>
)

export default Demo
