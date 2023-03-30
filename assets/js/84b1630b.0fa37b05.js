"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[16212],{603905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(667294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},587945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});a(667294);var n=a(603905);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const r={title:"Backstage Backend System Alpha",author:"Patrik Oldsberg",authorURL:"https://github.com/Rugvip",authorImageURL:"https://avatars.githubusercontent.com/u/4984472?v=4"},l=void 0,c={permalink:"/blog/2023/02/15/backend-system-alpha",source:"@site/blog/2023-02-15-backend-system-alpha.md",title:"Backstage Backend System Alpha",description:"backend system alpha header image",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[],readingTime:7.98,hasTruncateMarker:!0,authors:[{name:"Patrik Oldsberg",url:"https://github.com/Rugvip",imageURL:"https://avatars.githubusercontent.com/u/4984472?v=4"}],frontMatter:{title:"Backstage Backend System Alpha",author:"Patrik Oldsberg",authorURL:"https://github.com/Rugvip",authorImageURL:"https://avatars.githubusercontent.com/u/4984472?v=4"},prevItem:{title:"Backstage Turns Three!",permalink:"/blog/2023/03/15/backstage-turns-3"},nextItem:{title:"What\u2019s Ahead in 2023?",permalink:"/blog/2023/02/06/whats-ahead-in-2023"}},h={authorsImageUrls:[void 0]},u=[{value:"History of the Backstage backend system",id:"history-of-the-backstage-backend-system",level:2},{value:"Designing the New System",id:"designing-the-new-system",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Benefits of the New System",id:"benefits-of-the-new-system",level:2},{value:"Alpha, what does it mean?",id:"alpha-what-does-it-mean",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"backend system alpha header image",src:a(831743).Z,width:"960",height:"540"})),(0,n.kt)("p",null,"For the past year, the Backstage maintainer team has been spending time to give the ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/plugins/backend-plugin"},"old Backstage backend system")," a much needed revamp. Our goal was not to build something completely new from scratch, but rather to solidify the existing foundations that have grown organically. We wanted to make plugin installation a lot simpler, while maintaining and even improving the ways in which you can customize your backend setups."),(0,n.kt)("p",null,"We\u2019re happy to announce that the ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/releases/v1.11.0"},"v1.11")," release includes the public alpha of the ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/"},"new Backstage backend system"),"! The system has already been available to use for some time, as some of you have already found, but this alpha release marks the point where we are finally ready to encourage widespread adoption by plugin builders. We still don\u2019t recommend that you use this new system in your production setups just yet, more on that later."),(0,n.kt)("h2",{id:"history-of-the-backstage-backend-system"},"History of the Backstage backend system"),(0,n.kt)("p",null,"The backend system that we all use today has grown very organically based on all the needs that have been discovered along the journey of the Backstage Open Source project. We started out with a very flexible system that was essentially just a collection of recommended patterns for plugins, along with a couple of common interfaces and utilities. This was largely due to the fact that before it was open sourced, the Backstage backend services at Spotify were all built on top of internal frameworks and practices that we couldn\u2019t bring with us. Back in 2020, we didn\u2019t have a lot of knowledge about what a good backend system for Backstage would look like, so we started off with a highly flexible foundation that would evolve organically over time."),(0,n.kt)("p",null,"As Backstage grew across all dimensions of adopter count, community size, code size, and capability, we saw the need to take a step back and reevaluate how Backstage backend plugins are built. About one year ago, the maintainers sat down and started to sketch what a new backend system could look like."),(0,n.kt)("h2",{id:"designing-the-new-system"},"Designing the New System"),(0,n.kt)("p",null,"When we set out on this project, we had a few primary goals. First, we intended to introduce as few new concepts as possible. Our existing system already had a lot of different patterns, and ideally we wanted to only give those patterns names and make them part of the framework. Second, we wanted to keep the backend system recognizable to those familiar with the frontend system. The list of goals goes on, we had a lot of reasons to build this new system, these are a few more important ones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make it easier to create and maintain backend installations."),(0,n.kt)("li",{parentName:"ul"},"Align how plugins provide points of customization and how those customizations are installed."),(0,n.kt)("li",{parentName:"ul"},"Make it much easier to maintain plugins, in particular keeping the API stable."),(0,n.kt)("li",{parentName:"ul"},"Simplify the process of splitting plugins out into separate deployments with shared environments."),(0,n.kt)("li",{parentName:"ul"},"Improve the local development and testing experience.")),(0,n.kt)("p",null,"Prioritizing simplicity is often a guiding principle that we use for designs that span multiple ownership roles. We decide on which parts of the system that we think are the most important to have as simple as possible, or, viewed from the opposite end, where in the system we put necessary complexity. In this case, we optimized for keeping the backend setup as simple as possible, followed by modules and plugins, then libraries, and lastly the framework itself. What this guidance means in practice is that when there is complexity that needs to be added to implement a certain feature, we place as much of it as possible within the framework itself, then libraries, plugins and modules, and if absolutely needed, the backend setup."),(0,n.kt)("p",null,"To get the Backstage backend system to where we are today, we went through three major stages, starting with some very early high level experimentation. If you\u2019re a fan of Git archaeology, you can see some of our early ideas in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/commit/fd3e6b67fef25a04789779700db4c37047d59d1b"},"our experiments branch"),", as well as the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backend-system-exploration"},"separate repository")," that we used to explore different ideas together with ",(0,n.kt)("a",{parentName:"p",href:"https://roadie.io/"},"Roadie"),". The output of this work was all presented in an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/11611"},"RFC")," to gather feedback."),(0,n.kt)("p",null,"A few months later as the RFC settled, we resumed work and followed up with an initial implementation. At this point there were still a lot of details in the design to figure out, especially as we started looking at how our existing plugins and services fit into this new system. We identified a lot of aspects that we inevitably didn\u2019t consider in the initial design, and started exploring technical solutions to those problems. There was a lot of zooming in and out, both implementing details and then stepping back and looking at how that affects the broader system and where to go next. This ended up being the most time consuming stage, and we spent several months iterating on this."),(0,n.kt)("p",null,"We wrapped up this work just before KubeCon NA 2022, with the full system implemented. The state of the system at this point was presented in our talk on the topic, which you can see just below. Except for a few API tweaks, this is what the system still looks like today."),(0,n.kt)("iframe",{width:"780",height:"440",src:"https://www.youtube.com/embed/ZXF7uxrEBVY",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,n.kt)("br",null),(0,n.kt)("p",null,"The final stage was all about polish, which we picked up at the beginning of this year. By leaving a bit of space between the main implementation, or phase two, and the polish phase, phase three, it was much easier to properly scrutinize our past solutions. We forget a lot of the low level reasoning for changes, and it is easier to step back and reconsider parts of the system. For example, we found that our initial design of the ",(0,n.kt)("inlineCode",{parentName:"p"},"createServiceFactory")," function was unnecessarily complex, and could be made much simpler for most usages. In addition to reviewing all the APIs, we also wrote more documentation to help users, ensured that the local development and testing experience was solid, and double checked that there was a smooth migration path from the old system."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Now that you\u2019ve learned about the journey of designing the new system, let\u2019s review the new architecture. This blog includes a brief introduction to the architecture of the new system. If you want to dive deeper, check out our ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/architecture/"},"architecture documentation"),"."),(0,n.kt)("p",null,"The backend system has five major building blocks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Backend instances act as dependency injection containers and are the unit of deployment in which you install plugins and modules that you want to use."),(0,n.kt)("li",{parentName:"ul"},"Plugins implement the actual features and main business logic, for example the service catalog."),(0,n.kt)("li",{parentName:"ul"},"Services provide shared utilities for plugins to use, for example logging, database access, and serving HTTP. Services are provided by the backend and can be customized in each backend instance."),(0,n.kt)("li",{parentName:"ul"},"Extension Points serve as an optional API surface for plugins to provide deeper customization, such as installing custom processors in the catalog. It is up to each plugin to define their own extension points."),(0,n.kt)("li",{parentName:"ul"},"Modules extend individual plugins with additional features by interacting with the extension points that the plugins expose. A module might for example implement a single entity provider for the catalog.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"backend system architecture",src:a(527979).Z,width:"825",height:"419"})),(0,n.kt)("h2",{id:"benefits-of-the-new-system"},"Benefits of the New System"),(0,n.kt)("p",null,"This new system reduced the size of a typical backend installation from hundreds of lines of code to just about two dozen, more than an order of magnitude. This reduction comes from shifting complexity away from the backend installation and into the plugins, services, and the backend system itself. Not only does this make a typical backend setup much easier to maintain, but it also makes it much easier to build plugins and modules, and leaves fewer patterns to be unnecessarily invented."),(0,n.kt)("p",null,"As part of this shift, we\u2019ve moved many concepts from being coding patterns to being features built into the framework. This will allow us to further evolve the backend system in much more interesting ways, and still bring along the entire Backstage plugin ecosystem. It also helps align Backstage plugins around a couple of extensibility patterns, rather than each plugin having their own bespoke patterns for how extensions are installed."),(0,n.kt)("h2",{id:"alpha-what-does-it-mean"},"Alpha, what does it mean?"),(0,n.kt)("p",null,"With the release of the backend system into alpha, we are confident enough in the design of the system that we encourage plugin owners to add support for the new system in their plugins. This means following the ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating"},"plugin migration guide")," and exporting a plugin instance. Do not remove support for the old system yet \u2013 keep your existing ",(0,n.kt)("inlineCode",{parentName:"p"},"createRouter")," export intact."),(0,n.kt)("p",null,"While we encourage migration of plugins, we do not yet recommend migrating your backend installations to the new system. We want to create space to gather and address feedback from the plugin migration experience, and to make changes if necessary."),(0,n.kt)("p",null,"If you are worried about the upcoming backend migration, you can ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/building-backends/migrating#migrating-the-index-file"},"take a peek")," at our ",(0,n.kt)("inlineCode",{parentName:"p"},"legacyPlugin")," helper. It allows you to forklift over all existing plugin setups to the new backend system, and then migrate plugins one by one."),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"During the next release we will keep working on migrating the core plugins, as well as addressing any feedback that we receive. We don\u2019t want to rush a stable release though, and won\u2019t encourage broad adoption until we\u2019re confident that we won\u2019t have to follow it up with immediate breaking changes. Yet, we are excited about where we are today, and are looking forward to the future stable release!"),(0,n.kt)("p",null,"Useful Links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/backend-system/architecture/"},"Architecture Docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/backend-system/building-plugins-and-modules/"},"Building Plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/backend-system/core-services/"},"Core Services")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.com/channels/687207715902193673/1034089724664610938"},"#backend-system")," channel in Discord")))}d.isMDXComponent=!0},831743:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backend-system-alpha-2d913db2a5bace86c4583f6b1afe0273.gif"},527979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backend-system-architecture-166ab098e397ba6cd0b729eb72cf4301.png"}}]);