"use strict";(self.webpackChunkconcrete_form_doc=self.webpackChunkconcrete_form_doc||[]).push([[291],{1162:function(e,t,o){o.d(t,{Z:function(){return i}});var n=o(7294),r=o(3275),a={code:"code_pOFv",result:"result_CVae",dense:"dense_JxAw",codeHidden:"codeHidden_km2V"};const l="___START___",m="___END___";var i=e=>{let{Component:t,source:o,dense:i=!1,hideCode:c=!1}=e;return o=o.replace(/import React from 'react'/,""),o=o.replace(/export default .*/,""),o=o.trim(),o=o.replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g,l),o=o.replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g,m),o=o.replace(new RegExp(`${l}[^__]*${m}`,"igm"),""),n.createElement(n.Fragment,null,!c&&n.createElement(r.Z,{className:["language-jsx",a.code].join(" ")},o.trim()),n.createElement("div",{className:["shadow--md",a.result,i?a.dense:"",c?a.codeHidden:""].join(" ")},n.createElement(t,null)))}},3026:function(e,t,o){o.d(t,{F2:function(){return de},Bb:function(){return ue},cO:function(){return Ne},oh:function(){return ye},ou:function(){return be},S2:function(){return fe},DV:function(){return Se},II:function(){return se},sR:function(){return xe},mE:function(){return Ze},Ee:function(){return Fe},Ph:function(){return ke},gy:function(){return he},iR:function(){return ge},FX:function(){return Le},Mm:function(){return Ce},gx:function(){return Ee},Zh:function(){return ve}});var n=o(3117),r=o(7294),a=o(1162),l=o(5418),m=o(5972),i=o.n(m),c=o(1587),p=o.n(c);var u=()=>r.createElement(l.Z,{onSubmit:e=>alert(e.name)},r.createElement(i(),{name:"name",label:"Enter your name",margin:"normal"}),r.createElement(p(),{fullWidth:!0},"Submit"));var s=()=>r.createElement(l.Z,null,r.createElement(i(),{name:"demo",label:"I'm an input"})),d=o(9635),b=o.n(d);var f=()=>r.createElement(l.Z,null,r.createElement(b(),{name:"demo",options:["foo","bar","baz"],textFieldProps:{label:"I'm an autocomplete field"}})),k=o(720),h=o(6507),g=o(1738),E=o.n(g);var v=()=>r.createElement(l.Z,null,r.createElement(k._,{dateAdapter:h.H},"date: ",r.createElement(E(),{name:"date",type:"date"}),"time: ",r.createElement(E(),{name:"time",type:"time"}),"datetime: ",r.createElement(E(),{name:"datetime",type:"datetime"}))),N=o(78),F=o.n(N);var C=()=>r.createElement(l.Z,null,r.createElement(F(),{name:"demo"})),x=o(4984),y=o.n(x);var L=()=>r.createElement(l.Z,null,"Single select :",r.createElement(y(),{name:"select1",options:["foo","bar","baz","biz"]}),"Multiple select :",r.createElement(y(),{name:"select2",options:["foo","bar","baz","biz"],multiple:!0}),"Native select :",r.createElement(y(),{name:"select3",native:!0,options:[{label:"First option",value:"foo"},"bar",{label:"Third option",value:"baz",props:{disabled:!0}}]}),"Groups (allowEmpty) :",r.createElement(y(),{name:"select4",allowEmpty:!0,options:["foo",{group:"Group 1",options:["bar","baz"]}]}),"Childrens (native + allowEmpty) :",r.createElement(y(),{name:"select5",native:!0,allowEmpty:!0},r.createElement("option",{value:"foo"},"Foo"),r.createElement("option",{value:"bar"},"Bar"),r.createElement("option",{value:"baz"},"Baz"))),Z=o(5202),S=o.n(Z);var z=()=>r.createElement(l.Z,null,r.createElement(S(),{name:"demo",label:r.createElement(r.Fragment,null,"I accept the ",r.createElement("a",{href:"#void"},"terms and conditions"),".")})),I=o(4546),D=o.n(I);var G=()=>r.createElement(l.Z,null,r.createElement(D(),{name:"demo",min:10,max:90,label:"Label of the slider"})),w=o(5495),R=o.n(w);var T=()=>r.createElement(l.Z,null,r.createElement(R(),{name:"demo",label:"I'm a textarea"})),_=o(8627),P=o.n(_),M=o(7536);var B=()=>{const e=(0,M.cI)({defaultValues:{"disabled-active":!0}});return r.createElement(l.Z,{form:e},r.createElement(P(),{name:"demo",label:"I'm a toggle switch"}),r.createElement(P(),{name:"disabled",disabled:!0,label:"I'm a disabled toggle switch"}),r.createElement(P(),{name:"disabled-active",disabled:!0,label:"I'm a disabled + active toggle switch"}))},A=o(1240),H=o.n(A);var U=()=>r.createElement(l.Z,null,"Vertical :",r.createElement(H(),{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(H(),{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]})),V=o(901),j=o.n(V);var W=()=>r.createElement(l.Z,null,"Vertical :",r.createElement(j(),{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(j(),{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]}));var O=()=>r.createElement(l.Z,{onSubmit:()=>{return e=3e3,new Promise((t=>setTimeout(t,e)));var e}},r.createElement(p(),null,"Submit")),X=o(9092),$=o.n(X);var J=()=>r.createElement(l.Z,null,r.createElement($(),{label:"Label linked to the control",labelPosition:"left"},r.createElement(i(),{name:"demo-single"})),r.createElement($(),{label:"Label NOT linked to the controls group",labelPosition:"left"},r.createElement(j(),{name:"demo-group",options:["foo","bar","baz"]})),r.createElement($(),{label:"Label NOT linked to boolean controls",labelPosition:"left"},r.createElement(S(),{name:"demo-bool",label:"THIS is the real label"}))),q=o(3640),K=o(847),Q=o(785),Y=o(476),ee=o(8263);const te=e=>{let{name:t,control:o,errors:n}=e;return r.createElement(q.Z,{fullWidth:!0,error:!!n,className:"custom-mui-control"},r.createElement("div",{className:"custom-mui-control-control-wrapper"},o),n&&r.createElement("div",{className:"custom-mui-control-errors-wrapper"},n))},oe=e=>{let{errors:t}=e;return r.createElement("div",{className:"custom-mui-errors"},t.join(","))},ne=e=>{let{label:t,control:o,labelPosition:n="left"}=e;return r.createElement(K.Z,{control:o,label:t,className:"custom-mui-item-label"})},re=e=>{let{items:t}=e;return r.createElement(Q.Z,{className:"custom-mui-items-group"},t)},ae=e=>{let{label:t,htmlFor:o}=e;return r.createElement(Y.Z,{className:"custom-mui-label",htmlFor:o},t)},le=e=>{let{control:t,label:o}=e;return r.createElement(ee.ZP,{container:!0,className:"custom-mui-labelled-control"},r.createElement(ee.ZP,{item:!0,xs:12,sm:6},o),r.createElement(ee.ZP,{item:!0,xs:12,sm:6},t))};var me=()=>{const e=(0,M.cI)();return(0,r.useEffect)((()=>{["demo1","demo2"].forEach((t=>{e.setError(t,{type:"custom",message:"Error  message"},{shouldFocus:!1})}))})),r.createElement(l.Z,{form:e,onSubmit:()=>{},layout:{control:te,errors:oe,itemLabel:ne,itemsGroup:re,label:ae,labelledControl:le}},r.createElement($(),{label:"Label"},r.createElement(i(),{name:"demo1"})),r.createElement($(),{label:"Label"},r.createElement(H(),{name:"demo2",options:["Foo","bar",{label:"Baz",value:"Baz",props:{disabled:!0}}]})))};var ie=()=>r.createElement(l.Z,null,r.createElement(j(),{name:"demo",options:["foo","bar","baz"]}));var ce=()=>r.createElement(l.Z,null,r.createElement(H(),{name:"demo",options:[{label:"Displayed label",value:"actual-value"},{label:r.createElement("strong",null,"I am bold"),value:"123"},{label:"I am disabled",value:"abc",props:{disabled:!0}}]}));var pe=()=>r.createElement(l.Z,null,r.createElement(y(),{name:"demo",options:["first",{group:"My group",options:["foo",{label:"bar",value:"Bar!"}]},"not-part-of-any-group",{group:"Primary group",options:["first","second"],props:{color:"primary"}}]}));const ue=e=>r.createElement(a.Z,(0,n.Z)({Component:u,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/mui/Input'\nimport SubmitButton from '@concrete-form/mui/SubmitButton'\n\nconst Demo = () => (\n  <Form onSubmit={data => alert(data.name)}>\n    <Input name=\"name\" label=\"Enter your name\" margin=\"normal\" />\n    <SubmitButton fullWidth>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e)),se=e=>r.createElement(a.Z,(0,n.Z)({Component:s,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/mui/Input'\n\nconst Demo = () => (\n  <Form>\n    <Input name=\"demo\" label=\"I'm an input\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),de=e=>r.createElement(a.Z,(0,n.Z)({Component:f,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Autocomplete from '@concrete-form/mui/Autocomplete'\n\nconst Demo = () => (\n  <Form>\n    <Autocomplete\n      name=\"demo\"\n      options={[ 'foo', 'bar', 'baz' ]}\n      textFieldProps={{ label: 'I\\'m an autocomplete field' }}\n    />\n  </Form>\n)\n\nexport default Demo\n"},e)),be=e=>r.createElement(a.Z,(0,n.Z)({Component:v,source:'/*exclude-start*/\nimport React from \'react\'\nimport { LocalizationProvider } from \'@mui/x-date-pickers\'\nimport { AdapterDateFns } from \'@mui/x-date-pickers/AdapterDateFns\'\n/*exclude-end*/\nimport Form from \'@concrete-form/react-hook-form\'\nimport DateTime from \'@concrete-form/mui/DateTime\'\n\nconst Demo = () => (\n  <Form>{ /*exclude-start*/ }<LocalizationProvider dateAdapter={AdapterDateFns}>{ /*exclude-end*/ }\n    date: <DateTime name="date" type="date" />\n    time: <DateTime name="time" type="time" />\n    datetime: <DateTime name="datetime" type="datetime" />\n  { /*exclude-start*/ }</LocalizationProvider>{ /*exclude-end*/ }</Form>\n)\n\nexport default Demo\n'},e)),fe=e=>r.createElement(a.Z,(0,n.Z)({Component:C,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport FileInput from '@concrete-form/mui/FileInput'\n\nconst Demo = () => (\n  <Form>\n    <FileInput name=\"demo\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),ke=e=>r.createElement(a.Z,(0,n.Z)({Component:L,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/mui/Select'\n\nconst Demo = () => (\n  <Form>\n    Single select :\n    <Select name=\"select1\" options={['foo', 'bar', 'baz', 'biz']} />\n\n    Multiple select :\n    <Select name=\"select2\" options={['foo', 'bar', 'baz', 'biz']} multiple />\n\n    Native select :\n    <Select name=\"select3\" native options={[\n      { label: 'First option', value: 'foo' },\n      'bar',\n      { label: 'Third option', value: 'baz', props: { disabled: true } },\n    ]} />\n\n    Groups (allowEmpty) :\n    <Select name=\"select4\" allowEmpty options={[\n      'foo',\n      { group: 'Group 1', options: ['bar', 'baz'] }\n    ]} />\n\n    Childrens (native + allowEmpty) :\n    <Select name=\"select5\" native allowEmpty>\n      <option value=\"foo\">Foo</option>\n      <option value=\"bar\">Bar</option>\n      <option value=\"baz\">Baz</option>\n    </Select>\n  </Form>\n)\n\nexport default Demo\n"},e)),he=e=>r.createElement(a.Z,(0,n.Z)({Component:z,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SingleCheckbox from '@concrete-form/mui/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <SingleCheckbox name=\"demo\" label={(\n      <>I accept the <a href=\"#void\">terms and conditions</a>.</>\n    )} />\n  </Form>\n)\n\nexport default Demo\n"},e)),ge=e=>r.createElement(a.Z,(0,n.Z)({Component:G,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Slider from '@concrete-form/mui/Slider'\n\nconst Demo = () => (\n  <Form>\n    <Slider name=\"demo\" min={10} max={90} label=\"Label of the slider\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),Ee=e=>r.createElement(a.Z,(0,n.Z)({Component:T,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Textarea from '@concrete-form/mui/Textarea'\n\nconst Demo = () => (\n  <Form>\n    <Textarea name=\"demo\" label=\"I'm a textarea\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),ve=e=>r.createElement(a.Z,(0,n.Z)({Component:B,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport ToggleSwitch from '@concrete-form/mui/ToggleSwitch'\n/* exclude-start */\nimport { useForm } from 'react-hook-form'\n/* exclude-end */\nconst Demo = () => /* exclude-start */ {\n  const form = useForm({defaultValues: { 'disabled-active' : true }})\n  return /* exclude-end */  (\n  <Form /* exclude-start */ form={form} /* exclude-end */>\n    <ToggleSwitch name=\"demo\" label=\"I'm a toggle switch\" />\n    <ToggleSwitch name=\"disabled\" disabled label=\"I'm a disabled toggle switch\" />\n    <ToggleSwitch name=\"disabled-active\" disabled label=\"I'm a disabled + active toggle switch\" />\n  </Form>\n  )\n}\n\nexport default Demo\n"},e)),Ne=e=>r.createElement(a.Z,(0,n.Z)({Component:U,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxGroup from '@concrete-form/mui/CheckboxGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <CheckboxGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <CheckboxGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e)),Fe=e=>r.createElement(a.Z,(0,n.Z)({Component:W,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadioGroup from '@concrete-form/mui/RadioGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <RadioGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <RadioGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e)),Ce=e=>r.createElement(a.Z,(0,n.Z)({Component:O,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SubmitButton from '@concrete-form/mui/SubmitButton'\n\nconst wait = delay => new Promise(resolve => setTimeout(resolve, delay))\n\nconst Demo = () => (\n  <Form onSubmit={() => wait(3000)}>\n    <SubmitButton>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e)),xe=e=>r.createElement(a.Z,(0,n.Z)({Component:J,source:'import React from \'react\'\nimport Form from \'@concrete-form/react-hook-form\'\nimport LabelledControl from \'@concrete-form/mui/LabelledControl\'\nimport Input from \'@concrete-form/mui/Input\'\nimport RadioGroup from \'@concrete-form/mui/RadioGroup\'\nimport SingleCheckbox from \'@concrete-form/mui/SingleCheckbox\'\n\nconst Demo = () => (\n  <Form>\n    <LabelledControl label="Label linked to the control" labelPosition="left">\n      <Input name="demo-single" />\n    </LabelledControl>\n\n    <LabelledControl label="Label NOT linked to the controls group" labelPosition="left">\n      <RadioGroup name="demo-group" options={[\'foo\', \'bar\', \'baz\']} />\n    </LabelledControl>\n\n    <LabelledControl label="Label NOT linked to boolean controls" labelPosition="left">\n      <SingleCheckbox name="demo-bool" label="THIS is the real label" />\n    </LabelledControl>\n  </Form>\n)\n\nexport default Demo\n'},e)),ye=e=>r.createElement(a.Z,(0,n.Z)({Component:me,source:"import React, { useEffect } from 'react'\nimport { useForm } from 'react-hook-form'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/mui/LabelledControl'\nimport Input from '@concrete-form/mui/Input'\nimport CheckboxGroup from '@concrete-form/mui/CheckboxGroup'\n\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormLabel from '@mui/material/FormLabel'\nimport Grid from '@mui/material/Grid'\n\nimport './customLayout.css'\n\nconst ControlLayout = ({ name, control, errors }) => (\n  <FormControl fullWidth error={!!errors} className=\"custom-mui-control\">\n    <div className=\"custom-mui-control-control-wrapper\">\n      { control }\n    </div>\n    {errors && <div className=\"custom-mui-control-errors-wrapper\">\n      { errors }\n    </div>}\n  </FormControl>\n)\n\nconst ErrorLayout = ({ errors }) => {\n  return (\n    <div className=\"custom-mui-errors\">\n      { errors.join(',') }\n    </div>\n  )\n}\n\nconst ItemLabelLayout = ({\n  label,\n  control,\n  labelPosition = 'left', /* ignored for this demo */\n}) => {\n  return (\n    <FormControlLabel control={control} label={label} className=\"custom-mui-item-label\" />\n  )\n}\n\nconst ItemsGroupLayout = ({\n  items,\n}) => {\n  return (\n    <FormGroup className=\"custom-mui-items-group\">\n      { items }\n    </FormGroup>\n  )\n}\n\nconst LabelLayout = ({\n  label,\n  htmlFor,\n}) => {\n  return (\n    <FormLabel className=\"custom-mui-label\" htmlFor={htmlFor}>\n      { label }\n    </FormLabel>\n  )\n}\n\nconst LabelledControlLayout = ({\n  control,\n  label,\n}) => {\n  return (\n    <Grid container className=\"custom-mui-labelled-control\">\n      <Grid item xs={12} sm={6}>\n      { label }\n      </Grid>\n      <Grid item xs={12} sm={6}>\n      { control }\n      </Grid>\n    </Grid>\n  )\n}\n\nconst Demo = () => {\n  const form = useForm()\n\n  useEffect(() => {\n    ['demo1', 'demo2'].forEach(field => {\n      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })\n    })    \n  })\n\n  return (\n    <Form\n      form={form}\n      onSubmit={() => {}}\n      layout={{\n        control: ControlLayout,\n        errors: ErrorLayout,\n        itemLabel: ItemLabelLayout,\n        itemsGroup: ItemsGroupLayout,\n        label: LabelLayout,\n        labelledControl: LabelledControlLayout,\n      }}\n    >\n      <LabelledControl label=\"Label\">\n        <Input name=\"demo1\" />\n        </LabelledControl>\n  \n        <LabelledControl label=\"Label\">\n          <CheckboxGroup name=\"demo2\" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />\n        </LabelledControl>\n      </Form>\n  )\n}\n\nexport default Demo\n"},e)),Le=e=>r.createElement(a.Z,(0,n.Z)({Component:ie,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadioGroup from '@concrete-form/mui/RadioGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n    <RadioGroup name=\"demo\" options={['foo', 'bar', 'baz']} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e)),Ze=e=>r.createElement(a.Z,(0,n.Z)({Component:ce,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxGroup from '@concrete-form/mui/CheckboxGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n<CheckboxGroup name=\"demo\" options={[\n  { label: 'Displayed label', value: 'actual-value' },\n  { label: <strong>I am bold</strong>, value: '123'},\n  { label: 'I am disabled', value: 'abc', props: { disabled: true } },\n]} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e)),Se=e=>r.createElement(a.Z,(0,n.Z)({Component:pe,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/mui/Select'\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n\n<Select name=\"demo\" options={[\n  'first',\n  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },\n  'not-part-of-any-group',\n  { group: 'Primary group', options: ['first', 'second'], props: { color: 'primary' } },\n]} />\n\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},6658:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var n=o(3117),r=(o(7294),o(3905)),a=o(3026);const l={title:"Controls options",hide_title:!0,description:"Control with multiple choices such as Select, Checkbox and Radio in Material-UI"},m="Material-UI Controls options",i={unversionedId:"controls/mui/controls-options",id:"controls/mui/controls-options",title:"Controls options",description:"Control with multiple choices such as Select, Checkbox and Radio in Material-UI",source:"@site/docs/controls/mui/controls-options.mdx",sourceDirName:"controls/mui",slug:"/controls/mui/controls-options",permalink:"/docs/controls/mui/controls-options",draft:!1,editUrl:"https://github.com/concrete-form/concrete-form-docs/docs/controls/mui/controls-options.mdx",tags:[],version:"current",frontMatter:{title:"Controls options",hide_title:!0,description:"Control with multiple choices such as Select, Checkbox and Radio in Material-UI"},sidebar:"docs",previous:{title:"API",permalink:"/docs/controls/mui/api"},next:{title:"Advanced layout customization",permalink:"/docs/controls/mui/advanced-layout-customization"}},c={},p=[{value:"Multiple choices controls",id:"multiple-choices-controls",level:2},{value:"Autocomplete",id:"autocomplete",level:2},{value:"<code>options</code> prop",id:"options-prop",level:2},{value:"String",id:"string",level:3},{value:"Labelled option",id:"labelled-option",level:3},{value:"Group",id:"group",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"material-ui-controls-options"},"Material-UI Controls options"),(0,r.kt)("h2",{id:"multiple-choices-controls"},"Multiple choices controls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./api#autocomplete-"},(0,r.kt)("inlineCode",{parentName:"a"},"<Autocomplete />"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./api#select-"},(0,r.kt)("inlineCode",{parentName:"a"},"<Select />"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./api#checkboxgroup-"},(0,r.kt)("inlineCode",{parentName:"a"},"<CheckboxGroup />"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./api#radiogroup-"},(0,r.kt)("inlineCode",{parentName:"a"},"<RadioGroup />")))),(0,r.kt)("h2",{id:"autocomplete"},"Autocomplete"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<Autocomplete />")," ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," prop is handled by Material-UI. This documentation doesn't apply for that component.",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/api/autocomplete/#props"},"Check Material-UI documentation"),".")),(0,r.kt)("h2",{id:"options-prop"},(0,r.kt)("inlineCode",{parentName:"h2"},"options")," prop"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," is expected to be an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," containing items defined below :"),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"the ",(0,r.kt)("strong",{parentName:"p"},"key")," and the ",(0,r.kt)("strong",{parentName:"p"},"value")," will share the same ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," value provided."),(0,r.kt)(a.FX,{dense:!0}),(0,r.kt)("p",null,"Will produce :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="radio" value="foo"> foo\n<input name="demo" type="radio" value="bar"> bar\n<input name="demo" type="radio" value="baz"> baz\n')),(0,r.kt)("h3",{id:"labelled-option"},"Labelled option"),(0,r.kt)("p",null,"Labelled options are defined as object. They can set their value, their label and some props to forward to the control."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any React node such as string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value of the option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"props"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forwarded to the rendered form control")))),(0,r.kt)(a.mE,{dense:!0}),(0,r.kt)("p",null,"Will produce :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="checkbox" value="actual-value"> Displayed label\n<input name="demo" type="checkbox" value="123"> <strong>I am bold</strong>\n<input name="demo" type="checkbox" value="abc" disabled=""> I am disabled\n')),(0,r.kt)("h3",{id:"group"},"Group"),(0,r.kt)("p",null,"A group has a label, holds other options and cannot be selected."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Groups are only supported by ",(0,r.kt)("a",{parentName:"p",href:"./api#select-"},(0,r.kt)("inlineCode",{parentName:"a"},"<Select />")),".",(0,r.kt)("br",null),"\nGroups cannot be nested.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"group"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,r.kt)("inlineCode",{parentName:"a"},"<optgroup>")),"'s ",(0,r.kt)("strong",{parentName:"td"},"label")," prop or ",(0,r.kt)("a",{parentName:"td",href:"https://mui.com/api/list-subheader/"},(0,r.kt)("inlineCode",{parentName:"a"},"<ListSubheader />")),"'s ",(0,r.kt)("strong",{parentName:"td"},"children"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"depending on ",(0,r.kt)("inlineCode",{parentName:"em"},"native")," value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mixed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mix of strings and labelled options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"props"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,r.kt)("inlineCode",{parentName:"a"},"<optgroup>"))," or ",(0,r.kt)("a",{parentName:"td",href:"https://mui.com/api/list-subheader/"},(0,r.kt)("inlineCode",{parentName:"a"},"<ListSubheader />")),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"depending on ",(0,r.kt)("inlineCode",{parentName:"em"},"native")," value"))))),(0,r.kt)(a.DV,{dense:!0}))}d.isMDXComponent=!0}}]);