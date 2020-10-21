(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(91)),o={id:"path",title:"Path",sidebar_label:"Path"},l={unversionedId:"path",id:"path",isDocsHomePage:!1,title:"Path",description:"What",source:"@site/docs/segment-path.md",slug:"/path",permalink:"/docs/path",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-path.md",version:"current",sidebar_label:"Path",sidebar:"docs",previous:{title:"os",permalink:"/docs/os"},next:{title:"Python",permalink:"/docs/python"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Style",id:"style",children:[{value:"Agnoster",id:"agnoster",children:[]},{value:"Short",id:"short",children:[]},{value:"Full",id:"full",children:[]},{value:"Folder",id:"folder",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what"},"What"),Object(i.b)("p",null,"Display the current path."),Object(i.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "path",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#ffffff",\n  "background": "#61AFEF",\n  "properties": {\n    "style": "folder"\n  }\n}\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"folder_separator_icon: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - the symbol to use as a separator between folders - defaults to platfrom path separator"),Object(i.b)("li",{parentName:"ul"},"home_icon: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - the icon to display when at ",Object(i.b)("inlineCode",{parentName:"li"},"$HOME")," - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"~")),Object(i.b)("li",{parentName:"ul"},"folder_icon: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - the icon to use as a folder indication - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"..")),Object(i.b)("li",{parentName:"ul"},"windows_registry_icon: ",Object(i.b)("inlineCode",{parentName:"li"},"string")," - the icon to display when in the Windows registry - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"\\uE0B1")),Object(i.b)("li",{parentName:"ul"},"style: ",Object(i.b)("inlineCode",{parentName:"li"},"enum")," - how to display the current path")),Object(i.b)("h2",{id:"style"},"Style"),Object(i.b)("p",null,"Style sets the way the path is displayed. Based on previous experience and popular themes, there are 4 flavors."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"agnoster"),Object(i.b)("li",{parentName:"ul"},"short"),Object(i.b)("li",{parentName:"ul"},"full"),Object(i.b)("li",{parentName:"ul"},"folder")),Object(i.b)("h3",{id:"agnoster"},"Agnoster"),Object(i.b)("p",null,"Renders each folder as the ",Object(i.b)("inlineCode",{parentName:"p"},"folder_icon")," separated by the ",Object(i.b)("inlineCode",{parentName:"p"},"folder_separator_icon"),".\nOnly the current folder name is displayed at the end, ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME")," is replaced by the ",Object(i.b)("inlineCode",{parentName:"p"},"home_icon")," if you're\ninside the ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME")," location or one of its children."),Object(i.b)("h3",{id:"short"},"Short"),Object(i.b)("p",null,"Display ",Object(i.b)("inlineCode",{parentName:"p"},"$PWD")," as a string, replace ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"home_icon")," if you're inside the ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME")," location or\none of its children."),Object(i.b)("h3",{id:"full"},"Full"),Object(i.b)("p",null,"Display ",Object(i.b)("inlineCode",{parentName:"p"},"$PWD")," as a string"),Object(i.b)("h3",{id:"folder"},"Folder"),Object(i.b)("p",null,"Display the name of the current folder."))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,h=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?a.a.createElement(h,l(l({ref:t},p),{},{components:n})):a.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);