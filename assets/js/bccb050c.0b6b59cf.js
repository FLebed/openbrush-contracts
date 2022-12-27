"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[4697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,title:"Proxy"},i=void 0,l={unversionedId:"smart-contracts/proxy",id:"smart-contracts/proxy",title:"Proxy",description:"This example shows how you can use the implementation of proxy to to implement proxy pattern for upgradeable contracts.",source:"@site/docs/smart-contracts/proxy.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/proxy",permalink:"/smart-contracts/proxy",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/docs/smart-contracts/proxy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Proxy"},sidebar:"tutorialSidebar",previous:{title:"Ownable",permalink:"/smart-contracts/ownable"},next:{title:"Diamond Standard",permalink:"/smart-contracts/diamond/"}},c={},s=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Define forward function",id:"step-3-define-forward-function",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can use the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/upgradeability/proxy"},"proxy")," to to implement proxy pattern for upgradeable contracts."),(0,a.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,a.kt)("p",null,"Delegate calls ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1331#discussion_r953736863"},"were marked")," as a possible attack vector in ink! Therefore the ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy")," pattern will not work within OpenBrush until this is reimplemented in ink! 4."),(0,a.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ownable")," modules, enable the corresponding features, and embed data structures\nas described in ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,a.kt)("p",null,"The main traits are ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy"),"."),(0,a.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,a.kt)("p",null,"Define the constructor where you initialize the owner with the contract initiator\nand passing code hash of the logic layer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new(forward_to: Hash) -> Self {\n        let mut instance = Self::default();\n\n        let caller = Self::env().caller();\n        instance._init_with_forward_to(forward_to);\n        instance._init_with_owner(caller);\n        \n        instance\n    }\n}\n")),(0,a.kt)("h2",{id:"step-3-define-forward-function"},"Step 3: Define forward function"),(0,a.kt)("p",null,"Define the forward function to make delegate calls of upgradeable contract through proxy contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod proxy {\n    use openbrush::contracts::ownable::*;\n    use openbrush::contracts::proxy::*;\n    use openbrush::traits::Storage;\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        proxy: proxy::Data,\n        #[storage_field]\n        ownable: ownable::Data,\n    }\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(forward_to: Hash) -> Self {\n            let mut instance = Self::default();\n            \n            let caller = Self::env().caller();\n            instance._init_with_forward_to(forward_to);\n            instance._init_with_owner(caller);\n            \n            instance\n        }\n        #[ink(message, payable, selector = _)]\n        pub fn forward(&self) {\n            self._fallback()\n        }\n    }\n\n    impl Ownable for Contract {}\n\n    impl Proxy for Contract {}\n}\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/proxy"},"Proxy"),"."))}u.isMDXComponent=!0}}]);