import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{c as _}from"./utils-801tHJBJ.js";import"./bundle-mjs-ChGytp73.js";const j={red:"bg-red-500 text-white",blue:"bg-blue-500 text-white",green:"bg-green-500 text-white",grey:"bg-gray-500 text-white",black:"bg-black text-white",purple:"bg-purple-500 text-white",pink:"bg-pink-500 text-white",yellow:"bg-yellow-400 text-black"},B=({variant:e="default",size:S="small",color:l,className:k,...D})=>O.jsx("span",{className:_("inline-flex items-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",S==="small"?"px-2.5 py-0.5 text-[11px]":"px-4 py-1 text-base",l?j[l]:e==="default"?"bg-gray-200 text-gray-800":e==="secondary"?"bg-secondary text-secondary-foreground":e==="destructive"?"bg-red-500 text-white":e==="outline"?"border border-border text-foreground":"",k),...D});B.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "secondary" | "destructive" | "outline"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "big"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"big"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colorMap",elements:[{name:"literal",value:"red"},{name:"literal",value:"blue"},{name:"literal",value:"green"},{name:"literal",value:"grey"},{name:"literal",value:"black"},{name:"literal",value:"purple"},{name:"literal",value:"pink"},{name:"literal",value:"yellow"}]},description:""}}};const E={title:"Components/Badge",component:B,tags:["autodocs"],parameters:{layout:"centered"}},r={args:{children:"Default"}},a={args:{children:"Secondary",variant:"secondary"}},t={args:{children:"Destructive",variant:"destructive"}},n={args:{children:"Outline",variant:"outline"}},s={args:{children:"Big Badge",size:"big"}};var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Default"
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,h,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Big Badge",
    size: "big"
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const M=["Default","Secondary","Destructive","Outline","Big"];export{s as Big,r as Default,t as Destructive,n as Outline,a as Secondary,M as __namedExportsOrder,E as default};
