/*exclude-start*/
import React from 'react'
import Form from '@concrete-form/react-hook-form'
import CheckboxesGroup from '@concrete-form/mui/CheckboxesGroup'

const Demo = () => (
  <Form>
    {/* exclude-end */}
<CheckboxesGroup name="demo" options={[
  { label: 'Displayed label', value: 'actual-value' },
  { label: <strong>I am bold</strong>, value: '123'},
  { label: 'I am disabled', value: 'abc', props: { disabled: true } },
]} />
    {/* exclude-start */}
  </Form>
)

export default Demo
/*exclude-end*/
