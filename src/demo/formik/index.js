import React from 'react'

import Demo from '../../components/Demo'

import SimpleDemo from './Simple'
import SimpleDemoSource from '!!raw-loader!./Simple'

export const Simple = () => <Demo Component={SimpleDemo} source={SimpleDemoSource} />
