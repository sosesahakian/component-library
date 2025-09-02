import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c,R as me}from"./iframe-j_rnuaCf.js";import{c as j}from"./index-BmMEubVl.js";import{u as N}from"./index-CmLS3sme.js";import{u as fe,c as Y}from"./index-DIVe3R5o.js";import{P as E}from"./index-BoJNSPj2.js";import{c as J,R as ve,I as Re}from"./index-CHHWnu9r.js";import{u as be}from"./index-cc3LHPZJ.js";import{u as ge}from"./index-CaePAcOo.js";import{u as xe}from"./index-Bbr05CAT.js";import{P as ye}from"./index-BSawwIe0.js";import{c as Q}from"./utils-801tHJBJ.js";import{c as he}from"./createLucideIcon-B8KrhfqI.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bp6Vs-tM.js";import"./index-CWizvcBd.js";import"./index-BFKIko3y.js";import"./bundle-mjs-ChGytp73.js";/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ce=he("circle",we);var S="Radio",[_e,Z]=Y(S),[Ge,Ee]=_e(S),ee=c.forwardRef((r,t)=>{const{__scopeRadio:e,name:s,checked:a=!1,required:n,disabled:d,value:u="on",onCheck:i,form:f,...v}=r,[m,R]=c.useState(null),l=N(t,g=>R(g)),p=c.useRef(!1),b=m?f||!!m.closest("form"):!0;return o.jsxs(Ge,{scope:e,checked:a,disabled:d,children:[o.jsx(E.button,{type:"button",role:"radio","aria-checked":a,"data-state":te(a),"data-disabled":d?"":void 0,disabled:d,value:u,...v,ref:l,onClick:j(r.onClick,g=>{a||i==null||i(),b&&(p.current=g.isPropagationStopped(),p.current||g.stopPropagation())})}),b&&o.jsx(ae,{control:m,bubbles:!p.current,name:s,value:u,checked:a,required:n,disabled:d,form:f,style:{transform:"translateX(-100%)"}})]})});ee.displayName=S;var oe="RadioIndicator",re=c.forwardRef((r,t)=>{const{__scopeRadio:e,forceMount:s,...a}=r,n=Ee(oe,e);return o.jsx(ye,{present:s||n.checked,children:o.jsx(E.span,{"data-state":te(n.checked),"data-disabled":n.disabled?"":void 0,...a,ref:t})})});re.displayName=oe;var Ie="RadioBubbleInput",ae=c.forwardRef(({__scopeRadio:r,control:t,checked:e,bubbles:s=!0,...a},n)=>{const d=c.useRef(null),u=N(d,n),i=xe(e),f=ge(t);return c.useEffect(()=>{const v=d.current;if(!v)return;const m=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(m,"checked").set;if(i!==e&&l){const p=new Event("click",{bubbles:s});l.call(v,e),v.dispatchEvent(p)}},[i,e,s]),o.jsx(E.input,{type:"radio","aria-hidden":!0,defaultChecked:e,...a,tabIndex:-1,ref:u,style:{...a.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});ae.displayName=Ie;function te(r){return r?"checked":"unchecked"}var je=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],I="RadioGroup",[Ne,eo]=Y(I,[J,Z]),ne=J(),se=Z(),[Se,De]=Ne(I),ie=c.forwardRef((r,t)=>{const{__scopeRadioGroup:e,name:s,defaultValue:a,value:n,required:d=!1,disabled:u=!1,orientation:i,dir:f,loop:v=!0,onValueChange:m,...R}=r,l=ne(e),p=be(f),[b,g]=fe({prop:n,defaultProp:a??null,onChange:m,caller:I});return o.jsx(Se,{scope:e,name:s,required:d,disabled:u,value:b,onValueChange:g,children:o.jsx(ve,{asChild:!0,...l,orientation:i,dir:p,loop:v,children:o.jsx(E.div,{role:"radiogroup","aria-required":d,"aria-orientation":i,"data-disabled":u?"":void 0,dir:p,...R,ref:t})})})});ie.displayName=I;var de="RadioGroupItem",le=c.forwardRef((r,t)=>{const{__scopeRadioGroup:e,disabled:s,...a}=r,n=De(de,e),d=n.disabled||s,u=ne(e),i=se(e),f=c.useRef(null),v=N(t,f),m=n.value===a.value,R=c.useRef(!1);return c.useEffect(()=>{const l=b=>{je.includes(b.key)&&(R.current=!0)},p=()=>R.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",p)}},[]),o.jsx(Re,{asChild:!0,...u,focusable:!d,active:m,children:o.jsx(ee,{disabled:d,required:n.required,checked:m,...i,...a,name:n.name,ref:v,onCheck:()=>n.onValueChange(a.value),onKeyDown:j(l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:j(a.onFocus,()=>{var l;R.current&&((l=f.current)==null||l.click())})})})});le.displayName=de;var Pe="RadioGroupIndicator",ce=c.forwardRef((r,t)=>{const{__scopeRadioGroup:e,...s}=r,a=se(e);return o.jsx(re,{...a,...s,ref:t})});ce.displayName=Pe;var ke=ie,Ae=le,Oe=ce;function ue({className:r,...t}){return o.jsx(ke,{"data-slot":"radio-group",className:Q("grid gap-3",r),...t})}function pe({className:r,...t}){return o.jsx(Ae,{"data-slot":"radio-group-item",className:Q("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",r),...t,children:o.jsx(Oe,{"data-slot":"radio-group-indicator",className:"relative flex items-center justify-center",children:o.jsx(Ce,{className:"fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"})})})}ue.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};pe.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem"};const D=({options:r,value:t,defaultValue:e,onChange:s,name:a,disabled:n=!1,className:d,direction:u="col"})=>o.jsx(ue,{value:t,defaultValue:e,onValueChange:s,name:a,className:[d,u==="row"?"flex flex-row gap-4":"flex flex-col gap-2"].filter(Boolean).join(" "),disabled:n,children:r.map(i=>o.jsxs("label",{className:"inline-flex items-center gap-2 cursor-pointer",children:[o.jsx(pe,{value:i.value,disabled:n||i.disabled}),o.jsx("span",{children:i.label})]},i.value))});D.__docgenInfo={description:"",methods:[],displayName:"CustomRadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"row" | "col"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"col"'}]},description:"",defaultValue:{value:'"col"',computed:!1}}}};const x=[{label:"Option One",value:"one"},{label:"Option Two",value:"two"},{label:"Option Three",value:"three"}],oo={title:"Components/RadioGroup",component:D,tags:["autodocs"],parameters:{layout:"centered"}},y={args:{options:x,name:"default-radio"}},h={args:{options:x,defaultValue:"two",name:"default-value-radio"}},w={args:{options:x,disabled:!0,name:"disabled-radio"}},C={args:{options:x,direction:"row",name:"row-radio"}},_={args:{options:[{label:"Enabled",value:"enabled"},{label:"Disabled",value:"disabled",disabled:!0},{label:"Also Enabled",value:"also-enabled"}],name:"disabled-option-radio"}},G={render:r=>{const t=()=>{const[e,s]=me.useState("one");return o.jsx(D,{...r,value:e,onChange:s,name:"controlled-radio"})};return o.jsx(t,{})},args:{options:x,name:"controlled-radio-group"}};var P,k,A;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options,
    name: "default-radio"
  }
}`,...(A=(k=y.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var O,V,T;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: "two",
    name: "default-value-radio"
  }
}`,...(T=(V=h.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var q,M,L;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options,
    disabled: true,
    name: "disabled-radio"
  }
}`,...(L=(M=w.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var B,F,K;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options,
    direction: "row",
    name: "row-radio"
  }
}`,...(K=(F=C.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,W,z;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Enabled",
      value: "enabled"
    }, {
      label: "Disabled",
      value: "disabled",
      disabled: true
    }, {
      label: "Also Enabled",
      value: "also-enabled"
    }],
    name: "disabled-option-radio"
  }
}`,...(z=(W=_.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var H,$,X;G.parameters={...G.parameters,docs:{...(H=G.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const ControlledRadioGroup = () => {
      const [value, setValue] = React.useState("one");
      return <CustomRadioGroup {...args} value={value} onChange={setValue} name="controlled-radio" />;
    };
    return <ControlledRadioGroup />;
  },
  args: {
    options,
    name: "controlled-radio-group"
  }
}`,...(X=($=G.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const ro=["Default","WithDefaultValue","Disabled","RowDirection","WithDisabledOption","Controlled"];export{G as Controlled,y as Default,w as Disabled,C as RowDirection,h as WithDefaultValue,_ as WithDisabledOption,ro as __namedExportsOrder,oo as default};
