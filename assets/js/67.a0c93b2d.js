(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{370:function(t,e,a){"use strict";a.r(e);var n=a(1),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annotation","aria-hidden":"true"}},[t._v("#")]),t._v(" Annotation")]),t._v(" "),a("p",[t._v("어노테이션 ("),a("code",[t._v("@")]),t._v(", Annotation) 이란 JDK 5 부터 등장한 기술로 주석이라고는 간단히 표현되었지만 어노테이션에 구현된 정보에 따라 코드의 연결 방향성이 결정된다.")]),t._v(" "),a("p",[t._v("비지니스 로직에는 영향을 주지 않지만 해당 타겟의 연결방법이나 소스코드의 구조를 결정짓는 중요한 기능을 할수도 있다.")]),t._v(" "),a("p",[t._v("어노테이션은 소스 코드에 메타 정보를 삽입하는것 이기 때문에 잘 이용하면 구독성 뿐만이 아니라 체계적인 소스코드 구성의 도움을 준다.")]),t._v(" "),a("h2",{attrs:{id:"커스텀-어노테이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#커스텀-어노테이션","aria-hidden":"true"}},[t._v("#")]),t._v(" 커스텀 어노테이션")]),t._v(" "),a("p",[t._v("어노테이션은 기본적으로 인터페이스 형태를 취하고 있으며 "),a("code",[t._v("interface")]),t._v(" 앞에 "),a("code",[t._v("@")]),t._v(" 표시를 해준다.\n어노테이션 필드에서는 "),a("code",[t._v("enum")]),t._v(" "),a("code",[t._v("String")]),t._v(" 이나 기본 자료형 혹은 기본 자료형의 배열들을 사용할 수 있다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("METHOD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomAnnotation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"target"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Target")])]),t._v(" "),a("ul",[a("li",[t._v("어노테이션이 적용될 위치를 선택합니다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("유형")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.PACKAGE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("패키지 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.TYPE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("타입 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.ANNOTATION_TYPE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("어노테이션 타입 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.CONSTRUCTOR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("생성자 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.FIELD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("멤버 변수 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.LOCAL_VARIABLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("지역 변수 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.METHOD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("메서드 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.PARAMETER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("전달인자 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.TYPE_PARAMETER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("전달인자 타입 선언")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ElementType.TYPE_USE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("타입 선언")])])])]),t._v(" "),a("h3",{attrs:{id:"retention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retention","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Retention")])]),t._v(" "),a("ul",[a("li",[t._v("자바 컴파일러가 어노테이션을 다루는 방법을 기술하며 특정 시점까지 영향을 미치는지 결정한다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("유형")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RetentionPolicy.SOURCE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("컴파일 전까지만 유효"),a("br"),t._v("컴파일 이후에는 사라짐")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RetentionPolicy.CLASS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("컴파일러가 클래스를 참조할 때까지 유효.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RetentionPolicy.RUNTIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("컴파일 이후에도 JVM에 의해 계속 참조가 가능. "),a("br"),t._v("리플렉션 사용")])])])]),t._v(" "),a("h3",{attrs:{id:"documented"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documented","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Documented")])]),t._v(" "),a("ul",[a("li",[t._v("해당 어노테이션을 Javadoc 에 포함시킵니다.")])]),t._v(" "),a("h3",{attrs:{id:"inherited"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Inherited")])]),t._v(" "),a("ul",[a("li",[t._v("어노테이션의 상속을 가능하게 합니다.")])]),t._v(" "),a("h3",{attrs:{id:"repeatable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repeatable","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Repeatable")])]),t._v(" "),a("ul",[a("li",[t._v("JDK8 부터 지원")]),t._v(" "),a("li",[t._v("연속적으로 어노테이션 선언할 수 있게 지원해준다.")])]),t._v(" "),a("h2",{attrs:{id:"java-에서-제공"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-에서-제공","aria-hidden":"true"}},[t._v("#")]),t._v(" Java 에서 제공")]),t._v(" "),a("h3",{attrs:{id:"override"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#override","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Override")])]),t._v(" "),a("ul",[a("li",[t._v("선언한 메서드가 오버라이드 됨")]),t._v(" "),a("li",[t._v("상위 (부모) 클래스 (혹은 인터페이스) 에서 해당 메서드를 찾을 수 없다면 컴파일 에러를 발생시킨다.")])]),t._v(" "),a("h3",{attrs:{id:"deprecated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Deprecated")])]),t._v(" "),a("ul",[a("li",[t._v("해당 메서드가 더 이상 사용되지 않음을 표시")]),t._v(" "),a("li",[t._v("만약 사용할 경우 컴파일 경고를 발생")])]),t._v(" "),a("h3",{attrs:{id:"suppresswarnings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suppresswarnings","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@SuppressWarnings")])]),t._v(" "),a("ul",[a("li",[t._v("선언한 곳의 컴파일 경고를 무시하도록 한다.")])]),t._v(" "),a("h3",{attrs:{id:"safevarargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safevarargs","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@SafeVarargs")])]),t._v(" "),a("ul",[a("li",[t._v("JDK 7 부터 지원")]),t._v(" "),a("li",[t._v("제네릭 같은 가변 인자의 매개변수를 사용할 때의 경고를 무시")])]),t._v(" "),a("h3",{attrs:{id:"functionalinterface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functionalinterface","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@FunctionalInterface")])]),t._v(" "),a("ul",[a("li",[t._v("JDK 8 부터 지원")]),t._v(" "),a("li",[t._v("함수형 인터페이스를 지정")]),t._v(" "),a("li",[t._v("메서드가 존재하지 않거나, 1개 이상의 메서드 ("),a("code",[t._v("default")]),t._v(" 메서드 제외) 가 존재할 경우 컴파일 오류를 발생")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.nextree.co.kr/p5864/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.nextree.co.kr/p5864/"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://elfinlas.github.io/2017/12/14/java-annotation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://elfinlas.github.io/2017/12/14/java-annotation/"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://elfinlas.github.io/2017/12/14/java-custom-anotation-01/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://elfinlas.github.io/2017/12/14/java-custom-anotation-01/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"spring-에서-제공"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-에서-제공","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring 에서 제공")]),t._v(" "),a("h3",{attrs:{id:"transactional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactional","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Transactional")])]),t._v(" "),a("p",[t._v("코드기반 트랜잭션 처리 (Programmatic Transaction) 뿐만이 아니라 "),a("strong",[t._v("선언적 트랜잭션 (Declarative Transaction) 을 지원")])]),t._v(" "),a("p",[t._v("스프링에서 제공하는 트랜잭션 템플릿 클래스를 이용하거나 설정파일, 어노테이션을 이용하여 트랜잭션 범위 및 규칙을 정의할 수 있다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://crosstheline.tistory.com/96",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://crosstheline.tistory.com/96"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://snoopy81.tistory.com/335",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://snoopy81.tistory.com/335"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=r.exports}}]);