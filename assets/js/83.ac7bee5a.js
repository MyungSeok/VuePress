(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{354:function(t,e,r){"use strict";r.r(e);var a=r(1),v=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http-2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 2.0")]),t._v(" "),r("h2",{attrs:{id:"http1-의-요청-방식"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http1-의-요청-방식","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP1 의 요청 방식")]),t._v(" "),r("p",[t._v("HTTP1 에서는 앞에서 날렷던 요청의 응답을 받아야만 다음 요청이 처리될 수 있다.")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/A055.png",alt:"HTTP1.x 요청"}})]),t._v(" "),r("p",[t._v("이러한 현상을 해결 하기위해 지속 커넥션 (Persistent Connection) 이라는 개념과 HTTP 파이프 라이닝 (Pipelining) 이라는 개념이 들어갔다."),r("br"),t._v("\n커넥션을 재사용할 수 있고, "),r("code",[t._v("Request")]),t._v(" 를 미리 여러개 서버로 요청할 수 있게 되었다.")]),t._v(" "),r("p",[t._v("하지만 근본적으로 "),r("code",[t._v("Request")]),t._v(" 보낸 순서대로 "),r("code",[t._v("Response")]),t._v(" 를 받을수 있다는 점에서는 문제해결이 어려워 보인다.")]),t._v(" "),r("h2",{attrs:{id:"hol-head-of-line-blocking-의-문제점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hol-head-of-line-blocking-의-문제점","aria-hidden":"true"}},[t._v("#")]),t._v(" HOL (Head-of-Line Blocking) 의 문제점")]),t._v(" "),r("p",[t._v("만약 처음에 요청한 "),r("code",[t._v("Request")]),t._v(" 에 문제가 있어 "),r("code",[t._v("Response")]),t._v(" 가 늦어지면 2번째, 3번째에 요청한 "),r("code",[t._v("Request")]),t._v(" 의 "),r("code",[t._v("Response")]),t._v(" 도 늦어지는 문제점이 발생한다.")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/A056.png",alt:"HOL"}})]),t._v(" "),r("h2",{attrs:{id:"도메인-샤딩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#도메인-샤딩","aria-hidden":"true"}},[t._v("#")]),t._v(" 도메인 샤딩")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("HOL")])]),t._v(" 과 같은 문제들을 해결하기 위하여 리소스를 도메인 별로 분리해서 자원을 받는 방법"),r("br"),t._v("\n도메인별로 리소스를 병렬적으로 동시에 받을수 있다.")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/A057.png",alt:"도메인샤딩"}})]),t._v(" "),r("p",[t._v("하지만 하나의 도메인별 브라우저에서 받을수 있는 커넥션의 제한 이나 "),r("em",[r("strong",[t._v("DNS Lookup 과정과 TCP Handshake 과정에서 소요되는 시간")])]),t._v(" 때문에 오히려 부작용 발생 가능성이 있다.")]),t._v(" "),r("blockquote",[r("p",[t._v("브라우저당 도메인별 리소스 다운 제한은 보통 "),r("em",[r("strong",[t._v("6 ~ 8 개정도")])]),t._v(" 이며 "),r("code",[t._v("iframe")]),t._v(" 은 제외이다.")])]),t._v(" "),r("h2",{attrs:{id:"그-외-방법들"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#그-외-방법들","aria-hidden":"true"}},[t._v("#")]),t._v(" 그 외 방법들")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("HTTP 1.1")])]),t._v(" 에서는 다음과 같은 방법을 통해서도 성능개선을 시도하였다.")]),t._v(" "),r("ol",[r("li",[t._v("HTTP 요청 최소화\n"),r("ol",[r("li",[t._v("큰 이미지를 틍으로 요청후 CSS 로 잘게 잘라서 사용")]),t._v(" "),r("li",[t._v("BASE64 인코딩된 이미지를 요청해서 사용")])])]),t._v(" "),r("li",[t._v("소스 압축\n"),r("ol",[r("li",[t._v("HTML 의 gzip 압축 전송")]),t._v(" "),r("li",[t._v("JS, CSS 의 소스 압축")])])])]),t._v(" "),r("h2",{attrs:{id:"http-2-0-의-다른점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0-의-다른점","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 2.0 의 다른점")]),t._v(" "),r("h3",{attrs:{id:"바이너리로-인코딩된-데이터-전송"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#바이너리로-인코딩된-데이터-전송","aria-hidden":"true"}},[t._v("#")]),t._v(" 바이너리로 인코딩된 데이터 전송")]),t._v(" "),r("p",[t._v("기존의 텍스트 기반의 데이터를 바이너리 포맷의 데이터로 사용하게 되어"),r("br"),t._v("\n파싱이 더 빠르고 오류 발생 가능성이 적으며 하나의 플레인 데이터를 프레임 단위로 나눠서 관리 및 전송할 수 있다.")]),t._v(" "),r("p",[t._v("HTTP 2.0 은 Frame 과 Stream 이라는 개념이 적용 되었다.")]),t._v(" "),r("blockquote",[r("p",[t._v("HTTP 1.x 시절에는 요청 (Request) 과 응답 (Response) 으로 명확히 구분되었다.")])]),t._v(" "),r("ul",[r("li",[t._v("Frame\n"),r("ul",[r("li",[t._v("HTTP2 통신에서 데이터를 주고 받을수 있는 가장 작은 단위의 데이터")]),t._v(" "),r("li",[t._v("헤더 프레임, 데이터 프레임으로 구성")])])]),t._v(" "),r("li",[t._v("Stream\n"),r("ul",[r("li",[r("code",[t._v("Server")]),t._v(" 와 "),r("code",[t._v("Client")]),t._v(" 사이의 양방향으로 데이터를 주고 받는 한개 이상의 "),r("em",[r("strong",[t._v("메세지")])]),t._v(" 를 의미한다.")])])])]),t._v(" "),r("blockquote",[r("p",[t._v("스트림 = 메세지 + 메세지 + 메세지 + 메세지 + 메세지 + 메세지 + ..."),r("br"),t._v("\n메세지 = 프레임 + 프레임 + 프레임 + 프레임 + 프레임 + 프레임 + ...")])]),t._v(" "),r("h3",{attrs:{id:"우선순위-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#우선순위-설정","aria-hidden":"true"}},[t._v("#")]),t._v(" 우선순위 설정")]),t._v(" "),r("p",[t._v("상대적으로 중요한 리소스를 먼저 다운로드 받게 끔 전송 스트림의 우선순위 설정이 가능하다.")]),t._v(" "),r("h3",{attrs:{id:"server-push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-push","aria-hidden":"true"}},[t._v("#")]),t._v(" Server Push")]),t._v(" "),r("p",[t._v("요청한 클라이언트에게 서버가 알아서 필요한 리소스를 찾아서 내려준다.")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/A058.png",alt:"도메인샤딩"}})]),t._v(" "),r("p",[t._v("하지만 "),r("em",[r("strong",[t._v("브라우저가 캐싱된 데이터")])]),t._v(" 나 "),r("em",[r("strong",[t._v("필요없는 리소스 데이터")])]),t._v(" 는 자원의 낭비를 초래할 수 있다.")]),t._v(" "),r("h3",{attrs:{id:"헤더의-압축"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#헤더의-압축","aria-hidden":"true"}},[t._v("#")]),t._v(" 헤더의 압축")]),t._v(" "),r("p",[t._v("HTTP2 의 Header 는 "),r("em",[r("strong",[t._v("Header Table 로 관리")])]),t._v(" 되어 "),r("em",[r("strong",[t._v("이전 요청에서 중복으로 선언된 헤더는 인덱스 값만 전송하여 데이터를 최소화")])]),t._v(" 한다.")]),t._v(" "),r("h3",{attrs:{id:"적용-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#적용-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" 적용 방법")]),t._v(" "),r("ol",[r("li",[t._v("TSL / SSH 인증서 필요")]),t._v(" "),r("li",[t._v("웹서버의 세팅")])]),t._v(" "),r("h3",{attrs:{id:"고려사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#고려사항","aria-hidden":"true"}},[t._v("#")]),t._v(" 고려사항")]),t._v(" "),r("p",[t._v("일부 환경에 대해서는 효율이 떨어져 적용 환경에 따른 고려가 필요하다.")]),t._v(" "),r("h4",{attrs:{id:"http-2-0-효율이-낮은-경우"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0-효율이-낮은-경우","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 2.0 효율이 낮은 경우")]),t._v(" "),r("p",[t._v("HTTP 1.1 보다 성능적으로는 우수하지만 적용하였을때의 아래와 같은 상황일 경우 성능적 이점이 차이가 없는 경우도 있다.")]),t._v(" "),r("ul",[r("li",[t._v("HTTP 만 사용하는 경우\n"),r("ul",[r("li",[t._v("SSL 핸드셰이크 시간이 추가적으로 필요하여 추가 시간 소요")])])]),t._v(" "),r("li",[t._v("도메인이 많은 경우\n"),r("ul",[r("li",[t._v("도메인별로 동작하므로 도메인별로 커넥션이 필요로 하다 이에 따른 시간적 효율이 떨어진다.")])])]),t._v(" "),r("li",[t._v("HTTP 가 병목 현상이 없는 경우")]),t._v(" "),r("li",[t._v("RTT (Round-Trip Dealy Time : 메세지를 원격에 보내고 그것이 돌아오는 응답시간 - 레이턴시) 가 작은 경우\n"),r("ul",[r("li",[t._v("레이턴시가 큰 경우에만 더 큰 효율을 얻을수 있기 때문에 RTT 가 매우 작은 경우에는 이점이 없다.")])])]),t._v(" "),r("li",[t._v("페이지 내의 리소스가 적은 경우\n"),r("ul",[r("li",[t._v("6개 이하의 리소스를 가진다면 커넥션 재사용의 가치가 떨어진다.")])])])]),t._v(" "),r("p",[t._v("일부 클라이언트 브라우저에 의해서 지원 가능성이 상이하여 확인이 필요하다.")]),t._v(" "),r("h4",{attrs:{id:"지원-가능-브라우저"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원-가능-브라우저","aria-hidden":"true"}},[t._v("#")]),t._v(" 지원 가능 브라우저")]),t._v(" "),r("ul",[r("li",[t._v("IE11 (Win10 ver)")]),t._v(" "),r("li",[t._v("IE Edge")]),t._v(" "),r("li",[t._v("Chrome")]),t._v(" "),r("li",[t._v("IOS Chrome")]),t._v(" "),r("li",[t._v("Firefox")]),t._v(" "),r("li",[t._v("Opera")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://caniuse.com/#feat=http2",target:"_blank",rel:"noopener noreferrer"}},[t._v("기타 브라우저"),r("OutboundLink")],1)])]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://d2.naver.com/helloworld/140351",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://d2.naver.com/helloworld/140351"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"http://americanopeople.tistory.com/115",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://americanopeople.tistory.com/115"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.popit.kr/%EB%82%98%EB%A7%8C-%EB%AA%A8%EB%A5%B4%EA%B3%A0-%EC%9E%88%EB%8D%98-http2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.popit.kr/나만-모르고-있던-http2/"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://kinsta.com/learn/what-is-http2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kinsta.com/learn/what-is-http2/"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=v.exports}}]);