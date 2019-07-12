(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{322:function(t,a,n){"use strict";n.r(a);var s=n(1),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"iterable-iterator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iterable-iterator","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterable & Iterator")]),t._v(" "),n("p",[t._v("자바스크립트의 반복문의 "),n("code",[t._v("for loop")]),t._v(" 는 다음 몇가지로 나뉜다.")]),t._v(" "),n("ul",[n("li",[t._v("for\n"),n("ul",[n("li",[t._v("가장 기본적인 "),n("code",[t._v("for loop")])])])]),t._v(" "),n("li",[t._v("forEach\n"),n("ul",[n("li",[t._v("배열을 순회하며 "),n("code",[t._v("value")]),t._v(" 와 "),n("code",[t._v("index")]),t._v(" 를 매개변수로 전달한다.")]),t._v(" "),n("li",[n("code",[t._v("break")]),t._v(", "),n("code",[t._v("return")]),t._v(" 으로 루프를 중단할 수 없다.")])])]),t._v(" "),n("li",[t._v("for in\n"),n("ul",[n("li",[t._v("배열의 인덱스만 순환 하는것이 아닌 프로토타입 체인을 포함한 모든 속성을 순회한다.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("배열보다는 객체를 순회")])]),t._v(" 하기 위해 만들어진 루프이다.")])])]),t._v(" "),n("li",[t._v("for of\n"),n("ul",[n("li",[n("code",[t._v("for in")]),t._v(" 으로 배열을 순회할 때 생기는 문제점들을 해소하였다.")])])])]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("for of")]),t._v(" 는 "),n("em",[n("strong",[t._v("순회가능한 (iterable) 객체를 상대로 사용 가능")])]),t._v(" 하다.")])]),t._v(" "),n("p",[t._v("순회가능한 (Iterable) 한 객체는 "),n("em",[n("strong",[n("code",[t._v("Symbol.iterator")]),t._v(" 심볼을 속성으로 가지고 있으며 이터레이터 객체를 반환하는 객체")])]),t._v(" 를 뜻한다."),n("br"),t._v("\n해당 스팩을 "),n("em",[n("strong",[t._v("이터러블 프로토콜")])]),t._v(" 이라고 하며 "),n("em",[n("strong",[t._v("해당 스팩을 구현한 객체를 이터러블 객체")])]),t._v(" 라고 한다.")]),t._v(" "),n("h2",{attrs:{id:"iterator-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iterator-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterator Interface")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("TC39")])]),t._v(" 에서 정의한 "),n("em",[n("strong",[t._v("Iterator Interface")])]),t._v(" 정의를 따른 "),n("code",[t._v("Object")]),t._v(" 로써 내응은 다음과 같다.")]),t._v(" "),n("h3",{attrs:{id:"iterator-interface-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iterator-interface-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterator Interface")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("next")]),t._v(" 라는 키를 갖고 있으며 값으로 인자를 받지 않고 "),n("em",[n("strong",[t._v("Iterator Result Object")])]),t._v(" 를 반환하는 함수가 온다.")]),t._v(" "),n("li",[n("em",[n("strong",[t._v("Iterator Result Object")])]),t._v(" 는 "),n("code",[t._v("value")]),t._v(" 와 "),n("code",[t._v("done")]),t._v(" 이라는 키를 갖고 있다.\n"),n("ul",[n("li",[n("code",[t._v("value")]),t._v(" 는 실제 값을 의미")]),t._v(" "),n("li",[n("code",[t._v("done")]),t._v(" 는 계속 반복 할 수 있는지 따른 "),n("code",[t._v("boolean")]),t._v(" 값")])])])]),t._v(" "),n("p",[t._v("영원히 "),n("code",[t._v("0")]),t._v(" 을 반환하는 Iterator")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("각 배열을 순회하며 배열의 끝 값을 반환하는 Iterator")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("ECMA6 에서는 "),n("em",[n("strong",[t._v("객체 리터럴 작성 순서에 따라 파싱")])]),t._v(" 한다.")]),t._v(" "),n("p",[t._v("예를 들면 위 코드의 "),n("code",[t._v("done")]),t._v(" 과 "),n("code",[t._v("value")]),t._v(" 중에서 "),n("code",[t._v("done")]),t._v(" 이 먼저 작성되어 있기 때문에 "),n("code",[t._v("done")]),t._v(" 을 먼저 파싱한다."),n("br"),t._v("\nECMA5 에서는 "),n("code",[t._v("done")]),t._v(" 이든 "),n("code",[t._v("value")]),t._v(" 든 어느것을 먼저 파싱할지 보장이 안됨")])]),t._v(" "),n("h2",{attrs:{id:"iterable-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iterable-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterable Object")]),t._v(" "),n("p",[n("code",[t._v("Symbol.iterator")]),t._v(" 의 키를 가지고 있는 객체로써 다음 스펙을 구현한 객체이다.")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("Iterator")]),t._v(" 인터페이스를 구현 하고 있는 객체를 "),n("code",[t._v("Iterable")]),t._v(" 객체라고 한다.")])]),t._v(" "),n("h3",{attrs:{id:"iterable-spec"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iterable-spec","aria-hidden":"true"}},[t._v("#")]),t._v(" Iterable Spec")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Symbol.iterator")]),t._v(" 의 키를 갖고 있다.")]),t._v(" "),n("li",[t._v("값으로 인자를 받지 않고 "),n("em",[n("strong",[t._v("Iterator Object")])]),t._v(" 를 반환하는 함수가 온다.")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMA-262 - Iterable Interface"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"http://www.bsidesoft.com/?p=2913",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDG 2016 발표자료"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://youtu.be/CY_2mFxQwzc",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDG DevFest Seoul 2016 - Iterable & Iterator"),n("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);