"use strict";(self.webpackChunkgame_store=self.webpackChunkgame_store||[]).push([[827],{827:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var t=s(43),n=s(216),r=s(579);const c=e=>{let{setCurrentScreen:a}=e;return(0,r.jsx)("div",{className:"start-menu-wrapper",children:(0,r.jsx)("div",{className:"start-menu-container",children:(0,r.jsx)("div",{className:"start-menu",children:(0,r.jsx)("div",{className:"start-game",onClick:()=>a("main-arena"),children:"Start Game"})})})})};var l=s(318);const i=e=>{let{goBack:a}=e;return(0,r.jsxs)("div",{className:"btn btn-light back-button",onClick:a,children:[(0,r.jsx)(l.zrQ,{className:"mb-1"}),"Back"]})},m=e=>{let{goBack:a,selectMap:s}=e;return(0,r.jsxs)("div",{className:"maps-container",children:[(0,r.jsx)("h1",{className:"maps-title",children:"Select Your Map"}),(0,r.jsx)("div",{className:"map-grid",children:["Map 1","Map 2","Map 3","Map 4"].map((e=>(0,r.jsx)("div",{className:"map-slot",onClick:()=>{s(e)},children:e},e)))})]})},u=e=>{let{selectedMap:a,startGame:s}=e;return(0,r.jsxs)("div",{className:"game-setup",children:[(0,r.jsx)("h1",{children:"Game Setup"}),(0,r.jsxs)("p",{children:["You have selected: ",a]}),(0,r.jsx)("button",{onClick:s,children:"Start Game"})]})},d=()=>{const[e,a]=(0,t.useState)(10),[s,n]=(0,t.useState)(10),[c,l]=(0,t.useState)(0),[i,m]=(0,t.useState)(1),[u,d]=(0,t.useState)(""),[o,p]=(0,t.useState)(!1),[h,x]=(0,t.useState)(!1),[j,v]=(0,t.useState)(null);(0,t.useEffect)((()=>{const s=setInterval((()=>{n((e=>Math.max(e,0)+2)),e>0?a((e=>Math.max(e,0)+1)):(p(!0),clearInterval(s))}),1e3);return v(s),()=>clearInterval(s)}),[o]);return(0,r.jsxs)("div",{className:"game-arena",children:[(0,r.jsxs)("div",{className:"tower player-1",children:[(0,r.jsx)("span",{children:"Player 1"}),(0,r.jsxs)("span",{children:["Population: ",e]})]}),(0,r.jsxs)("div",{className:"tower computer",children:[(0,r.jsx)("span",{children:"Computer"}),(0,r.jsxs)("span",{children:["Population: ",s]})]}),(0,r.jsxs)("div",{className:"buttons",children:[(0,r.jsx)("button",{onClick:()=>{o||e>0&&(a((e=>e-1)),n((e=>Math.max(e-1,0))),s<=1&&(x(!0),d("You win!"),clearInterval(j)))},className:"action-button",disabled:o,children:"Add Path"}),h&&(0,r.jsx)("button",{onClick:()=>{h&&(l((e=>e+5)),n((e=>e+5)),m((e=>e+1)),x(!1),d("Level ".concat(i+1,"!")))},className:"action-button",children:"Next Level"})]}),u&&(0,r.jsx)("div",{className:"message",children:u}),o&&(0,r.jsx)("div",{className:"popup",children:(0,r.jsxs)("div",{className:"popup-content",children:[(0,r.jsx)("p",{children:"You lost! Your population reached zero."}),(0,r.jsx)("button",{onClick:()=>{a(10),n(10),l(0),m(1),d(""),p(!1),x(!1),clearInterval(j)},className:"action-button",children:"Restart"})]})})]})},o=()=>{const[e,a]=(0,t.useState)("start-menu"),[s,l]=(0,t.useState)(null),o=(0,n.Zp)(),p=()=>{switch(e){case"game-arena":a("game-setup");break;case"game-setup":a("main-arena");break;case"main-arena":a("start-menu");break;default:o(-1)}};return(0,r.jsxs)("div",{className:"take-over",children:[(0,r.jsx)(i,{className:"back-button",goBack:p}),"start-menu"===e&&(0,r.jsx)(c,{setCurrentScreen:a}),"main-arena"===e&&(0,r.jsx)(m,{goBack:p,selectMap:e=>{l(e),a("game-setup")}}),"game-setup"===e&&(0,r.jsx)(u,{selectedMap:s,startGame:()=>{a("game-arena")}}),"game-arena"===e&&(0,r.jsx)(d,{selectedMap:s})]})}}}]);
//# sourceMappingURL=827.7843c604.chunk.js.map