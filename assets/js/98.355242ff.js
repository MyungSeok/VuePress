(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{276:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-8-메서드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-8-메서드","aria-hidden":"true"}},[t._v("#")]),t._v(" Chapter 8 메서드")]),t._v(" "),a("h2",{attrs:{id:"item-49-매개변수가-유효한지-검사하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-49-매개변수가-유효한지-검사하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 49 매개변수가 유효한지 검사하라")]),t._v(" "),a("p",[t._v("메서드와 생성자 대부분은 입력 매개변수 값이 특정 조건을 만족하기를 바란다.")]),t._v(" "),a("ul",[a("li",[t._v("인덱스 값은 음수를 제외한 정수이다")]),t._v(" "),a("li",[t._v("객체 참조는 "),a("code",[t._v("null")]),t._v(" 이 아니여야 한다")])]),t._v(" "),a("p",[t._v("위 두가지 예가 대표적인 제약 사항이다.")]),t._v(" "),a("p",[t._v("이러한 제약 사항은 반드시 문서화 해야 하며 메서드의 "),a("code",[t._v("body")]),t._v(" 가 실행하기 이전에 검증되는것이 좋다")]),t._v(" "),a("p",[t._v("메서드 "),a("code",[t._v("body")]),t._v(" 가 실행되기 전에 매개변수값을 확인한다면 잘못된 값이 넘어왔을때 즉각적이고 깔끔한 방식으로 예외를 던질수 있다.")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("매개변수 검사에 실패하면 실패 원자성 (failure atomicity) 을 어기는 결과")])]),t._v(" 를 낳을수 있다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigInteger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigInteger")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArithmeticException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"계수(m)는 양수여야 합니다. "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위 메서드는 "),a("code",[t._v("m")]),t._v(" 이 "),a("code",[t._v("null")]),t._v(" 이면 "),a("code",[t._v("m.signum()")]),t._v(" 을 호출하면 NPE (Null Pointer Exception) 을 던진다.")]),t._v(" "),a("p",[t._v("하지만 NPE 검사를 수행한다는 말은 전혀 없지만 "),a("code",[t._v("BigInteger")]),t._v(" 클래스 관점에서 기술하였으니 문제가 없다.")])])},[],!1,null,null,null);s.default=e.exports}}]);