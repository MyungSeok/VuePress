(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{336:function(t,r,a){"use strict";a.r(r);var e=a(1),s=Object(e.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"graph-ql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph-ql","aria-hidden":"true"}},[t._v("#")]),t._v(" Graph QL")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A086.png",alt:"Graph QL"}})]),t._v(" "),a("p",[t._v("Graph QL 은 Server API 를 구성하기 위해 "),a("strong",[t._v("Facebook 에서 만든 Query Language")]),t._v(" 이다.")]),t._v(" "),a("p",[t._v("기존에 일반적으로 사용중인 RESTful API 와 유사하지만 조금더 유연하게 운영가능하며 하나의 API 로 다양한 정보들을 필터링 해서 데이터를 제공 받을수 있는 질의어를 제공한다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A087.png",alt:"Graph QL 의 파이프라인"}})]),t._v(" "),a("h2",{attrs:{id:"restful-api-와-차이점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-api-와-차이점","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTful API 와 차이점")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A088.png",alt:"Graph QL Stack"}})]),t._v(" "),a("p",[t._v("RESTful API 와의 차이점은 대체적으로 아래 두가지로 압축된다.")]),t._v(" "),a("ul",[a("li",[t._v("Graph QL API 는 주로 "),a("strong",[t._v("하나의 EndPoint 만을 사용")]),t._v("한다.")]),t._v(" "),a("li",[t._v("Graph QL API 는 요청할때 사용한 Query 문 에 따라 응답 구조가 달라진다.")])]),t._v(" "),a("p",[t._v("이는 위 두가지 특징에 따라 아래와 같이 "),a("strong",[t._v("장점")]),t._v("을 가질수 있다.")]),t._v(" "),a("ul",[a("li",[t._v("HTTP 요청 횟수를 줄일 수 있다.\n"),a("ul",[a("li",[t._v("RESTful API 는 각각의 Resource 종류별로 요청을 해야하고, 필요한 Resource 에 따라 요청 횟수가 증가한다.")])])]),t._v(" "),a("li",[t._v("HTTP 응답의 Size 를 줄일 수 있다.\n"),a("ul",[a("li",[t._v("RESTful 은 응답의 형태가 정해져 있고, 따라서 필요한 정보만 부분적으로 요청하는 것이 힘들다.")]),t._v(" "),a("li",[t._v("Graph QL 은 원하는 대로 정보를 요청하는 것이 가능하다.")])])])]),t._v(" "),a("p",[t._v("아래 그림과 같이 Graph QL 을 사용하여 여러번의 네트워크 호출 없이 한번의 네트워크 호출로 처리할 수 있다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A089.png",alt:"Graph QL Mobile Network"}})]),t._v(" "),a("p",[t._v("반면 위와 같이 다양한 요청에 유연하게 반응하기 어려울때는 아래와 같은 단점도 가질수 있다.")]),t._v(" "),a("ul",[a("li",[t._v("File 전송등 Text 만으로 하기 힘든 내용들을 처리하기 복잡하다.")]),t._v(" "),a("li",[t._v("고정된 요청과 응답만 필요할 경우에는 Query 로 인해 요청의 크기가 RESTful API 보다 더 커진다.")]),t._v(" "),a("li",[t._v("재귀적인 Query 가 불가능 하다.")])]),t._v(" "),a("blockquote",[a("p",[t._v("File 전송이 불가능하진 않지만 일반적인 Graph QL API 장점을 얻을수 없으며 다른 3rd Party Service 에 의존해야 하는 문제가 발생될 수도 있다.")])]),t._v(" "),a("h2",{attrs:{id:"graph-ql-vs-restful"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph-ql-vs-restful","aria-hidden":"true"}},[t._v("#")]),t._v(" Graph QL vs RESTful")]),t._v(" "),a("p",[t._v("Graph QL 과 RESTful 의 선택기준은 쉽게 아래와 같은 기준으로 선택하면 된다.")]),t._v(" "),a("ul",[a("li",[t._v("Graph QL\n"),a("ul",[a("li",[t._v("서로 다른 유형의 다양한 요청들에 대해 응답할 수 있어야 할 때")]),t._v(" "),a("li",[t._v("대부분의 요청이 CRUD 에 해당될 때")])])]),t._v(" "),a("li",[t._v("RESTful\n"),a("ul",[a("li",[t._v("HTTP/HTTPS 에 의한 Caching 이 반드시 필요할 때")]),t._v(" "),a("li",[t._v("File 전송과 같은 단순한 Text 기반의 정보들로 처리가 힘들때")]),t._v(" "),a("li",[t._v("요청의 구조가 단순하여 유연함이 불 필요할 때")])])])]),t._v(" "),a("p",[t._v("위 기준과 같이 각 사용목적에 맞게 끔 "),a("strong",[t._v("Best Practice")]),t._v(" 의 기준으로 선택하는것이 최선이다.")]),t._v(" "),a("h2",{attrs:{id:"graph-ql-의-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph-ql-의-구조","aria-hidden":"true"}},[t._v("#")]),t._v(" Graph QL 의 구조")]),t._v(" "),a("h3",{attrs:{id:"query-mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-mutation","aria-hidden":"true"}},[t._v("#")]),t._v(" Query/Mutation")]),t._v(" "),a("p",[t._v("Graph QL 의 쿼리와 뮤테이션 및 응답 구조는 상당히 직관적으로"),a("br"),t._v("\n요청하는 질의문과 응답내용의 구조는 거의 일치한다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A090.png",alt:"Graph QL 쿼리/뮤테이션"}})]),t._v(" "),a("ul",[a("li",[t._v("쿼리 -> Read")]),t._v(" "),a("li",[t._v("뮤테이션 -> Create/Update/Delete")])]),t._v(" "),a("h3",{attrs:{id:"schema-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema-type","aria-hidden":"true"}},[t._v("#")]),t._v(" Schema/Type")]),t._v(" "),a("p",[a("strong",[t._v("Object Type & Field")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Character "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  appearsIn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Episode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Object Type\n"),a("ul",[a("li",[t._v("Character")])])]),t._v(" "),a("li",[t._v("Field\n"),a("ul",[a("li",[t._v("name, appearsIn")])])]),t._v(" "),a("li",[t._v("Scalar\n"),a("ul",[a("li",[t._v("String, ID, int ...")])])]),t._v(" "),a("li",[t._v("느낌표 (!)\n"),a("ul",[a("li",[t._v("필수값 (non-nullable)")])])]),t._v(" "),a("li",[t._v("대괄호 ([,])\n"),a("ul",[a("li",[t._v("배열 (array)")])])])]),t._v(" "),a("p",[a("strong",[t._v("Resolver")])]),t._v(" "),a("p",[a("strong",[t._v("Introspection")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://graphql-kr.github.io/learn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://graphql-kr.github.io/learn/"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://velopert.com/2318",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://velopert.com/2318"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://tech.kakao.com/2019/08/01/graphql-basic/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tech.kakao.com/2019/08/01/graphql-basic/"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/"),a("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=s.exports}}]);