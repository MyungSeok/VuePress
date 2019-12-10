(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{395:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"refactoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refactoring","aria-hidden":"true"}},[t._v("#")]),t._v(" Refactoring")]),t._v(" "),a("h2",{attrs:{id:"compose-method-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compose-method-pattern","aria-hidden":"true"}},[t._v("#")]),t._v(" Compose Method Pattern")]),t._v(" "),a("p",[t._v("함수의 의도가 잘 드러나도록 동등한 수준의 작업을 하는 여러 단계로 나눈다.")]),t._v(" "),a("p",[t._v("이는 함수가 하나의 동작만 할 수 있게 재구성 하는것이다.")]),t._v(" "),a("ul",[a("li",[t._v("기능을 작게 나눈다.")]),t._v(" "),a("li",[t._v("미사용 코드 혹은 중복 코드를 제거한다.")]),t._v(" "),a("li",[t._v("코드의 의도가 잘 드러나도록 설계한다.")]),t._v(" "),a("li",[t._v("기능을 단순화 한다.")]),t._v(" "),a("li",[t._v("메서드를 동등한 수준으로 단계를 나눈다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://arksh.tistory.com/entry/%ED%8C%A8%ED%84%B4%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81-Compose-Method",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://arksh.tistory.com/entry/패턴을-활용한-리팩터링-Compose-Method"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"일급-컬렉션-first-class-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#일급-컬렉션-first-class-collection","aria-hidden":"true"}},[t._v("#")]),t._v(" 일급 컬렉션 (First Class Collection)")]),t._v(" "),a("ul",[a("li",[t._v("콜렉션을 포함한 클래스는 반드시 다른 멤버변수가 없어야 한다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("위 코드를 아래와 같이 "),a("code",[t._v("Wrapping")]),t._v(" 하는것이다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GameRanking")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ranks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GameRanking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ranks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ranks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ranks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Collection")]),t._v("을 "),a("strong",[t._v("Wrapping")]),t._v(" 하면서 그 외 다른 멤버 변수가 없는 상태를 일급 컬렉션이라 한다.")]),t._v(" "),a("p",[t._v("아래 코드와 같이 바꾸면 다음과 같은 이점이 생긴다")]),t._v(" "),a("ul",[a("li",[t._v("비지니스에 종속적인 자료구조")]),t._v(" "),a("li",[a("code",[t._v("Collection")]),t._v(" 의 불변성을 보장")]),t._v(" "),a("li",[t._v("상태와 행위를 한 곳에서 관리")]),t._v(" "),a("li",[t._v("이름이 있는 컬렉션")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jojoldu.tistory.com/412",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jojoldu.tistory.com/412"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"객체지향생활체조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#객체지향생활체조","aria-hidden":"true"}},[t._v("#")]),t._v(" 객체지향생활체조")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A080.png",alt:"소트웍스 앤솔러지"}})]),t._v(" "),a("ol",[a("li",[t._v("하나의 메서드에 한단계의 들여쓰기만 허용한다.")]),t._v(" "),a("li",[a("code",[t._v("else")]),t._v(" 예약어를 사용하지 않는다.")]),t._v(" "),a("li",[t._v("모든 원시값과 문자열을 포장한다.")]),t._v(" "),a("li",[t._v("한줄에 점 하나만 찍는다.")]),t._v(" "),a("li",[t._v("줄여쓰지 않는다.")]),t._v(" "),a("li",[t._v("모든 엔티티를 작게 유지한다.")]),t._v(" "),a("li",[t._v("2개 이상의 인스턴스 변수를 가진 클래스를 사용하지 않는다.")]),t._v(" "),a("li",[t._v("일급 컬렉션을 사용한다.")]),t._v(" "),a("li",[a("code",[t._v("getter")]),t._v(" / "),a("code",[t._v("setter")]),t._v(" / "),a("code",[t._v("property")]),t._v(" 을 사용하지 않는다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://elaia.tistory.com/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://elaia.tistory.com/3"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);