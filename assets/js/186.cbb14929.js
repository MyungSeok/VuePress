(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{386:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),s("p",[t._v("DOM (Document Object Model : 문서 객체 모델) 은 스크립트와 같은 프로그래밍 언어를 웹 페이지에 연결하는 역활을 한다.")]),t._v(" "),s("h2",{attrs:{id:"event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event")]),t._v(" "),s("p",[s("code",[t._v("Event")]),t._v(" 인터페이스는 DOM 내에 위치한 이벤트를 나타낸다.")]),t._v(" "),s("h3",{attrs:{id:"stoppropagation-vs-preventdefault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stoppropagation-vs-preventdefault"}},[t._v("#")]),t._v(" "),s("code",[t._v("stopPropagation()")]),t._v(" vs "),s("code",[t._v("preventDefault()")])]),t._v(" "),s("p",[s("code",[t._v("stopPropagation()")]),t._v(" 는 이벤트 버블링 (자식에서 부모로 전파) 되는 것을 막는 것이고")]),t._v(" "),s("p",[s("code",[t._v("preventDefault()")]),t._v(" 는 현재 이벤트의 기본동작을 중단하는것이다. (a tag 의 href 속성과 같은 동작)")]),t._v(" "),s("p",[t._v("유사한것으로 "),s("code",[t._v("stopImmediatePropagation()")]),t._v(" 이나 "),s("code",[t._v("return false")]),t._v(" 와 같은 것들이 있다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ismydream.tistory.com/98",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ismydream.tistory.com/98"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://programmingsummaries.tistory.com/313",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://programmingsummaries.tistory.com/313"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"onload-이벤트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onload-이벤트"}},[t._v("#")]),t._v(" onload 이벤트")]),t._v(" "),s("p",[t._v("페이지 리소스가 로드되었을때 발생되는 이벤트로 대표적으로 다음 3가지로 나뉜다.")]),t._v(" "),s("h3",{attrs:{id:"document-ready"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-ready"}},[t._v("#")]),t._v(" document.ready")]),t._v(" "),s("p",[t._v("DOM 이 로드되고 Element 의 접근이 안정될 때 발생한다.")]),t._v(" "),s("p",[s("strong",[t._v("IE 9 이상")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("IE8 이하")])]),t._v(" "),s("p",[s("code",[t._v("IE8")]),t._v(" 이하에서는 아래와 같이 사용해야 한다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'complete'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("readyState")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("uninitialized")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("아직 로딩이 시작되지 않음")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("loading")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("로딩중")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("interactive")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("어느정도 로드가 되었으며 사용자가 상호작용 할 수 있음")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("complete")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("로딩 완료")])])])]),t._v(" "),s("p",[s("strong",[t._v("jQuery Library 사용")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"window-ready"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-ready"}},[t._v("#")]),t._v(" window.ready")]),t._v(" "),s("p",[t._v("페이지내의 모든 리소스가 모두 로딩된 이후 실행")]),t._v(" "),s("h3",{attrs:{id:"window-onload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-onload"}},[t._v("#")]),t._v(" window.onload")]),t._v(" "),s("p",[t._v("DOM 과 모든 Asset (이미지, 문서 등등...) 들이 로드된 이후에 발생한다.")]),t._v(" "),s("p",[s("code",[t._v("window.onload")]),t._v(" 는 "),s("code",[t._v('<body onload="">')]),t._v(" 와 같은 기능이다.")]),t._v(" "),s("p",[s("code",[t._v("window.onload")]),t._v(" 는 "),s("code",[t._v('<body onload="">')]),t._v(" 동시에 사용시 "),s("code",[t._v('<body onload="">')]),t._v(" 가 실행")]),t._v(" "),s("p",[s("code",[t._v("window.onload")]),t._v(" 가 두개 이상 사용시 마지막 함수만 실행된다.")]),t._v(" "),s("p",[s("strong",[t._v("Javascript 에서 사용")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Tag 속성으로 사용")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("jQuery Library 사용")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("로딩 순서")])]),t._v(" "),s("p",[t._v("@flowstart\nstage1=>operation: document.ready\nstage2=>operation: ")]),s("body",{attrs:{onload:""}},[t._v(" or window.onload"),s("p"),t._v(" "),s("p",[t._v("stage1(right)->stage2\n@flowend")]),t._v(" "),s("h3",{attrs:{id:"object-onload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-onload"}},[t._v("#")]),t._v(" Object onload")]),t._v(" "),s("p",[t._v("object 가 로드 되었을 때 발생 합니다."),s("br"),t._v("\n웹 페이지가 모든 컨텐츠 (이미지, 스크립트 파일, 스타일시트) 등을 완전히 로드한 후 실행 합니다.")]),t._v(" "),s("p",[s("strong",[t._v("Syntax")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myScript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* script */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Feature")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("이벤트 버블링")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NO")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("중단 가능 여부")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NO")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("이벤트 유형")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("UI 생성시")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("지원 태그")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("<body>")]),t._v(" "),s("code",[t._v("<script>")]),t._v(" "),s("code",[t._v("<style>")]),t._v(" "),s("code",[t._v("<link>")]),t._v(" "),s("br"),t._v(" "),s("code",[t._v("<frame>")]),t._v(" "),s("code",[t._v("<iframe>")]),t._v(" "),s("code",[t._v("<img>")]),t._v(" "),s("code",[t._v('<input type="image">')])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DOM 버전")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Level 2 이벤트")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://webdir.tistory.com/515",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webdir.tistory.com/515"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);