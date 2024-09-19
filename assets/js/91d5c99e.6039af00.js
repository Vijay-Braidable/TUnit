"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[570],{1001:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(4848),o=s(8453);const i={sidebar_position:3},r="Assertion Scopes",a={id:"tutorial-assertions/scopes",title:"Assertion Scopes",description:"In TUnit you can create an assertion scope by calling Assert.Multiple().",source:"@site/docs/tutorial-assertions/scopes.md",sourceDirName:"tutorial-assertions",slug:"/tutorial-assertions/scopes",permalink:"/TUnit/docs/tutorial-assertions/scopes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"And Conditions",permalink:"/TUnit/docs/tutorial-assertions/and-conditions"},next:{title:"Or Conditions",permalink:"/TUnit/docs/tutorial-assertions/or-conditions"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"assertion-scopes",children:"Assertion Scopes"})}),"\n",(0,n.jsxs)(t.p,{children:["In TUnit you can create an assertion scope by calling ",(0,n.jsx)(t.code,{children:"Assert.Multiple()"}),".\nThis returns an ",(0,n.jsx)(t.code,{children:"IAsyncDisposable"})," and so should call both ",(0,n.jsx)(t.code,{children:"await"})," and ",(0,n.jsx)(t.code,{children:"using"}),". This will make sure that the assertions are executed when the scope is exited."]}),"\n",(0,n.jsx)(t.p,{children:"If you use an assertion scope, then any assertions that are performed inside of it will not throw an exception immediately. Instead, they will lazily execute their logic, and then aggregate any exceptions together at the end of the scope and throw them together."}),"\n",(0,n.jsx)(t.p,{children:"This is useful for asserting multiple properties and showing all errors at once, instead of having to fix > rerun > fix > rerun."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"    [Test]\n    public async Task MyTest()\n    {\n        var result = Add(1, 2);\n\n        await Assert.Multiple(() =>\n        {\n            Assert.That(result).IsPositive();\n            Assert.That(result).IsEqualTo(3);\n        });\n    }\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);