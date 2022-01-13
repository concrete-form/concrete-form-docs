import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'
import LabelledControl from '@concrete-form/mui/LabelledControl'
import Input from '@concrete-form/mui/Input'
import CheckboxesGroup from '@concrete-form/mui/CheckboxesGroup'

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'

import './customLayout.css'

const ControlLayout = ({ name, control, errors }) => (
  <FormControl fullWidth error={!!errors} className="custom-mui-control">
    <div className="custom-mui-control-control-wrapper">
      { control }
    </div>
    {errors && <div className="custom-mui-control-errors-wrapper">
      { errors }
    </div>}
  </FormControl>
)

const ErrorLayout = ({ errors }) => {
  return (
    <div className="custom-mui-errors">
      { errors.join(',') }
    </div>
  )
}

const ItemLabelLayout = ({
  label,
  control,
  labelPosition = 'left', /* ignored for this demo */
}) => {
  return (
    <FormControlLabel control={control} label={label} className="custom-mui-item-label" />
  )
}

const ItemsGroupLayout = ({
  items,
}) => {
  return (
    <FormGroup className="custom-mui-items-group">
      { items }
    </FormGroup>
  )
}

const LabelLayout = ({
  label,
  htmlFor,
}) => {
  return (
    <FormLabel className="custom-mui-label" htmlFor={htmlFor}>
      { label }
    </FormLabel>
  )
}

const LabelledControlLayout = ({
  control,
  label,
}) => {
  return (
    <Grid container className="custom-mui-labelled-control">
      <Grid item xs={12} sm={6}>
      { label }
      </Grid>
      <Grid item xs={12} sm={6}>
      { control }
      </Grid>
    </Grid>
  )
}

const Demo = () => {
  const form = useForm()

  useEffect(() => {
    ['demo1', 'demo2'].forEach(field => {
      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })
    })    
  })

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
          <CheckboxesGroup name="demo2" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />
        </LabelledControl>
      </Form>
  )
}

export default Demo
