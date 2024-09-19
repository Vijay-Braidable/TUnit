"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[6168],{7104:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(4848),s=n(8453);const o={sidebar_position:4},i="Or Conditions",a={id:"tutorial-assertions/or-conditions",title:"Or Conditions",description:"Similar to the And property, there is also the Or property.",source:"@site/docs/tutorial-assertions/or-conditions.md",sourceDirName:"tutorial-assertions",slug:"/tutorial-assertions/or-conditions",permalink:"/TUnit/docs/tutorial-assertions/or-conditions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Assertion Scopes",permalink:"/TUnit/docs/tutorial-assertions/scopes"},next:{title:"Type Checking",permalink:"/TUnit/docs/tutorial-assertions/type-checking"}},c={},d=[];function l(t){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"or-conditions",children:"Or Conditions"})}),"\n",(0,r.jsxs)(e.p,{children:["Similar to the ",(0,r.jsx)(e.code,{children:"And"})," property, there is also the ",(0,r.jsx)(e.code,{children:"Or"})," property."]}),"\n",(0,r.jsx)(e.p,{children:"When using this, only one condition needs to pass:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csharp",children:"    [Test]\n    public async Task MyTest()\n    {\n        int[] array = [1, 2];\n        var randomValue1 = Random.Shared.GetItems(array, 1).First();\n        var randomValue2 = Random.Shared.GetItems(array, 1).First();\n        \n        var result = Add(randomValue1, randomValue2);\n\n        await Assert.That(result)\n            .IsEqualTo(2)\n            .Or.IsEqualTo(3)\n            .Or.IsEqualTo(4);\n    }\n"})})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var r=n(6540);const s={},o=r.createContext(s);function i(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);