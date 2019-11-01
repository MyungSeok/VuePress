(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{427:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"aop-aspect-oriented-programming-관점-지향-프로그래밍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aop-aspect-oriented-programming-관점-지향-프로그래밍","aria-hidden":"true"}},[t._v("#")]),t._v(" AOP (Aspect Oriented Programming : 관점 지향 프로그래밍)")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("어플리케이션 전체에 사용되는 기능을 재사용 하도록 지원")])]),t._v(" 하도록 도와주는 것이다."),n("br"),t._v("\n여기서의 관점은 기존의 자바를 개발햇던 "),n("em",[n("strong",[t._v("핵심 모듈의 대한 관점")])]),t._v(" 에서 "),n("em",[n("strong",[t._v("부가기능의 관점")])]),t._v(" 으로 바꾸어 프로그래밍 하는 것이다.")]),t._v(" "),n("p",[t._v("이는 어플리케이션의 개발을 위해 비지니스 로직과 인프라 로직이 있는데 이 둘의 차이점은 다음과 같다.")]),t._v(" "),n("ul",[n("li",[t._v("비지니스 로직 : 데이터의 상태값을 조작하는 로직")]),t._v(" "),n("li",[t._v("인프라 로직 : 권한 체크, 트랜젝션, 로깅 등 비지니스 로직의 실행을 위한 기반 로직")])]),t._v(" "),n("p",[n("em",[n("strong",[t._v("AOP 는 이 인프라 로직의 중복성을 제거하는것에 목표")])]),t._v(" 를 두고 있다.")]),t._v(" "),n("p",[t._v("이를 통하여 "),n("em",[n("strong",[t._v("관심의 분리 (Seperation of Concerns) 를 통하여 핵심 관심 사항에 집중")])]),t._v(" 하는것이다.")]),t._v(" "),n("p",[t._v("기능을 핵심 비지니스 로직과 공통 모듈로 분리하고, 핵심 로직에 영향을 미치지 않고 사이사이에 공통 모듈을 효과적으로 잘 끼워 넣도록 코드밖에서 설정된다는 것이 핵심이다.")]),t._v(" "),n("p",[t._v("프로그램 파악이 힘들기 때문에 AOP 의 사용이 많을 경우에는 유지보수의 관리적인 측면이 어려움이 많다.")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/A009.png",alt:"AOP 횡단분리"}})]),t._v(" "),n("h2",{attrs:{id:"특징"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#특징","aria-hidden":"true"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),n("h3",{attrs:{id:"장점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#장점","aria-hidden":"true"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),n("ul",[n("li",[t._v("중복되는 코드 제거")]),t._v(" "),n("li",[t._v("효율적인 유지보수")]),t._v(" "),n("li",[t._v("높은 생산성")]),t._v(" "),n("li",[t._v("재활용성 극대화")]),t._v(" "),n("li",[t._v("유연한 변화 수용")])]),t._v(" "),n("h3",{attrs:{id:"단점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#단점","aria-hidden":"true"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),n("ul",[n("li",[t._v("AOP 가 많으면 관리가 어렵다.")])]),t._v(" "),n("h2",{attrs:{id:"주요개념"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#주요개념","aria-hidden":"true"}},[t._v("#")]),t._v(" 주요개념")]),t._v(" "),n("ul",[n("li",[t._v("Aspect\n"),n("ul",[n("li",[t._v("여러 객체에 공통으로 적용되는 횡단 관심 모듈을 정의")])])]),t._v(" "),n("li",[t._v("Joinpoint\n"),n("ul",[n("li",[t._v("Advice 를 적용 가능한 지점으로 Method 를 호출")]),t._v(" "),n("li",[t._v("필드 값 변경이 해당")]),t._v(" "),n("li",[t._v("Spring 에서는 Method 호출만 지원")])])]),t._v(" "),n("li",[t._v("Interceptor\n"),n("ul",[n("li",[t._v("Interceptor Chain 방식의 AOP 툴에서 사용되는 용어로서 주로 한개의 호출 Method 를 가지는 Advice")])])]),t._v(" "),n("li",[t._v("Advice\n"),n("ul",[n("li",[t._v("언제, 어떤 공통 관심 기능을 핵심 관심 모듈에 적용할 지를 정의")])])]),t._v(" "),n("li",[t._v("Weaving\n"),n("ul",[n("li",[t._v("Advice 를 핵심 관심 모듈에 적용하는 것을 정의")])])]),t._v(" "),n("li",[t._v("Pointcut\n"),n("ul",[n("li",[t._v("횡단 관심 모듈이 적용될 메소드를 선정하는 방법으로 스프링에서는 정규 표현식이나 Aspect J 문법을 통해 정의")])])])]),t._v(" "),n("h3",{attrs:{id:"advice-의-종류"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advice-의-종류","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("code",[t._v("Advice")]),t._v(" 의 종류")]),t._v(" "),n("ul",[n("li",[t._v("Before\n"),n("ul",[n("li",[t._v("대상 객체의 Method 호출 전 실행")])])]),t._v(" "),n("li",[t._v("After Returning\n"),n("ul",[n("li",[t._v("대상 객체가 "),n("code",[t._v("Exception")]),t._v(" 없이 정상적으로 실행된 후 실행")])])]),t._v(" "),n("li",[t._v("After Throwing\n"),n("ul",[n("li",[t._v("대상 객체의 "),n("code",[t._v("Exception")]),t._v(" 과 상관없이 실행")]),t._v(" "),n("li",[n("code",[t._v("finally")]),t._v(" 의 기능과 비슷함")])])]),t._v(" "),n("li",[t._v("Around\n"),n("ul",[n("li",[t._v("대상 객체의 메서드 호출 전, 후 또는 "),n("code",[t._v("Exception")]),t._v(" 발생 시점에 실행")])])])]),t._v(" "),n("h2",{attrs:{id:"적용"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#적용","aria-hidden":"true"}},[t._v("#")]),t._v(" 적용")]),t._v(" "),n("h3",{attrs:{id:"weaving-방식"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#weaving-방식","aria-hidden":"true"}},[t._v("#")]),t._v(" Weaving 방식")]),t._v(" "),n("p",[t._v("Advice 를 Weaving 하는 방식에는 세가지 방식이 존재한다.")]),t._v(" "),n("ol",[n("li",[t._v("컴파일시에 "),n("code",[t._v("Weaving")]),t._v(" 하기")]),t._v(" "),n("li",[t._v("클래스 로딩 시에 "),n("code",[t._v("Weaving")]),t._v(" 하기")]),t._v(" "),n("li",[t._v("런타임시에 "),n("code",[t._v("Weaving")]),t._v(" 하기")])]),t._v(" "),n("h3",{attrs:{id:"spring-aop-란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop-란","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring AOP 란?")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/A106.png",alt:"Spring AOP"}})]),t._v(" "),n("p",[t._v("스프링은 자체적으로 프록시 기반의 AOP 를 지원하고 있다.")]),t._v(" "),n("p",[t._v("스프링 AOP 는 메서드 호출 "),n("code",[t._v("JoinPoint")]),t._v(" 만 지원한다.")]),t._v(" "),n("p",[t._v("스프링은 3가지 방식의 AOP 를 지원한다.")]),t._v(" "),n("ol",[n("li",[t._v("XML 스키마 기반의 POJO 클래스를 이용한 AOP구현")]),t._v(" "),n("li",[t._v("AspectJ 에서 정의한 "),n("code",[t._v("@Aspect")]),t._v(" 어노테이션 기반의 AOP 구현")]),t._v(" "),n("li",[t._v("스프링 API 를 이용한 AOP 구현")])]),t._v(" "),n("p",[t._v("프록시 객체를 생성하는 방식은 대상 객체가 인터페이스를 구현하고 있는지 여부에 따라서 2가지 방식으로 나뉩니다.")]),t._v(" "),n("ul",[n("li",[t._v("JDK Dynamic Proxy\n"),n("ul",[n("li",[t._v("자바의 리플렉션 API 를 제공하는 "),n("code",[t._v("java.lang.reflect.Proxy")]),t._v(" 를 이용하여 프록시 객체를 생성합니다.")]),t._v(" "),n("li",[t._v("인터페이스를 기반으로 프록시 객체를 생성하기 때문에 인터페이스에 정의되지 않는 메서드에 대해서는 AOP 가 적용되지 않는 점에 유의해야 한다.")])])]),t._v(" "),n("li",[t._v("CGLIB (Code Generation Library)\n"),n("ul",[n("li",[t._v("대상 객체가 인터페이스를 구현하고 있지 않고 바로 클래스로 사용할 때 프록시 객체를 생성")]),t._v(" "),n("li",[t._v("대상 클래스를 바로 상속 받아 프록시를 구현한다.")]),t._v(" "),n("li",[t._v("클래스가 "),n("code",[t._v("final")]),t._v(" 인 경우에는 프록시를 생성할 수 없다.")])])])]),t._v(" "),n("h3",{attrs:{id:"spring-boot-aop-적용"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-aop-적용","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring Boot AOP 적용")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("square"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("advice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProceedingJoinPoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("After")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Around")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aspect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pointcut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Aspect")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerAdvice")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerAdvice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logger Advice Before"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@After")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessAfter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logger Advice After"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pointcut"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" returning"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessAfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Returning is "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logger Advice AfterReturning"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pointcut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logServiceAccessPointcut()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice Before"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@After")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logServiceAccessPointcut()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutAfter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice After"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logServiceAccessPointcut()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" returning"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutAfterReturning")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JoinPoint")]),t._v(" joinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Returning is "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice AfterReturning"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Around")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(* com.square..controller.*Controller.*(..))"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("logServiceAccessPointcutAround")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProceedingJoinPoint")]),t._v(" processedJoinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice Around Before"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" processedJoinPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("proceed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Pointcut] Logger Advice Around After"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("AOP 적용 대상 페이지를 호출하면 다음과 같이 로그가 남는다.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice Around Before\nLogger Advice Before\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice Before\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 컨트롤러 로직 처리")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice Around After\nLogger Advice After\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice After\nReturning is index\nLogger Advice AfterReturning\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Returning is index\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pointcut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Logger Advice AfterReturning\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://heowc.github.io/2018/02/07/spring-boot-aop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://heowc.github.io/2018/02/07/spring-boot-aop/"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"http://jyh1536.tistory.com/66",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jyh1536.tistory.com/66"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"http://addio3305.tistory.com/86",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://addio3305.tistory.com/86"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://jojoldu.tistory.com/27",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jojoldu.tistory.com/27"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://minwan1.github.io/2017/10/29/2017-10-29-Spring-AOP-Proxy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://minwan1.github.io/2017/10/29/2017-10-29-Spring-AOP-Proxy/"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://busy.org/@nhj12311/aop-cglib-java-aop-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://busy.org/@nhj12311/aop-cglib-java-aop-4"),n("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);