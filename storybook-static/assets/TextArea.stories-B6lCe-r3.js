import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as v}from"./utils-801tHJBJ.js";import{L as W}from"./label-Eui6VufQ.js";import{B as j}from"./button-BqzQ_tnC.js";import"./bundle-mjs-ChGytp73.js";import"./iframe-j_rnuaCf.js";import"./preload-helper-C1FmrZbK.js";import"./index-BoJNSPj2.js";import"./index-Bp6Vs-tM.js";import"./index-CWizvcBd.js";import"./index-CmLS3sme.js";function i({className:r,...y}){return e.jsx("textarea",{"data-slot":"textarea",className:v("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),...y})}i.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const F={title:"Components/Textarea",component:i,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{placeholder:"What's on your mind?"}},a=r=>e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(W,{htmlFor:"story-textarea",children:"Your Message "}),e.jsx(i,{id:"story-textarea",...r})]}),o={args:{placeholder:"What's on your mind?",disabled:!0}},t=r=>e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(i,{id:"story-textarea",...r}),e.jsx(j,{children:"Submit"})]});a.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};t.__docgenInfo={description:"",methods:[],displayName:"WithButton"};var d,n,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "What's on your mind?"
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div className="flex flex-col space-y-2">
    <Label htmlFor="story-textarea">Your Message </Label>
    <Textarea id="story-textarea" {...args} />
  </div>`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "What's on your mind?",
    disabled: true
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div className="flex flex-col space-y-2">
    <Textarea id="story-textarea" {...args} />
    <Button>Submit</Button>
  </div>`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const M=["Default","WithLabel","Disabled","WithButton"];export{s as Default,o as Disabled,t as WithButton,a as WithLabel,M as __namedExportsOrder,F as default};
