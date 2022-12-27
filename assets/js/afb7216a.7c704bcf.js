"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[5454],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>P});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},l="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),l=p(n),m=o,P=l["".concat(c,".").concat(m)]||l[m]||h[m]||a;return n?r.createElement(P,s(s({ref:e},u),{},{components:n})):r.createElement(P,s({ref:e},u))}));function P(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[l]="string"==typeof t?t:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1296:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2,title:"PSP37 Batch"},s=void 0,i={unversionedId:"smart-contracts/PSP37/Extensions/batch",id:"smart-contracts/PSP37/Extensions/batch",title:"PSP37 Batch",description:"This example shows how you can reuse the implementation of PSP37 token with PSP37Batch extension, which allows batch transferring of PSP37 tokens.",source:"@site/docs/smart-contracts/PSP37/Extensions/batch.md",sourceDirName:"smart-contracts/PSP37/Extensions",slug:"/smart-contracts/PSP37/Extensions/batch",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/batch",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP37/Extensions/batch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PSP37 Batch"},sidebar:"tutorialSidebar",previous:{title:"PSP37 Metadata",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/metadata"},next:{title:"PSP37 Mintable",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/mintable"}},c={},p=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2}],u={toc:p};function l(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/token/psp37"},"PSP37")," token with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/token/psp37/extensions/batch.rs"},"PSP37Batch")," extension, which allows batch transferring of PSP37 tokens."),(0,o.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,o.kt)("p",null,"First, you should implement basic version of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37"},"PSP37"),"."),(0,o.kt)("p",null,"For your smart contract to use this extension, you only need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Batch")," trait in your\n",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37")," smart contract. Add import for ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp37::extensions::batch::*"),",\ninherit the implementation for ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Batch")," trait, where you can also customize (override)\nthe original functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Batch"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::psp37::extensions::batch::*;\n\nimpl PSP37Batch for Contract {}\n")),(0,o.kt)("p",null,"And that's it! Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37")," is now extended by the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Batch")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp37_extensions/batch"},"PSP37 Batch"),"."))}l.isMDXComponent=!0}}]);