(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{327:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-3-모든-객체의-공동-메서드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-3-모든-객체의-공동-메서드","aria-hidden":"true"}},[t._v("#")]),t._v(" Chapter 3 모든 객체의 공동 메서드")]),t._v(" "),a("p",[a("code",[t._v("Object")]),t._v(" 는 객체를 만들 수 있는 구체 클래스지만 기본적으로는 상속해서 사용하도록 설계되었다.")]),t._v(" "),a("p",[a("code",[t._v("Object")]),t._v(" 에서 "),a("code",[t._v("final")]),t._v(" 이 아닌 메서드 ("),a("code",[t._v("equals")]),t._v(" "),a("code",[t._v("hashCode")]),t._v(" "),a("code",[t._v("toString")]),t._v(" "),a("code",[t._v("clone")]),t._v(" "),a("code",[t._v("finalize")]),t._v(") 는 모두 재정의 (overriding)를 염두에 두고 설계된 것이라 재정의시 반드시 지켜야 하는 일반 규약이 명시되어있다.")]),t._v(" "),a("p",[t._v("이번장에서는 이러한 성격이 지닌 메서드들을 다룬다.")]),t._v(" "),a("h2",{attrs:{id:"item-10-equals-는-일반-규약을-지켜-재정의하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-10-equals-는-일반-규약을-지켜-재정의하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 10 'equals' 는 일반 규약을 지켜 재정의하라")]),t._v(" "),a("p",[a("code",[t._v("equals")]),t._v(" 메서드는 재정의하기 쉬워 보이지만 곳곳에 함정이 도사리고 있어서 자칫하면 끔찍한 결과를 초래한다.")]),t._v(" "),a("p",[t._v("다음 상황일경우에는 재정의하지 않는것이 최선이다.")]),t._v(" "),a("ul",[a("li",[t._v("각 인스턴스가 본질적으로 고유하다.")]),t._v(" "),a("li",[t._v("인스턴스의 논리적 동치성 (logical equality) 을 검사할 일이 없다.")]),t._v(" "),a("li",[t._v("상위 클래스에서 재정의한 "),a("code",[t._v("equals")]),t._v(" 가 하위 클래스에도 딱 들어맞는다.")]),t._v(" "),a("li",[t._v("클래스가 "),a("code",[t._v("private")]),t._v(" 이거나 "),a("code",[t._v("package-private")]),t._v(" 이고 "),a("code",[t._v("equals")]),t._v(" 메서드를 호출할 일이 없다.")])]),t._v(" "),a("p",[t._v("이러한 경우에는 다음과 같이 "),a("code",[t._v("equals")]),t._v(" 를 제한한다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AssertionError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("equals")]),t._v(" 를 재정의해야 할 때는 객체 식별성 (object identity : 두 객체가 물리적으로 같은가) 이 아니라 논리적 동치성을 확인해야 할 때 상위 클래스의 "),a("code",[t._v("equals")]),t._v(" 가 논리적 동치성을 비교하도록 재정의되지 않았을때 이다.")]),t._v(" "),a("p",[t._v("대부분의 값 클래스 ("),a("code",[t._v("Integer")]),t._v(" "),a("code",[t._v("String")]),t._v(" 과 같이 값을 표현하는 클래스) 들이 이 케이스에 해당된다.")]),t._v(" "),a("p",[t._v("굳이 "),a("code",[t._v("equals")]),t._v(" 의 재정의가 필요하면 다음 규약을 지켜야 한다")]),t._v(" "),a("p",[a("strong",[t._v("Object 명세에 적힌 "),a("code",[t._v("equals")]),t._v(" 메서드 규약")])]),t._v(" "),a("ul",[a("li",[t._v("반사성 (reflexivity)")]),t._v(" "),a("li",[t._v("대칭성 (symmetry)")]),t._v(" "),a("li",[t._v("추이성 (transitivity)")]),t._v(" "),a("li",[t._v("일관성 (consistency)")]),t._v(" "),a("li",[a("code",[t._v("null")]),t._v(" 아님")])]),t._v(" "),a("p",[t._v("위의 규약은 반드시 지켜야 하며 이를 아래 단계대로 구현한다.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("equals")]),t._v(" 메서드 구현방법")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("==")]),t._v(" 연산자를 사용해 입력이 자기 자신의 참조인지 확인한다.")]),t._v(" "),a("li",[a("code",[t._v("instanceof")]),t._v(" 연산자로 입력이 올바른 타입인지 확인한다.")]),t._v(" "),a("li",[t._v("입력을 올바른 타입으로 형변환한다.")]),t._v(" "),a("li",[t._v("입력 객체와 자기 자신의 대응되는 "),a("strong",[t._v("핵심")]),t._v(" 필드들이 모두 일치하는지 하나씩 검사한다.")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("equals")]),t._v(" 메서드는 꼭 필요한 경우에만 재정의 해주도록 한다.")])]),t._v(" "),a("h2",{attrs:{id:"items-11-equals-를-재정의하려거든-hashcode-도-재정의하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#items-11-equals-를-재정의하려거든-hashcode-도-재정의하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Items 11 "),a("code",[t._v("equals")]),t._v(" 를 재정의하려거든 "),a("code",[t._v("hashCode")]),t._v(" 도 재정의하라")]),t._v(" "),a("p",[a("code",[t._v("equals")]),t._v(" 에서 재정의한 클래스 모두에서 "),a("code",[t._v("hashCode")]),t._v(" 도 재정의해야 한다.")]),t._v(" "),a("p",[a("code",[t._v("equals")]),t._v(" 에서는 물리적으로 다른 두 객체를 논리적으로는 같다고 할 수 있지만 Object 의 기본 hashCode 메서드는 이 둘이 전혀 다르다고 판단하여 규약과 달리 서로 다른 값을 반환한다.")]),t._v(" "),a("p",[t._v("마치 아래의 예가 서로 다른 값을 반환하는거 처럼 말이다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("707")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("867")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5309")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"제니"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("707")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("867")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5309")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null 을 반환")]),t._v("\n")])])]),a("p",[t._v("이 문제는 "),a("code",[t._v("PhoneNumber")]),t._v(" 에 적절한 해시코드를 삽입해주면 해결하다 (일시적)\n다만 사용자가 임의의 해시코드 발급 가능한 코드 작성은 어려운 것으로 동치인 인스턴스에 대해서 같은 해시코드를 반환할지 고민해보자")]),t._v(" "),a("p",[a("strong",[t._v("전형적인 "),a("code",[t._v("hashCode")]),t._v(" 메서드")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Short")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("areaCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Short")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Short")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lineNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위 코드에서 곱하는 숫자를 "),a("strong",[t._v("31")]),t._v(" 으로 정하는 기준은 "),a("strong",[t._v("31")]),t._v(" 이 "),a("strong",[t._v("홀수 (odd)")]),t._v(" 이면서 "),a("strong",[t._v("소수 (prime)")]),t._v(" 이기 때문이다."),a("br"),t._v("\n2를 곱하는것은 시프트 연산과 같은 결과를 내기 때문이다.")]),t._v(" "),a("p",[t._v("해시 충돌이 우려된다면 구아바 (Guava) 의 "),a("code",[t._v("com.google.com.hash.Hashing")]),t._v(" 을 참고하도록 하자.")]),t._v(" "),a("p",[t._v("혹은 "),a("code",[t._v("AutoValue")]),t._v(" 프레임워크를 사용하면 "),a("code",[t._v("hashCode")]),t._v(" 뿐만이 아닌 "),a("code",[t._v("equals")]),t._v(" 도 자동으로 만들어준다.")]),t._v(" "),a("h2",{attrs:{id:"items-12-tostring-을-항상-재정의하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#items-12-tostring-을-항상-재정의하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Items 12 "),a("code",[t._v("toString")]),t._v(" 을 항상 재정의하라")]),t._v(" "),a("p",[t._v("Object 의 기본 toString 메서드가 우리가 작성한 클래스에 적합한 문자열을 반환하는 경우는 거의 없다.")]),t._v(" "),a("p",[a("code",[t._v("toString")]),t._v(" 메서드는 "),a("code",[t._v("PhoneNumber@abbd")]),t._v(" 처럼 "),a("code",[t._v("클래스_이름@16진수_해시코드")]),t._v(" 를 반환할 뿐이다.")]),t._v(" "),a("p",[t._v("따라서 실무에서의 "),a("code",[t._v("toString")]),t._v(" 은 객체가 가진 주요 정보를 반환하는게 좋다.")]),t._v(" "),a("p",[a("strong",[t._v("전화번호부의 "),a("code",[t._v("toString")]),t._v(" 예시")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%03d-%03d-%034"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" areaCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lineNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("혹은 포맷 여부와 상관없이 해당 객체에 관한 명확하고 유용한 정보를 읽기 좋은 형태로 반환해야 한다.")]),t._v(" "),a("p",[t._v("단, 상위 클래스에서 이미 알맞게 재정의한 경우는 예외이다.")]),t._v(" "),a("p",[t._v("즉 "),a("code",[t._v("toString")]),t._v(" 이 반환한 값에 포함된 정보를 얻어올수 있는 API 를 제공하도록 한다.")]),t._v(" "),a("h2",{attrs:{id:"item-13-clone-재정의는-주의해서-진행-하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-13-clone-재정의는-주의해서-진행-하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 13 "),a("code",[t._v("clone")]),t._v(" 재정의는 주의해서 진행 하라")]),t._v(" "),a("p",[a("code",[t._v("Cloneable")]),t._v(" 은 복제해도 되는 클래스 임을 명시하는 용도의 믹스인 인터페이스 (Mixin Interface) 이다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Mixin Interface ?")]),t._v(" "),a("p",[t._v("믹스인 인터페이스에서의 믹스인 (Mixin) 이란 그 기능을 제공받는 대상 클래스에 선언하여 원본타입에 있는 기능을 구현할 수 있도록 선택적 기능을 제공하는것이다.")]),t._v(" "),a("p",[t._v("이는 추상 클래스보다 인터페이스를 사용할때 효과적으로 적용 가능 하다.")])]),t._v(" "),a("p",[t._v("배열은 "),a("code",[t._v("clone")]),t._v(" 은 Runtime 과 Compile 타입 모두가 원본 배열과 똑같은 배열을 반환하기 때문에 "),a("code",[t._v("clone")]),t._v(" 을 제대로 사용하는 유일한 예이며 권장한다.")]),t._v(" "),a("p",[t._v("그 외에 "),a("code",[t._v("Cloneable")]),t._v(" 을 구현하는 모든 클래스는 "),a("code",[t._v("clone")]),t._v(" 을 재정의 해줘야 한다.")]),t._v(" "),a("ul",[a("li",[t._v("접근 제어자는 "),a("code",[t._v("public")]),t._v(" 로 한다.")]),t._v(" "),a("li",[t._v("반환타입은 자기 자신으로 한다.")]),t._v(" "),a("li",[a("strong",[t._v("복사 생성자")]),t._v(" 와 "),a("strong",[t._v("복사 팩터리")]),t._v(" 방식으로 제공한다.")]),t._v(" "),a("li",[t._v("객체 내부의 "),a("strong",[t._v("깊은 구조")]),t._v(" 에 숨어있는 모든 가변 객체를 복사하며 그 내부의 참조 객체 모드 그 복사 객체를 가르키도록 한다.")])]),t._v(" "),a("p",[t._v("이는 대부분의 객체 복사에서 지키기 어려운 일이며 이를 지키키 어려울시 아래와 같이 "),a("code",[t._v("clone")]),t._v(" 를 제한한다.")]),t._v(" "),a("p",[a("strong",[t._v("하위 클래스에서 Cloneable 을 지원하지 못하게 하는 "),a("code",[t._v("clone")]),t._v(" 메서드")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSuppertedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloneNotSupportedException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"item-14-comparable-구현할지-고려하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-14-comparable-구현할지-고려하라","aria-hidden":"true"}},[t._v("#")]),t._v(" Item 14 Comparable 구현할지 고려하라")]),t._v(" "),a("p",[a("code",[t._v("Comparable")]),t._v(" 인터페이스의 "),a("code",[t._v("compareTo")]),t._v(" 를 알아보자.")]),t._v(" "),a("p",[a("code",[t._v("compareTo")]),t._v(" 는 "),a("code",[t._v("Object")]),t._v(" 메서드가 아니며 단순 동치성 비교에 순서까지 비교할 수 있으며 제네릭 하다.")]),t._v(" "),a("p",[t._v("그래서 "),a("code",[t._v("Comparable")]),t._v(" 을 구현한 객체들의 배열은 다음처럼 손쉽게 정렬할 수 있다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("검색, 극단값 계산, 자동정렬 되는 컬렉션 관리도 쉽게 가능하다.")]),t._v(" "),a("p",[t._v("다음은 명령줄 인수들을 중복을 제거하고 알파벳 순으로 출력한다.")]),t._v(" "),a("p",[a("code",[t._v("String")]),t._v(" 이 "),a("code",[t._v("Comparable")]),t._v(" 을 구현한 덕분이다.")]),t._v(" "),a("p",[a("strong",[t._v("명령줄 인수들을 중복을 제거하고 알파벳 순으로 출력")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WordList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("자바 플랫폼의 모든 값 클래스와 열거 타입이 "),a("code",[t._v("Comparable")]),t._v(" 을 구현했다."),a("br"),t._v("\n알파벳, 숫자, 연대와 같이 순서가 명확한 값 클래스를 작성한다면 반드시 Comparable 인터페이스를 구현하자.")]),t._v(" "),a("p",[a("code",[t._v("compareTo")]),t._v(" 메서드의 일반 규약은 다음과 같다.")]),t._v(" "),a("ul",[a("li",[t._v("원본 객체와 주어진 객체의 순서를 비교한다.")]),t._v(" "),a("li",[t._v("주어진 객체가 작으면 음의정수, 같으면 0, 크면 양의 정수를 반환한다.")]),t._v(" "),a("li",[t._v("비교할수 없는 타입의 객체가 주어지면 "),a("code",[t._v("ClassCastException")]),t._v(" 을 반환한다.")]),t._v(" "),a("li",[t._v("필드값을 비교해야 할 때는 "),a("code",[t._v("<")]),t._v(" 나 "),a("code",[t._v(">")]),t._v(" 는 사용하지 말고 박싱된 기본 타입 클래스가 제공하는 compare 메서드나 "),a("code",[t._v("Comparator")]),t._v(" 인터페이스가 제공하는 비교자 생성 메서드를 사용하자")])]),t._v(" "),a("p",[a("strong",[t._v("객체 참조 필드가 하나일때 비교자")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CaseInsensitiveString")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CaseInsensitiveString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" compareTo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CaseInsensitiveString")]),t._v(" cis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CASE_INSENSITIVE_ORDER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 나머지 코드는 생략\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("기본 타입 필드가 여럿을때의 비교자")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneNumber")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Short")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("areaCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("areaCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Short")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Short")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);