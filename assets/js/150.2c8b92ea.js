(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{353:function(t,a,e){"use strict";e.r(a);var n=e(1),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"back-end"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#back-end","aria-hidden":"true"}},[t._v("#")]),t._v(" Back-End")]),t._v(" "),e("h2",{attrs:{id:"integer-의-바이트는"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integer-의-바이트는","aria-hidden":"true"}},[t._v("#")]),t._v(" Integer 의 바이트는 ?")]),t._v(" "),e("ul",[e("li",[t._v("4Byte")])]),t._v(" "),e("h2",{attrs:{id:"short-integer-의-최하-최상-값은"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#short-integer-의-최하-최상-값은","aria-hidden":"true"}},[t._v("#")]),t._v(" short integer 의 최하 / 최상 값은 ?")]),t._v(" "),e("ul",[e("li",[t._v("-32,768 ~ 32,767")])]),t._v(" "),e("h2",{attrs:{id:"unsigned-integer-는"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unsigned-integer-는","aria-hidden":"true"}},[t._v("#")]),t._v(" unsigned Integer 는 ?")]),t._v(" "),e("ul",[e("li",[t._v("일반적으로 unsigned int 는 부호비트를 값 비트로 쓸수 있어서 "),e("em",[e("strong",[t._v("2^32 -1")])]),t._v(" (4294967295) 값을 가진다.")]),t._v(" "),e("li",[t._v("Java 에서는 unsigned int 값이 없으며 long 으로 대체하여 사용한다.")])]),t._v(" "),e("h2",{attrs:{id:"compiler-와-interpreter-의-차이점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiler-와-interpreter-의-차이점","aria-hidden":"true"}},[t._v("#")]),t._v(" Compiler 와 Interpreter 의 차이점")]),t._v(" "),e("ul",[e("li",[t._v("Compiler 는 문서 전체를 다 읽어 기계어로 번역한다. (구문 -> 목적 프로그램)")]),t._v(" "),e("li",[t._v("Interpreter 는 한줄한줄 행 단위로 읽어서 처리한다. (구문 -> 명령문)")])]),t._v(" "),e("h2",{attrs:{id:"java-에서-instanceof-연산자란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-에서-instanceof-연산자란","aria-hidden":"true"}},[t._v("#")]),t._v(" Java 에서 instanceof 연산자란 ?")]),t._v(" "),e("ul",[e("li",[t._v("참조 변수가 실제로 참조하고 있는 인스턴스의 실제 타입을 알아보기 위해 instanceof 연산자를 사용")])]),t._v(" "),e("h2",{attrs:{id:"stack-과-heap-memory-장단점과-해제-방법을-설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stack-과-heap-memory-장단점과-해제-방법을-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" Stack 과 Heap Memory 장단점과 해제 방법을 설명")]),t._v(" "),e("ul",[e("li",[t._v("Stack\n"),e("ul",[e("li",[t._v("빠른접근, cpu 에 의해 관리, 지정된 크기, resize 불가")]),t._v(" "),e("li",[t._v("해제 : 자동")])])]),t._v(" "),e("li",[t._v("Heap\n"),e("ul",[e("li",[t._v("전역적으로 접근 가능, 메모리 크기 제한 없음, resize 가능하나 파편화가 가능")]),t._v(" "),e("li",[t._v("해제 : 수동")])])])]),t._v(" "),e("h2",{attrs:{id:"quick-sort-란-무엇이고-시간복잡도는-어떻게-되는지-설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-sort-란-무엇이고-시간복잡도는-어떻게-되는지-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" Quick Sort 란 무엇이고 시간복잡도는 어떻게 되는지 설명")]),t._v(" "),e("ul",[e("li",[t._v("일반적으로 정렬 알고리즘중에서 빠르다고 알려진 알고리즘")]),t._v(" "),e("li",[t._v("시간 복잡도\n"),e("ul",[e("li",[t._v("Best : n log n")]),t._v(" "),e("li",[t._v("Worst : n^2")]),t._v(" "),e("li",[t._v("Average : n log n")])])]),t._v(" "),e("li",[t._v("Pivot 선택노드가 속도에 영향을 줄 수 있음")])]),t._v(" "),e("h2",{attrs:{id:"java-에서-public-static-void-main-으로-시작할-때-public-과-static-을-붙이는-이유는"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-에서-public-static-void-main-으로-시작할-때-public-과-static-을-붙이는-이유는","aria-hidden":"true"}},[t._v("#")]),t._v(" Java 에서 "),e("code",[t._v("public static void main( ... )")]),t._v(" 으로 시작할 때 "),e("code",[t._v("public")]),t._v(" 과 "),e("code",[t._v("static")]),t._v(" 을 붙이는 이유는 ?")]),t._v(" "),e("ul",[e("li",[t._v("메인 메서드는 진입점 (Entry Point) 를 뜻하며 접근제어자가 "),e("code",[t._v("public")]),t._v(" 이 되어야 함")]),t._v(" "),e("li",[t._v("함수에 static 을 붙이게 되면 instance 화 되기 전에 호출 가능하다.")]),t._v(" "),e("li",[t._v("클래스 멤버는 메모리에 로딩된 다음에 사용이 가능하다")]),t._v(" "),e("li",[t._v("main 함수는 프로그램 최초에 호출되는 함수이기 때문에 객체 생성 이전에 호출할 수 있어야 한다.")]),t._v(" "),e("li",[t._v("static 이 붙은 클래스나 메서드, 변수는 컴파일시 자동으로 로딩")])]),t._v(" "),e("h2",{attrs:{id:"관심의-분리-separation-of-concern-에-대해-설명하고-예를-들어-설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#관심의-분리-separation-of-concern-에-대해-설명하고-예를-들어-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" 관심의 분리 (Separation Of Concern) 에 대해 설명하고 예를 들어 설명")]),t._v(" "),e("ul",[e("li",[t._v("서비스 지향 아키텍쳐 (SOA : Service-Oriented Architecture) 의 핵심 원칙")]),t._v(" "),e("li",[t._v("관심이 같은것은 뭉치고 관심사가 다른것은 서로 떨어져 영향을 주지 않도록 설계 및 구현을 하는것")])]),t._v(" "),e("h2",{attrs:{id:"aop-이란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aop-이란","aria-hidden":"true"}},[t._v("#")]),t._v(" AOP 이란 ?")]),t._v(" "),e("ul",[e("li",[t._v("비지니스 로직과 공통모듈을 분리하여 핵심로직에 영향을 미치지 않고 사이사이에 공통모듈을 효과적으로 잘 끼워넣는 개발방법")]),t._v(" "),e("li",[t._v("공통모듈은 보안, 인증, 로깅 같은 것을 만든 후에 코드 밖에서 이 모듈을 비지니스 로직에 삽입하는것이 AOP 개발 방법이다.")]),t._v(" "),e("li",[t._v("코드 밖에서 설정된다는것이 핵심이며 프로그램 흐름을 파악하기 힘들기 때문에 AOP 사용이 많아질경우 유지보수가 어렵다.")])]),t._v(" "),e("h2",{attrs:{id:"bdd-란-무엇이고-tdd-와-어떤-연관이-있나"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bdd-란-무엇이고-tdd-와-어떤-연관이-있나","aria-hidden":"true"}},[t._v("#")]),t._v(" BDD 란 무엇이고 TDD 와 어떤 연관이 있나 ?")]),t._v(" "),e("ul",[e("li",[t._v("Behavior Driven Development (행위 주도 개발) 의 약자이다.")]),t._v(" "),e("li",[t._v("BDD 는 소프트웨어의 수행을 위한 것으로 TDD 접근법을 전환한것이다.")])]),t._v(" "),e("h2",{attrs:{id:"string-vs-stringbuffer-차이점은"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-vs-stringbuffer-차이점은","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("String")]),t._v(" vs "),e("code",[t._v("StringBuffer")]),t._v(" 차이점은 ?")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("String")]),t._v(" Class 인 경우 Character 조작을 위한 것이며 단순한 상태값을 가지고 있는 불변 속성이다.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("StringBuffer")]),t._v(" Class 인 경우 문자열을 재구성하기 위한 것이며 수정이 가능하다.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("StringBuilder")]),t._v(" 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("StringBuffer")]),t._v(" 는 "),e("em",[e("strong",[t._v("멀티쓰레드 환경에서 안정적")])]),t._v(" 이다.")])])]),t._v(" "),e("h2",{attrs:{id:"checkedexception-과-uncheckedexception-의-차이와-용도를-설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkedexception-과-uncheckedexception-의-차이와-용도를-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("CheckedException")]),t._v(" 과 "),e("code",[t._v("UncheckedException")]),t._v(" 의 차이와 용도를 설명")]),t._v(" "),e("ul",[e("li",[t._v("Checked Exception\n"),e("ul",[e("li",[t._v("외부상황에 의해 미리 예상 가능한 오류이다")]),t._v(" "),e("li",[t._v("예) 디스크 오류, 네트워크 오류등 로직 상의 오류와는 무관하게 발생하는 에러.")]),t._v(" "),e("li",[t._v("IOException, ClassNotFoundException, CloneNotSupportedException등등")]),t._v(" "),e("li",[t._v("RuntimeException을 제외한 Exception을 직접 상속한 모든 예외 클래스는 Checked Exception.")])])]),t._v(" "),e("li",[t._v("Unchecked Exception\n"),e("ul",[e("li",[t._v("프로그램 로직 상에 문제로 인해 생기는 오류이다.")]),t._v(" "),e("li",[t._v("RuntimeException 이하 모든 하위클래스는 Unchecked exception이다.")]),t._v(" "),e("li",[t._v("발생한 예외에 대하여 반드시 코드상에서 예외 처리를 하도록 요구하지 않는다.")]),t._v(" "),e("li",[t._v("NullPointerException의 경우 null을 참조하려는 시도는 프로그램 코드 자체가 잘못된 것.")]),t._v(" "),e("li",[t._v("이런 예방 할 수 없는 오류 조건들은 로직 상에서 처리를 요구")])])])]),t._v(" "),e("h2",{attrs:{id:"객체-재사용이란-무엇인가"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#객체-재사용이란-무엇인가","aria-hidden":"true"}},[t._v("#")]),t._v(" 객체 재사용이란 무엇인가 ?")]),t._v(" "),e("ul",[e("li",[t._v("Singleton Instance 와 같이 최초에 한번 생성한 후 재사용하는 것")]),t._v(" "),e("li",[t._v("ThreadPool, ConnectionPool 등 이외에도 코드내에서 객체를 재사용하는 방법이 있다.")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" sb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“data1”"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLength")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);