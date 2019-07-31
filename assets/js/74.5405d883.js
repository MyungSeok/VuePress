(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{388:function(t,e,r){"use strict";r.r(e);var a=r(1),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"immutable-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#immutable-class","aria-hidden":"true"}},[t._v("#")]),t._v(" Immutable Class")]),t._v(" "),r("p",[t._v("불변 클래스는 말 그대로 "),r("em",[r("strong",[t._v("불변")])]),t._v(" 값이 변경되지 않는 클래스이다.")]),t._v(" "),r("p",[t._v("이는 다시 말해 가변적이지 않으며 생성후 변경 불가능한 객체이다.")]),t._v(" "),r("p",[t._v("대표적으로 "),r("em",[r("code",[t._v("String")])]),t._v(", "),r("em",[r("code",[t._v("Boolean")])]),t._v(", "),r("em",[r("code",[t._v("Integer")])]),t._v(", "),r("em",[r("code",[t._v("Float")])]),t._v(", "),r("em",[r("code",[t._v("Long")])]),t._v(" 등등이 있다.")]),t._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"문자"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"숫자"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("변수 "),r("code",[t._v("str")]),t._v(" 은 JVM 의 Heap 영역에서 값이 변경되는것이 아니라 "),r("code",[t._v("숫자")]),t._v(" 라는 값으로 재할당이 되는것이다.")]),t._v(" "),r("p",[t._v("이는 다시 말해 "),r("code",[t._v("숫자")]),t._v(" 라는 값이 새로 생성되어 대체되는 것으로 "),r("em",[r("strong",[t._v("Heap 영역의 참조대는 객체 대상이 바뀌는것이다.")])])]),t._v(" "),r("h2",{attrs:{id:"장점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#장점","aria-hidden":"true"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),r("ul",[r("li",[t._v("생성자, 접근메서드에 대한 "),r("router-link",{attrs:{to:"/books/effective_java_3rd/chapter_8.html#item-50-적시에-방어적-복사본을-만들라"}},[t._v("방어적 복사 (Defensive Copy)")]),t._v(" 가 필요가 없다.")],1),t._v(" "),r("li",[t._v("멀티스레드 환경에서 동기화 처리 없이 객체를 공유할 수 있다.")]),t._v(" "),r("li",[t._v("Thread-Safe 하기 때문에 객체가 안전하다.")])]),t._v(" "),r("h2",{attrs:{id:"단점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#단점","aria-hidden":"true"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),r("ul",[r("li",[t._v("객체가 가지는 값마다 새로운 객체가 필요하다.")]),t._v(" "),r("li",[t._v("메모리 누수와 새로운 객체를 계속해서 생성해야 한다는 점 때문에 성능저하를 야기시킬 수 있다.")])]),t._v(" "),r("h2",{attrs:{id:"string-stringbuffer-stringbuilder-의-사용"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-stringbuffer-stringbuilder-의-사용","aria-hidden":"true"}},[t._v("#")]),t._v(" String / StringBuffer / StringBuilder 의 사용")]),t._v(" "),r("p",[t._v("문자열을 더하는 식에는 "),r("code",[t._v("String")]),t._v(" 보다는 "),r("code",[t._v("StringBuffer")]),t._v(" 나 "),r("code",[t._v("StringBuilder")]),t._v(" 을 사용해야 한다.")]),t._v(" "),r("p",[r("code",[t._v("String")]),t._v(" 은 새로운 값을 할당할 때마다 새로 생성되기 때문 (클래스의 메모리 참조 주소가 바뀜)")]),t._v(" "),r("p",[r("code",[t._v("StringBuffer")]),t._v(" 나 "),r("code",[t._v("stringBuilder")]),t._v(" 는 값을 메모리에 append 하는 방식으로 클래스를 별도로 생성하지 않는다.")]),t._v(" "),r("p",[r("code",[t._v("StringBuilder")]),t._v(" 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.")]),t._v(" "),r("p",[r("code",[t._v("StringBuffer")]),t._v(" 는 "),r("em",[r("strong",[t._v("멀티쓰레드 환경에서 안정적")])]),t._v(" 이다.")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://limkydev.tistory.com/68",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://limkydev.tistory.com/68"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=s.exports}}]);