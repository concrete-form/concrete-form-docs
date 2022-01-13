/*exclude-start*/
import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Select from '@concrete-form/mui/Select'
const Demo = () => (
  <Form>
    {/* exclude-end */}

<Select name="demo" options={[
  'first',
  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },
  'not-part-of-any-group',
  { group: 'Primary group', options: ['first', 'second'], props: { color: 'primary' } },
]} />

    {/* exclude-start */}
  </Form>
)

export default Demo
/*exclude-end*/
