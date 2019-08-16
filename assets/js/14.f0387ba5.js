(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{341:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"etc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc","aria-hidden":"true"}},[t._v("#")]),t._v(" Etc")]),t._v(" "),s("h2",{attrs:{id:"sql-injection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-injection","aria-hidden":"true"}},[t._v("#")]),t._v(" SQL Injection")]),t._v(" "),s("p",[t._v("코드 인젝션의 한 기법으로 클라이언트의 입력값을 조작하여 서버의 데이터베이스를 공격하는 방식을 말한다.")]),t._v(" "),s("h3",{attrs:{id:"방어-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#방어-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" 방어 방법")]),t._v(" "),s("ul",[s("li",[t._v("권한으로 제한하는 방법\n"),s("ul",[s("li",[t._v("Query String 을 실행을 권한에 따라 제한할 수 있도록 한다.")])])]),t._v(" "),s("li",[t._v("입력값 검증\n"),s("ul",[s("li",[t._v("정규식 혹은 유효값의 vaildation 확인을 한다.")]),t._v(" "),s("li",[t._v("특수문자 혹은 SQL 예약어 등을 검증하여 차단한다.")])])]),t._v(" "),s("li",[t._v("최소 권한 유저로 DB 명령 제한")])]),t._v(" "),s("p",[t._v("간단히 위와 같으며 대표적으로는 저장 프로시저를 사용하는 방법이 있다.")]),t._v(" "),s("h3",{attrs:{id:"prepared-statement-저장-프로시저-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepared-statement-저장-프로시저-사용","aria-hidden":"true"}},[t._v("#")]),t._v(" Prepared Statement (저장 프로시저) 사용")]),t._v(" "),s("p",[t._v("현존하는 가장 좋은 방법으로 사용전에 일부 컴파일 되어 실행된다."),s("br"),t._v("\nQuery 에 미리 형식을 지정하는 것으로 지정된 형식의 Query 형식이 아니면 실행되지 않는다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" uId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM user_info WHERE uId= ?"')]),t._v("\n\n  stmt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  stmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResultSet")]),t._v(" rs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netxt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* statement */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://blog.plura.io/?p=6056",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.plura.io/?p=6056"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"샤딩-sharding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#샤딩-sharding","aria-hidden":"true"}},[t._v("#")]),t._v(" 샤딩 (Sharding)")]),t._v(" "),s("p",[t._v("같은 테이블 스키마를 가진 데이터를 다수의 데이터 베이스에 분산하여 저장하는 방법을 의미")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://nesoy.github.io/articles/2018-05/Database-Shard",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nesoy.github.io/articles/2018-05/Database-Shard"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);