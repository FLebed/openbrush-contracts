"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"PSP37 Metadata"},s=void 0,i={unversionedId:"smart-contracts/PSP37/Extensions/metadata",id:"smart-contracts/PSP37/Extensions/metadata",title:"PSP37 Metadata",description:"This example shows how you can reuse the implementation of PSP37 token with PSP37Metadata extension.",source:"@site/docs/smart-contracts/PSP37/Extensions/metadata.md",sourceDirName:"smart-contracts/PSP37/Extensions",slug:"/smart-contracts/PSP37/Extensions/metadata",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/metadata",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP37/Extensions/metadata.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP37 Metadata"},sidebar:"tutorialSidebar",previous:{title:"PSP37 Enumerable",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/enumerable"},next:{title:"PSP37 Batch",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/batch"}},c={},p=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Step 4: Define constructor",id:"step-4-define-constructor",level:2},{value:"Final code",id:"final-code",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/token/psp37"},"PSP37")," token with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/token/psp37/extensions/metadata.rs"},"PSP37Metadata")," extension."),(0,r.kt)("p",null,"First, you should implement basic version of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37"},"PSP37"),"."),(0,r.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,r.kt)("p",null,"Import ",(0,r.kt)("strong",{parentName:"p"},"everything")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp37::extensions::metadata"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp37 {\n    use openbrush::contracts::psp37::extensions::metadata::*;\n...\n')),(0,r.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,r.kt)("p",null,"Declare storage struct and declare the field related to the metadata module.\nThen you need to derive the ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," trait and mark the corresponding field with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"#[storage_field]")," attribute.\nDeriving this trait allows you to reuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP37Metadata")," extension in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"PSP37")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, Storage)]\n#[ink(storage)]\npub struct Contract {\n    ...\n    #[storage_field]\n    metadata: metadata::Data,\n}\n")),(0,r.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,r.kt)("p",null,"Inherit implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP37Metadata")," trait. You can customize (override) methods in this ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP37Metadata for Contract {}\n")),(0,r.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,r.kt)("p",null,"Define constructor. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP37Metadata")," contract is ready!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new(id: Id, key: Vec<u8>, attribute: Vec<u8>) -> Self {\n        let mut instance = Self::default();\n\n        instance._set_attribute(&id, &key, &data);\n        \n        instance\n    }\n}\n")),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp37 {\n    use ink::prelude::vec::Vec;\n    use openbrush::{\n        contracts::psp37::extensions::metadata::*,\n        traits::Storage,\n    };\n\n    #[derive(Default, Storage)]\n    #[ink(storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp37: psp37::Data,\n        #[storage_field]\n        metadata: metadata::Data,\n    }\n\n    impl PSP37 for Contract {}\n\n    impl PSP37Metadata for Contract {}\n\n    impl Contract {\n        /// contract constructor\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n\n        #[ink(message)]\n        pub fn set_attribute(&mut self, id: Id, key: Vec<u8>, data: Vec<u8>) -> Result<(), PSP37Error> {\n            self._set_attribute(&id, &key, &data)\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can check an example of the usage of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp37_extensions/metadata"},"PSP37 Metadata"),"."),(0,r.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37"},"PSP37"),"."))}u.isMDXComponent=!0}}]);