import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./iframe-bmIo4hHN.js";import{c as p}from"./cn-BQZxDKul.js";import{I as f}from"./input-BLW9-trG.js";import"./preload-helper-C1FmrZbK.js";import"./bundle-mjs-ChGytp73.js";import"./utils-801tHJBJ.js";const w=({label:r,placeholder:u,value:c,onChange:t,error:a,disabled:s=!1,id:D,name:m,variant:S="standard"})=>{const n=D||m||(r==null?void 0:r.toLowerCase().replace(/\s/g,"-")),[L,g]=U.useState(!1);return S==="floating"?e.jsxs("div",{className:"relative w-full",children:[e.jsx(f,{id:n,name:m,placeholder:u,value:c,onChange:t,disabled:s,onFocus:()=>g(!0),onBlur:R=>{g(!1),t==null||t(R)},className:p("peer block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 pt-6 pb-2 text-sm placeholder-transparent transition-all",a?"border-red-500":"border-gray-300 focus:border-indigo-500",s&&"bg-gray-100 text-gray-400 cursor-not-allowed")}),r&&e.jsx("label",{htmlFor:n,className:p("absolute left-3 top-2 text-sm text-indigo-500 transition-all px-1 bg-gray-50",L||c?"scale-90 -translate-y-2.5":"translate-y-3 scale-100"),children:r}),a&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a})]}):e.jsxs("div",{className:"flex flex-col gap-1",children:[r&&e.jsx("label",{htmlFor:n,className:"text-sm font-medium text-gray-700",children:r}),e.jsx(f,{id:n,name:m,placeholder:u,value:c,onChange:t,disabled:s,className:p(a?"border-red-500":"",s&&"bg-gray-100 text-gray-400 cursor-not-allowed")}),a&&e.jsx("p",{className:"text-xs text-red-500",children:a})]})};w.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"standard" | "floating"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"floating"'}]},description:"",defaultValue:{value:'"standard"',computed:!1}}}};const $={title:"Components/Input",component:w,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{label:"Username",placeholder:"Enter your username"}},l={args:{label:"Email",placeholder:"Enter your email",error:"This field is required"}},i={args:{label:"Full Name",placeholder:"Disabled input",disabled:!0}},d={args:{label:"Username",placeholder:"Enter your username",variant:"floating"}};var x,y,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username"
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,E,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "This field is required"
  }
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var T,q,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(N=(q=i.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var j,F,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "floating"
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const z=["Default","WithError","Disabled","WithFloating"];export{o as Default,i as Disabled,l as WithError,d as WithFloating,z as __namedExportsOrder,$ as default};
