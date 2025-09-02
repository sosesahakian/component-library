import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as a}from"./utils-801tHJBJ.js";import"./bundle-mjs-ChGytp73.js";function _({className:r,...t}){return e.jsx("div",{"data-slot":"card",className:a("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r),...t})}function i({className:r,...t}){return e.jsx("div",{"data-slot":"card-header",className:a("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...t})}function c({className:r,...t}){return e.jsx("div",{"data-slot":"card-title",className:a("leading-none font-semibold",r),...t})}function N({className:r,...t}){return e.jsx("div",{"data-slot":"card-description",className:a("text-muted-foreground text-sm",r),...t})}function l({className:r,...t}){return e.jsx("div",{"data-slot":"card-content",className:a("px-6",r),...t})}function p({className:r,...t}){return e.jsx("div",{"data-slot":"card-footer",className:a("flex items-center px-6 [.border-t]:pt-6",r),...t})}_.__docgenInfo={description:"",methods:[],displayName:"Card"};i.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};p.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};c.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};N.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};l.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const n=r=>e.jsx(_,{...r});n.__docgenInfo={description:"",methods:[],displayName:"Card"};const H={title:"Components/Card",component:n,tags:["autodocs"],parameters:{layout:"centered"}},d={render:r=>e.jsxs(n,{...r,children:[e.jsxs(i,{children:[e.jsx(c,{children:"Card Title"}),e.jsx(N,{children:"This is a card description."})]}),e.jsx(l,{children:e.jsx("p",{children:"This is the main content of the card. You can put anything here."})}),e.jsx(p,{children:e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Action"})})]})},o={render:r=>e.jsx(n,{...r,children:e.jsx(l,{children:e.jsx("p",{children:"Just some content without header or footer."})})})},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:e.jsx(c,{children:"Header Only"})}),e.jsx(p,{children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"Footer text"})})]})};var m,u,C;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. You can put anything here.</p>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-primary text-white rounded">
          Action
        </button>
      </CardFooter>
    </Card>
}`,...(C=(u=d.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var h,x,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardContent>
        <p>Just some content without header or footer.</p>
      </CardContent>
    </Card>
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,j,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Header Only</CardTitle>
      </CardHeader>
      <CardFooter>
        <span className="text-xs text-muted-foreground">Footer text</span>
      </CardFooter>
    </Card>
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const w=["Default","WithOnlyContent","WithHeaderAndFooter"];export{d as Default,s as WithHeaderAndFooter,o as WithOnlyContent,w as __namedExportsOrder,H as default};
