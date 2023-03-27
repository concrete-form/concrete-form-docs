/*exclude-start*/
import React from 'react'
import Form from '@concrete-form/react-hook-form'
import RadioGroup from '@concrete-form/mui/RadioGroup'

const Demo = () => (
  <Form>
    {/* exclude-end */}
    <RadioGroup name="demo" options={['foo', 'bar', 'baz']} />
    {/* exclude-start */}
  </Form>
)

export default Demo
/*exclude-end*/
