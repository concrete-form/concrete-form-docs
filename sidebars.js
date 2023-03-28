/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        { type: 'doc', id: 'getting-started/intro' },
        { type: 'doc', id: 'getting-started/install' },
      ]
    },
    {
      type: 'category',
      label: 'Forms',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'React Hook Form',
          link: {
            type: 'doc',
            id: 'form/react-hook-form/api',
          },
          className: 'sidebar-driver sidebar-react-hook-form',
          items: [
            { type: 'doc', id: 'form/react-hook-form/intro' },
            { type: 'doc', id: 'form/react-hook-form/api' },
          ]
        },
        {
          type: 'category',
          label: 'Formik',
          link: {
            type: 'doc',
            id: 'form/formik/api',
          },
          className: 'sidebar-driver sidebar-formik',
          items: [
            { type: 'doc', id: 'form/formik/intro' },
            { type: 'doc', id: 'form/formik/api' },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Controls',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'HTML5',
          link: {
            type: 'doc',
            id: 'controls/html5/api',
          },
          className: 'sidebar-driver sidebar-html5',
          items: [
            { type: 'doc', id: 'controls/html5/intro' },
            { type: 'doc', id: 'controls/html5/api' },
            { type: 'doc', id: 'controls/html5/controls-options' },
            { type: 'doc', id: 'controls/html5/advanced-layout-customization' },
          ]
        },
        {
          type: 'category',
          label: 'Material-UI',
          link: {
            type: 'doc',
            id: 'controls/mui/api',
          },
          className: 'sidebar-driver sidebar-mui',
          items: [
            { type: 'doc', id: 'controls/mui/intro' },
            { type: 'doc', id: 'controls/mui/api' },
            { type: 'doc', id: 'controls/mui/controls-options' },
            { type: 'doc', id: 'controls/mui/advanced-layout-customization' },
          ]
        },
        {
          type: 'category',
          label: 'Tailwind CSS',
          link: {
            type: 'doc',
            id: 'controls/tailwind-css/api',
          },
          className: 'sidebar-driver sidebar-tw',
          items: [
            { type: 'doc', id: 'controls/tailwind-css/intro' },
            { type: 'doc', id: 'controls/tailwind-css/api' },
          ]
        },
      ]
    },
    { type: 'doc', id: 'controls-list' },
    { type: 'doc', id: 'translations' },
    { type: 'doc', id: 'unit-tests' },
  ]
};

module.exports = sidebars;
