(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{451:function(t,e,a){"use strict";a.r(e);var v=a(1),i=Object(v.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"back-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-end","aria-hidden":"true"}},[t._v("#")]),t._v(" Back-End")]),t._v(" "),a("h2",{attrs:{id:"integer-의-바이트는"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integer-의-바이트는","aria-hidden":"true"}},[t._v("#")]),t._v(" Integer 의 바이트는 ?")]),t._v(" "),a("ul",[a("li",[t._v("4 Byte")])]),t._v(" "),a("h2",{attrs:{id:"short-integer-의-최하-최상-값은"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#short-integer-의-최하-최상-값은","aria-hidden":"true"}},[t._v("#")]),t._v(" short integer 의 최하 / 최상 값은 ?")]),t._v(" "),a("ul",[a("li",[t._v("-32,768 ~ 32,767")])]),t._v(" "),a("h2",{attrs:{id:"unsigned-integer-는"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsigned-integer-는","aria-hidden":"true"}},[t._v("#")]),t._v(" unsigned Integer 는 ?")]),t._v(" "),a("ul",[a("li",[t._v("일반적으로 unsigned int 는 부호비트를 값 비트로 쓸수 있어서 "),a("em",[a("strong",[t._v("2^32 -1")])]),t._v(" (4294967295) 값을 가진다.")]),t._v(" "),a("li",[t._v("Java 에서는 unsigned int 값이 없으며 long 으로 대체하여 사용한다.")])]),t._v(" "),a("h2",{attrs:{id:"compiler-와-interpreter-의-차이점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-와-interpreter-의-차이점","aria-hidden":"true"}},[t._v("#")]),t._v(" Compiler 와 Interpreter 의 차이점")]),t._v(" "),a("ul",[a("li",[t._v("Compiler 는 문서 전체를 다 읽어 기계어로 번역한다. (구문 -> 목적 프로그램)")]),t._v(" "),a("li",[t._v("Interpreter 는 한줄한줄 행 단위로 읽어서 처리한다. (구문 -> 명령문)")])]),t._v(" "),a("h2",{attrs:{id:"java-에서-instanceof-연산자란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-에서-instanceof-연산자란","aria-hidden":"true"}},[t._v("#")]),t._v(" Java 에서 instanceof 연산자란 ?")]),t._v(" "),a("ul",[a("li",[t._v("참조 변수가 "),a("strong",[t._v("실제로 참조하고 있는 인스턴스의 실제 타입을 알아보기 위해")]),t._v(" instanceof 연산자를 사용")])]),t._v(" "),a("h2",{attrs:{id:"jvm-과-runtime-area-영역에-대해서-설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-과-runtime-area-영역에-대해서-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" JVM 과 Runtime Area 영역에 대해서 설명")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Java Byte Code 를 실행할 수 있는 프로세스 가상 머신이다.")])]),t._v(" "),a("li",[a("p",[t._v("가상머신의 특성으로 OS 에 종속적이지 않아 독립적으로 운영된다.")])]),t._v(" "),a("li",[a("p",[t._v("실행 순서는 다음과 같다.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Java File")]),t._v(" 이 "),a("code",[t._v("Java Compiler")]),t._v(" 에 의해 Class File 로 컴파일 된다.")]),t._v(" "),a("li",[a("code",[t._v("Class Loader")]),t._v(" 에 의해 데이터들이 "),a("code",[t._v("Runtime Area")]),t._v(" 에 로드된다.")]),t._v(" "),a("li",[a("code",[t._v("Runtime Area")]),t._v(" 에서는 영역별로 기능을 분담하여 처리된다.\n"),a("ul",[a("li",[a("code",[t._v("Method Area")]),t._v(" "),a("ul",[a("li",[t._v("Class, Interface, Method, Field 등의 정보가 보관된다.")]),t._v(" "),a("li",[t._v("임포트된 클래스가 로드되는 영역이다.")]),t._v(" "),a("li",[t._v("모든 Thread 가 공유하는 메모리 영역이다.")])])]),t._v(" "),a("li",[a("code",[t._v("Heap Area")]),t._v(" "),a("ul",[a("li",[t._v("어플리케이션 상에서 데이터를 저장하기 위해 동적으로 사용 및 할당되는 메모리 영역이다.")]),t._v(" "),a("li",[a("code",[t._v("Method Area")]),t._v(" 에 로드된 클래스만 생성 가능하며 클래스 정보를 참고하여 인스턴스를 생성하는 곳이다.")]),t._v(" "),a("li",[t._v("Garbage Collection 이 일어나는 영역이다.")])])]),t._v(" "),a("li",[a("code",[t._v("Stack Area")]),t._v(" "),a("ul",[a("li",[t._v("Method 가 호출될 때 마다 "),a("code",[t._v("Stack Frame")]),t._v(" 이라는 데이터 영역이 생성하여 구성")]),t._v(" "),a("li",[t._v("Method 의 정보, 지역변수, 파라메터 정보등의 임시데이터가 저장되는 공간이다.")]),t._v(" "),a("li",[t._v("Thread 별로 각각 구성된다.")]),t._v(" "),a("li",[t._v("Method 가 호출될 때 필요로 하는 변수를 Stack 에 저장하게 되고, Method 실행이 끝나면 Stack 을 반환한다.")])])]),t._v(" "),a("li",[a("code",[t._v("PC Register")]),t._v(" "),a("ul",[a("li",[t._v("실행중인 각각의 Thread 는 별도의 PC Register 를 가지며, 명령이 실행되면 현재 실행중인 명령의 주소를 유지한다.")])])]),t._v(" "),a("li",[a("code",[t._v("Native Method Stack")]),t._v(" "),a("ul",[a("li",[t._v("JNI 를 통하여 C/C++ 등의 코드를 수행하기 위한 Stack")])])])])])])]),t._v(" "),a("li",[a("p",[t._v("JVM 내에 Runtime Area 에 속하는 메모리 영역중이 하나이다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Java File")]),t._v(" 이 "),a("code",[t._v("Java Compiler")]),t._v(" 에 의해 Class File 로 컴파일 되면 "),a("code",[t._v("Class Loader")]),t._v(" 에 의해 로드된 데이터들이 애플리케이션을 수행작업 하며 사용되는 저장 및 참조 메모리 영역이다.")])]),t._v(" "),a("li",[a("p",[t._v("Stack")]),t._v(" "),a("ul",[a("li",[t._v("빠른접근, cpu 에 의해 관리, 지정된 크기, resize 불가")]),t._v(" "),a("li",[t._v("스레드 별로 공유하지 않음")]),t._v(" "),a("li",[t._v("자동 해제")])])]),t._v(" "),a("li",[a("p",[t._v("Heap")]),t._v(" "),a("ul",[a("li",[t._v("전역적으로 접근 가능, 메모리 크기 제한 없음, resize 가능하나 파편화가 가능")]),t._v(" "),a("li",[t._v("서로 다른 스레드가 접근 가능")]),t._v(" "),a("li",[t._v("파편화 가능성")]),t._v(" "),a("li",[t._v("수동 해제")])])])]),t._v(" "),a("h2",{attrs:{id:"quick-sort-란-무엇이고-시간복잡도는-어떻게-되는지-설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-sort-란-무엇이고-시간복잡도는-어떻게-되는지-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" Quick Sort 란 무엇이고 시간복잡도는 어떻게 되는지 설명")]),t._v(" "),a("ul",[a("li",[t._v("일반적으로 정렬 알고리즘중에서 빠르다고 알려진 알고리즘")]),t._v(" "),a("li",[t._v("시간 복잡도\n"),a("ul",[a("li",[t._v("Best : n log n")]),t._v(" "),a("li",[t._v("Worst : n^2")]),t._v(" "),a("li",[t._v("Average : n log n")])])]),t._v(" "),a("li",[t._v("Pivot 선택노드가 속도에 영향을 줄 수 있음")])]),t._v(" "),a("h2",{attrs:{id:"java-에서-public-static-void-main-으로-시작할-때-public-과-static-을-붙이는-이유는"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-에서-public-static-void-main-으로-시작할-때-public-과-static-을-붙이는-이유는","aria-hidden":"true"}},[t._v("#")]),t._v(" Java 에서 "),a("code",[t._v("public static void main( ... )")]),t._v(" 으로 시작할 때 "),a("code",[t._v("public")]),t._v(" 과 "),a("code",[t._v("static")]),t._v(" 을 붙이는 이유는 ?")]),t._v(" "),a("ul",[a("li",[t._v("메인 메서드는 진입점 (Entry Point) 를 뜻하며 접근제어자가 "),a("code",[t._v("public")]),t._v(" 이 되어야 함")]),t._v(" "),a("li",[t._v("함수에 static 을 붙이게 되면 instance 화 되기 전에 호출 가능하다.")]),t._v(" "),a("li",[t._v("클래스 멤버는 메모리에 로딩된 다음에 사용이 가능하다")]),t._v(" "),a("li",[t._v("main 함수는 프로그램 최초에 호출되는 함수이기 때문에 객체 생성 이전에 호출할 수 있어야 한다.")]),t._v(" "),a("li",[t._v("static 이 붙은 클래스나 메서드, 변수는 컴파일시 자동으로 로딩")])]),t._v(" "),a("h2",{attrs:{id:"관심의-분리-separation-of-concern-에-대해-설명하고-예를-들어-설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#관심의-분리-separation-of-concern-에-대해-설명하고-예를-들어-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" 관심의 분리 (Separation Of Concern) 에 대해 설명하고 예를 들어 설명")]),t._v(" "),a("ul",[a("li",[t._v("서비스 지향 아키텍쳐 (SOA : Service-Oriented Architecture) 의 핵심 원칙")]),t._v(" "),a("li",[t._v("관심이 같은것은 뭉치고 관심사가 다른것은 서로 떨어져 영향을 주지 않도록 설계 및 구현을 하는것")])]),t._v(" "),a("h2",{attrs:{id:"aop-이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop-이란","aria-hidden":"true"}},[t._v("#")]),t._v(" AOP 이란 ?")]),t._v(" "),a("ul",[a("li",[t._v("코드의 재사용을 통해 효율을 올리기 위하여 인프라 로직 같은 공통로직과 비지니스 코드와 같은 핵심 로직을 분리하여 구성하는것")]),t._v(" "),a("li",[t._v("로직의 분리를 통하여 핵심 로직에는 영향을 미치지 않고 개발하는 방법")]),t._v(" "),a("li",[t._v("비지니스 로직과 공통모듈을 분리하여 핵심로직에 영향을 미치지 않고 사이사이에 공통모듈을 효과적으로 잘 끼워넣는 개발방법")]),t._v(" "),a("li",[t._v("공통모듈은 보안, 인증, 로깅 같은 것을 만든 후에 코드 밖에서 이 모듈을 비지니스 로직에 삽입하는것이 AOP 개발 방법이다.")]),t._v(" "),a("li",[t._v("코드 밖에서 설정된다는것이 핵심이며 프로그램 흐름을 파악하기 힘들기 때문에 AOP 사용이 많아질경우 유지보수가 어렵다.")])]),t._v(" "),a("h2",{attrs:{id:"bdd-란-무엇이고-tdd-와-어떤-연관이-있나"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bdd-란-무엇이고-tdd-와-어떤-연관이-있나","aria-hidden":"true"}},[t._v("#")]),t._v(" BDD 란 무엇이고 TDD 와 어떤 연관이 있나 ?")]),t._v(" "),a("ul",[a("li",[t._v("Behavior Driven Development (행위 주도 개발) 의 약자이다.")]),t._v(" "),a("li",[t._v("BDD 는 소프트웨어의 수행을 위한 것으로 TDD 접근법을 전환한것이다.")])]),t._v(" "),a("h2",{attrs:{id:"string-vs-stringbuffer-차이점은"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-vs-stringbuffer-차이점은","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("String")]),t._v(" vs "),a("code",[t._v("StringBuffer")]),t._v(" 차이점은 ?")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("String")]),t._v(" Class 인 경우 Character 조작을 위한 것이며 단순한 상태값을 가지고 있는 불변 속성이다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("StringBuffer")]),t._v(" Class 인 경우 문자열을 재구성하기 위한 것이며 수정이 가능하다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("StringBuilder")]),t._v(" 는 변경 가능한 문자열로 synchronization 이 적용되지 않는다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("StringBuffer")]),t._v(" 는 "),a("em",[a("strong",[t._v("멀티쓰레드 환경에서 안정적")])]),t._v(" 이다.")])])]),t._v(" "),a("h2",{attrs:{id:"checkedexception-과-uncheckedexception-의-차이와-용도를-설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkedexception-과-uncheckedexception-의-차이와-용도를-설명","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("CheckedException")]),t._v(" 과 "),a("code",[t._v("UncheckedException")]),t._v(" 의 차이와 용도를 설명")]),t._v(" "),a("ul",[a("li",[t._v("Checked Exception\n"),a("ul",[a("li",[t._v("외부상황에 의해 미리 예상 가능한 오류이다")]),t._v(" "),a("li",[t._v("예) 디스크 오류, 네트워크 오류등 로직 상의 오류와는 무관하게 발생하는 에러.")]),t._v(" "),a("li",[t._v("IOException, ClassNotFoundException, CloneNotSupportedException등등")]),t._v(" "),a("li",[t._v("RuntimeException을 제외한 Exception을 직접 상속한 모든 예외 클래스는 Checked Exception.")])])]),t._v(" "),a("li",[t._v("Unchecked Exception\n"),a("ul",[a("li",[t._v("프로그램 로직 상에 문제로 인해 생기는 오류이다.")]),t._v(" "),a("li",[t._v("RuntimeException 이하 모든 하위클래스는 Unchecked exception이다.")]),t._v(" "),a("li",[t._v("발생한 예외에 대하여 반드시 코드상에서 예외 처리를 하도록 요구하지 않는다.")]),t._v(" "),a("li",[t._v("NullPointerException의 경우 null을 참조하려는 시도는 프로그램 코드 자체가 잘못된 것.")]),t._v(" "),a("li",[t._v("이런 예방 할 수 없는 오류 조건들은 로직 상에서 처리를 요구")])])])]),t._v(" "),a("h2",{attrs:{id:"객체-재사용이란-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#객체-재사용이란-무엇인가","aria-hidden":"true"}},[t._v("#")]),t._v(" 객체 재사용이란 무엇인가 ?")]),t._v(" "),a("ul",[a("li",[t._v("Singleton Instance 와 같이 최초에 한번 생성한 후 재사용하는 것")]),t._v(" "),a("li",[t._v("ThreadPool, ConnectionPool 등 이외에도 코드내에서 객체를 재사용하는 방법이 있다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" sb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“data1”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://lkhlkh23.tistory.com/60?category=833712",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lkhlkh23.tistory.com/60?category=833712"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=i.exports}}]);