(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=(a(15),a(1)),l=a(2),s=a(4),u=a(3),p=a(5),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",{name:"input",cols:"30",rows:"5",value:this.props.value,onChange:this.props.handleInput,className:"box left"},this.props.placeholder)}}]),t}(r.a.Component),h=a(9),m=a.n(h),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"createMarkUp",value:function(e){return{__html:e}}},{key:"render",value:function(){return r.a.createElement("div",{dangerouslySetInnerHTML:this.createMarkUp(m()(this.props.userInput))})}}]),t}(r.a.Component),g=(a(16),'## A minimalist Markdown preview built with React <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react-logo" width="50"/>\n----\n### What is Markdown?\nsee [Wikipedia](http://en.wikipedia.org/wiki/Markdown)\n\n> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".\n\n----\n### usage\n1. Write markdown text in this textarea.\n2. Live preview on the right side\n\n----\n### Markdown quick reference\n# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n*emphasis*\n\n**strong**\n\n* list\n\n>block quote\n\n    code (4 spaces indent)\n[links](http://wikipedia.org)'),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userInput:g},a.handleInput=function(e){a.setState({userInput:e.target.value}),console.log(a.state.placeHolder),console.log(g)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"info"},r.a.createElement("span",null,"Made by ",r.a.createElement("a",{href:"https://rickyyang.moe/"},"Ricky Yang")),r.a.createElement("br",null),r.a.createElement("span",null,"Powered by ",r.a.createElement("a",{href:"https://github.com/markedjs/marked"},"Marked")),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/sk8erry/markdown-preview"},"Github repo"))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("header",{className:"header"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-input-wrapper"},r.a.createElement(d,{handleInput:this.handleInput,placeholder:this.state.userInput}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"markdown-preview-wrapper"},r.a.createElement(w,{userInput:this.state.userInput})))))))}}]),t}(n.Component);a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.865f9b0b.chunk.js.map