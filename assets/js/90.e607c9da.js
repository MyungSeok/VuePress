(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{400:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Interface")]),t._v(" "),s("h2",{attrs:{id:"marker-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#marker-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Marker Interface")]),t._v(" "),s("p",[t._v("마커 인터페이스의 특징은 다음과 같다.")]),t._v(" "),s("ul",[s("li",[t._v("메서드 선언이 없는 인터페이스이다.")]),t._v(" "),s("li",[t._v("대표적으로는 "),s("code",[t._v("Serializable")]),t._v(" 과 "),s("code",[t._v("Cloneable")]),t._v(" 이 있다.")])]),t._v(" "),s("blockquote",[s("p",[t._v("어노테이션으로도 사용가능하다.")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://programmingfbf7290.tistory.com/entry/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EB%A7%88%EC%BB%A4Marker-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EC%96%B4%EB%85%B8%ED%85%8C%EC%9D%B4%EC%85%98Annotation-%ED%99%9C%EC%9A%A9",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://programmingfbf7290.tistory.com/entry/안드로이드-마커Marker-인터페이스-어노테이션Annotation-활용"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"cloneable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cloneable","aria-hidden":"true"}},[t._v("#")]),t._v(" Cloneable")]),t._v(" "),s("p",[t._v("클래스가 "),s("code",[t._v("Cloneable")]),t._v(" 인터페이스를 구현함으로써 "),s("code",[t._v("Object.clone()")]),t._v(" 메서드가 해당 클래스의 인스턴스에 대한 필드 복사본을 만들수 있음을 나타낸다.")]),t._v(" "),s("p",[s("code",[t._v("Cloneable")]),t._v(" 인터페이스에는 "),s("code",[t._v("clone")]),t._v(" 메소드가 포함되어 있지 않으며 "),s("code",[t._v("clone")]),t._v(" 인터페이스를 구현한다는 사실만으로도 객체의 복사를 보장할 수 없다.")]),t._v(" "),s("p",[t._v("이는 "),s("code",[t._v("Object")]),t._v(" 클래스에 정의되어 있는 아래 메서드를 "),s("code",[t._v("public")]),t._v(" 으로 재정의 하여 사용해야 한다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("native")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("원본 "),s("code",[t._v("Object")]),t._v(" 클래스의 "),s("code",[t._v("clone()")]),t._v(" 메서드는 "),s("code",[t._v("protected")]),t._v(" 메서드이기 때문에 외부 패키지 클래스에서 호출할 수 없다.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("배열의 `clone` 메서드")]),t._v(" "),s("p",[t._v("이와 예외적으로 배열의 "),s("code",[t._v("clone")]),t._v(" 은 런타임 타입과 컴파일시 타입 모두가 원본 배열과 동일한 배열을 반환한다."),s("br"),t._v("\n사실상 "),s("code",[t._v("clone")]),t._v(" 메서드를 완벽하게 사용하는 "),s("em",[s("strong",[t._v("유일한 예")])]),t._v(" 이다.")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gyrfalcon.tistory.com/entry/Java-Tip-clone%EA%B3%BC-Cloneable",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gyrfalcon.tistory.com/entry/Java-Tip-clone과-Cloneable"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[t._v("#")]),t._v(" Map")]),t._v(" "),s("p",[s("strong",[t._v("Spac")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("Type Parameters")])]),t._v(" "),s("ul",[s("li",[t._v("K\n"),s("ul",[s("li",[t._v("키의 유형")])])]),t._v(" "),s("li",[t._v("V\n"),s("ul",[s("li",[t._v("값의 유형")])])])]),t._v(" "),s("p",[s("strong",[t._v("Implementing Classes")])]),t._v(" "),s("p",[s("code",[t._v("HashMap")]),t._v(" "),s("code",[t._v("HashTable")]),t._v(" "),s("code",[t._v("EnumMap")]),t._v(" "),s("code",[t._v("ConcurrentHashMap")]),t._v(" "),s("code",[t._v("TreeMap")]),t._v(" "),s("code",[t._v("WeakHashMap")])]),t._v(" "),s("p",[s("strong",[t._v("Since")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.2"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("키를 값에 매핑하는 객체 입니다.")]),t._v(" "),s("p",[t._v("중복된 키를 값에 매핑할 수 없으며 각 키는 최대 한개의 값에만 매핑이 가능 합니다.")]),t._v(" "),s("p",[s("code",[t._v("Map")]),t._v(" 인터페이스는 세가지의 컬렉션 뷰를 제공합니다. (키 집합, 값의 집합, 키 & 값의 집합)")]),t._v(" "),s("p",[s("code",[t._v("TreeMap")]),t._v(" 클래스와 같은 일부 "),s("code",[t._v("Map")]),t._v(" 인터페이스의 구현체들은 순서를 보장한다.")]),t._v(" "),s("h2",{attrs:{id:"autocloseable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autocloseable","aria-hidden":"true"}},[t._v("#")]),t._v(" AutoCloseable")]),t._v(" "),s("p",[s("strong",[t._v("Since")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/AutoCloseable.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.7"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("향샹된 예외처리문으로 입출력 처리시 예외가 발생하면 JVM 이 자동으로 "),s("code",[t._v("close")]),t._v(" 메소드를 호출하여 자원을 반납시켜 줍니다.")]),t._v(" "),s("p",[t._v("파일 또는 소켓 핸들 등의 자원들을 종료할 때까지 보관하는 객체이다."),s("br"),t._v("\nAutoCloseable 객체의 "),s("code",[t._v("close")]),t._v(" 메소드는 "),s("code",[t._v("try-with-resources")]),t._v(" 블럭을 종료할 때 자동으로 호출 된다.")]),t._v(" "),s("p",[t._v("이 구조는 리소스의 고갈 및 다른 예외들까지 발생할 수 있는 에러들의 해소를 즉각적으로 보장한다.")]),t._v(" "),s("p",[t._v("이때 "),s("code",[t._v("try()")]),t._v(" 구문안에는 "),s("code",[t._v("AutoCloseable")]),t._v(" 인터페이스를 구현한 객체여야 한다.")]),t._v(" "),s("blockquote",[s("p",[s("em",[s("strong",[t._v("try-finally")])]),t._v(" 보다는 "),s("em",[s("strong",[t._v("try-with-resources")])]),t._v(" 를 사용")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyResource")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoCloseable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Closeing!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyResource")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use the code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hyoj.github.io/blog/java/basic/java7-autocloseable.html#method-summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hyoj.github.io/blog/java/basic/java7-autocloseable.html#method-summary"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"comparable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparable","aria-hidden":"true"}},[t._v("#")]),t._v(" Comparable")]),t._v(" "),s("p",[t._v("정렬 수행시 기본적으로 적용이 되는 정렬기준 메서드를 정의하는 인터페이스")]),t._v(" "),s("p",[s("code",[t._v("Comparable")]),t._v(" 인터페이스를 구현시에 "),s("code",[t._v("compareTo()")]),t._v(" 를 오버라이드 하여 구현한다.")]),t._v(" "),s("p",[s("code",[t._v("compareTo()")]),t._v(" 메서드의 작성 규칙은 다음과 같다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<")]),t._v(" : 음수 반환")]),t._v(" "),s("li",[s("code",[t._v(">")]),t._v(" : 양수 반환")]),t._v(" "),s("li",[s("code",[t._v("==")]),t._v(" : 0 반환")])]),t._v(" "),s("p",[t._v("이후 "),s("code",[t._v("Arrays.sort()")]),t._v(" 혹은 "),s("code",[t._v("Collections.sort()")]),t._v(" 를 통하여 정렬")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x좌표가 증가하는 순, x좌표가 같으면 y좌표가 감소하는 순으로 정렬하라.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x에 대해서는 오름차순")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y에 대해서는 내림차순")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" pointList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npointList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pointList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/09/06/java-comparable-and-comparator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gmlwjd9405.github.io/2018/09/06/java-comparable-and-comparator.html"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);