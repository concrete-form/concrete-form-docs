import React from 'react'

import Demo from '../../components/Demo'

import BasicDemo from './Basic'
import BasicDemoSource from '!!raw-loader!./Basic'

export const Basic = props => <Demo Component={BasicDemo} source={BasicDemoSource} {...props} />
