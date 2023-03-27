import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'
import RadiosGroup from '@concrete-form/mui/RadiosGroup'
import CheckboxesGroup from '@concrete-form/mui/CheckboxesGroup'
import CodeBlock from '@theme/CodeBlock'
import Admonition from '@theme/Admonition'
import Grid from '@mui/material/Grid'

import styles from './InstallForm.module.css'

const Library = ({
  name,
  logo,
}) => (
  <div className={styles.libraryOption}>
    <img alt="" src={`/img/icons/${logo}`} /> { name }
  </div>
)

const concreteFormDependencies = {
  'reactHookForm': '@concrete-form/react-hook-form',
  'formik': '@concrete-form/formik',
  'html5': '@concrete-form/html5',
  'mui': '@concrete-form/mui',
}

const optionnalDependencies = {
  reactHookForm: {
    'react-hook-form': <code>React Hook Form</code>,
    'yup @hookform/resolvers': <><code>Yup</code> (recommended validation library)</>,
  },
  formik: {
    'formik': <code>Formik</code>,
    'yup': <><code>Yup</code> (recommended validation library)</>,
},
  mui: {
    '@mui/material @emotion/react @emotion/styled': <><code>Material-UI</code> (include <code>@emotion/react</code> + <code>@emotion/styled</code>)</>,
    '@mui/x-date-pickers': <><code>@mui/x-date-pickers</code> (needed for <code>DateTime</code> inputs)</>,
    'date-fns': <><code>Date-fns</code> (recommanded date library needed for <code>DateTime</code> inputs)</>,
  },
}

const InstallForm = () => {
  const form = useForm({
    defaultValues: {
      packageManager: 'yarn',
      form: 'reactHookForm',
      ui: 'html5',
      optionnalDependencies: [],
    }
  })

  const { getValues } = form
  const values = getValues()
  const {
    packageManager,
    form: selectedForm,
    ui: selectedUi,
    optionnalDependencies: selectedOptionnalDependencies
  } = values

  const availableOptionnalDependencies = useMemo(() => {
    const dependencies = {}
    if(optionnalDependencies[selectedForm]){
      Object.entries(optionnalDependencies[selectedForm]).forEach(([libName, libDescription]) => {
        dependencies[libName] = libDescription
      })
    }
    if(optionnalDependencies[selectedUi]){
      Object.entries(optionnalDependencies[selectedUi]).forEach(([libName, libDescription]) => {
        dependencies[libName] = libDescription
      })
    }
    return dependencies
  }, [selectedForm, selectedUi])

  /* optionnal dependencies options */

  const optionnalDependenciesOptions = useMemo(() => {
    return Object.entries(availableOptionnalDependencies).map(([value, label]) => ({
      value,
      label,
    }))
  }, [availableOptionnalDependencies])

  /* filter selected optionnal depdendencies that are still visible */

  const selectedActiveOptionnalDependencies = useMemo(() => {
    return selectedOptionnalDependencies
      ?.filter(dependency => dependency in availableOptionnalDependencies)
      ?.map(dep => dep.split(' '))
      ?.flat()
  }, [selectedOptionnalDependencies, availableOptionnalDependencies])

  /* result */

  const installCommand = useMemo(() => {
    const packages = [
      concreteFormDependencies[selectedForm],
      concreteFormDependencies[selectedUi],
      ...selectedActiveOptionnalDependencies
    ].join(' \\\n  ')

    return packageManager === 'yarn' ? `yarn add ${packages}` : `npm install ${packages}`
  }, [ packageManager, selectedForm, selectedUi, selectedActiveOptionnalDependencies ])

  return (
    <>
      <Form form={form}>

        <h3>Package manager</h3>
        <div className={styles.options}>
          <RadiosGroup
            name="packageManager"
            orientation="horizontal"
            options={[
              {label: 'Yarn', value: 'yarn'},
              {label: 'Npm', value: 'npm'},
            ]}
          />
        </div>

        <Admonition type="note">
          You need to install <strong>2 packages</strong> to get started. (Form + UI)
        </Admonition>

        <Grid container>
          <Grid xs={12} sm={6}>

            <h3>Form implementation</h3>
            <div className={styles.options}>
              <RadiosGroup
                name="form"
                options={[
                  {label: <Library name="React Hook Form" logo="rhf.png" />, value: 'reactHookForm'},
                  {label: <Library name="Formik" logo="formik.png" />, value: 'formik'},
                ]}
              />
            </div>

          </Grid>
          <Grid xs={12} sm={6}>

            <h3>UI implementation</h3>
            <div className={styles.options}>
              <RadiosGroup
                name="ui"
                options={[
                  {label: <Library name="HTML5" logo="html5.png" />, value: 'html5'},
                  {label: <Library name="Material-UI" logo="mui.png" />, value: 'mui'},
                ]}
              />
            </div>

          </Grid>
        </Grid>

        <h3>Optionnal dependencies</h3>

        <div className={styles.options}>
          <CheckboxesGroup
            name="optionnalDependencies"
            options={optionnalDependenciesOptions}
          />
        </div>
      </Form>

      <CodeBlock className="language-bash">
        { installCommand }
      </CodeBlock>
    </>
  )
}

export default InstallForm
