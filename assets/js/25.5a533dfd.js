(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{414:function(t,v,e){"use strict";e.r(v);var _=e(1),a=Object(_.a)({},function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring")]),t._v(" "),e("p",[t._v("스프링 프레임워크란 자바의 객체지향 관점의 셀계를 프레임워크의 형태로 구현해 놓은 것이며")]),t._v(" "),e("p",[t._v("그 구현 과정에서 SOLID 와 같은 객체 지향 설계의 원칙들을 기반으로 한다.")]),t._v(" "),e("p",[t._v("스프링 프레임워크의 전반적인 이야기를 다루도록 한다.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://spring.io/projects",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://spring.io/projects"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"아티팩트-artifact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#아티팩트-artifact","aria-hidden":"true"}},[t._v("#")]),t._v(" 아티팩트 (Artifact)")]),t._v(" "),e("p",[t._v("아티팩트는 소프트웨어 개발 프로젝트를 진행하면서 생성하는 다양한 "),e("em",[e("strong",[t._v("산출물")])]),t._v(" 을 의미한다.")]),t._v(" "),e("p",[t._v("통상적으로는 "),e("em",[e("strong",[t._v("라이브러리와 동일한 의미로 해석")])]),t._v(" 되며 "),e("code",[t._v(".jar")]),t._v(", "),e("code",[t._v(".war")]),t._v(", "),e("code",[t._v(".ear")]),t._v(" 등의 확장자를 갖게된다.")]),t._v(" "),e("h3",{attrs:{id:"아티팩트-저장소-artifact-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#아티팩트-저장소-artifact-repository","aria-hidden":"true"}},[t._v("#")]),t._v(" 아티팩트 저장소 (Artifact Repository)")]),t._v(" "),e("p",[t._v("아티팩트 저장소는 아티팩트와 메타데이터를 저장하고 관리하는 저장소를 의미한다.")]),t._v(" "),e("p",[t._v("저장소는 계층구조로 접근 가능하며 이 계층적 구조를 GAV (Group, Artifact, Version) 구조라고 하며 메이븐 (Maven) 에서 의존성을 찾을 때 참고하는 구조이기도 한다.")]),t._v(" "),e("p",[t._v("넥서스 (Nexus) 가 이 저장소에 사용되는 대표적인 제품이다.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.lesstif.com/pages/viewpage.action?pageId=18219542",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.lesstif.com/pages/viewpage.action?pageId=18219542"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"autowired-vs-qualifier-의-차이"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autowired-vs-qualifier-의-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("@Autowired")]),t._v(" vs "),e("code",[t._v("@Qualifier")]),t._v(" 의 차이")]),t._v(" "),e("p",[e("code",[t._v("@Autowired")]),t._v(" 는 자동 주입 기능으로 스프링이 알아서 의존 객체를 찾아서 명시해준다."),e("br"),t._v("\n즉 자동 주입기능을 사용하면 별도의 설정이 없어도 의존 Bean 객체를 찾아서 주입해준다.")]),t._v(" "),e("p",[t._v("하지만 같은 타입의 빈이 두개 이상 존재할 경우에는 컨테이너 초기화 하는 과정에서 에러가 발생하기 때문에 주입할 객체를 특정 지어줘야 한다."),e("br"),t._v("\n이때 "),e("code",[t._v("@Qualifier")]),t._v(" 를 사용해 줘야 한다.")]),t._v(" "),e("h2",{attrs:{id:"vo-vs-dto-vs-dao-의-차이"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vo-vs-dto-vs-dao-의-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("VO")]),t._v(" vs "),e("code",[t._v("DTO")]),t._v(" vs "),e("code",[t._v("DAO")]),t._v(" 의 차이")]),t._v(" "),e("p",[e("strong",[t._v("VO (Value Object)")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("read only")]),t._v(" 속성을 갖는다.")]),t._v(" "),e("li",[t._v("대체로 불변 특성을 가지며 "),e("code",[t._v("equals()")]),t._v(" 로 비교할때 모든 값을 비교해야 한다.")]),t._v(" "),e("li",[t._v("간단한 독립체 혹은 객체 (Entity) 를 의미한다.")])]),t._v(" "),e("p",[e("strong",[t._v("DTO (Data Transfer Object : 데이터 전송 객체)")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("VO")]),t._v(" 와 "),e("code",[t._v("DTO")]),t._v(" 를 동일 개념 상에 놓는 경우 대부분이다.")]),t._v(" "),e("li",[t._v("네트워크 통신 (서버-서버, 클라이언트-서버) 을 할 때 주로 사용되는 데이터 객체이다.")])]),t._v(" "),e("p",[e("strong",[e("code",[t._v("DAO")])])]),t._v(" "),e("ul",[e("li",[t._v("데이터 접근을 목적으로 하는 객체")]),t._v(" "),e("li",[t._v("여러 사용자가 "),e("code",[t._v("DAO")]),t._v(" 의 인터페이스를 사용하여 필요한 자료에 접근 하도록 하는 것이 개념이다.")]),t._v(" "),e("li",[t._v("DB 에 대한 "),e("code",[t._v("insert")]),t._v(" "),e("code",[t._v("update")]),t._v(" "),e("code",[t._v("delete")]),t._v(" "),e("code",[t._v("select")]),t._v(" 를 처리한다.")]),t._v(" "),e("li",[t._v("단일 책임의 원칙 개념의 성격을 가지며 대부분의 데이터베이스에 적용이 가능하다.")])])])},[],!1,null,null,null);v.default=a.exports}}]);