/*exclude-start*/
import React from 'react'
import Form from '@concrete-form/react-hook-form'
import CheckboxGroup from '@concrete-form/html5/CheckboxGroup'

const Demo = () => (
  <Form>
    {/* exclude-end */}
<CheckboxGroup name="demo" options={[
  { label: 'Displayed label', value: 'actual-value' },
  { label: <strong>I am bold</strong>, value: '123'},
  { label: 'I am disabled', value: 'abc', props: { disabled: true } },
]} />
    {/* exclude-start */}
  </Form>
)

export default Demo
/*exclude-end*/
