import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'
import LabelledControl from '@concrete-form/html5/LabelledControl'
import Input from '@concrete-form/html5/Input'
import Checkbox from '@concrete-form/html5/Checkbox'

import './customLayout.css'

const ControlLayout = ({ name, control, errors }) => (
  <div className="custom-control">
    <div className="custom-control-control-wrapper">
      { control }
    </div>
    { errors && (
      <div className="custom-control-errors-wrapper">
        { errors }
      </div>
    ) }
  </div>
)

const ErrorLayout = ({ errors }) => {
  return (
    <div className="custom-errors">
      { errors.join(',') }
    </div>
  )
}

const ItemLabelLayout = ({
  label,
  control,
  labelPosition = 'left',
}) => {
  return (
    <label className={`custom-item-label concreteform-${labelPosition}`}>
      <div>{ label }</div>
      <div>{ control }</div>
    </label>
  )
}

const ItemsGroupLayout = ({
  items,
}) => {
  return (
    <div className="custom-items-group">
      { items }
    </div>
  )
}

const LabelLayout = ({
  label,
  htmlFor,
}) => {
  return (
    <label className="custom-label" htmlFor={htmlFor}>
      { label }
    </label>
  )
}

const LabelledControlLayout = ({
  control,
  label,
}) => {
  return (
    <div className="custom-labelled-control">
      <div>{ label }</div>
      <div>{ control }</div>
    </div>
  )
}

const Demo = () => {
  const form = useForm()

  useEffect(() => {
    ['demo1', 'demo2'].forEach(field => {
      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })
    })
  }, [])

  return (
    <Form
      form={form}
      onSubmit={() => {}}
      layout={{
        control: ControlLayout,
        errors: ErrorLayout,
        itemLabel: ItemLabelLayout,
        itemsGroup: ItemsGroupLayout,
        label: LabelLayout,
        labelledControl: LabelledControlLayout,
      }}
    >
      <LabelledControl label="Label">
        <Input name="demo1" />
        </LabelledControl>
  
        <LabelledControl label="Label">
          <Checkbox name="demo2" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />
        </LabelledControl>
      </Form>
  )
}

export default Demo
