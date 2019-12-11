(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{381:function(t,e,r){"use strict";r.r(e);var a=r(1),v=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"rest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest","aria-hidden":"true"}},[t._v("#")]),t._v(" REST")]),t._v(" "),r("p",[t._v("REST (Representational State Transfer) 는 자원을 이름으로 구분하여 해당 "),r("em",[r("strong",[t._v("자원의 상태 정보를 주고 받는 모든것을 의미")])]),t._v(" 한다.")]),t._v(" "),r("h2",{attrs:{id:"구성요소"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구성요소","aria-hidden":"true"}},[t._v("#")]),t._v(" 구성요소")]),t._v(" "),r("ul",[r("li",[t._v("자원\n"),r("ul",[r("li",[t._v("모든 자원은 고유한 ID 가 존재하며 이 자원은 Server 에 존재한다.")]),t._v(" "),r("li",[t._v("Client 는 URI 를 이용하여 자원을 지정하고 해당 자원의 상태정보에 대한 조작을 Server 에 요청 하게 된다.")])])]),t._v(" "),r("li",[t._v("행위\n"),r("ul",[r("li",[t._v("HTTP Method 이다.")]),t._v(" "),r("li",[t._v("GET, POST, PUT, DELETE 와 같은 메서드를 제공하며 각각의 의미와 역활이 다르다.")])])]),t._v(" "),r("li",[t._v("표현\n"),r("ul",[r("li",[t._v("Client 가 자원의 상태정보 조작을 요청하면 Server 는 이에 대한 응답을 보내게 된다.")]),t._v(" "),r("li",[t._v("대부분은 JSON 및 XML 를 통해 데이터를 주고 받는것이 일반적이다.")])])])]),t._v(" "),r("h2",{attrs:{id:"특징"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#특징","aria-hidden":"true"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),r("h3",{attrs:{id:"_1-유니폼-인터페이스-uniform-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-유니폼-인터페이스-uniform-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 유니폼 인터페이스 (Uniform Interface)")]),t._v(" "),r("ul",[r("li",[t._v("지정된 URI 인터페이스에서 자원 제공한다.")]),t._v(" "),r("li",[t._v("표준 HTTP 프로토콜을 따르는 플랫폼에서 사용 가능하다.")])]),t._v(" "),r("h3",{attrs:{id:"_2-무상태성-stateless"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-무상태성-stateless","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 무상태성 (Stateless)")]),t._v(" "),r("ul",[r("li",[t._v("상태를 갖지 않아 상태정보 (세션, 쿠키) 를 따로 저장하거나 관리할 필요가 없다.")]),t._v(" "),r("li",[t._v("단순히 API 서버는 들어오는 요청만 처리하여 구현이 단순해지고 서비스의 자유도가 높아진다.")])]),t._v(" "),r("h3",{attrs:{id:"_3-캐시-가능-cacheable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-캐시-가능-cacheable","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 캐시 가능 (Cacheable)")]),t._v(" "),r("ul",[r("li",[t._v("표준 HTTP 프로토콜을 그대로 사용하므로 웹에서 사용하므로 해당 인프라를 그대로 활용할 수 있다.")]),t._v(" "),r("li",[t._v("캐시 사용으로 인한 응답이 빨라지고 REST Server 트랜젝션이 발생되지 않기 때문에 전체적인 응답시간 및 성능, 자원의 효울을 향상 시킬수 있다.")])]),t._v(" "),r("h3",{attrs:{id:"_4-자체-표현-구조-self-descriptiveness"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-자체-표현-구조-self-descriptiveness","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 자체 표현 구조 (Self-descriptiveness)")]),t._v(" "),r("ul",[r("li",[t._v("REST API 의 메세지만 보고도 이를 쉽게 이해할 수 있는 자체 표현 구조로 되어 있다는 것 이다.")])]),t._v(" "),r("h3",{attrs:{id:"_5-clinet-server-구조"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-clinet-server-구조","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. Clinet / Server 구조")]),t._v(" "),r("ul",[r("li",[t._v("자원이 있는 쪽은 Server, 자원을 요청하는 쪽은 Client 로 구성된다.\n"),r("ul",[r("li",[t._v("Server : API 를 제공하고 비지니스 로직 처리 및 저장을 책임진다.")]),t._v(" "),r("li",[t._v("Client : 사용자 인증이나 context (세션, 로그인 정보) 등을 직점 관리하고 책임진다.")])])]),t._v(" "),r("li",[t._v("서로간의 의존성이 줄어든다.")])]),t._v(" "),r("h3",{attrs:{id:"_6-계층형-시스템-layerd-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-계층형-시스템-layerd-system","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 계층형 시스템 (Layerd System)")]),t._v(" "),r("ul",[r("li",[t._v("Client 는 Server 만 호출한다.")]),t._v(" "),r("li",[t._v("API Server 는 순수 비지니스 로직을 수행하고 앞단에 보안, 로드밸런싱, 암호화, 인증 등의 추가하여 구조적 유연성을 가져간다.")]),t._v(" "),r("li",[t._v("프록시 혹은 게이트웨이와 같은 네트워크 기반의 중간 매체를 사용할 수 있다.")])]),t._v(" "),r("h2",{attrs:{id:"rest-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-api","aria-hidden":"true"}},[t._v("#")]),t._v(" REST API")]),t._v(" "),r("p",[t._v("REST 기반의 서비스 API 로 구현한 것 이다.")]),t._v(" "),r("h3",{attrs:{id:"설계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설계","aria-hidden":"true"}},[t._v("#")]),t._v(" 설계")]),t._v(" "),r("ul",[r("li",[t._v("URI 는 정보의 자원을 표현해야 한다.\n"),r("ul",[r("li",[t._v("구분자 ( / ) 는 계층관계를 나타내는데 사용")]),t._v(" "),r("li",[t._v("URI 마지막 문자로 슬래시 ( / ) 를 사용하지 않는다.")]),t._v(" "),r("li",[t._v("하이픈 ( - ) 은 URI 가독성을 높이는데 사용")]),t._v(" "),r("li",[t._v("언더바 ( _ ) 는 사용하지 않는다.")]),t._v(" "),r("li",[t._v("경로 정보는 소문자로 한다.")]),t._v(" "),r("li",[t._v("파일 확장자는 포함하지 않는다.")])])]),t._v(" "),r("li",[t._v("Method 는 의미와 역활이 맞아야 한다.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Method")]),t._v(" "),r("th",[t._v("역활")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[t._v("리소스를 요청한다.")])]),t._v(" "),r("tr",[r("td",[t._v("POST")]),t._v(" "),r("td",[t._v("리소스를 생성한다.")])]),t._v(" "),r("tr",[r("td",[t._v("PUT")]),t._v(" "),r("td",[t._v("리소스를 수정한다.")])]),t._v(" "),r("tr",[r("td",[t._v("DELETE")]),t._v(" "),r("td",[t._v("리소스를 삭제한다.")])])])]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://meetup.toast.com/posts/92",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://meetup.toast.com/posts/92"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=v.exports}}]);