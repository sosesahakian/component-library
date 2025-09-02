import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./cn-BQZxDKul.js";import{R as L}from"./iframe-j_rnuaCf.js";import"./bundle-mjs-ChGytp73.js";import"./preload-helper-C1FmrZbK.js";const u=({label:e,checked:c,defaultChecked:i,onChange:d,error:l,disabled:m=!1,id:N,name:g,className:R})=>{const h=N||g||(e==null?void 0:e.toLowerCase().replace(/\s/g,"-"));return r.jsxs("div",{className:p("flex flex-col gap-1",R),children:[r.jsxs("label",{className:p("inline-flex items-center cursor-pointer",m&&"cursor-not-allowed"),htmlFor:h,children:[r.jsx("input",{type:"checkbox",id:h,name:g,checked:c,defaultChecked:i,onChange:d,disabled:m,className:p("form-checkbox h-5 w-5 text-indigo-600 transition",l?"border-red-500":"",m&&"bg-gray-100 text-gray-400 cursor-not-allowed")}),e&&r.jsx("span",{className:"ml-2 text-sm text-gray-700",children:e})]}),l&&r.jsx("p",{className:"text-xs text-red-500",children:l})]})};u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Checkbox",component:u,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{label:"Accept terms and conditions"}},t={args:{label:"Subscribe to newsletter",checked:!0}},a={args:{label:"Disabled option",disabled:!0}},o={args:{label:"I agree",error:"You must agree before continuing"}},_=e=>{const[c,i]=L.useState(!!e.checked);return r.jsx(u,{...e,checked:c,onChange:d=>i(d.target.checked)})},n={args:{label:"Controlled checkbox"},render:_};var b,x,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,k,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to newsletter",
    checked: true
  }
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var T,E,q;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Disabled option",
    disabled: true
  }
}`,...(q=(E=a.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var j,w,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "I agree",
    error: "You must agree before continuing"
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var v,D,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Controlled checkbox"
    // checked: false, // Don't set this here
  },
  render: ControlledCheckbox
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const O=["Default","Checked","Disabled","WithError","Controlled"];export{t as Checked,n as Controlled,s as Default,a as Disabled,o as WithError,O as __namedExportsOrder,F as default};
