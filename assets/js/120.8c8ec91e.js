(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{333:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" NGINX")]),t._v(" "),s("h2",{attrs:{id:"기존-apache-랑-차이점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기존-apache-랑-차이점"}},[t._v("#")]),t._v(" 기존 Apache 랑 차이점")]),t._v(" "),s("ul",[s("li",[t._v("apache\n"),s("ul",[s("li",[t._v("요청마다 스레드 혹은 프로세스 생성 및 처리")])])]),t._v(" "),s("li",[t._v("nginx\n"),s("ul",[s("li",[t._v("요청마다 비동기 이벤트를 발생시켜 처리")])])])]),t._v(" "),s("h2",{attrs:{id:"proxy-pass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy-pass"}},[t._v("#")]),t._v(" proxy_pass")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("/etc/nginx/sites-available/default")])]),t._v(" 경로를 다음과 같이 수정한다.")]),t._v(" "),s("blockquote",[s("p",[t._v("이전 파일은 백업 한다.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        server_name localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                proxy_pass http://localhost:8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);