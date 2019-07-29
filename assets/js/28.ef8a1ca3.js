(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{422:function(a,t,r){"use strict";r.r(t);var s=r(1),e=Object(s.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"boot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boot","aria-hidden":"true"}},[a._v("#")]),a._v(" Boot")]),a._v(" "),r("h2",{attrs:{id:"spring-boot-기동"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-기동","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring Boot 기동")]),a._v(" "),r("h3",{attrs:{id:"linux-deploy-shell-script"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-deploy-shell-script","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux Deploy Shell Script")]),a._v(" "),r("p",[a._v("리눅스 환경에서 쉽게 관리를 위해 "),r("em",[r("strong",[a._v("Shell Script")])]),a._v(" 형태로 만들어 두어 관리한다.")]),a._v(" "),r("h4",{attrs:{id:"start-sh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-sh","aria-hidden":"true"}},[a._v("#")]),a._v(" start.sh")]),a._v(" "),r("p",[a._v("앱을 시작하고 해당 "),r("em",[r("strong",[a._v("PID")])]),a._v(" 를 파일에 저장한다.")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\njava -jar myapp.jar "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$!")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ./pid.file "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),r("h4",{attrs:{id:"stop-sh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stop-sh","aria-hidden":"true"}},[a._v("#")]),a._v(" stop.sh")]),a._v(" "),r("p",[a._v("저장된 "),r("em",[r("strong",[a._v("PID")])]),a._v(" 를 사용하여 앱을 중지 한다.")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" ./pid.file"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://code.i-harness.com/ko/q/195154c",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://code.i-harness.com/ko/q/195154c"),r("OutboundLink")],1)])]),a._v(" "),r("h4",{attrs:{id:"gradle-로-spring-boot-기동"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gradle-로-spring-boot-기동","aria-hidden":"true"}},[a._v("#")]),a._v(" Gradle 로 Spring Boot 기동")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gradle bootRun")]),a._v("\n")])])]),r("h4",{attrs:{id:"빌드-파일-기동"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#빌드-파일-기동","aria-hidden":"true"}},[a._v("#")]),a._v(" 빌드 파일 기동")]),a._v(" "),r("p",[a._v("기본 기동")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ java -jar ./sq_wf-0.0.1-SNAPSHOT.jar\n")])])]),r("p",[a._v("포트 "),r("code",[a._v("8888")]),a._v(" 변경하여 기동")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ java -jar -Dserver.port"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("8888 ./sq_wf-0.0.1-SNAPSHOT.jar\n")])])]),r("p",[r("code",[a._v("spring.profiles.active")]),a._v(" 값 지정하여 기동")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ java -jar -Dserver.port"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("8888 -Dspring.profiles.active"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("release ./sq_wf-0.0.1-SNAPSHOT.jar\n")])])]),r("h2",{attrs:{id:"히카리-hikari-cp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#히카리-hikari-cp","aria-hidden":"true"}},[a._v("#")]),a._v(" 히카리 (Hikari CP)")]),a._v(" "),r("p",[a._v("Spring Boot 2.0 부터 지원 하는 JDBC Connection Pool 이다.")]),a._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://jeong-pro.tistory.com/162",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://jeong-pro.tistory.com/162"),r("OutboundLink")],1),r("br"),a._v(" "),r("a",{attrs:{href:"http://netframework.tistory.com/entry/HikariCP-%EC%86%8C%EA%B0%9C",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://netframework.tistory.com/entry/HikariCP-소개"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"타임-리프-thymeleaf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#타임-리프-thymeleaf","aria-hidden":"true"}},[a._v("#")]),a._v(" 타임 리프 (Thymeleaf)")]),a._v(" "),r("p",[a._v("스프링 부터에서 사용 가능한 뷰 (View) 들은 아래와 같은 종류가 있다.")]),a._v(" "),r("ul",[r("li",[a._v("FreeMarker")]),a._v(" "),r("li",[a._v("Groovy")]),a._v(" "),r("li",[a._v("Thymeleaf")]),a._v(" "),r("li",[a._v("Velocity")]),a._v(" "),r("li",[a._v("JSP")])]),a._v(" "),r("p",[a._v("이들 중에 "),r("code",[a._v("Thymeleaf")]),a._v(" 에 관해서 알아보도록 하겠다.")]),a._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://millky.com/@origoni/post/1144",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://millky.com/@origoni/post/1144"),r("OutboundLink")],1),r("br"),a._v(" "),r("a",{attrs:{href:"https://github.com/ihoneymon/spring-boot-orm-learn/blob/master/THYMELEAF_TEMPLATE_ENGINE.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/ihoneymon/spring-boot-orm-learn/blob/master/THYMELEAF_TEMPLATE_ENGINE.md"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=e.exports}}]);