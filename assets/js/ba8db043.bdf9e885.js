"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[2321],{7898:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=s(4848),o=s(8453);const i={sidebar_position:5},a="Timeouts",r={id:"tutorial-extras/timeouts",title:"Timeouts",description:"If you want to stop a test after a specified amount of time, add a [TimeoutAttribute] onto your test method or class. This takes an int of how many milliseconds a test can execute for.",source:"@site/docs/tutorial-extras/timeouts.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/timeouts",permalink:"/TUnit/docs/tutorial-extras/timeouts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Repeating",permalink:"/TUnit/docs/tutorial-extras/repeating"},next:{title:"Properties",permalink:"/TUnit/docs/tutorial-extras/properties"}},c={},u=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"timeouts",children:"Timeouts"})}),"\n",(0,n.jsxs)(t.p,{children:["If you want to stop a test after a specified amount of time, add a ",(0,n.jsx)(t.code,{children:"[TimeoutAttribute]"})," onto your test method or class. This takes an ",(0,n.jsx)(t.code,{children:"int"})," of how many milliseconds a test can execute for."]}),"\n",(0,n.jsx)(t.p,{children:"A cancellation token will be passed to tests too, which should be used where appropriate. This ensures that after the timeout is reached, operations are cancelled properly, and not wasting system resources."}),"\n",(0,n.jsx)(t.p,{children:"This can be used on base classes and inherited to affect all tests in sub-classes."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using TUnit.Core;\n\nnamespace MyTestProject;\n\npublic class MyTestClass\n{\n    [Test]\n    [Timeout(30_000)]\n    public async Task MyTest(CancellationToken cancellationToken)\n    {\n        \n    }\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(6540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);