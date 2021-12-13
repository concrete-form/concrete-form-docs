import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Input from '@concrete-form/mui/Input'
import SubmitButton from '@concrete-form/mui/SubmitButton'

const Demo = () => (
  <Form onSubmit={data => alert(data.name)}>
    <Input name="name" label="Enter your name" margin="normal" />
    <SubmitButton fullWidth>Submit</SubmitButton>
  </Form>
)

export default Demo
