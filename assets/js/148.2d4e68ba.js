(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{302:function(e,v,t){"use strict";t.r(v);var a=t(1),_=Object(a.a)({},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"directives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directives","aria-hidden":"true"}},[e._v("#")]),e._v(" Directives")]),e._v(" "),t("p",[e._v("Vue 프레임워크에서 Directives (지시문) 은 vue 엘리먼트에 적용되는 특별한 속성이다.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://vuejs.org/v2/api/#directives",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Vue JS")]),e._v(" 공식문서"),t("OutboundLink")],1),e._v("에서도 확인 가능하다.")]),e._v(" "),t("h2",{attrs:{id:"v-text"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-text","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-text")])]),e._v(" "),t("p",[e._v("vue 내부값이 vue 엘리먼트 변수로 지정된다.")]),e._v(" "),t("h2",{attrs:{id:"v-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-html","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-html")])]),e._v(" "),t("h2",{attrs:{id:"v-show"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-show","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-show")])]),e._v(" "),t("h2",{attrs:{id:"v-if"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-if","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-if")])]),e._v(" "),t("h2",{attrs:{id:"v-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-else","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-else")])]),e._v(" "),t("h2",{attrs:{id:"v-else-if"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-else-if","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-else-if")])]),e._v(" "),t("h2",{attrs:{id:"v-for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-for","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-for")])]),e._v(" "),t("h2",{attrs:{id:"v-on"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-on","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-on")])]),e._v(" "),t("p",[e._v("가장 많이 사용하는 지시문이다.\n"),t("code",[e._v("@")]),e._v(" 으로 축약해서 사용한다.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".stop")]),e._v(" "),t("ul",[t("li",[e._v("event.stopPropagation() 호출")])])]),e._v(" "),t("li",[t("code",[e._v(".prevent")]),e._v(" "),t("ul",[t("li",[e._v("event.preventDefault() 호출")])])]),e._v(" "),t("li",[t("code",[e._v(".capture")]),e._v(" "),t("ul",[t("li",[e._v("캡쳐모드의 이벤트리스너 추가 (?)")])])]),e._v(" "),t("li",[t("code",[e._v(".self")]),e._v(" "),t("ul",[t("li",[e._v("이 엘리멘트에서 event가 dispatched 됐을 때만 트리거")])])]),e._v(" "),t("li",[t("code",[e._v(".{keyCode | keyAlias}")]),e._v(" "),t("ul",[t("li",[e._v("특정 키에서만 trigger")])])]),e._v(" "),t("li",[t("code",[e._v(".native")]),e._v(" "),t("ul",[t("li",[e._v("root element의 native event를 listen (?)")])])]),e._v(" "),t("li",[t("code",[e._v(".once")]),e._v(" "),t("ul",[t("li",[e._v("한번만 트리거!")])])]),e._v(" "),t("li",[t("code",[e._v(".left")]),e._v(" "),t("ul",[t("li",[e._v("마우스 왼쪽클릭에만 트리거")])])]),e._v(" "),t("li",[t("code",[e._v(".right")]),e._v(" "),t("ul",[t("li",[e._v("마우스 오른쪽클릭에만 트리거")])])]),e._v(" "),t("li",[t("code",[e._v(".middle")]),e._v(" "),t("ul",[t("li",[e._v("마우스 가운데클릭에만 트리거")])])]),e._v(" "),t("li",[t("code",[e._v(".passive")]),e._v(" "),t("ul",[t("li",[e._v("attacheds a DOM event with {passive: true}")])])])]),e._v(" "),t("h2",{attrs:{id:"v-bind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-bind","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-bind")])]),e._v(" "),t("p",[t("code",[e._v("v-on")]),e._v(" 과 더불어 가장 많이 쓰는 directive 이다.\n"),t("code",[e._v(":")]),e._v(" 축약해서 많이 사용한다.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".prop")]),e._v(" "),t("ul",[t("li",[e._v("vue 속성대신 DOM 프로퍼티를 바인딩해준다.")])])]),e._v(" "),t("li",[t("code",[e._v(".camel")]),e._v(" "),t("ul",[t("li",[e._v("kebab-case 속성을 camel-case 로 변경해준다. ("),t("code",[e._v("app-blog")]),e._v(" -> "),t("code",[e._v("appBlog")]),e._v(")")])])]),e._v(" "),t("li",[t("code",[e._v(".sync")])])]),e._v(" "),t("h2",{attrs:{id:"v-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-model","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-model")])]),e._v(" "),t("p",[e._v("데이터 바인딩시에 사용하며 "),t("code",[e._v("<input>")]),e._v(" "),t("code",[e._v("<select>")]),e._v(" "),t("code",[e._v("<textarea>")]),e._v(" 에서 사용가능하다.")]),e._v(" "),t("p",[e._v("modifiers 는 아래 3가지 이다.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".lazy")]),e._v(" "),t("ul",[t("li",[e._v("input 대신에 change event 를 listen 한다.")]),e._v(" "),t("li",[e._v("입력할 때 마다 값이 바인딩되지 않고 나중에 변경")])])]),e._v(" "),t("li",[t("code",[e._v(".number")]),e._v(" "),t("ul",[t("li",[e._v("문자열을 숫자로 바꿔준다.")])])]),e._v(" "),t("li",[t("code",[e._v(".trim")]),e._v(" "),t("ul",[t("li",[e._v("입력값이 공백을 제거한다.")])])])]),e._v(" "),t("h2",{attrs:{id:"v-pre"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-pre","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-pre")])]),e._v(" "),t("p",[e._v("엘리먼트의 compile 을 건더뛴다. `` 을 그대로 출력 가능하다.")]),e._v(" "),t("h2",{attrs:{id:"v-cloak"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-cloak","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-cloak")])]),e._v(" "),t("p",[t("code",[e._v("[v-cloak]{ display: none }")]),e._v(" 과 함께 사용하며 "),t("code",[e._v("js")]),e._v(" 를 모두 불러올때까지 un-compiled 된 html 을 모두 숨겨준다.")]),e._v(" "),t("h2",{attrs:{id:"v-once"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-once","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("v-once")])]),e._v(" "),t("p",[e._v("뷰 엘리먼트 혹은 컴포넌트를 한번만 랜더한다.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://seulcode.tistory.com/264",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://seulcode.tistory.com/264"),t("OutboundLink")],1)])])])},[],!1,null,null,null);v.default=_.exports}}]);