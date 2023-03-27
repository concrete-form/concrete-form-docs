import React from 'react'

import Demo from '../../components/Demo'

import InputDemo from './Input'
import InputDemoSource from '!!raw-loader!./Input'

import AutocompleteDemo from './Autocomplete'
import AutocompleteDemoSource from '!!raw-loader!./Autocomplete'

import DateTimeDemo from './DateTime'
import DateTimeDemoSource from '!!raw-loader!./DateTime'

import FileInputDemo from './FileInput'
import FileInputDemoSource from '!!raw-loader!./FileInput'

import SelectDemo from './Select'
import SelectDemoSource from '!!raw-loader!./Select'

import SingleCheckboxDemo from './SingleCheckbox'
import SingleCheckboxDemoSource from '!!raw-loader!./SingleCheckbox'

import SliderDemo from './Slider'
import SliderDemoSource from '!!raw-loader!./Slider'

import TextareaDemo from './Textarea'
import TextareaDemoSource from '!!raw-loader!./Textarea'

import ToggleSwitchDemo from './ToggleSwitch'
import ToggleSwitchDemoSource from '!!raw-loader!./ToggleSwitch'

import CheckboxGroupDemo from './CheckboxGroup'
import CheckboxGroupDemoSource from '!!raw-loader!./CheckboxGroup'

import RadioGroupDemo from './RadioGroup'
import RadioGroupDemoSource from '!!raw-loader!./RadioGroup'

import SubmitButtonDemo from './SubmitButton'
import SubmitButtonDemoSource from '!!raw-loader!./SubmitButton'

import LabelledControlDemo from './LabelledControl'
import LabelledControlDemoSource from '!!raw-loader!./LabelledControl'

import CustomLayoutDemo from './CustomLayout'
import CustomLayoutDemoSource from '!!raw-loader!./CustomLayout'

import StringOptionsDemo from './StringOptions'
import StringOptionsDemoSource from '!!raw-loader!./StringOptions'

import LabelledOptionsDemo from './LabelledOptions'
import LabelledOptionsDemoSource from '!!raw-loader!./LabelledOptions'

import GroupOptionsDemo from './GroupOptions'
import GroupOptionsDemoSource from '!!raw-loader!./GroupOptions'

export const Input = props => <Demo Component={InputDemo} source={InputDemoSource} {...props} />
export const Autocomplete = props => <Demo Component={AutocompleteDemo} source={AutocompleteDemoSource} {...props} />
export const DateTime = props => <Demo Component={DateTimeDemo} source={DateTimeDemoSource} {...props} />
export const FileInput = props => <Demo Component={FileInputDemo} source={FileInputDemoSource} {...props} />
export const Select = props => <Demo Component={SelectDemo} source={SelectDemoSource} {...props} />
export const SingleCheckbox = props => <Demo Component={SingleCheckboxDemo} source={SingleCheckboxDemoSource} {...props} />
export const Slider = props => <Demo Component={SliderDemo} source={SliderDemoSource} {...props} />
export const Textarea = props => <Demo Component={TextareaDemo} source={TextareaDemoSource} {...props} />
export const ToggleSwitch = props => <Demo Component={ToggleSwitchDemo} source={ToggleSwitchDemoSource} {...props} />
export const CheckboxGroup = props => <Demo Component={CheckboxGroupDemo} source={CheckboxGroupDemoSource} {...props} />
export const RadioGroup = props => <Demo Component={RadioGroupDemo} source={RadioGroupDemoSource} {...props} />
export const SubmitButton = props => <Demo Component={SubmitButtonDemo} source={SubmitButtonDemoSource} {...props} />
export const LabelledControl = props => <Demo Component={LabelledControlDemo} source={LabelledControlDemoSource} {...props} />

export const CustomLayout = props => <Demo Component={CustomLayoutDemo} source={CustomLayoutDemoSource} {...props} />

export const StringOptions = props => <Demo Component={StringOptionsDemo} source={StringOptionsDemoSource} {...props} />
export const LabelledOptions = props => <Demo Component={LabelledOptionsDemo} source={LabelledOptionsDemoSource} {...props} />
export const GroupOptions = props => <Demo Component={GroupOptionsDemo} source={GroupOptionsDemoSource} {...props} />
