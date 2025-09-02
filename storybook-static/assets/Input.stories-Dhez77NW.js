import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./iframe-j_rnuaCf.js";import{c as m}from"./cn-BQZxDKul.js";import{I as x}from"./input-B4hVpnS1.js";import"./preload-helper-C1FmrZbK.js";import"./bundle-mjs-ChGytp73.js";import"./utils-801tHJBJ.js";const D=({label:r,placeholder:u,value:c,onChange:t,error:a,disabled:s=!1,id:S,name:p,variant:L="standard"})=>{const n=S||p||(r==null?void 0:r.toLowerCase().replace(/\s/g,"-")),[g,f]=U.useState(!1);return L==="floating"?e.jsxs("div",{className:"relative w-full",children:[e.jsx(x,{id:n,name:p,placeholder:g?u:"",value:c,onChange:t,disabled:s,onFocus:()=>f(!0),onBlur:R=>{f(!1),t==null||t(R)},className:m("peer block w-full appearance-none rounded-md border-2 bg-white px-3 pt-6 pb-2 text-sm placeholder-transparent transition-all",a?"border-red-500":"border-gray-300 focus:border-gray-500",s&&"bg-gray-100 text-gray-400 cursor-not-allowed")}),r&&e.jsx("label",{htmlFor:n,className:m("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-900 transition-all px-1 bg-white",g||c?"scale-90 -translate-y-6":"scale-100"),children:r}),a&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a})]}):e.jsxs("div",{className:"flex flex-col gap-1",children:[r&&e.jsx("label",{htmlFor:n,className:"text-sm font-medium text-gray-700",children:r}),e.jsx(x,{id:n,name:p,placeholder:u,value:c,onChange:t,disabled:s,className:m("border border-transparent focus:border-gray-500 transition-all",a?"border-red-500":"",s&&"bg-gray-100 text-gray-400 cursor-not-allowed")}),a&&e.jsx("p",{className:"text-xs text-red-500",children:a})]})};D.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"standard" | "floating"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"floating"'}]},description:"",defaultValue:{value:'"standard"',computed:!1}}}};const $={title:"Components/Input",component:D,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{label:"Username",placeholder:"Enter your username"}},l={args:{label:"Email",placeholder:"Enter your email",error:"This field is required"}},i={args:{label:"Full Name",placeholder:"Disabled input",disabled:!0}},d={args:{label:"Username",placeholder:"Enter your username",variant:"floating"}};var y,h,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username"
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var E,v,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "This field is required"
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var q,N,j;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,F,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "floating"
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const z=["Default","WithError","Disabled","WithFloating"];export{o as Default,i as Disabled,l as WithError,d as WithFloating,z as __namedExportsOrder,$ as default};
