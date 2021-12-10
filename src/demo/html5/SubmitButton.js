import React from 'react'
import Form from '@concrete-form/react-hook-form'
import SubmitButton from '@concrete-form/html5/SubmitButton'

const wait = delay => new Promise(resolve => setTimeout(resolve, delay))

const Demo = () => (
  <Form onSubmit={() => wait(3000)}>
    <SubmitButton>Submit</SubmitButton>
  </Form>
)

export default Demo
