(this.webpackJsonptimelangs=this.webpackJsonptimelangs||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"name":"Ada","birth":1980,"tags":["Pascal","OOP","embedded"]},{"name":"Bash","birth":1989,"tags":["Shell","scripting","text manipulation"]},{"name":"C","birth":1972,"tags":["C","embedded","zero-indexed"]},{"name":"C++","birth":1985,"tags":["C","OOP","embedded","zero-indexed"]},{"name":"C#","birth":2000,"tags":[".NET","OOP","zero-indexed","garbage collector"]},{"name":"Caml","birth":1985,"tags":["ML","functional programming"]},{"name":"Clojure","birth":2007,"tags":["Lisp","JVM","Java","functional programming","garbage collector","zero-indexed","concurrency"]},{"name":"COBOL","birth":1959,"tags":["COBOL"]},{"name":"Common Lisp","birth":1984,"tags":["Lisp","functional programming","OOP","garbage collector","zero-indexed"]},{"name":"CSS","birth":1996,"tags":["CSS","web","graphics"]},{"name":"Dart","birth":2011,"tags":["Dart","web","mobile","garbage collector","OOP","iOS","Android"]},{"name":"Eiffel","birth":1986,"tags":["Eiffel","OOP"]},{"name":"Elixir","birth":2011,"tags":["Erlang","functional programming","concurrency"]},{"name":"Elm","birth":2012,"tags":["Elm","functional programming","web"]},{"name":"Erlang","birth":1986,"tags":["Erlang","functional programming","concurrency","garbage collector"]},{"name":"Fortran","birth":1957,"tags":["Fortran","scientific computing"]},{"name":"Go","birth":2009,"tags":["Go","concurrency","OOP","garbage collector","zero-indexed"]},{"name":"Groovy","birth":2003,"tags":["Java","JVM","OOP"]},{"name":"GraphQL","birth":2015,"tags":["GraphQL","web"]},{"name":"Haskell","birth":1990,"tags":["Haskell","functional programming","garbage collector","zero-indexed"]},{"name":"HTML","birth":1993,"tags":["HTML","markup","web"]},{"name":"Java","birth":1995,"tags":["Java","JVM","OOP","garbage collector","mobile","Android","zero-indexed"]},{"name":"JavaScript","birth":1997,"tags":["JavaScript","scripting","ECMAScript","event-driven","OOP","functional programming","garbage collector","zero-indexed"]},{"name":"Julia","birth":2012,"tags":["Julia","garbage collector"]},{"name":"Kotlin","birth":2011,"tags":["Java","JVM","mobile","garbage collector","Android"]},{"name":"Lisp","birth":1958,"tags":["Lisp","functional programming","garbage collector","zero-indexed"]},{"name":"Lua","birth":1993,"tags":["Lua","embedded","garbage collector"]},{"name":"Markdown","birth":2004,"tags":["Markdown","markup"]},{"name":"MATLAB","birth":1984,"tags":["MATLAB","scientific computing","OOP"]},{"name":"ML","birth":1973,"tags":["ML","functional programming","garbage collector"]},{"name":"Nim","birth":2008,"tags":["Nim","scripting","OOP","functional programming","zero-indexed"]},{"name":"Objective-C","birth":1984,"tags":["Objective-C","C","OOP","mobile","iOS","zero-indexed"]},{"name":"OCaml","birth":1985,"tags":["ML","functional programming","garbage collector","OOP"]},{"name":"Oz","birth":1991,"tags":["Oz","multi-paradigm"]},{"name":"Pascal","birth":1970,"tags":["Pascal"]},{"name":"Perl","birth":1987,"tags":["Perl","scripting","zero-indexed","garbage collector","text manipulation"]},{"name":"PHP","birth":1995,"tags":["PHP","scripting","web","zero-indexed","garbage collector"]},{"name":"Prolog","birth":1972,"tags":["Prolog","logic programming"]},{"name":"Python","birth":1990,"tags":["Python","scripting","procedural","OOP","zero-indexed","garbage collector"]},{"name":"R","birth":1993,"tags":["R","statistics","scripting"]},{"name":"Racket","birth":1995,"tags":["Lisp","functional programming","garbage collector","multi-paradigm"]},{"name":"Ruby","birth":1995,"tags":["Ruby","OOP","scripting","garbage collector","zero-indexed"]},{"name":"Rust","birth":2010,"tags":["Rust","concurrency"]},{"name":"Scala","birth":2004,"tags":["Java","JVM","OOP","mobile","functional programming","Android","zero-indexed","multi-paradigm"]},{"name":"Scheme","birth":1975,"tags":["Lisp","functional programming","garbage collector"]},{"name":"Smalltalk-80","birth":1980,"tags":["Smalltalk","OOP","garbage collector"]},{"name":"SNOBOL","birth":1962,"tags":["SNOBOL","text manipulation"]},{"name":"SQL","birth":1974,"tags":["SQL","databases"]},{"name":"Swift","birth":2014,"tags":["Swift","OOP","mobile","iOS","zero-indexed"]},{"name":"TeX","birth":1978,"tags":["TeX","typesetting","markup"]},{"name":"TypeScript","birth":2012,"tags":["JavaScript","scripting","ECMAScript","event-driven","OOP","functional programming","garbage collector","zero-indexed"]},{"name":"VBA","birth":1993,"tags":["Visual Basic","event-driven","zero-indexed"]},{"name":"XML","birth":1996,"tags":["XML","markup","web"]}]')},function(e,a,t){},,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(8),o=t.n(i),c=(t(14),t(1)),l=t(4),g=(t(15),function(e,a){return[].concat(Object(l.a)(e),Object(l.a)(a.tags))});var m=function(e){var a,r=e.topic,i=e.fullPage,o=e.updateTopic,c=e.updateTimeline,l=(a=t(6).reduce(g,[]),Array.from(new Set(a))).map((function(e){return n.a.createElement("option",{value:e,key:e})})).sort((function(e,a){return e.key.localeCompare(a.key)}));return n.a.createElement("form",{className:i?"fullpage":"",name:"filter",id:"filter",onSubmit:c},n.a.createElement("label",{id:"topic"},"Topic: ",n.a.createElement("input",{tabIndex:"1",type:"text",value:r,onChange:o,placeholder:"OOP, Lisp, JVM...",list:"topics"})),n.a.createElement("datalist",{id:"topics"},l),n.a.createElement("label",null,n.a.createElement("input",{type:"submit",value:"Update"})))};t(7),t(16);var s=function(e){var a=Object(r.useState)(!1),t=Object(c.a)(a,2),i=t[0],o=t[1],l=n.a.createElement("ul",{className:"tagsList"},e.tags.map((function(e){return n.a.createElement("li",{key:e},e)}))),g=["TimelineItem",e.type,e.side,i?"detailed":""].join(" ");return n.a.createElement("li",{className:g,onClick:function(){o(!i)}},n.a.createElement("span",{className:"content"},e.name," (",e.birth,")",l))};var b=function(e){var a=e.items;return n.a.createElement("ul",{className:"Timeline"},a.sort((function(e,a){return e.birth-a.birth})).map((function(e,a){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"right";return n.a.createElement(s,{key:e.name,type:e.type,name:e.name,birth:e.birth,tags:e.tags,side:a})}(e,a%2?"left":"right")})))};var u=function(){var e=arguments,a=Object(r.useState)(!0),i=Object(c.a)(a,2),o=i[0],l=i[1],g=Object(r.useState)(""),s=Object(c.a)(g,2),u=s[0],d=s[1],p=Object(r.useState)([]),h=Object(c.a)(p,2),O=h[0],f=h[1],v=function(e){d(e.target.value)},P=function(e){var a=t(6);return""===e?a:a.filter((function(a){return a.tags.includes(e)}))},S=function(a){e.length>0&&(a.preventDefault(),o&&l(!1)),f(P(u))},E=n.a.createElement(m,{topic:u,updateTopic:v,updateTimeline:S,fullPage:o}),L=o?"":n.a.createElement(b,{items:O});return n.a.createElement(n.a.Fragment,null,E,L)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.47d2741e.chunk.js.map