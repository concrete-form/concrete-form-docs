import React from 'react'
import Form from '@concrete-form/react-hook-form'
import ToggleSwitch from '@concrete-form/mui/ToggleSwitch'
/* exclude-start */
import { useForm } from 'react-hook-form'
/* exclude-end */
const Demo = () => /* exclude-start */ {
  const form = useForm({defaultValues: { 'disabled-active' : true }})
  return /* exclude-end */  (
  <Form /* exclude-start */ form={form} /* exclude-end */>
    <ToggleSwitch name="demo" label="I'm a toggle switch" />
    <ToggleSwitch name="disabled" disabled label="I'm a disabled toggle switch" />
    <ToggleSwitch name="disabled-active" disabled label="I'm a disabled + active toggle switch" />
  </Form>
  )
}

export default Demo
