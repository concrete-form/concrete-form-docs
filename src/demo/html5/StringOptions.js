/*exclude-start*/
import React from 'react'
import Form from '@concrete-form/react-hook-form'
import RadiosGroup from '@concrete-form/html5/RadiosGroup'

const Demo = () => (
  <Form>
    {/* exclude-end */}
    <RadiosGroup name="demo" options={['foo', 'bar', 'baz']} />
    {/* exclude-start */}
  </Form>
)

export default Demo
/*exclude-end*/
