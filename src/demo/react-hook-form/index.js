import React from 'react'

import Demo from '../../components/Demo'

import NoInstanceDemo from './NoInstance'
import NoInstanceDemoSource from '!!raw-loader!./NoInstance'

import WithInstanceDemo from './WithInstance'
import WithInstanceDemoSource from '!!raw-loader!./WithInstance'

import ValidationDemo from './Validation'
import ValidationDemoSource from '!!raw-loader!./Validation'

export const NoInstance = () => <Demo Component={NoInstanceDemo} source={NoInstanceDemoSource} />
export const WithInstance = () => <Demo Component={WithInstanceDemo} source={WithInstanceDemoSource} />
export const Validation = () => <Demo Component={ValidationDemo} source={ValidationDemoSource} />
