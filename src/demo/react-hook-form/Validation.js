import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Input from '@concrete-form/html5/Input'
import SubmitButton from '@concrete-form/html5/SubmitButton'

const Demo = () => {
  const onSubmit = data => { alert(JSON.stringify(data, undefined, 2)) }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="firstName"
        placeholder="What's your first name ?"
        fieldProps={{
          required: true,
          minLength: { value: 5, message: 'too short !' }
        }}
      />

      <SubmitButton>submit</SubmitButton>
    </Form>
  )
}

export default Demo
