(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{373:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[a._v("#")]),a._v(" NGINX")]),a._v(" "),s("h2",{attrs:{id:"기존-apache-랑-차이점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기존-apache-랑-차이점","aria-hidden":"true"}},[a._v("#")]),a._v(" 기존 Apache 랑 차이점")]),a._v(" "),s("ul",[s("li",[a._v("apache\n"),s("ul",[s("li",[a._v("요청마다 스레드 혹은 프로세스 생성 및 처리")])])]),a._v(" "),s("li",[a._v("nginx\n"),s("ul",[s("li",[a._v("요청마다 비동기 이벤트를 발생시켜 처리")])])])]),a._v(" "),s("h2",{attrs:{id:"proxy-pass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy-pass","aria-hidden":"true"}},[a._v("#")]),a._v(" proxy_pass")]),a._v(" "),s("p",[s("em",[s("strong",[a._v("/etc/nginx/sites-available/default")])]),a._v(" 경로를 다음과 같이 수정한다.")]),a._v(" "),s("blockquote",[s("p",[a._v("이전 파일은 백업 한다.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        listen 80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n        server_name localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                proxy_pass http://localhost:8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);