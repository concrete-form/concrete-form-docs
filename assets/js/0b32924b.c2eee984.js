"use strict";(self.webpackChunkconcrete_form_doc=self.webpackChunkconcrete_form_doc||[]).push([[269],{8033:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(7294),r=o(9055),l={code:"code_z8-u",result:"result_qARp",dense:"dense_ubyi",codeHidden:"codeHidden_4Sgj"},a="___START___",m="___END___",c=function(e){var t=e.Component,o=e.source,c=e.dense,i=void 0!==c&&c,u=e.hideCode,s=void 0!==u&&u;return o=(o=(o=(o=(o=(o=o.replace(/import React from 'react'/,"")).replace(/export default .*/,"")).trim()).replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g,a)).replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g,m)).replace(new RegExp("___START___[^__]*___END___","igm"),""),n.createElement(n.Fragment,null,!s&&n.createElement(r.Z,{className:["language-jsx",l.code].join(" ")},o.trim()),n.createElement("div",{className:["shadow--md",l.result,i?l.dense:"",s?l.codeHidden:""].join(" ")},n.createElement(t,null)))}},321:function(e,t,o){o.d(t,{f:function(){return a},Z:function(){return l}});var n=o(7294),r=o(5522),l=function(e){var t=e.children;return n.createElement("table",{className:r.Z.table},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:r.Z.nameColumnHeader,style:{minWidth:150}},"Name"),n.createElement("th",{className:r.Z.typeColumnHeader,style:{minWidth:200}},"Type"),n.createElement("th",{className:r.Z.descriptionColumnHeader},"Description"))),n.createElement("tbody",null,t))},a=function(e){var t=e.name,o=e.type,l=e.children;return n.createElement("tr",null,n.createElement("td",{className:r.Z.nameColumn},t),n.createElement("td",{className:r.Z.typeColumn},o&&n.createElement("code",null," ",o," ")),n.createElement("td",{className:r.Z.descriptionColumn},l))}},3122:function(e,t,o){o.d(t,{F2:function(){return V},Am:function(){return K},oh:function(){return ne},ou:function(){return q},S2:function(){return X},DV:function(){return ae},II:function(){return O},sR:function(){return oe},mE:function(){return le},QE:function(){return ee},Ph:function(){return Y},gy:function(){return U},iR:function(){return J},FX:function(){return re},Mm:function(){return te},gx:function(){return Q},Zh:function(){return $}});var n=o(3117),r=o(7294),l=o(8033),a=o(5418),m=o(9179),c=function(){return r.createElement(a.Z,null,r.createElement(m.default,{name:"demo",placeholder:"I'm an input"}))},i=o(2841),u=function(){return r.createElement(a.Z,null,r.createElement(i.Z,{name:"demo",placeholder:"I'm a boring autocomplete field"}))},s=o(7886),d=function(){return r.createElement(a.Z,null,"date: ",r.createElement(s.Z,{name:"date",type:"date"}),"time: ",r.createElement(s.Z,{name:"time",type:"time"}),"datetime: ",r.createElement(s.Z,{name:"datetime",type:"datetime"}))},p=o(5740),f=function(){return r.createElement(a.Z,null,r.createElement(p.Z,{name:"demo"}))},b=o(2590),h=function(){return r.createElement(a.Z,null,"String options :",r.createElement(b.Z,{name:"select1",options:["foo","bar","baz","biz"]}),"Multiple select :",r.createElement(b.Z,{name:"select2",options:["foo","bar","baz","biz"],multiple:!0}),"Labelled options :",r.createElement(b.Z,{name:"select3",options:[{label:"First option",value:"foo"},"bar",{label:"Third option",value:"baz",props:{disabled:!0}}]}),"Groups (allowEmpty) :",r.createElement(b.Z,{name:"select4",allowEmpty:!0,options:["foo",{group:"Group 1",options:["bar","baz"]}]}),"Childrens (allowEmpty) :",r.createElement(b.Z,{name:"select5",allowEmpty:!0},r.createElement("option",{value:"foo"},"Foo"),r.createElement("option",{value:"bar"},"Bar"),r.createElement("option",{value:"baz"},"Baz")))},v=o(9137),k=function(){return r.createElement(a.Z,null,r.createElement(v.Z,{name:"demo",label:r.createElement(r.Fragment,null,"I accept the ",r.createElement("a",{href:"#void"},"terms and conditions"),".")}))},y=o(4954),E=function(){return r.createElement(a.Z,null,r.createElement(y.Z,{name:"demo",min:10,max:90,label:"Label of the slider"}))},g=o(3363),Z=function(){return r.createElement(a.Z,null,r.createElement(g.Z,{name:"demo",placeholder:"I'm a textarea"}))},C=o(2379),x=function(){return r.createElement(a.Z,null,r.createElement(C.Z,{name:"demo",label:"I'm a toggle switch"}))},F=o(5791),N=function(){return r.createElement(a.Z,null,"Vertical :",r.createElement(F.Z,{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(F.Z,{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]}))},z=o(1145),L=function(){return r.createElement(a.Z,null,"Vertical :",r.createElement(z.Z,{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(z.Z,{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]}))},T=o(3235),D=function(){return r.createElement(a.Z,{onSubmit:function(){return e=3e3,new Promise((function(t){return setTimeout(t,e)}));var e}},r.createElement(T.Z,null,"Submit"))},S=o(3891),_=function(){return r.createElement(a.Z,null,r.createElement(S.Z,{label:"Label linked to the control"},r.createElement(m.default,{name:"demo-single"})),r.createElement(S.Z,{label:"Label NOT linked to the controls group"},r.createElement(z.Z,{name:"demo-group",options:["foo","bar","baz"]})),r.createElement(S.Z,{label:"Label NOT linked to boolean controls"},r.createElement(v.Z,{name:"demo-bool",label:"THIS is the real label"})))},R=o(2283),w=function(e){e.name;var t=e.control,o=e.errors;return r.createElement("div",{className:"custom-html5-control"},r.createElement("div",{className:"custom-html5-control-control-wrapper"},t),o&&r.createElement("div",{className:"custom-html5-control-errors-wrapper"},o))},I=function(e){var t=e.errors;return r.createElement("div",{className:"custom-html5-errors"},t.join(","))},G=function(e){var t=e.label,o=e.control,n=e.labelPosition,l=void 0===n?"left":n;return r.createElement("label",{className:"custom-html5-item-label concreteform-"+l},r.createElement("div",null,t),r.createElement("div",null,o))},P=function(e){var t=e.items;return r.createElement("div",{className:"custom-html5-items-group"},t)},H=function(e){var t=e.label,o=e.htmlFor;return r.createElement("label",{className:"custom-html5-label",htmlFor:o},t)},A=function(e){var t=e.control,o=e.label;return r.createElement("div",{className:"custom-html5-labelled-control"},r.createElement("div",null,o),r.createElement("div",null,t))},M=function(){var e=(0,R.cI)();return(0,r.useEffect)((function(){["demo1","demo2"].forEach((function(t){e.setError(t,{type:"custom",message:"Error  message"},{shouldFocus:!1})}))}),[]),r.createElement(a.Z,{form:e,onSubmit:function(){},layout:{control:w,errors:I,itemLabel:G,itemsGroup:P,label:H,labelledControl:A}},r.createElement(S.Z,{label:"Label"},r.createElement(m.default,{name:"demo1"})),r.createElement(S.Z,{label:"Label"},r.createElement(F.Z,{name:"demo2",options:["Foo","bar",{label:"Baz",value:"Baz",props:{disabled:!0}}]})))},B=function(){return r.createElement(a.Z,null,r.createElement(z.Z,{name:"demo",options:["foo","bar","baz"]}))},j=function(){return r.createElement(a.Z,null,r.createElement(F.Z,{name:"demo",options:[{label:"Displayed label",value:"actual-value"},{label:r.createElement("strong",null,"I am bold"),value:"123"},{label:"I am disabled",value:"abc",props:{disabled:!0}}]}))},W=function(){return r.createElement(a.Z,null,r.createElement(b.Z,{name:"demo",options:["first",{group:"My group",options:["foo",{label:"bar",value:"Bar!"}]},"not-part-of-any-group",{group:"Disabled group",options:["first","second"],props:{disabled:!0}}]}))},O=function(e){return r.createElement(l.Z,(0,n.Z)({Component:c,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/html5/Input'\n\nconst Demo = () => (\n  <Form>\n    <Input name=\"demo\" placeholder=\"I'm an input\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},V=function(e){return r.createElement(l.Z,(0,n.Z)({Component:u,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Autocomplete from '@concrete-form/html5/Autocomplete'\n\nconst Demo = () => (\n  <Form>\n    <Autocomplete name=\"demo\" placeholder=\"I'm a boring autocomplete field\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},q=function(e){return r.createElement(l.Z,(0,n.Z)({Component:d,source:'import React from \'react\'\nimport Form from \'@concrete-form/react-hook-form\'\nimport DateTime from \'@concrete-form/html5/DateTime\'\n\nconst Demo = () => (\n  <Form>\n    date: <DateTime name="date" type="date" />\n    time: <DateTime name="time" type="time" />\n    datetime: <DateTime name="datetime" type="datetime" />\n  </Form>\n)\n\nexport default Demo\n'},e))},X=function(e){return r.createElement(l.Z,(0,n.Z)({Component:f,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport FileInput from '@concrete-form/html5/FileInput'\n\nconst Demo = () => (\n  <Form>\n    <FileInput name=\"demo\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},Y=function(e){return r.createElement(l.Z,(0,n.Z)({Component:h,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\n\nconst Demo = () => (\n  <Form>\n    String options :\n    <Select name=\"select1\" options={['foo', 'bar', 'baz', 'biz']} />\n\n    Multiple select :\n    <Select name=\"select2\" options={['foo', 'bar', 'baz', 'biz']} multiple />\n\n    Labelled options :\n    <Select name=\"select3\" options={[\n      { label: 'First option', value: 'foo' },\n      'bar',\n      { label: 'Third option', value: 'baz', props: { disabled: true } },\n    ]} />\n\n    Groups (allowEmpty) :\n    <Select name=\"select4\" allowEmpty options={[\n      'foo',\n      { group: 'Group 1', options: ['bar', 'baz'] }\n    ]} />\n\n    Childrens (allowEmpty) :\n    <Select name=\"select5\" allowEmpty>\n      <option value=\"foo\">Foo</option>\n      <option value=\"bar\">Bar</option>\n      <option value=\"baz\">Baz</option>\n    </Select>\n  </Form>\n)\n\nexport default Demo\n"},e))},U=function(e){return r.createElement(l.Z,(0,n.Z)({Component:k,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SingleCheckbox from '@concrete-form/html5/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <SingleCheckbox name=\"demo\" label={(\n      <>I accept the <a href=\"#void\">terms and conditions</a>.</>\n    )} />\n  </Form>\n)\n\nexport default Demo\n"},e))},J=function(e){return r.createElement(l.Z,(0,n.Z)({Component:E,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Slider from '@concrete-form/html5/Slider'\n\nconst Demo = () => (\n  <Form>\n    <Slider name=\"demo\" min={10} max={90} label=\"Label of the slider\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},Q=function(e){return r.createElement(l.Z,(0,n.Z)({Component:Z,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Textarea from '@concrete-form/html5/Textarea'\n\nconst Demo = () => (\n  <Form>\n    <Textarea name=\"demo\" placeholder=\"I'm a textarea\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},$=function(e){return r.createElement(l.Z,(0,n.Z)({Component:x,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport ToggleSwitch from '@concrete-form/html5/ToggleSwitch'\n\nconst Demo = () => (\n  <Form>\n    <ToggleSwitch name=\"demo\" label=\"I'm a toggle switch\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},K=function(e){return r.createElement(l.Z,(0,n.Z)({Component:N,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxesGroup from '@concrete-form/html5/CheckboxesGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <CheckboxesGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <CheckboxesGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e))},ee=function(e){return r.createElement(l.Z,(0,n.Z)({Component:L,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadiosGroup from '@concrete-form/html5/RadiosGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <RadiosGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <RadiosGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e))},te=function(e){return r.createElement(l.Z,(0,n.Z)({Component:D,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SubmitButton from '@concrete-form/html5/SubmitButton'\n\nconst wait = delay => new Promise(resolve => setTimeout(resolve, delay))\n\nconst Demo = () => (\n  <Form onSubmit={() => wait(3000)}>\n    <SubmitButton>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e))},oe=function(e){return r.createElement(l.Z,(0,n.Z)({Component:_,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/html5/LabelledControl'\nimport Input from '@concrete-form/html5/Input'\nimport RadiosGroup from '@concrete-form/html5/RadiosGroup'\nimport SingleCheckbox from '@concrete-form/html5/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <LabelledControl label=\"Label linked to the control\">\n      <Input name=\"demo-single\" />\n    </LabelledControl>\n\n    <LabelledControl label=\"Label NOT linked to the controls group\">\n      <RadiosGroup name=\"demo-group\" options={['foo', 'bar', 'baz']} />\n    </LabelledControl>\n\n    <LabelledControl label=\"Label NOT linked to boolean controls\">\n      <SingleCheckbox name=\"demo-bool\" label=\"THIS is the real label\" />\n    </LabelledControl>\n  </Form>\n)\n\nexport default Demo\n"},e))},ne=function(e){return r.createElement(l.Z,(0,n.Z)({Component:M,source:"import React, { useEffect } from 'react'\nimport { useForm } from 'react-hook-form'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/html5/LabelledControl'\nimport Input from '@concrete-form/html5/Input'\nimport CheckboxesGroup from '@concrete-form/html5/CheckboxesGroup'\n\nimport './customLayout.css'\n\nconst ControlLayout = ({ name, control, errors }) => (\n  <div className=\"custom-html5-control\">\n    <div className=\"custom-html5-control-control-wrapper\">\n      { control }\n    </div>\n    { errors && (\n      <div className=\"custom-html5-control-errors-wrapper\">\n        { errors }\n      </div>\n    ) }\n  </div>\n)\n\nconst ErrorLayout = ({ errors }) => {\n  return (\n    <div className=\"custom-html5-errors\">\n      { errors.join(',') }\n    </div>\n  )\n}\n\nconst ItemLabelLayout = ({\n  label,\n  control,\n  labelPosition = 'left',\n}) => {\n  return (\n    <label className={`custom-html5-item-label concreteform-${labelPosition}`}>\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </label>\n  )\n}\n\nconst ItemsGroupLayout = ({\n  items,\n}) => {\n  return (\n    <div className=\"custom-html5-items-group\">\n      { items }\n    </div>\n  )\n}\n\nconst LabelLayout = ({\n  label,\n  htmlFor,\n}) => {\n  return (\n    <label className=\"custom-html5-label\" htmlFor={htmlFor}>\n      { label }\n    </label>\n  )\n}\n\nconst LabelledControlLayout = ({\n  control,\n  label,\n}) => {\n  return (\n    <div className=\"custom-html5-labelled-control\">\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </div>\n  )\n}\n\nconst Demo = () => {\n  const form = useForm()\n\n  useEffect(() => {\n    ['demo1', 'demo2'].forEach(field => {\n      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })\n    })\n  }, [])\n\n  return (\n    <Form\n      form={form}\n      onSubmit={() => {}}\n      layout={{\n        control: ControlLayout,\n        errors: ErrorLayout,\n        itemLabel: ItemLabelLayout,\n        itemsGroup: ItemsGroupLayout,\n        label: LabelLayout,\n        labelledControl: LabelledControlLayout,\n      }}\n    >\n      <LabelledControl label=\"Label\">\n        <Input name=\"demo1\" />\n        </LabelledControl>\n  \n        <LabelledControl label=\"Label\">\n          <CheckboxesGroup name=\"demo2\" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />\n        </LabelledControl>\n      </Form>\n  )\n}\n\nexport default Demo\n"},e))},re=function(e){return r.createElement(l.Z,(0,n.Z)({Component:B,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadiosGroup from '@concrete-form/html5/RadiosGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n    <RadiosGroup name=\"demo\" options={['foo', 'bar', 'baz']} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},le=function(e){return r.createElement(l.Z,(0,n.Z)({Component:j,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxesGroup from '@concrete-form/html5/CheckboxesGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n<CheckboxesGroup name=\"demo\" options={[\n  { label: 'Displayed label', value: 'actual-value' },\n  { label: <strong>I am bold</strong>, value: '123'},\n  { label: 'I am disabled', value: 'abc', props: { disabled: true } },\n]} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},ae=function(e){return r.createElement(l.Z,(0,n.Z)({Component:W,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n\n<Select name=\"demo\" options={[\n  'first',\n  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },\n  'not-part-of-any-group',\n  { group: 'Disabled group', options: ['first', 'second'], props: { disabled: true } },\n]} />\n\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))}},9380:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return f},default:function(){return h}});var n=o(3117),r=o(102),l=o(7294),a=o(3905),m=o(8786),c=o(3122),i=o(321),u=["components"],s={title:"Advanced layout customization",hide_title:!0,description:"Advanced layout customization for HTML5 controls",pagination_next:null},d=void 0,p={unversionedId:"controls/html5/advanced-layout-customization",id:"controls/html5/advanced-layout-customization",title:"Advanced layout customization",description:"Advanced layout customization for HTML5 controls",source:"@site/docs/controls/html5/advanced-layout-customization.mdx",sourceDirName:"controls/html5",slug:"/controls/html5/advanced-layout-customization",permalink:"/docs/controls/html5/advanced-layout-customization",editUrl:"https://github.com/concrete-form/concrete-form-docs/docs/controls/html5/advanced-layout-customization.mdx",tags:[],version:"current",frontMatter:{title:"Advanced layout customization",hide_title:!0,description:"Advanced layout customization for HTML5 controls",pagination_next:null},sidebar:"docs",previous:{title:"Controls options",permalink:"/docs/controls/html5/controls-options"}},f=[{value:"Set custom layout components",id:"set-custom-layout-components",children:[],level:2},{value:"Available layout components",id:"available-layout-components",children:[],level:2},{value:"Layout components props",id:"layout-components-props",children:[{value:"control",id:"control",children:[],level:3},{value:"errors",id:"errors",children:[],level:3},{value:"itemLabel",id:"itemlabel",children:[],level:3},{value:"itemGroup",id:"itemgroup",children:[],level:3},{value:"label",id:"label",children:[],level:3},{value:"labelledControl",id:"labelledcontrol",children:[],level:3}],level:2}],b={toc:f};function h(e){var t=e.components,o=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"html5-advanced-layout-customization"},"HTML5 Advanced layout customization"),(0,a.kt)("style",{type:"text/css"}," ",m.Z," "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For most projects, you ",(0,a.kt)("strong",{parentName:"p"},"DON'T")," need that level of customization. You should use CSS instead."))),(0,a.kt)("h2",{id:"set-custom-layout-components"},"Set custom layout components"),(0,a.kt)("p",null,"Concrete Form allows you to customize every single component used for layout.",(0,a.kt)("br",null),"\nThese components need to be defined at the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form />")," level like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Form layout={{\n  control: ...,\n  errors: ...,\n  itemLabel: ...,\n  itemsGroup: ...,\n  label: ...,\n  labelledControl: ...,\n}}>\n  Your form content\n</Form>\n")),(0,a.kt)("h2",{id:"available-layout-components"},"Available layout components"),(0,a.kt)(c.oh,{hideCode:!0,dense:!0,mdxType:"CustomLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"layout"),(0,a.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"cl cl-control"},"control")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Renders ",(0,a.kt)("strong",{parentName:"td"},"control")," and ",(0,a.kt)("strong",{parentName:"td"},"errors")," components")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"cl cl-errors"},"errors")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Renders the field errors (to be injected in ",(0,a.kt)("strong",{parentName:"td"},"control"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"cl cl-itemLabel"},"itemLabel")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Renders each item (control + label) in a group (ex: Checkbox or Radio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"cl cl-itemsGroup"},"itemsGroup")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Renders a group of controls (items)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"cl cl-label"},"label")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Renders a label inside ",(0,a.kt)("inlineCode",{parentName:"td"},"LabelledControl"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"cl cl-labelledControl"},"labelledControl")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Renders a label and a control")))),(0,a.kt)("h2",{id:"layout-components-props"},"Layout components props"),(0,a.kt)("p",null,"Components will receive these props"),(0,a.kt)("h3",{id:"control"},"control"),(0,a.kt)(i.Z,{mdxType:"Props"},(0,a.kt)(i.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,a.kt)(i.f,{name:"control",type:"node",mdxType:"Prop"},"Control component"),(0,a.kt)(i.f,{name:"errors",type:"node",mdxType:"Prop"},"Errors component. (result of ",(0,a.kt)("div",{className:"cl cl-errors"},"errors")," layout)")),(0,a.kt)("h3",{id:"errors"},"errors"),(0,a.kt)(i.Z,{mdxType:"Props"},(0,a.kt)(i.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,a.kt)(i.f,{name:"errors",type:"string[]",mdxType:"Prop"},"array of translated errors")),(0,a.kt)("h3",{id:"itemlabel"},"itemLabel"),(0,a.kt)(i.Z,{mdxType:"Props"},(0,a.kt)(i.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,a.kt)(i.f,{name:"control",type:"node",mdxType:"Prop"},"control element (checkbox, radio, toggle switch, etc)"),(0,a.kt)(i.f,{name:"label",type:"node",mdxType:"Prop"},"label of the control"),(0,a.kt)(i.f,{name:"labelPosition",type:(0,a.kt)(l.Fragment,null,'"top"',(0,a.kt)("br",null),'| "bottom"',(0,a.kt)("br",null),'| "left"',(0,a.kt)("br",null),'| "right"'),mdxType:"Prop"},"position of the label")),(0,a.kt)("h3",{id:"itemgroup"},"itemGroup"),(0,a.kt)(i.Z,{mdxType:"Props"},(0,a.kt)(i.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,a.kt)(i.f,{name:"items",type:"node",mdxType:"Prop"},"result of multiple ",(0,a.kt)("div",{className:"cl cl-itemLabel"},"itemLabel"),(0,a.kt)("br",null),(0,a.kt)("strong",null,"Note:")," this is a single node and ",(0,a.kt)("strong",null,"not")," an array"),(0,a.kt)(i.f,{name:"label",type:"node",mdxType:"Prop"},"label of the control"),(0,a.kt)(i.f,{name:"orientation",type:(0,a.kt)(l.Fragment,null,'"vertical" | "horizontal"'),mdxType:"Prop"},"orientation of the items")),(0,a.kt)("h3",{id:"label"},"label"),(0,a.kt)(i.Z,{mdxType:"Props"},(0,a.kt)(i.f,{name:"label",type:"node",mdxType:"Prop"},"label to render"),(0,a.kt)(i.f,{name:"htmlFor",type:"string | undefined",mdxType:"Prop"},'"',(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/for",target:"_blank"},(0,a.kt)("strong",null,"for")),'" value to provide to the label (',(0,a.kt)("em",null,"if available"),")")),(0,a.kt)("h3",{id:"labelledcontrol"},"labelledControl"),(0,a.kt)(i.Z,{mdxType:"Props"},(0,a.kt)(i.f,{name:"control",type:"node",mdxType:"Prop"},"result of ",(0,a.kt)("div",{className:"cl cl-control"},"control")),(0,a.kt)(i.f,{name:"label",type:"node",mdxType:"Prop"},"result of ",(0,a.kt)("div",{className:"cl cl-label"},"label")),(0,a.kt)(i.f,{name:"labelPosition",type:(0,a.kt)(l.Fragment,null,'"top"',(0,a.kt)("br",null),'| "bottom"',(0,a.kt)("br",null),'| "left"',(0,a.kt)("br",null),'| "right"'),mdxType:"Prop"},"position of the label (relative to the control)")))}h.isMDXComponent=!0},5522:function(e,t){t.Z={table:"table_-0sy",descriptionColumnHeader:"descriptionColumnHeader_MWow",iconColumn:"iconColumn_6f4S",nameColumn:"nameColumn_YWR6",typeColumn:"typeColumn_DJ7h",requiredColumn:"requiredColumn_W1+x",descriptionColumn:"descriptionColumn_e0p2",divider:"divider_eBFn"}}}]);