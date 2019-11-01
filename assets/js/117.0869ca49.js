(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{349:function(a,s,t){"use strict";t.r(s);var r=t(1),e=Object(r.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[a._v("#")]),a._v(" Options")]),a._v(" "),t("p",[a._v("Tomcat 시작 옵션들이 있는데 이에 대한 내용이다.")]),a._v(" "),t("h2",{attrs:{id:"startup-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#startup-sh","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("code",[a._v("startup.sh")])]),a._v(" "),t("p",[a._v("최종적으로는 "),t("code",[a._v("catalina.sh")]),a._v(" 스크립트를 호출하지만 시작시 사용가능한 쉘 환경변수들이 나온다.")]),a._v(" "),t("h2",{attrs:{id:"catalina-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#catalina-sh","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("code",[a._v("catalina.sh")])]),a._v(" "),t("ul",[t("li",[t("p",[t("code",[a._v("CATALINA_HOME")])]),a._v(" "),t("ul",[t("li",[a._v("Catalina 가 빌드된 디렉토리")]),a._v(" "),t("li",[a._v("여기서 빌드된 디렉토리는 설치한 홈 디렉토리를 말하기도 한다.")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("CATALINA_BASE")])]),a._v(" "),t("ul",[t("li",[a._v("Catalina 설치에 동적 영역을 해결하기 위한 기본 디렉토리")]),a._v(" "),t("li",[a._v("Multi Instance 설치할 때 이 공간이 사용된다.")]),a._v(" "),t("li",[a._v("별도로 지정하지 않으면 "),t("code",[a._v("CATALINA_HOME")]),a._v(" 이 사용된다.")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("CATALINA_OUT")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("stdout")]),a._v(" "),t("code",[a._v("stderr")]),a._v(" 를 어디로 보낼것인지에 대한 전체 경로를 지정")]),a._v(" "),t("li",[a._v("기본값은 "),t("code",[a._v("$CATALINA_BASE/logs/catalina.out")]),a._v(" 이 된다.")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("CATALINA_TMPDIR")])]),a._v(" "),t("ul",[t("li",[a._v("JVM (Java Virtual Machine) 이 사용할 임시디렉토리 (java.io.tmpdir) 위치를 지정한다.")]),a._v(" "),t("li",[a._v("기본값은 "),t("code",[a._v("$CATALINA_BASE/temp")]),a._v(" 이 된다.")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("CATALINA_OPTS")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("start")]),a._v(" "),t("code",[a._v("run")]),a._v(" "),t("code",[a._v("debug")]),a._v(" 명령이 실행될 때 사용되는 Java 런타임 옵션이다.")]),a._v(" "),t("li",[a._v("JAVA_OPTS 에 포함되는 옵션이 아닌것이 여기에 포함된다.")]),a._v(" "),t("li",[a._v("TOMCAT 자체적으로만 사용되는 내부 옵션만 포함되며 중지 프로세스 혹은 버전 명령등으로 사용해서는 안된다.")])])])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 기동시에만 사용 ##")]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -Xms2048m -Xmx2048m -XX:MaxPermSize=256m"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -verbose:gc"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(" -Xloggc:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_BASE}")]),a._v("/logs/gc_"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y%m%d%H"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('.log"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -XX:+UseParallelGC"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -XX:+UseParallelOldGC"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -XX:+UseAdaptiveSizePolicy"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -XX:+PrintGCDetails"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -XX:+PrintGCTimeStamps"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -XX:+DisableExplicitGC"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -XX:+HeapDumpOnOutOfMemoryError"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(" -XX:HeapDumpPath="),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_BASE}")]),a._v('/logs"')]),a._v("\nCATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CATALINA_OPTS}")]),a._v(' -Djava.security.egd=file:/dev/./urandom"')]),a._v("\n")])])]),t("ul",[t("li",[t("p",[t("code",[a._v("JAVA_HOME")])]),a._v(" "),t("ul",[t("li",[a._v("JDK 가 설치된 위치")]),a._v(" "),t("li",[a._v("debug 인자와 실행할 때 필요하다.")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("JRE_HOME")])]),a._v(" "),t("ul",[t("li",[a._v("JRE 를 설치한 위치")]),a._v(" "),t("li",[a._v("기본값은 "),t("code",[a._v("JAVA_HOME")]),a._v(" 이며 별도 지정이 가능하다.")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("JAVA_OPTS")])]),a._v(" "),t("ul",[t("li",[a._v("명령이 실행될때 사용되는 Java 런타임 옵션")]),a._v(" "),t("li",[t("code",[a._v("CATALINA_OPTS")]),a._v(" 모든 옵션이 아닌것이 여기에 포함된다.")]),a._v(" "),t("li",[a._v("Tomcat 에 의해서만 사용되어지며 중지 프로세스 혹은 버전 명령에도 사용된다.")]),a._v(" "),t("li",[a._v("대부분의 옵션들은 "),t("code",[a._v("CATALINA_OPTS")]),a._v(" 에 있어야 한다.")])])])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 시작/중지에 모두 사용 ##")]),a._v("\nJAVA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_OPTS}")]),a._v(' -server"')]),a._v("\nJAVA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_OPTS}")]),a._v(" -DjvmRoute="),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JVM_ROUTE}")]),a._v('"')]),a._v("\nJAVA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_OPTS}")]),a._v(" -Dport.http="),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HTTP_PORT}")]),a._v('"')]),a._v("\nJAVA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_OPTS}")]),a._v(" -Dport.https="),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HTTPS_PORT}")]),a._v('"')]),a._v("\nJAVA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_OPTS}")]),a._v(" -Dport.ajp="),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${AJP_PORT}")]),a._v('"')]),a._v("\nJAVA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_OPTS}")]),a._v(" -Dport.shutdown="),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${SHUTDOWN_PORT}")]),a._v('"')]),a._v("\n")])])]),t("ul",[t("li",[t("p",[t("code",[a._v("CATALINA_PID")])]),a._v(" "),t("ul",[t("li",[a._v("catalina 시작 Java 프로세스의 PID 를 가지고 있는 파일 경로를 의미한다.")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("LOGGING_CONFIG")])]),a._v(" "),t("ul",[t("li",[a._v("Tomcat 로깅 설정 파일을 재정의한다.")])])])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("LOGGING_CONFIG"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Djava.util.logging.config.file='),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CATALINA_BASE")]),a._v('/config/logging/properties"')]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("LOGGING_MANAGER")]),a._v(" "),t("ul",[t("li",[a._v("Tomcat 로깅 매니저 설정을 재정의 한다.")])])])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("LOGGING_MANAGER"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://linux.systemv.pe.kr/tomcat-%EC%8B%9C%EC%9E%91-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%98%B5%EC%85%98%EB%93%A4/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://linux.systemv.pe.kr/tomcat-시작-스크립트-옵션들/"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);