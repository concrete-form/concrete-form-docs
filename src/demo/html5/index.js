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

import CheckboxDemo from './Checkbox'
import CheckboxDemoSource from '!!raw-loader!./Checkbox'

import RadioDemo from './Radio'
import RadioDemoSource from '!!raw-loader!./Radio'

import SubmitButtonDemo from './SubmitButton'
import SubmitButtonDemoSource from '!!raw-loader!./SubmitButton'

import LabelledControlDemo from './LabelledControl'
import LabelledControlDemoSource from '!!raw-loader!./LabelledControl'

export const Input = () => <Demo Component={InputDemo} source={InputDemoSource} />
export const Autocomplete = () => <Demo Component={AutocompleteDemo} source={AutocompleteDemoSource} />
export const DateTime = () => <Demo Component={DateTimeDemo} source={DateTimeDemoSource} />
export const FileInput = () => <Demo Component={FileInputDemo} source={FileInputDemoSource} />
export const Select = () => <Demo Component={SelectDemo} source={SelectDemoSource} />
export const SingleCheckbox = () => <Demo Component={SingleCheckboxDemo} source={SingleCheckboxDemoSource} />
export const Slider = () => <Demo Component={SliderDemo} source={SliderDemoSource} />
export const Textarea = () => <Demo Component={TextareaDemo} source={TextareaDemoSource} />
export const ToggleSwitch = () => <Demo Component={ToggleSwitchDemo} source={ToggleSwitchDemoSource} />
export const Checkbox = () => <Demo Component={CheckboxDemo} source={CheckboxDemoSource} />
export const Radio = () => <Demo Component={RadioDemo} source={RadioDemoSource} />
export const SubmitButton = () => <Demo Component={SubmitButtonDemo} source={SubmitButtonDemoSource} />
export const LabelledControl = () => <Demo Component={LabelledControlDemo} source={LabelledControlDemoSource} />
