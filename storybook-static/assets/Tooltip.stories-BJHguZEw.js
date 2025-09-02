import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as u,T as d,b as m,c}from"./tooltip-DIuNVENc.js";import"./iframe-j_rnuaCf.js";import"./preload-helper-C1FmrZbK.js";import"./index-BmMEubVl.js";import"./index-DIVe3R5o.js";import"./index-CmLS3sme.js";import"./index-C-t9GJP4.js";import"./index-BoJNSPj2.js";import"./index-Bp6Vs-tM.js";import"./index-CWizvcBd.js";import"./index-BFKIko3y.js";import"./index-YnvDEEFs.js";import"./index-CaePAcOo.js";import"./index-BSawwIe0.js";import"./utils-801tHJBJ.js";import"./bundle-mjs-ChGytp73.js";const e=T=>o.jsx(u,{...T});e.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const S={title:"Components/Tooltip",component:e,tags:["autodocs"],parameters:{layout:"centered"}},r={render:()=>o.jsx(d,{children:o.jsxs(e,{children:[o.jsx(m,{asChild:!0,children:o.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Hover me"})}),o.jsx(c,{children:"This is a tooltip!"})]})})},t={render:()=>o.jsx(d,{children:o.jsxs(e,{children:[o.jsx(m,{asChild:!0,children:o.jsx("span",{className:"underline cursor-pointer",children:"Hover for info"})}),o.jsx(c,{children:"Here is a longer tooltip with more information and details for the user."})]})})};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>This is a tooltip!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline cursor-pointer">Hover for info</span>
        </TooltipTrigger>
        <TooltipContent>
          Here is a longer tooltip with more information and details for the
          user.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const W=["Default","WithLongContent"];export{r as Default,t as WithLongContent,W as __namedExportsOrder,S as default};
