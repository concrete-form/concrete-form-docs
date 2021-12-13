/*exclude-start*/
import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Radio from '@concrete-form/html5/Radio'
const Demo = () => (
  <Form>
    {/* exclude-end */}
    <Radio name="demo" options={['foo', 'bar', 'baz']} />
    {/* exclude-start */}
  </Form>
)

export default Demo
/*exclude-end*/
