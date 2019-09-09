(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{272:function(t,e,a){"use strict";a.r(e);var n=a(1),s=function(t){t.options.__data__block__={flowchart_64a56962:"stage1=>operation: Bean Object 생성\nstage2=>operation: 의존성 주입 (DI)\nstage3=>operation: Bean 설정 파일 정보 초기화\nstage4=>operation: Bean 초기화 상태\nstage5=>operation: Bean 준비 상태\nstage6=>operation: Bean 소멸 상태\n\nstage1->stage2->stage3->stage4->stage5->stage6"}},r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean")]),t._v(" "),a("p",[t._v("스프링 프레임워크에서 사용하는 POJO 모델을 기반으로 하며 이는 IoC 역활을 해주는 기능을 한다.")]),t._v(" "),a("p",[t._v("이 Bean 은 "),a("em",[a("strong",[t._v("Bean Factory")])]),t._v(" 와 밀접한 관련이 있다.")]),t._v(" "),a("p",[t._v("Bean Factory 는 Bean 의 생명주기를 관리하며 대체로 Bean Factory 의 기능을 확장한 Application Context 를 사용한다.")]),t._v(" "),a("p",[t._v("Spring Bean 은 특별한 경우를 제외하고는 "),a("em",[a("strong",[t._v("Singleton")])]),t._v(" 으로 생성된다.")]),t._v(" "),a("h2",{attrs:{id:"bean-container-ioc-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean-container-ioc-container","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean Container (= IoC Container)")]),t._v(" "),a("ul",[a("li",[t._v("객체를 관리하는 컨테이너로써 컨테이너에 객체를 담아두고 필요할 때에 컨테이너에서 객체를 가져와 사용할 수 있도록 한다.")]),t._v(" "),a("li",[t._v("IoC 방식으로 Bean 을 관리한다는 의미에서 "),a("em",[a("strong",[t._v("Bean Factory")])]),t._v(" 나 "),a("em",[a("strong",[t._v("Application Context")])]),t._v(" 를 가르킨다.")])]),t._v(" "),a("h2",{attrs:{id:"bean-factory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean-factory","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean Factory")]),t._v(" "),a("ul",[a("li",[t._v("스프링이 IoC 를 담당하는 핵심 컨테이너")]),t._v(" "),a("li",[t._v("Bean 을 등록/생성/조회/반환/관리 하는 기능으로 Bean Factory 와 같지만 여기에 스프링의 각종 부가서비스를 추가로 제공해야 한다.")])]),t._v(" "),a("h2",{attrs:{id:"application-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-context","aria-hidden":"true"}},[t._v("#")]),t._v(" Application Context")]),t._v(" "),a("p",[t._v("대부분의 기능들은 Bean Factory 와 동일한 역활과 기능들을 수행하나 부가적으로 제공되는 기능들이 있다. (Bean Factory 인터페이스를 상속한다)")]),t._v(" "),a("ul",[a("li",[t._v("인스턴스화 시점이 상이하다.\n"),a("ul",[a("li",[t._v("Application Context 는 즉시 인스턴스를 만드는 Pre-loading 을 하고")]),t._v(" "),a("li",[t._v("Bean Factory 는 lazy-loading 을 하여 실제로 요청 받는 시점에 인스턴스를 만든다.")])])]),t._v(" "),a("li",[t._v("Bean Factory 를 확장한 IoC 컨테이너이며 일반적으로 엔터프라이즈한 어플리케이션은 Application Context 를 사용하는게 낫다고 한다.\n"),a("ul",[a("li",[a("code",[t._v("BeanPostProcessor")]),t._v(" 확장 포인트를 사용할 수 있고 트랜잭션과 AOP 와 같은 상당한 양의 지원을 받을 수 있다고 한다.")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Feature")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("BeanFactory")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ApplicationContext")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Bean instantiation/wiring")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Automatic BeanPostProcessor registration")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Automatic BeanFactoryPostProcessor registration")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Convenient MessageSource access (for i18n)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ApplicationEvent publication")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://wonwoo.ml/index.php/post/1571",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://wonwoo.ml/index.php/post/1571"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"pojo-plain-old-java-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pojo-plain-old-java-object","aria-hidden":"true"}},[t._v("#")]),t._v(" POJO (Plain Old Java Object)")]),t._v(" "),a("p",[t._v("Sun 의 Java Bean 이나 EJB 의 Bean 을 뜻하는 것이 아닌 순수하게 "),a("code",[t._v("getter")]),t._v(", "),a("code",[t._v("setter")]),t._v(" 메서드로만 이루어진 Value Object 성의 Bean 을 의미한다."),a("br"),t._v("\n예를 들면 다음과 같은 코드이다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleBean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("스프링에서 POJO 가 중요한 특징인 이유는 다음과 같은 특성을 가지기 때문이다.")]),t._v(" "),a("ul",[a("li",[t._v("클래스위 상속을 강제하지 않는다.")]),t._v(" "),a("li",[t._v("인터페이스의 구현을 강제하지 않는다.")]),t._v(" "),a("li",[t._v("어노테이션의 사용을 강제하지 않는다.")])]),t._v(" "),a("p",[t._v("때문에 사용자는 라이브러리나 컨테이너의 별도 기술에 종속적이지 않는 상태로 가장 일반적인 코드로 작성할 수 있다는 것이다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://m.blog.naver.com/weekamp/186678831",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m.blog.naver.com/weekamp/186678831"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://joonyon.tistory.com/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://joonyon.tistory.com/18"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"spring-bean-life-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean-life-cycle","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring Bean Life Cycle")]),t._v(" "),a("p",[t._v("Spring Bean Life Cycle 은 최초에 Bean Object 가 생성되고"),a("br"),t._v("\nDI 의존성 주입후 초기화 작업이 끝나면 Bean 서비스가 가능한 준비 상태가 완료된다.")]),t._v(" "),a("p",[t._v("이후 컨테이너가 종료될때 호출되서 사용중인 빈 리소스를 반환하거나 종료전에 처리되야 할 작업들도 별도 지정이 가능하다.")]),t._v(" "),a("FlowChart",{attrs:{id:"flowchart_64a56962",code:t.$dataBlock.flowchart_64a56962,preset:"vue"}}),a("h3",{attrs:{id:"초기화-메서드-initalization-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#초기화-메서드-initalization-method","aria-hidden":"true"}},[t._v("#")]),t._v(" 초기화 메서드 (initalization-method)")]),t._v(" "),a("ol",[a("li",[t._v("Spring Framework 는 먼저 "),a("code",[t._v("Bean")]),t._v(" 설정파일의 POJO 빈을 Instance 화 하지 않은 상태로 "),a("code",[t._v("Bean")]),t._v(" 설정 파일의 정보를 초기화 한다.\n"),a("ol",[a("li",[t._v("빈 설정 파일의 정보를 초기화 하면서 XML DTD 에 대하여 유효한지 체크한다.")])])]),t._v(" "),a("li",[t._v("Bean Instance 를 생성하면서 의존 관계에 있는 Bean 이 존재하는지 여부를 체크한다.\n"),a("ol",[a("li",[t._v("의존 관계가 없는 Bean 인 경우 초기화가 실패 한다.")])])]),t._v(" "),a("li",[t._v("의존 관계가 있는 빈의 체크가 완료되면 "),a("code",[t._v("setter Method")]),t._v(" 를 호출하거나 생성자의 인자로 실질적인 값을 추가하거나 다른 Bean 에 대한 Reference 로 전달한다.")]),t._v(" "),a("li",[t._v("Application Context 를 이용하여 초기화를 실행한다.\n"),a("ol",[a("li",[t._v("생성한 Bean 이 BeanNameAware Instance 이면 "),a("code",[t._v("setBeanName()")]),t._v(" Method 를 호출한다.")]),t._v(" "),a("li",[t._v("생성한 Bean 이 BeanFactoryAware Instance 이면 "),a("code",[t._v("setBeanFactory()")]),t._v(" Method 를 호출한다.")]),t._v(" "),a("li",[t._v("생성한 Bean 이 ApplicationContextAware Instance 이면 "),a("code",[t._v("setApplicationContext()")]),t._v(" Method 를 호출한다.")]),t._v(" "),a("li",[t._v("생성한 Bean 이 InitalizingBean 인스턴스이면 "),a("code",[t._v("afterProperties()")]),t._v(" Method 를 호출한다.")])])]),t._v(" "),a("li",[t._v("생성한 Bean 의 설정파일에 init-method 가 설정되어 있다면 init-method 에 해당하는 Method 를 호출한다.")])]),t._v(" "),a("h3",{attrs:{id:"종료-메서드-destruction-method-를-호출하는-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#종료-메서드-destruction-method-를-호출하는-과정","aria-hidden":"true"}},[t._v("#")]),t._v(" 종료 메서드 (destruction-method) 를 호출하는 과정")]),t._v(" "),a("ol",[a("li",[t._v("생성한 Bean 이 DisposableBean Instance 이면 "),a("code",[t._v("distory")]),t._v(" Method 를 호출한다.")]),t._v(" "),a("li",[t._v("생성한 Bean 설정파일에 distory-method 가 설정되어 있으면 "),a("code",[t._v("destory")]),t._v(" Method 에 해당하는 메소드를 호출한다.")])]),t._v(" "),a("blockquote",[a("p",[t._v("Bean Life Cycle 을 커스터마이징 하여 제어 할 수 있다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://javaslave.tistory.com/48",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://javaslave.tistory.com/48"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/11/10/spring-beans.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gmlwjd9405.github.io/2018/11/10/spring-beans.html"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://unabated.tistory.com/entry/Spring-Bean-%EC%B4%88%EA%B8%B0%ED%99%94-%EB%B0%8F-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unabated.tistory.com/entry/Spring-Bean-초기화-및-생명주기"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://cornswrold.tistory.com/100",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cornswrold.tistory.com/100"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"bean-로드-순서를-결정짓는-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean-로드-순서를-결정짓는-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean 로드 순서를 결정짓는 방법")]),t._v(" "),a("p",[t._v("Bean 내부적으로도 생성 순서에 따라 에러가 나올수 있기 때문에 해당 상황에서는 빈 생성 순서를 정해주는 것이 낫다")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@DependsOn")]),t._v(" "),a("ul",[a("li",[t._v("의존성 고리를 스프링에게 알려준다.")])])]),t._v(" "),a("li",[a("code",[t._v("@PostConstruct")]),t._v(" "),a("ul",[a("li",[t._v("해당 컴포넌트가 완전히 생성된 후 한번에 실행해야 할 일을 코딩한 메소드에 붙이는 것이다.")])])]),t._v(" "),a("li",[a("code",[t._v("@Order")]),t._v(" "),a("ul",[a("li",[t._v("주입 순서를 정해 줌")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jeong-pro.tistory.com/167",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jeong-pro.tistory.com/167"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"bean-vs-component-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean-vs-component-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("@Bean")]),t._v(" vs "),a("code",[t._v("@Component")]),t._v(" 차이")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Bean")]),t._v(" "),a("ul",[a("li",[t._v("외부 라이브러리들의 사용을 Bean 으로 등록하고 싶은 경우")])])]),t._v(" "),a("li",[a("code",[t._v("@Component")]),t._v(" "),a("ul",[a("li",[t._v("사용자가 직접 컨트롤이 가능한 Class 인 경우")])])])]),t._v(" "),a("p",[t._v("사용자가 생성한 클래스에 "),a("code",[t._v("@Bean")]),t._v(" 선언은 불가능하다 이는 각자 선언할 수 있는 타입이 정해져 있어 해당 용도를 벗어나면 컴파일 에러를 발생시킨다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://effectivesquid.tistory.com/entry/Bean-%EA%B3%BC-Component%EC%9D%98-%EC%B0%A8%EC%9D%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://effectivesquid.tistory.com/entry/Bean-과-Component의-차이"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"bean-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean-scope","aria-hidden":"true"}},[t._v("#")]),t._v(" Bean Scope")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("eGov")])]),t._v(" 및 "),a("em",[a("strong",[t._v("Spring Reference (4.2.5)")])]),t._v(" 에서 발췌한 Bean Scope 의 종류이다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Scope")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("eGov")]),t._v(" "),a("th",[t._v("Spring Reference")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Global Session")]),t._v(" "),a("td",[t._v("하나의 Bean 정의에 대해서 하나의 global HTTP Session의 생명주기 안에 단 하나의 객체만 존재한다. "),a("br"),t._v("일반적으로 portlet context 안에서 유효하다. Web-aware Spring ApplicationContext 안에서만 유효하다.")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("O")])]),t._v(" "),a("tr",[a("td",[t._v("Prototype")]),t._v(" "),a("td",[t._v("하나의 Bean 정의에 대해서 다수의 객체가 존재할 수 있다.")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("O")])]),t._v(" "),a("tr",[a("td",[t._v("Request")]),t._v(" "),a("td",[t._v("하나의 Bean 정의에 대해서 하나의 HTTP request의 생명주기 안에 단 하나의 객체만 존재한다 "),a("br"),t._v("즉, 각각의 HTTP request는 자신만의 객체를 가진다. Web-aware Spring ApplicationContext 안에서만 유효하다.")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("O")])]),t._v(" "),a("tr",[a("td",[t._v("session")]),t._v(" "),a("td",[t._v("하나의 Bean 정의에 대해서 하나의 HTTP Session의 생명주기 안에 단 하나의 객체만 존재한다. "),a("br"),t._v("Web-aware Spring ApplicationContext 안에서만 유효하다.")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("O")])]),t._v(" "),a("tr",[a("td",[t._v("singleton")]),t._v(" "),a("td",[t._v("하나의 Bean 정의에 대해서 Spring IoC Container 내에 단 하나의 객체만 존재한다.")]),t._v(" "),a("td",[t._v("O")]),t._v(" "),a("td",[t._v("O")])]),t._v(" "),a("tr",[a("td",[t._v("application")]),t._v(" "),a("td",[t._v("서블릿 컨텍스트의 라이프사이클에 정의된다. "),a("br"),t._v("Spring Application Context 내에서만 유효하다.")]),t._v(" "),a("td",[t._v("X")]),t._v(" "),a("td",[t._v("O")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.slipp.net/wiki/pages/viewpage.action?pageId=25528177",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.slipp.net/wiki/pages/viewpage.action?pageId=25528177"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);"function"==typeof s&&s(r);e.default=r.exports}}]);