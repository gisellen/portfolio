(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),n=c.n(i),a=c(10),o=c.n(a),r=(c(25),c(26),c(3)),l=c(4),j=c(6),d=c(5),h=c(11),p=c.n(h),u=c.p+"static/media/arrow-down.b5e0f77f.svg",b=c(2);c(38);function m(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)(p.a,{scale:[2],duration:[1e3],children:Object(s.jsxs)("div",{className:"intro",children:[Object(s.jsxs)("h1",{children:["hello. ",Object(s.jsx)("br",{}),"i'm giselle!"]}),Object(s.jsx)(p.a,{opacity:[0,1],duration:[2e3],delay:[1200],children:Object(s.jsx)("p",{className:"description",children:"illustrator | developer | creator "})})]})}),Object(s.jsx)(p.a,{opacity:[0,1],duration:[2e3],delay:[1500],children:Object(s.jsx)(b.Link,{activeClass:"active",to:"projects",smooth:!0,duration:500,children:Object(s.jsx)("img",{className:"enter",src:u,width:"50px"})})})]})}c(39);function O(e){return Object(s.jsx)("div",{className:"project-card",children:Object(s.jsxs)("div",{className:"project-info",children:[Object(s.jsx)("div",{className:"project-title",children:e.title}),Object(s.jsx)("p",{className:"desc",children:e.description}),Object(s.jsx)("div",{className:"technologies",children:e.tech}),Object(s.jsx)("div",{className:"card-footer",children:Object(s.jsx)("a",{href:e.link,target:"_blank",children:Object(s.jsx)("button",{className:"source",children:"source"})})})]})},e.id)}c(40);function x(){return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)(b.Link,{activeClass:"active",to:"header",smooth:!0,duration:500,children:Object(s.jsxs)("div",{className:"home-group",children:[Object(s.jsx)("button",{className:"home-button"}),Object(s.jsx)("div",{className:"home-sidebar",children:"Home"})]})}),Object(s.jsx)(b.Link,{activeClass:"active",to:"projects",smooth:!0,duration:500,children:Object(s.jsxs)("div",{className:"projects-group",children:[Object(s.jsx)("button",{className:"projects-button"}),Object(s.jsx)("div",{className:"projects-sidebar",children:"Projects"})]})})]})}var v=[{id:0,title:"Pomodoro Clock",description:"A Pomodoro Clock application made with React. A pomodoro clock is a method that increases productivity time and get things done. The purpose of this application was to learn how React works.  ",tech:"React, Node.js",link:"https://github.com/gisellen/pomodoro-react"},{id:1,title:"Olympic Games Management",description:"A Tournament Management & Bracket Generator Program with an Olympic Games focus.",tech:"Java, MySQL, Amazon RDS",link:"https://github.com/iDopameme/Olympic-Games-Management"},{id:2,title:"Giphy Search",description:"A React Application where the user is able to search up GIFs.  The GIFs were able to be searched up using an API made by Giphy.",tech:"React, Node.js, Giphy API",link:"https://github.com/gisellen/Giphy-Search"},{id:3,title:"WePay",description:"A React Application made for Software Engineering CSC 430. It is a Human Resource application for businesses where users are able to review employee payrolls, benefits, and more.",tech:"React, Node.js, Axios, MySQL",link:"https://github.com/ilei0893/WePay"}],f=(c(41),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).onFocus=function(){},e.state={word:"hello",projects:[]},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){window.addEventListener("focus",this.onFocus),this.setState({projects:v})}},{key:"render",value:function(){return Object(s.jsx)(b.Element,{name:"projects",children:Object(s.jsxs)("div",{className:"project-page",children:[Object(s.jsx)("h1",{className:"project-page-header",children:"projects"}),Object(s.jsx)("div",{className:"projects-container",children:v.map((function(e){return Object(s.jsx)(O,{id:e.id,img:e.img,title:e.title,description:e.description,tech:e.tech,link:e.link})}))})]})})}}]),c}(i.Component)),g=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{})}}]),c}(i.Component),y=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).onFocus=function(){},e.state={word:"hello",projects:[]},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){window.addEventListener("focus",this.onFocus),this.setState({projects:v}),console.log(v),console.log(this.state.projects)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{class:"custom-shape-divider-top-1634922272",children:Object(s.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(s.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",class:"shape-fill"}),Object(s.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",class:"shape-fill"}),Object(s.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",class:"shape-fill"})]})}),Object(s.jsxs)("div",{className:"main-page",children:[Object(s.jsx)(x,{}),Object(s.jsxs)("div",{className:"pages",children:[Object(s.jsx)(m,{}),Object(s.jsx)(f,{}),Object(s.jsx)(g,{})]})]})]})}}]),c}(n.a.Component);var w=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(y,{})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),N()}},[[42,1,2]]]);
//# sourceMappingURL=main.8c15456e.chunk.js.map