import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Autocomplete from '@concrete-form/mui/Autocomplete'

const Demo = () => (
  <Form>
    <Autocomplete
      name="demo"
      options={[ 'foo', 'bar', 'baz' ]}
      textFieldProps={{ label: 'I\'m an autocomplete field' }}
    />
  </Form>
)

export default Demo
