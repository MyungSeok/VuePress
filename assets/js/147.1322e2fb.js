(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{347:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2주차-6-12-chapter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2주차-6-12-chapter"}},[t._v("#")]),t._v(" 2주차 (6 ~ 12 Chapter)")]),t._v(" "),s("h2",{attrs:{id:"chapter-06-함수형-객체"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-06-함수형-객체"}},[t._v("#")]),t._v(" Chapter 06 함수형 객체")]),t._v(" "),s("p",[t._v("지금까지 스칼라의 기본적인 내용을 이해했다면, 이제는 좀 더 완전한 기능을 갖춘 스칼라의 클래스 작성법을 알아볼 차례이다.")]),t._v(" "),s("p",[t._v("클래스 파라미터, 생성자, 메서드, 연산자, 비공개 멤버, 오버라이드, 선결 조건 확인, 오버로드, 자기 참조 같은 스칼라의 객체지향 프로그래밍 요소를 설명할 것이다.")]),t._v(" "),s("h3",{attrs:{id:"_6-1-분수-클래스-명세"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-분수-클래스-명세"}},[t._v("#")]),t._v(" 6.1 분수 클래스 명세")]),t._v(" "),s("p",[t._v("이번장 부터는 분모 클래스를 만들어 진행해보겠다.")]),t._v(" "),s("p",[t._v("일반적으로 수학에서의 분수의 연산을 살펴보면 각 분모의 일치하는 작업을 통해 연산을 수행한다.")]),t._v(" "),s("p",[t._v("따라서 수학의 분수를 코드적으로 해석하면 "),s("strong",[t._v("변경 가능한 상태가 없음")]),t._v("을 알 수 있다.")]),t._v(" "),s("p",[t._v("다음은 이를 코드로 표현한 방식이다.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" oneHalf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" twoThirds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oneHalf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" twoThireds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-2-rational-생성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-rational-생성"}},[t._v("#")]),t._v(" 6.2 Rational 생성")]),t._v(" "),s("p",[t._v("수학의 분수에서 처럼 "),s("code",[t._v("Rational")]),t._v(" 객체를 사용하도록 변경 불가능한 객체로 사용하자.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("클래스 이름인 "),s("code",[t._v("Rational")]),t._v(" 뒤에 그 안에는 "),s("code",[t._v("n")]),t._v(", "),s("code",[t._v("d")]),t._v(" 이라는 식별자가 있다.")]),t._v(" "),s("p",[t._v("이를 클래스 파라미터 (class parameter) 라고 부른다.")]),t._v(" "),s("p",[t._v("클래스 파라미터와 같은 둥 인자를 받는 주 생성자 (primary constructor) 를 만든다.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("변경 불가능한 객체의 장단점")]),s("br"),t._v("\n변경 불가능한 객체의 장점은 많지만 가장 큰 단점은 그 자리에서 상태를 바로 변경하면 간단한데 "),s("br"),t._v("\n거대 그래프 객체를 복사해야 하는 경우처럼 많은 "),s("strong",[t._v("비용이 드는 작업을 수행할 때 해당 알고리즘을 표현")]),t._v("하기에도 어려우며 "),s("strong",[t._v("성능상의 이슈")]),t._v("가 발생하기도 한다."),s("br"),t._v("\n때문에 스칼라에서는 "),s("strong",[t._v("변경 불가능한것과 변경 가능한것을 항상 같이 제공")]),t._v("한다.")])]),t._v(" "),s("h3",{attrs:{id:"_6-3-tostring-메서드-다시-구현하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-tostring-메서드-다시-구현하기"}},[t._v("#")]),t._v(" 6.3 toString 메서드 다시 구현하기")]),t._v(" "),s("p",[t._v("자바와 같이 "),s("code",[t._v("toString")]),t._v(" 메서드를 Rational 클래스에 추가하면 기존 구현을 오버라이딩 할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" toString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$n/$d"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("인터프리터에서는 다음과 같이 확인이 가능하다.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x: Rational = 1/3")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y: Rational = 5/7")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-4-선결-조건-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-선결-조건-확인"}},[t._v("#")]),t._v(" 6.4 선결 조건 확인")]),t._v(" "),s("p",[s("code",[t._v("require")]),t._v(" 는 선결조건을 만들기 위한 여러가지 방법 중 하나이며")]),t._v(" "),s("p",[t._v("주 생성자에 있는 파라미터를 검증할 때 유용하다.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" toString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$n/$d"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("require")]),t._v(" 메서드는 인자로 "),s("code",[t._v("Boolean")]),t._v(" 값을 받는데, 이 값이 참 (true) 이면 "),s("code",[t._v("require")]),t._v(" 값이 정상적으로 끝나고 다음으로 진행한다.")]),t._v(" "),s("p",[t._v("만약 전달 받은 값이 거짓 (false) 이라면 "),s("code",[t._v("IllegalArgumentException")]),t._v(" 예외가 발생하여 객체 생성을 막는다.")]),t._v(" "),s("h3",{attrs:{id:"_6-5-필드-추가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-필드-추가"}},[t._v("#")]),t._v(" 6.5 필드 추가")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" toString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$n/$d"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rational "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("위 코드는 컴파일 오류가 발생한다.")]),t._v(" "),s("p",[t._v("Rational 객체 분모, 분자 값에 접근하기 위해서는 필드로 만들어야 한다.")]),t._v(" "),s("p",[t._v("필드를 추가하여 해결한 형태는 다음과 같다.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" numer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" denom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" toString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$n/$d"')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rational "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      numer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("denom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      denom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("denom\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("이전과 달리 객체 바깥에서 필드를 통해 분자와 분모값에 접근할 수 있다.")]),t._v(" "),s("h3",{attrs:{id:"_6-6-자기-참조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-자기-참조"}},[t._v("#")]),t._v(" 6.6 자기 참조")]),t._v(" "),s("p",[t._v("실행중인 메서드의 호출 대상 인스턴스에 대한 참조를 자기 참조 (self reference) 라고 한다.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" lessThan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("denom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("denom\n")])])]),s("p",[t._v("위 코드에서 "),s("code",[t._v("this")]),t._v(" 를 빼고 "),s("code",[t._v("numer")]),t._v(" 라고 써도 같다.")]),t._v(" "),s("h3",{attrs:{id:"_6-7-보조-생성자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-보조-생성자"}},[t._v("#")]),t._v(" 6.7 보조 생성자")]),t._v(" "),s("p",[t._v("스칼라에서 주 생성자가 아닌 다른 생성자를 보조 생성자 (auxiliary constructor) 라고 한다.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" numer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" denom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 보조 생성자")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" toString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$n/$d"')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rational "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Rational"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      numer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("denom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      denom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("denom\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("스칼라에서 보조 생성자는 "),s("code",[t._v("def this(...)")]),t._v(" 라고 시작한다.")]),t._v(" "),s("p",[s("strong",[t._v("모든 생성자 호출을 거슬러 올라가면 결국 주 생성자를 호출하게 만드는 효과가 있다.")])]),t._v(" "),s("h3",{attrs:{id:"_6-8-비공개-필드와-메서드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-비공개-필드와-메서드"}},[t._v("#")]),t._v(" 6.8 비공개 필드와 메서드")])])}),[],!1,null,null,null);a.default=r.exports}}]);