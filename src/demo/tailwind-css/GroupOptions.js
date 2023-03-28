/*exclude-start*/
import React from 'react'
import Form from '@concrete-form/react-hook-form'
import Select from '@concrete-form/html5/Select'
const Demo = () => (
  <Form>
    {/* exclude-end */}

<Select name="demo" options={[
  'first',
  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },
  'not-part-of-any-group',
  { group: 'Disabled group', options: ['first', 'second'], props: { disabled: true } },
]} />

    {/* exclude-start */}
  </Form>
)

export default Demo
/*exclude-end*/
