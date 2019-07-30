(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{352:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"chapter-9-일반적인-프로그래밍-원칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-9-일반적인-프로그래밍-원칙","aria-hidden":"true"}},[t._v("#")]),t._v(" Chapter 9 일반적인 프로그래밍 원칙")]),t._v(" "),s("h2",{attrs:{id:"item-57-지역변수의-범위를-최소화하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-57-지역변수의-범위를-최소화하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 57 지역변수의 범위를 최소화하라")]),t._v(" "),s("p",[t._v("지역변수의 범위를 줄이는데 가장 강력한 기법은 "),s("em",[s("strong",[t._v("가장 처음 쓰일 때 선언하기")])]),t._v(" 이다.")]),t._v(" "),s("p",[t._v("거의 모든 지역변수는 선언과 동시에 초기화 해야 한다.")]),t._v(" "),s("p",[s("code",[t._v("try-catch")]),t._v(" 블록에서는 예외이다.")]),t._v(" "),s("p",[t._v("변수를 초기화 하는 표현식에서 검사 예외를 던질 가능성이 있다면 try 블록 안에서 초기화 해야 한다. (그렇지 않으면 예외가 블록 바깥으로 전파될 가능성이 있다.)")]),t._v(" "),s("p",[t._v("변수의 값을 try 바깥에서도 사용해야 한다면 try 블록 앞에서 선언해야 한다.")]),t._v(" "),s("p",[t._v("반복자를 써야할 경우라면 "),s("code",[t._v("while")]),t._v(" 구문보다는 "),s("code",[t._v("for")]),t._v(" 구문을 사용하여 지역변수를 제한하고 메서드는 가능한 작게 유지하며 한가지 기능에만 집중해야 한다.")]),t._v(" "),s("h2",{attrs:{id:"item-58-전통적인-for-문보다는-for-each-문을-사용하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-58-전통적인-for-문보다는-for-each-문을-사용하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 58 전통적인 for 문보다는 for-each 문을 사용하라.")]),t._v(" "),s("p",[s("code",[t._v("for-each")]),t._v(" 의 정식 명칭은 "),s("em",[s("strong",[t._v("향상된 for 문 (enhanced for statement)")])]),t._v(" 이며 반복자와 인덱스 변수를 사용하지 않으니 코드가 깔끔해지고 오류가 날 일도 적다.")]),t._v(" "),s("p",[s("code",[t._v("for-each")]),t._v(" 문을 사용할 수 없는 경우는 다음과 같다.")]),t._v(" "),s("ul",[s("li",[t._v("파괴적인 필터링 (destructive filtering)\n"),s("ul",[s("li",[t._v("컬렉션을 순회하면서 선택된 원소를 제거해야 한다면 반복자의 remove 메서드를 호출해야 한다.")]),t._v(" "),s("li",[s("code",[t._v("Java SE 8")]),t._v(" 부터는 Collection 의 removeIf 메서드를 사용하여 컬렉션을 명시적으로 순회하는 일을 피할수 있다.")])])]),t._v(" "),s("li",[t._v("변형 (transforming)\n"),s("ul",[s("li",[t._v("리스트나 배열을 순회하면서 그 원소의 값 일부 혹은 전체를 교체해야 한다면 리스트의 반복자나 배열의 인덱스를 활용해야 한다.")])])]),t._v(" "),s("li",[t._v("병렬 반복 (parallel iteration)\n"),s("ul",[s("li",[t._v("여러 컬렉션을 병렬로 순회해야 한다면 각각의 반복자와 인덱스 변수를 사용하여 엄격하고 명시적으로 제어해야 한다.")])])])]),t._v(" "),s("p",[s("code",[t._v("for-each")]),t._v(" 문은 컬렉션과 배열을 물론 Interable 인터페이스를 구현한 객체라면 순회 가능하다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Iterable 을 처음부터 구현하기는 까다롭지만 원소들의 묶음을 표한하는 타입을 작성해야 한다면 Iterable 을 구현하는 쪽으로 고민하도록 하자")]),t._v(" "),s("h2",{attrs:{id:"item-59-라이브러리를-사용하고-익히라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-59-라이브러리를-사용하고-익히라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 59 라이브러리를 사용하고 익히라")]),t._v(" "),s("p",[t._v("표준 라이브러리를 사용하면 그 코드를 작성한 전문가의 지식과 여러분보다 앞서 사용한 다른 프로그래머의 경험들을 활용 할 수 있다.")]),t._v(" "),s("p",[t._v("Random 함수가 대표적으로 Java SE 7 이상에서는 "),s("code",[t._v("Random")]),t._v(" 대신에 "),s("code",[t._v("ThreadLocalRandom")]),t._v(" 으로 대체하면 대부분 잘 동작 한다. (3.6 배 이상의 성능향상)")]),t._v(" "),s("p",[t._v("또한 따로 노력하지 않다도 성능이 지속적으로 개선된다는 이점이 있다.")]),t._v(" "),s("p",[t._v("메이저 릴리즈에는 수많은 기능들이 추가되니 꼭 확인하자.")]),t._v(" "),s("p",[t._v("Java SE 9 에서는 "),s("code",[t._v("InputStream")]),t._v(" 에 추가된 "),s("code",[t._v("transferTo")]),t._v(" 메서드를 통하여 리눅스의 curl 명령을 구현할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("자바 프로그래머라면 "),s("code",[t._v("java.lang")]),t._v(" "),s("code",[t._v("java.util")]),t._v(" "),s("code",[t._v("java.io")]),t._v(" 와 그 하위에 있는 패키지들에 익숙해져야 한다.")]),t._v(" "),s("p",[s("code",[t._v("java.util.concurrent")]),t._v(" 또한 동시성 작업에 큰 도움이 된다."),s("br"),t._v("\n멀티스레딩 작업을 단순화 해주는 고수준의 편의기능은 물론, 능숙한 개발자가 자신만의 고수준 개념을 직점 구현할 수 있도록 도와주는 저수준의 요소들을 제공한다.")]),t._v(" "),s("h2",{attrs:{id:"item-60-정확한-답이-필요하다면-float-와-double-은-피하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-60-정확한-답이-필요하다면-float-와-double-은-피하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 60 정확한 답이 필요하다면 float 와 double 은 피하라")]),t._v(" "),s("p",[t._v("금융계산시 "),s("code",[t._v("float")]),t._v(" 와 "),s("code",[t._v("double")]),t._v(" 은 지양하고 "),s("code",[t._v("BigDecimal")]),t._v(" 혹은 "),s("code",[t._v("int")]),t._v(" 혹은 "),s("code",[t._v("long")]),t._v(" 을 사용해야 한다.")]),t._v(" "),s("p",[t._v("단 "),s("code",[t._v("BigDecimal")]),t._v(" 은 기본타입보다 훨씬 불편하고 느리다 ("),s("code",[t._v("int")]),t._v(" 혹은 "),s("code",[t._v("long")]),t._v(" 의 대안이 있다.)")]),t._v(" "),s("h2",{attrs:{id:"item-61-박싱된-기본-타입-보다는-기본-타입을-사용하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-61-박싱된-기본-타입-보다는-기본-타입을-사용하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 61 박싱된 기본 타입 보다는 기본 타입을 사용하라")]),t._v(" "),s("p",[t._v("자바의 데이터 타입은 크게 두가지로 나뉜다.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("기본타입")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("int")]),t._v(" "),s("code",[t._v("double")]),t._v(" "),s("code",[t._v("boolean")])])])]),t._v(" "),s("li",[s("p",[t._v("참조타입")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("String")]),t._v(" "),s("code",[t._v("List")])])])]),t._v(" "),s("li",[s("p",[t._v("박싱된 기본타입")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Integer")]),t._v(" "),s("code",[t._v("Double")]),t._v(" "),s("code",[t._v("Boolean")])])])])]),t._v(" "),s("p",[t._v("박싱된 기본타입에 "),s("code",[t._v("==")]),t._v(" 연산자를 사용하면 오류가 일어난다. (언박싱 과정에서 NPE 오류를 던질 수 있다.)")]),t._v(" "),s("p",[t._v("기본타입과 박싱된 기본타입을 혼용한 연산에서는 박싱된 기본타입의 박싱이 자동으로 풀린다. (언박싱)")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"item-62-다른-타입이-적절하다면-문자열-사용을-피하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-62-다른-타입이-적절하다면-문자열-사용을-피하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 62 다른 타입이 적절하다면 문자열 사용을 피하라")]),t._v(" "),s("p",[t._v("문자열은 다른 값 타입을 대신하기에 적합하지 않다")]),t._v(" "),s("p",[t._v("이는 "),s("code",[t._v("Boolean")]),t._v(" "),s("code",[t._v("Enum")]),t._v(" 등의 대체할 타입 클래스들을 지원하기 때문에 굳이 문자열을 통한 타입체크 혹은 권한부여 등을 권장하지 않는다.")]),t._v(" "),s("h2",{attrs:{id:"item-63-문자열-연결은-느리지-주의하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-63-문자열-연결은-느리지-주의하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 63 문자열 연결은 느리지 주의하라")]),t._v(" "),s("p",[t._v("문자열 열결 연산자로 문자열 n 개를 잇는 시간은 n^2 에 비례한다.")]),t._v(" "),s("p",[t._v("문자열은 불변이라서 두 문자열을 연결할 경우 양쪽 내용을 모두 복사해야 하므로 성능저하를 피할 수 없다.")]),t._v(" "),s("p",[t._v("때문에 "),s("em",[s("strong",[s("code",[t._v("String")]),t._v(" 보다는 "),s("code",[t._v("StringBuilder")]),t._v(" 를 사용")])]),t._v(" 하자")]),t._v(" "),s("h2",{attrs:{id:"item-64-객체는-인터페이스를-사용해-참조하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-64-객체는-인터페이스를-사용해-참조하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 64 객체는 인터페이스를 사용해 참조하라")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/books/effective_java_3rd/chapter_8.html#item-51-메서드-시그니처를-신중히-설계하라"}},[t._v("Item 51")]),t._v(" 에서 매개변수 타입은 인터페이스가 낫다고 언급했다.")],1),t._v(" "),s("p",[t._v("이에 대해서 객체는 클래스가 아닌 인터페이스로 참조하라고 확장하여 설명 가능하다.")]),t._v(" "),s("p",[t._v("적합한 인터페이스만 있다면 매개변수뿐만이 아니라 반환값, 변수, 필드 등을 전부 인터페이스 타입으로 선언해야 한다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Good Case")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" sonSet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bed Case")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" sonSet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("이는 프로그램이 좀더 유연해지는 방법이다.")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("인터페이스에는 없는 특별한 메서드를 제공")])]),t._v(" 하거나 "),s("em",[s("strong",[t._v("클래스 기반으로 작성된 프레임워크가 제공하는 객체")])]),t._v(" 는 적합한 인터페이스가 없다는 판단하에 클래스로 참조해야 한다.")]),t._v(" "),s("p",[t._v("만약 적합한 인터페이스가 없다면 클래스의 계층 구조중 덜 구체적인 (상위의) 클래스 타입으로 사용하자.")]),t._v(" "),s("h2",{attrs:{id:"item-65-리플렉션보다는-인터페이스를-사용하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-65-리플렉션보다는-인터페이스를-사용하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 65 리플렉션보다는 인터페이스를 사용하라.")]),t._v(" "),s("p",[t._v("리플렉션 ("),s("code",[t._v("java.lang.reflect")]),t._v(") 을 이용하면 프로그램에서 임의의 클래스에 접근할 수 있다.")]),t._v(" "),s("p",[t._v("이는 "),s("code",[t._v("Class")]),t._v(" 객체가 주어지면 생성자, 메서드, 필드 등의 정보 (인스턴스 포함) 등등의 많은 정보등 이용이 가능하며 Constructor, Method, Field 인스턴스를 이용하여 각각의 연결된 실제 생성자, 메서드, 필드등의 조작이 가능하다.")]),t._v(" "),s("p",[t._v("리플렉션은 단점은 다음과 같다.")]),t._v(" "),s("ul",[s("li",[t._v("컴파일시 타입검사의 이점을 누릴수 없다. (사용자의 실수로 런타임 오류가 발생할 수 있다.)")]),t._v(" "),s("li",[t._v("코드가 지저분하고 장황해진다.")]),t._v(" "),s("li",[t._v("성능이 떨어진다.")]),t._v(" "),s("li",[t._v("리플렉션은 아주 제한된 형태로만 사용해야 한다.")])]),t._v(" "),s("p",[t._v("따라서 리플렉션은 인스턴스 생성에만 사용하며 생성된 인스턴스는 인터페이스나 상위 클래스의 참조하여 사용하자.")]),t._v(" "),s("h2",{attrs:{id:"item-66-네이티브-메서드는-신중히-사용하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-66-네이티브-메서드는-신중히-사용하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 66 네이티브 메서드는 신중히 사용하라")]),t._v(" "),s("p",[t._v("성능을 개선할 목적으로 네이티브 메서드를 사용하는것은 거의 권장하지 않는다.")]),t._v(" "),s("p",[t._v("이는 대부분의 레거시한 코드이기 때문에 별다른 이점을 주지 못할뿐더러 오히러 성능저하를 야기시킨다.")]),t._v(" "),s("h2",{attrs:{id:"item-67-최적화는-신중히-하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-67-최적화는-신중히-하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 67 최적화는 신중히 하라")]),t._v(" "),s("blockquote",[s("p",[t._v("빠른 프로그램 보다는 좋은 프로그램을 작성하라.")])]),t._v(" "),s("p",[t._v("최적화의 결과는 대부분의 안좋은 결과로 직결되며 섣불리 진행한다 하면 더욱 그렇다.")]),t._v(" "),s("p",[t._v("빠르지도 않으며 대부분 동작이 불가한 코드가 대부분이다.")]),t._v(" "),s("p",[t._v("좋은 프로그램을 작성하다 보면 대부분의 성능은 따라오기 마련이다.")]),t._v(" "),s("h2",{attrs:{id:"item-68-일반적으로-통용되는-명명-규치글-따르라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-68-일반적으로-통용되는-명명-규치글-따르라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 68 일반적으로 통용되는 명명 규치글 따르라")]),t._v(" "),s("p",[t._v("표준 명명 규칙을 체게화 자연스레 배어나도록 하자.")]),t._v(" "),s("p",[t._v("철자규칙은 직관적이라 모호한 부분이 적은데 반해, 문법 규칙은 더 복잡하고 느슨하다.")])])},[],!1,null,null,null);a.default=n.exports}}]);