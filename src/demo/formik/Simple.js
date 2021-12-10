import React from 'react'
import Form from '@concrete-form/formik'
import Input from '@concrete-form/html5/Input'
import SubmitButton from '@concrete-form/html5/SubmitButton'

const Demo = () => {
  const onSubmit = data => { alert(JSON.stringify(data, undefined, 2)); return true }

  return (
    <Form initialValues={{ firstName: 'John' }} onSubmit={onSubmit}>
      <Input name="firstName" placeholder="What's your first name ?" />
      <SubmitButton>submit</SubmitButton>
    </Form>
  )
}

export default Demo
