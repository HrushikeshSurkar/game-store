"use strict";(self.webpackChunkgame_store=self.webpackChunkgame_store||[]).push([[559],{559:(e,s,c)=>{c.r(s),c.d(s,{default:()=>f});var a=c(43),n=c(139),o=c.n(n),t=c(852),r=c(579);const l=a.forwardRef(((e,s)=>{let{bsPrefix:c,className:a,as:n="div",...l}=e;const i=(0,t.oU)(c,"row"),d=(0,t.gy)(),h=(0,t.Jm)(),u="".concat(i,"-cols"),x=[];return d.forEach((e=>{const s=l[e];let c;delete l[e],null!=s&&"object"===typeof s?({cols:c}=s):c=s;const a=e!==h?"-".concat(e):"";null!=c&&x.push("".concat(u).concat(a,"-").concat(c))})),(0,r.jsx)(n,{ref:s,...l,className:o()(a,i,...x)})}));l.displayName="Row";const i=l;const d=a.forwardRef(((e,s)=>{const[{className:c,...a},{as:n="div",bsPrefix:l,spans:i}]=function(e){let{as:s,bsPrefix:c,className:a,...n}=e;c=(0,t.oU)(c,"col");const r=(0,t.gy)(),l=(0,t.Jm)(),i=[],d=[];return r.forEach((e=>{const s=n[e];let a,o,t;delete n[e],"object"===typeof s&&null!=s?({span:a,offset:o,order:t}=s):a=s;const r=e!==l?"-".concat(e):"";a&&i.push(!0===a?"".concat(c).concat(r):"".concat(c).concat(r,"-").concat(a)),null!=t&&d.push("order".concat(r,"-").concat(t)),null!=o&&d.push("offset".concat(r,"-").concat(o))})),[{...n,className:o()(a,...i,...d)},{as:s,bsPrefix:c,spans:i}]}(e);return(0,r.jsx)(n,{...a,ref:s,className:o()(c,!i.length&&l)})}));d.displayName="Col";const h=d,u=()=>(0,r.jsx)("div",{className:"game-area-wrapper",children:(0,r.jsx)("div",{children:"Game Area"})}),x=()=>{const[e,s]=(0,a.useState)([]);return(0,r.jsxs)("div",{className:"game-controls-container",children:[(0,r.jsxs)("div",{className:"stored-functions",children:[(0,r.jsx)("h2",{children:"Your Controls"}),(0,r.jsx)("div",{className:"functions-list",children:(0,r.jsx)("div",{children:e.map(((c,a)=>(0,r.jsxs)("div",{children:[c,(0,r.jsx)("button",{onClick:()=>{s(e.filter(((e,s)=>s!==a)))},children:"X"})]},a)))})})]}),(0,r.jsxs)("div",{className:"code-editor",children:[(0,r.jsx)("h3",{children:"Create your Controls"}),(0,r.jsx)("textarea",{placeholder:"Write your code here...",rows:10}),(0,r.jsx)("button",{onClick:()=>{s([...e,"function() { return 'Hello, World!'; }"])},children:"Generate Function"})]})]})},f=()=>(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)(i,{className:"text-center p-4",children:(0,r.jsx)("h1",{children:"Code Craft"})}),(0,r.jsxs)(i,{children:[(0,r.jsx)(h,{className:"game-area",children:(0,r.jsx)(u,{})}),(0,r.jsx)(h,{className:"game-controls",children:(0,r.jsx)(x,{})})]})]})}}]);
//# sourceMappingURL=559.536db1b6.chunk.js.map