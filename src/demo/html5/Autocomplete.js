import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Autocomplete from '@concrete-form/html5/Autocomplete'

const Demo = () => (
  <Form>
    <Autocomplete name="demo" placeholder="I'm a boring autocomplete field" />
  </Form>
)

export default Demo
