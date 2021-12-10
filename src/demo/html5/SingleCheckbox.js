import React from 'react'
import Form from '@concrete-form/react-hook-form'
import SingleCheckbox from '@concrete-form/html5/SingleCheckbox'

const Demo = () => (
  <Form>
    <SingleCheckbox name="demo" label={(
      <>I accept the <a href="#void">terms and conditions</a>.</>
    )} />
  </Form>
)

export default Demo
