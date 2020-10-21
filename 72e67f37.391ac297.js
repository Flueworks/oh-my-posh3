(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(91)),l={id:"powershell",title:"PowerShell",sidebar_label:"PowerShell"},i={unversionedId:"powershell",id:"powershell",isDocsHomePage:!1,title:"PowerShell",description:"A package that includes useful helper functions to install and configure Oh my Posh.",source:"@site/docs/package-powershell.md",slug:"/powershell",permalink:"/docs/powershell",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/package-powershell.md",version:"current",sidebar_label:"PowerShell",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configure"},next:{title:"Azure Subscription",permalink:"/docs/az"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Show all themes",id:"show-all-themes",children:[]},{value:"Set the prompt",id:"set-the-prompt",children:[]},{value:"Print the theme",id:"print-the-theme",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A package that includes useful helper functions to install and configure Oh my Posh."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"Install-Module oh-my-posh -Scope CurrentUser -AllowPrerelease\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"show-all-themes"},"Show all themes"),Object(a.b)("p",null,"To display every available theme in the current directory, use the following\ncommand."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"Get-PoshThemes\n")),Object(a.b)("h3",{id:"set-the-prompt"},"Set the prompt"),Object(a.b)("p",null,"Autocompletion is available so it will loop through all available themes."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"Set-PoshPrompt -Theme ~/downloadedtheme.json\n")),Object(a.b)("h3",{id:"print-the-theme"},"Print the theme"),Object(a.b)("p",null,"Useful when you find a theme you like, but you want to tweak the settings a bit. The output is a formatted ",Object(a.b)("inlineCode",{parentName:"p"},"json")," string."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"Write-PoshTheme\n")))}p.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(l,".").concat(b)]||u[b]||h[b]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);