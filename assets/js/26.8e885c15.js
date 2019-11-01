(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{433:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring")]),t._v(" "),a("p",[t._v("스프링 프레임워크란 자바의 객체지향 관점의 셀계를 프레임워크의 형태로 구현해 놓은 것이며")]),t._v(" "),a("p",[t._v("그 구현 과정에서 SOLID 와 같은 객체 지향 설계의 원칙들을 기반으로 한다.")]),t._v(" "),a("p",[t._v("스프링 프레임워크의 전반적인 이야기를 다루도록 한다.")]),t._v(" "),a("p",[t._v("스프링을 사용하는 가장 큰 이유는 스프링이 생각하는 개념대로 따라 프로그램을 작성하게 되면 Dependency Injection 을 따르게 되어 있다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://spring.io/projects",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://spring.io/projects"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"아티팩트-artifact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#아티팩트-artifact","aria-hidden":"true"}},[t._v("#")]),t._v(" 아티팩트 (Artifact)")]),t._v(" "),a("p",[t._v("아티팩트는 소프트웨어 개발 프로젝트를 진행하면서 생성하는 다양한 "),a("em",[a("strong",[t._v("산출물")])]),t._v(" 을 의미한다.")]),t._v(" "),a("p",[t._v("통상적으로는 "),a("em",[a("strong",[t._v("라이브러리와 동일한 의미로 해석")])]),t._v(" 되며 "),a("code",[t._v(".jar")]),t._v(", "),a("code",[t._v(".war")]),t._v(", "),a("code",[t._v(".ear")]),t._v(" 등의 확장자를 갖게된다.")]),t._v(" "),a("h3",{attrs:{id:"아티팩트-저장소-artifact-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#아티팩트-저장소-artifact-repository","aria-hidden":"true"}},[t._v("#")]),t._v(" 아티팩트 저장소 (Artifact Repository)")]),t._v(" "),a("p",[t._v("아티팩트 저장소는 아티팩트와 메타데이터를 저장하고 관리하는 저장소를 의미한다.")]),t._v(" "),a("p",[t._v("저장소는 계층구조로 접근 가능하며 이 계층적 구조를 GAV (Group, Artifact, Version) 구조라고 하며 메이븐 (Maven) 에서 의존성을 찾을 때 참고하는 구조이기도 한다.")]),t._v(" "),a("p",[t._v("넥서스 (Nexus) 가 이 저장소에 사용되는 대표적인 제품이다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.lesstif.com/pages/viewpage.action?pageId=18219542",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.lesstif.com/pages/viewpage.action?pageId=18219542"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"autowired-vs-qualifier-의-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autowired-vs-qualifier-의-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Autowired")]),t._v(" vs "),a("code",[t._v("@Qualifier")]),t._v(" 의 차이")]),t._v(" "),a("p",[a("code",[t._v("@Autowired")]),t._v(" 는 자동 주입 기능으로 스프링이 알아서 의존 객체를 찾아서 명시해준다."),a("br"),t._v("\n즉 자동 주입기능을 사용하면 별도의 설정이 없어도 의존 Bean 객체를 찾아서 주입해준다.")]),t._v(" "),a("p",[t._v("하지만 같은 타입의 빈이 두개 이상 존재할 경우에는 컨테이너 초기화 하는 과정에서 에러가 발생하기 때문에 주입할 객체를 특정 지어줘야 한다."),a("br"),t._v("\n이때 "),a("code",[t._v("@Qualifier")]),t._v(" 를 사용해 줘야 한다.")]),t._v(" "),a("h2",{attrs:{id:"vo-vs-dto-vs-dao-의-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vo-vs-dto-vs-dao-의-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("VO")]),t._v(" vs "),a("code",[t._v("DTO")]),t._v(" vs "),a("code",[t._v("DAO")]),t._v(" 의 차이")]),t._v(" "),a("p",[a("strong",[t._v("VO (Value Object)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("read only")]),t._v(" 속성을 갖는다.")]),t._v(" "),a("li",[t._v("대체로 불변 특성을 가지며 "),a("code",[t._v("equals()")]),t._v(" 로 비교할때 모든 값을 비교해야 한다.")]),t._v(" "),a("li",[t._v("간단한 독립체 혹은 객체 (Entity) 를 의미한다.")])]),t._v(" "),a("p",[a("strong",[t._v("DTO (Data Transfer Object : 데이터 전송 객체)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("VO")]),t._v(" 와 "),a("code",[t._v("DTO")]),t._v(" 를 동일 개념 상에 놓는 경우 대부분이다.")]),t._v(" "),a("li",[t._v("네트워크 통신 (서버-서버, 클라이언트-서버) 을 할 때 주로 사용되는 데이터 객체이다.")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("DAO")])])]),t._v(" "),a("ul",[a("li",[t._v("데이터 접근을 목적으로 하는 객체")]),t._v(" "),a("li",[t._v("여러 사용자가 "),a("code",[t._v("DAO")]),t._v(" 의 인터페이스를 사용하여 필요한 자료에 접근 하도록 하는 것이 개념이다.")]),t._v(" "),a("li",[t._v("DB 에 대한 "),a("code",[t._v("insert")]),t._v(" "),a("code",[t._v("update")]),t._v(" "),a("code",[t._v("delete")]),t._v(" "),a("code",[t._v("select")]),t._v(" 를 처리한다.")]),t._v(" "),a("li",[t._v("단일 책임의 원칙 개념의 성격을 가지며 대부분의 데이터베이스에 적용이 가능하다.")])]),t._v(" "),a("h2",{attrs:{id:"preparedstatement-와-statement-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparedstatement-와-statement-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" PreparedStatement 와 Statement 차이")]),t._v(" "),a("p",[t._v("가장 큰 차이점은 캐시 (Cache) 사용여부이다.")]),t._v(" "),a("p",[a("strong",[t._v("Statement 실행 순서")])]),t._v(" "),a("ol",[a("li",[t._v("Query Statement 분석")]),t._v(" "),a("li",[t._v("Compile")]),t._v(" "),a("li",[t._v("Excute")])]),t._v(" "),a("p",[t._v("Statement 를 사용하게 되면 매번 Query 를 수행할 때마다 1 ~ 3 단계를 수행하게 되고 PreparedStatement 는 처음 한번만 세 단계를 수행하고 나머지는 캐시에 담아 재사용을 한다.")]),t._v(" "),a("p",[a("strong",[t._v("Statement")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sqlStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT name, memo FROM TABLE WHERE num = "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Statement")]),t._v(" stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResultSet")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Preparedstatement")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sqlStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT name, memo FROM TABLE WHERE num = ?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreparedStatement")]),t._v(" stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npstmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResultSet")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pstmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exceuteQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("동일한 Query 를 반복적으로 사용할 때는 "),a("em",[a("strong",[t._v("PreparedStatement")])]),t._v(" 가 DB 에 훨씬 적은 부담을 주며 성능도 우수하다.")]),t._v(" "),a("p",[t._v("만약 "),a("em",[a("strong",[t._v("Dynamic SQL 을 사용할 경우")])]),t._v(" 매번 조건절이 틀려지게 됨으로 Statement 가 낫다. (캐싱의 장점을 잃어버림)")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://devbox.tistory.com/entry/Comporison",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://devbox.tistory.com/entry/Comporison"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"ajax-에서-넘긴-json-stringify-파라메터-requestbody-로-받기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax-에서-넘긴-json-stringify-파라메터-requestbody-로-받기","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("ajax")]),t._v(" 에서 넘긴 "),a("code",[t._v("JSON.stringify")]),t._v(" 파라메터 "),a("code",[t._v("@RequestBody")]),t._v(" 로 받기")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/encrypt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  contentType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json; charset=utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" returnUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.alert-success > p > span'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#encryptUrl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.alert-success > p > a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.alert-success > p > a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'href'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" returnUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ResponseBody")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/encrypt"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEncrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shorten")]),t._v(" shorten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShortenCrypto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shorten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zorba91.tistory.com/16",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zorba91.tistory.com/16"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);