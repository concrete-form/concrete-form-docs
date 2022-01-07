"use strict";(self.webpackChunkconcrete_form_doc=self.webpackChunkconcrete_form_doc||[]).push([[455],{8033:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(7294),r=o(9055),a={code:"code_z8-u",result:"result_qARp",dense:"dense_ubyi",codeHidden:"codeHidden_4Sgj"},l="___START___",m="___END___",c=function(e){var t=e.Component,o=e.source,c=e.dense,i=void 0!==c&&c,p=e.hideCode,u=void 0!==p&&p;return o=(o=(o=(o=(o=(o=o.replace(/import React from 'react'/,"")).replace(/export default .*/,"")).trim()).replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g,l)).replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g,m)).replace(new RegExp("___START___[^__]*___END___","igm"),""),n.createElement(n.Fragment,null,!u&&n.createElement(r.Z,{className:["language-jsx",a.code].join(" ")},o.trim()),n.createElement("div",{className:["shadow--md",a.result,i?a.dense:"",u?a.codeHidden:""].join(" ")},n.createElement(t,null)))}},3122:function(e,t,o){o.d(t,{F2:function(){return O},Am:function(){return Y},oh:function(){return ne},ou:function(){return X},S2:function(){return U},DV:function(){return le},II:function(){return W},sR:function(){return oe},mE:function(){return ae},QE:function(){return ee},Ph:function(){return q},gy:function(){return Q},iR:function(){return $},FX:function(){return re},Mm:function(){return te},gx:function(){return J},Zh:function(){return K}});var n=o(3117),r=o(7294),a=o(8033),l=o(5418),m=o(9179),c=function(){return r.createElement(l.Z,null,r.createElement(m.default,{name:"demo",placeholder:"I'm an input"}))},i=o(2841),p=function(){return r.createElement(l.Z,null,r.createElement(i.Z,{name:"demo",placeholder:"I'm a boring autocomplete field"}))},u=o(7886),s=function(){return r.createElement(l.Z,null,"date: ",r.createElement(u.Z,{name:"date",type:"date"}),"time: ",r.createElement(u.Z,{name:"time",type:"time"}),"datetime: ",r.createElement(u.Z,{name:"datetime",type:"datetime"}))},d=o(5740),f=function(){return r.createElement(l.Z,null,r.createElement(d.Z,{name:"demo"}))},b=o(2590),h=function(){return r.createElement(l.Z,null,"String options :",r.createElement(b.Z,{name:"select1",options:["foo","bar","baz","biz"]}),"Multiple select :",r.createElement(b.Z,{name:"select2",options:["foo","bar","baz","biz"],multiple:!0}),"Labelled options :",r.createElement(b.Z,{name:"select3",options:[{label:"Foooooo",value:"foo"},"bar",{label:"Barrrrr",value:"baz",props:{disabled:!0}}]}),"Groups (allowEmpty = true) :",r.createElement(b.Z,{name:"select4",allowEmpty:!0,options:["foo",{group:"Group 1",options:["bar","baz"]}]}),"Childrens (allowEmpty = true) :",r.createElement(b.Z,{name:"select5",allowEmpty:!0},r.createElement("option",{value:"foo"},"Foo"),r.createElement("option",{value:"bar"},"Bar"),r.createElement("option",{value:"baz"},"Baz")))},k=o(9137),v=function(){return r.createElement(l.Z,null,r.createElement(k.Z,{name:"demo",label:r.createElement(r.Fragment,null,"I accept the ",r.createElement("a",{href:"#void"},"terms and conditions"),".")}))},g=o(4954),E=function(){return r.createElement(l.Z,null,r.createElement(g.Z,{name:"demo",min:10,max:90,label:"Label of the slider"}))},N=o(3363),C=function(){return r.createElement(l.Z,null,r.createElement(N.Z,{name:"demo",placeholder:"I'm a textarea"}))},Z=o(2379),F=function(){return r.createElement(l.Z,null,r.createElement(Z.Z,{name:"demo",label:"I'm a toggle switch"}))},y=o(5791),x=function(){return r.createElement(l.Z,null,"Vertical :",r.createElement(y.Z,{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(y.Z,{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]}))},z=o(1145),L=function(){return r.createElement(l.Z,null,"Vertical :",r.createElement(z.Z,{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(z.Z,{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]}))},D=o(3235),S=function(){return r.createElement(l.Z,{onSubmit:function(){return e=3e3,new Promise((function(t){return setTimeout(t,e)}));var e}},r.createElement(D.Z,null,"Submit"))},w=o(3891),I=function(){return r.createElement(l.Z,null,r.createElement(w.Z,{label:"Label linked to the control"},r.createElement(m.default,{name:"demo-single"})),r.createElement(w.Z,{label:"Label NOT linked to the controls group"},r.createElement(z.Z,{name:"demo-group",options:["foo","bar","baz"]})),r.createElement(w.Z,{label:"Label NOT linked to boolean controls"},r.createElement(k.Z,{name:"demo-bool",label:"THIS is the real label"})))},R=o(2283),_=function(e){e.name;var t=e.control,o=e.errors;return r.createElement("div",{className:"custom-control"},r.createElement("div",{className:"custom-control-control-wrapper"},t),o&&r.createElement("div",{className:"custom-control-errors-wrapper"},o))},G=function(e){var t=e.errors;return r.createElement("div",{className:"custom-errors"},t.join(","))},T=function(e){var t=e.label,o=e.control,n=e.labelPosition,a=void 0===n?"left":n;return r.createElement("label",{className:"custom-item-label concreteform-"+a},r.createElement("div",null,t),r.createElement("div",null,o))},M=function(e){var t=e.items;return r.createElement("div",{className:"custom-items-group"},t)},B=function(e){var t=e.label,o=e.htmlFor;return r.createElement("label",{className:"custom-label",htmlFor:o},t)},H=function(e){var t=e.control,o=e.label;return r.createElement("div",{className:"custom-labelled-control"},r.createElement("div",null,o),r.createElement("div",null,t))},A=function(){var e=(0,R.cI)();return(0,r.useEffect)((function(){["demo1","demo2"].forEach((function(t){e.setError(t,{type:"custom",message:"Error  message"},{shouldFocus:!1})}))}),[]),r.createElement(l.Z,{form:e,onSubmit:function(){},layout:{control:_,errors:G,itemLabel:T,itemsGroup:M,label:B,labelledControl:H}},r.createElement(w.Z,{label:"Label"},r.createElement(m.default,{name:"demo1"})),r.createElement(w.Z,{label:"Label"},r.createElement(y.Z,{name:"demo2",options:["Foo","bar",{label:"Baz",value:"Baz",props:{disabled:!0}}]})))},P=function(){return r.createElement(l.Z,null,r.createElement(z.Z,{name:"demo",options:["foo","bar","baz"]}))},j=function(){return r.createElement(l.Z,null,r.createElement(y.Z,{name:"demo",options:[{label:"Displayed label",value:"actual-value"},{label:r.createElement("strong",null,"I am bold"),value:"123"},{label:"I am disabled",value:"abc",props:{disabled:!0}}]}))},V=function(){return r.createElement(l.Z,null,r.createElement(b.Z,{name:"demo",options:["first",{group:"My group",options:["foo",{label:"bar",value:"Bar!"}]},"not-part-of-any-group",{group:"Disabled group",options:["first","second"],props:{disabled:!0}}]}))},W=function(e){return r.createElement(a.Z,(0,n.Z)({Component:c,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/html5/Input'\n\nconst Demo = () => (\n  <Form>\n    <Input name=\"demo\" placeholder=\"I'm an input\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},O=function(e){return r.createElement(a.Z,(0,n.Z)({Component:p,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Autocomplete from '@concrete-form/html5/Autocomplete'\n\nconst Demo = () => (\n  <Form>\n    <Autocomplete name=\"demo\" placeholder=\"I'm a boring autocomplete field\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},X=function(e){return r.createElement(a.Z,(0,n.Z)({Component:s,source:'import React from \'react\'\nimport Form from \'@concrete-form/react-hook-form\'\nimport DateTime from \'@concrete-form/html5/DateTime\'\n\nconst Demo = () => (\n  <Form>\n    date: <DateTime name="date" type="date" />\n    time: <DateTime name="time" type="time" />\n    datetime: <DateTime name="datetime" type="datetime" />\n  </Form>\n)\n\nexport default Demo\n'},e))},U=function(e){return r.createElement(a.Z,(0,n.Z)({Component:f,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport FileInput from '@concrete-form/html5/FileInput'\n\nconst Demo = () => (\n  <Form>\n    <FileInput name=\"demo\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},q=function(e){return r.createElement(a.Z,(0,n.Z)({Component:h,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\n\nconst Demo = () => (\n  <Form>\n    String options :\n    <Select name=\"select1\" options={['foo', 'bar', 'baz', 'biz']} />\n\n    Multiple select :\n    <Select name=\"select2\" options={['foo', 'bar', 'baz', 'biz']} multiple />\n\n    Labelled options :\n    <Select name=\"select3\" options={[\n      { label: 'Foooooo', value: 'foo' },\n      'bar',\n      { label: 'Barrrrr', value: 'baz', props: { disabled: true } },\n    ]} />\n\n    Groups (allowEmpty = true) :\n    <Select name=\"select4\" allowEmpty options={[\n      'foo',\n      { group: 'Group 1', options: ['bar', 'baz'] }\n    ]} />\n\n    Childrens (allowEmpty = true) :\n    <Select name=\"select5\" allowEmpty>\n      <option value=\"foo\">Foo</option>\n      <option value=\"bar\">Bar</option>\n      <option value=\"baz\">Baz</option>\n    </Select>\n  </Form>\n)\n\nexport default Demo\n"},e))},Q=function(e){return r.createElement(a.Z,(0,n.Z)({Component:v,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SingleCheckbox from '@concrete-form/html5/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <SingleCheckbox name=\"demo\" label={(\n      <>I accept the <a href=\"#void\">terms and conditions</a>.</>\n    )} />\n  </Form>\n)\n\nexport default Demo\n"},e))},$=function(e){return r.createElement(a.Z,(0,n.Z)({Component:E,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Slider from '@concrete-form/html5/Slider'\n\nconst Demo = () => (\n  <Form>\n    <Slider name=\"demo\" min={10} max={90} label=\"Label of the slider\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},J=function(e){return r.createElement(a.Z,(0,n.Z)({Component:C,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Textarea from '@concrete-form/html5/Textarea'\n\nconst Demo = () => (\n  <Form>\n    <Textarea name=\"demo\" placeholder=\"I'm a textarea\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},K=function(e){return r.createElement(a.Z,(0,n.Z)({Component:F,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport ToggleSwitch from '@concrete-form/html5/ToggleSwitch'\n\nconst Demo = () => (\n  <Form>\n    <ToggleSwitch name=\"demo\" label=\"I'm a toggle switch\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},Y=function(e){return r.createElement(a.Z,(0,n.Z)({Component:x,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxesGroup from '@concrete-form/html5/CheckboxesGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <CheckboxesGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <CheckboxesGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e))},ee=function(e){return r.createElement(a.Z,(0,n.Z)({Component:L,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadiosGroup from '@concrete-form/html5/RadiosGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <RadiosGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <RadiosGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e))},te=function(e){return r.createElement(a.Z,(0,n.Z)({Component:S,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SubmitButton from '@concrete-form/html5/SubmitButton'\n\nconst wait = delay => new Promise(resolve => setTimeout(resolve, delay))\n\nconst Demo = () => (\n  <Form onSubmit={() => wait(3000)}>\n    <SubmitButton>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e))},oe=function(e){return r.createElement(a.Z,(0,n.Z)({Component:I,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/html5/LabelledControl'\nimport Input from '@concrete-form/html5/Input'\nimport RadiosGroup from '@concrete-form/html5/RadiosGroup'\nimport SingleCheckbox from '@concrete-form/html5/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <LabelledControl label=\"Label linked to the control\">\n      <Input name=\"demo-single\" />\n    </LabelledControl>\n\n    <LabelledControl label=\"Label NOT linked to the controls group\">\n      <RadiosGroup name=\"demo-group\" options={['foo', 'bar', 'baz']} />\n    </LabelledControl>\n\n    <LabelledControl label=\"Label NOT linked to boolean controls\">\n      <SingleCheckbox name=\"demo-bool\" label=\"THIS is the real label\" />\n    </LabelledControl>\n  </Form>\n)\n\nexport default Demo\n"},e))},ne=function(e){return r.createElement(a.Z,(0,n.Z)({Component:A,source:"import React, { useEffect } from 'react'\nimport { useForm } from 'react-hook-form'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/html5/LabelledControl'\nimport Input from '@concrete-form/html5/Input'\nimport CheckboxesGroup from '@concrete-form/html5/CheckboxesGroup'\n\nimport './customLayout.css'\n\nconst ControlLayout = ({ name, control, errors }) => (\n  <div className=\"custom-control\">\n    <div className=\"custom-control-control-wrapper\">\n      { control }\n    </div>\n    { errors && (\n      <div className=\"custom-control-errors-wrapper\">\n        { errors }\n      </div>\n    ) }\n  </div>\n)\n\nconst ErrorLayout = ({ errors }) => {\n  return (\n    <div className=\"custom-errors\">\n      { errors.join(',') }\n    </div>\n  )\n}\n\nconst ItemLabelLayout = ({\n  label,\n  control,\n  labelPosition = 'left',\n}) => {\n  return (\n    <label className={`custom-item-label concreteform-${labelPosition}`}>\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </label>\n  )\n}\n\nconst ItemsGroupLayout = ({\n  items,\n}) => {\n  return (\n    <div className=\"custom-items-group\">\n      { items }\n    </div>\n  )\n}\n\nconst LabelLayout = ({\n  label,\n  htmlFor,\n}) => {\n  return (\n    <label className=\"custom-label\" htmlFor={htmlFor}>\n      { label }\n    </label>\n  )\n}\n\nconst LabelledControlLayout = ({\n  control,\n  label,\n}) => {\n  return (\n    <div className=\"custom-labelled-control\">\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </div>\n  )\n}\n\nconst Demo = () => {\n  const form = useForm()\n\n  useEffect(() => {\n    ['demo1', 'demo2'].forEach(field => {\n      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })\n    })\n  }, [])\n\n  return (\n    <Form\n      form={form}\n      onSubmit={() => {}}\n      layout={{\n        control: ControlLayout,\n        errors: ErrorLayout,\n        itemLabel: ItemLabelLayout,\n        itemsGroup: ItemsGroupLayout,\n        label: LabelLayout,\n        labelledControl: LabelledControlLayout,\n      }}\n    >\n      <LabelledControl label=\"Label\">\n        <Input name=\"demo1\" />\n        </LabelledControl>\n  \n        <LabelledControl label=\"Label\">\n          <CheckboxesGroup name=\"demo2\" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />\n        </LabelledControl>\n      </Form>\n  )\n}\n\nexport default Demo\n"},e))},re=function(e){return r.createElement(a.Z,(0,n.Z)({Component:P,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadiosGroup from '@concrete-form/html5/RadiosGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n    <RadiosGroup name=\"demo\" options={['foo', 'bar', 'baz']} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},ae=function(e){return r.createElement(a.Z,(0,n.Z)({Component:j,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxesGroup from '@concrete-form/html5/CheckboxesGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n<CheckboxesGroup name=\"demo\" options={[\n  { label: 'Displayed label', value: 'actual-value' },\n  { label: <strong>I am bold</strong>, value: '123'},\n  { label: 'I am disabled', value: 'abc', props: { disabled: true } },\n]} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},le=function(e){return r.createElement(a.Z,(0,n.Z)({Component:V,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n\n<Select name=\"demo\" options={[\n  'first',\n  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },\n  'not-part-of-any-group',\n  { group: 'Disabled group', options: ['first', 'second'], props: { disabled: true } },\n]} />\n\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))}},667:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=o(3117),r=o(102),a=(o(7294),o(3905)),l=o(8786),m=o(3122),c=["components"],i={sidebar_position:3,title:"Control options",description:"Control with multiple choices such as Select, Checkbox and Radio in HTML5"},p=void 0,u={unversionedId:"controls/html5/control-options",id:"controls/html5/control-options",isDocsHomePage:!1,title:"Control options",description:"Control with multiple choices such as Select, Checkbox and Radio in HTML5",source:"@site/docs/controls/html5/control-options.mdx",sourceDirName:"controls/html5",slug:"/controls/html5/control-options",permalink:"/docs/controls/html5/control-options",editUrl:"https://github.com/concrete-form/concrete-form-docs/docs/controls/html5/control-options.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Control options",description:"Control with multiple choices such as Select, Checkbox and Radio in HTML5"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/controls/html5/api"},next:{title:"Advanced layout customization",permalink:"/docs/controls/html5/advanced-layout-customization"}},s=[{value:"Multiple choices controls",id:"multiple-choices-controls",children:[],level:2},{value:"<code>options</code> prop",id:"options-prop",children:[{value:"String",id:"string",children:[],level:3},{value:"Labelled option",id:"labelled-option",children:[],level:3},{value:"Group",id:"group",children:[],level:3}],level:2}],d={toc:s};function f(e){var t=e.components,o=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("style",{type:"text/css"}," ",l.Z," "),(0,a.kt)("h2",{id:"multiple-choices-controls"},"Multiple choices controls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./api#select-"},(0,a.kt)("inlineCode",{parentName:"a"},"<Select />"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./api#checkboxesgroup-"},(0,a.kt)("inlineCode",{parentName:"a"},"<CheckboxesGroup />"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./api#radiosgroup-"},(0,a.kt)("inlineCode",{parentName:"a"},"<RadiosGroup />")))),(0,a.kt)("h2",{id:"options-prop"},(0,a.kt)("inlineCode",{parentName:"h2"},"options")," prop"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"options"))," is expected to be an ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," containing items defined below :"),(0,a.kt)("h3",{id:"string"},"String"),(0,a.kt)("p",null,"the ",(0,a.kt)("strong",{parentName:"p"},"key")," and the ",(0,a.kt)("strong",{parentName:"p"},"value")," will share the same ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," value provided."),(0,a.kt)(m.FX,{dense:!0}),(0,a.kt)("p",null,"Will produce :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="radio" value="foo"> foo\n<input name="demo" type="radio" value="bar"> bar\n<input name="demo" type="radio" value="baz"> baz\n')),(0,a.kt)("h3",{id:"labelled-option"},"Labelled option"),(0,a.kt)("p",null,"Labelled options are defined as object. They can set their value, their label and some props to forward to the control."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"label"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any React node such as string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"value"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The value of the option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"props"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forwarded to the rendered form control")))),(0,a.kt)(m.mE,{dense:!0}),(0,a.kt)("p",null,"Will produce :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="checkbox" value="actual-value"> Displayed label\n<input name="demo" type="checkbox" value="123"> <strong>I am bold</strong>\n<input name="demo" type="checkbox" value="abc" disabled=""> I am disabled\n')),(0,a.kt)("h3",{id:"group"},"Group"),(0,a.kt)("p",null,"A group has a label, holds others options and cannot be selected."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Groups are only supported by ",(0,a.kt)("a",{parentName:"p",href:"./api#select-"},(0,a.kt)("inlineCode",{parentName:"a"},"<Select />")),".",(0,a.kt)("br",null),"\nIn HTML5, ",(0,a.kt)("inlineCode",{parentName:"p"},"<optgroup>")," cannot be nested."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"group"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,a.kt)("inlineCode",{parentName:"a"},"<optgroup>")),"'s ",(0,a.kt)("strong",{parentName:"td"},"label")," prop")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"mixed")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mix of strings and labelled options")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"props"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,a.kt)("inlineCode",{parentName:"a"},"<optgroup>")))))),(0,a.kt)(m.DV,{dense:!0}),(0,a.kt)("p",null,"Will produce :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<select name="demo">\n  <option value="first">first</option>\n\n  <optgroup label="My group">\n    <option value="foo">foo</option>\n    <option value="bar">Bar!</option>\n  </optgroup>\n\n  <option value="not-part-of-any-group">not-part-of-any-group</option>\n\n  <optgroup label="Disabled group" disabled="">\n    <option value="first">first</option>\n    <option value="second">second</option>\n  </optgroup>\n</select>\n')))}f.isMDXComponent=!0}}]);