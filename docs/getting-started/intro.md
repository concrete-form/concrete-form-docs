---
sidebar_position: 1
title: Introduction
slug: /
---

# Introduction

## The problem
- There are already very good form libraries for React. ([`React Hook Form`](https://react-hook-form.com/), [`Formik`](https://formik.org/), ...)
- There are already very good UI kits for React ([`Material-UI`](https://mui.com/), [`Materialize`](https://github.com/react-materialize/react-materialize), ...)

**Using them together always mean a lot of boiler plate before you're ready to start coding your forms.**
## Here comes Concrete Form

**Concrete-Form** exports all the common form controls that you need. Renders them using the **UI kit of your choice**, registers them automatically on the **form library of your choice**. 

- We **render** the controls
- We **register** the controls on the form that you selected
- We **display the errors**
- We help you to **translate** validation errors
- We help you to **test** your forms

### Example
> **`React Hook Form`** with **`Material-UI`**

```jsx
import Form from '@concrete-form/react-hook-form'
import { Input, SubmitButton } from '@concrete-form/mui'

const App = () => (
  <Form onSubmit={...}>
    <Input name="name" placeholder="Enter your name" />
    <SubmitButton>Send</SubmitButton>
  </Form>
)
```

#### `<Form>`
- Render an HTML `<form>`
- Can accept an existing form created with [`useForm()`](https://react-hook-form.com/api/useform) or will create it for you 🍺
- Exposes `React Hook Form` context so you can use [`useFormContext()`](https://react-hook-form.com/api/useformcontext)

#### `<Input>` + `<SubmitButton>`
- Render a `MUI TextField` and a `MUI Button`
- Since it's inside `<Form>`, "**name**" input is registered automatically on `React Hook Form`.
- Errors are displayed automatically

## Available implementations
### Form libraries
- React Hook Form
- Formik

### UI Kits
- HTML5
- Material-UI
- Materialize

## Can I customize my form ?

**Yup!** You have a complete freedom inside `<Form />`. Your existing controls will work just like before. You can mix Concrete Form's controls with any other controls.

Our available controls are only there to save you time. We make no design decision and we forward all received props to the underneath UI component.

- You can instanciate the form yourself and use any settings that you want
- You can provide parameters when registering the field on the form
- You can customize 100% of the UI
