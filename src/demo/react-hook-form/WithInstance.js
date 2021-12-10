import React from 'react'
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'
import Input from '@concrete-form/html5/Input'
import SubmitButton from '@concrete-form/html5/SubmitButton'

const Demo = () => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: { firstName: 'John' }
  })

  const onSubmit = data => { alert(JSON.stringify(data, undefined, 2)) }

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Input name="firstName" placeholder="What's your first name ?" />
      <SubmitButton>submit</SubmitButton>
    </Form>
  )
}

export default Demo
