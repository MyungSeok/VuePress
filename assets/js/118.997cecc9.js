(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{317:function(a,s,t){"use strict";t.r(s);var e=t(0),v=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("h2",{attrs:{id:"nslookup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nslookup"}},[a._v("#")]),a._v(" nslookup")]),a._v(" "),t("p",[a._v("nslookup 명령어는 _"),t("strong",[a._v("네임 서버 관련 조회")]),a._v("_를 할 수 있는 명령어이다."),t("br"),a._v(" "),t("em",[t("strong",[a._v("서버의 네트워크가 살아있는지 확인하는 용도")])]),a._v(" 로 사용한다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nslookup")]),a._v(" IP\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nslookup")]),a._v(" DOMAIN\n")])])]),t("h2",{attrs:{id:"dig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dig"}},[a._v("#")]),a._v(" dig")]),a._v(" "),t("p",[a._v("DIG (Domain Information Groper) 는 nslookup 과 동일한 기능이지만 더욱 상세한 출력이 가능합니다.")]),a._v(" "),t("h3",{attrs:{id:"특정-도메인-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#특정-도메인-확인"}},[a._v("#")]),a._v(" 특정 도메인 확인")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dig")]),a._v(" google.com\n")])])]),t("h3",{attrs:{id:"특정-네임서버를-통한-도메인-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#특정-네임서버를-통한-도메인-확인"}},[a._v("#")]),a._v(" 특정 네임서버를 통한 도메인 확인")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dig")]),a._v(" @8.8.8.8 google.com\n")])])]),t("h3",{attrs:{id:"도메인-추적-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#도메인-추적-확인"}},[a._v("#")]),a._v(" 도메인 추적 확인")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dig")]),a._v(" google.com +trace\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.codns.com/b/B05-110",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.codns.com/b/B05-110"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"telnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#telnet"}},[a._v("#")]),a._v(" telnet")]),a._v(" "),t("p",[t("em",[t("strong",[a._v("서버 네트워크가 살아있는지 확인하는 용도로 많이 사용")])]),a._v(" 한다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ telnet IP "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ telnet DOMAIN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[a._v("#")]),a._v(" service")]),a._v(" "),t("p",[a._v("리눅스 상에 서비스로 등록되어 있는 목록을 가져온다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# service --status-all")]),a._v("\n")])])]),t("p",[a._v("리눅스 상에 서비스를 기동 혹은 중지 시킨다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# service SERVICE_NAME start")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# service SERVICE_NAME restart")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# service SERVICE_NAME stop")]),a._v("\n")])])]),t("h2",{attrs:{id:"netstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[a._v("#")]),a._v(" netstat")]),a._v(" "),t("p",[a._v("포트별 서비스 목록")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# netstat -atlpvn")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# netstat -tnlp")]),a._v("\n")])])]),t("h3",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[a._v("#")]),a._v(" State")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("LISTENING")]),a._v(" "),t("ul",[t("li",[a._v("서비스 대기중")])])]),a._v(" "),t("li",[t("strong",[a._v("ESTABLISHED")]),a._v(" "),t("ul",[t("li",[a._v("다른 컴퓨터와 연결된 상태")])])]),a._v(" "),t("li",[t("strong",[a._v("CLOSED")]),a._v(" "),t("ul",[t("li",[a._v("연결이 종료되어 있는 상태")])])]),a._v(" "),t("li",[t("strong",[a._v("TIME WAIT")]),a._v(" "),t("ul",[t("li",[a._v("연결은 종료 되었지만 당분간은 소켓은 열어놓은 상태")])])])]),a._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[a._v("#")]),a._v(" Options")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-a")]),a._v(" "),t("code",[a._v("--all")]),a._v(" "),t("ul",[t("li",[a._v("모든 소켓을 보기")])])]),a._v(" "),t("li",[t("code",[a._v("-c")]),a._v(" "),t("code",[a._v("--continuous")]),a._v(" "),t("ul",[t("li",[a._v("현재의 실행 명령을 매 초마다 실행")])])]),a._v(" "),t("li",[t("code",[a._v("-e")]),a._v(" "),t("code",[a._v("--extend")]),a._v(" "),t("ul",[t("li",[a._v("확장 정보 추가")])])]),a._v(" "),t("li",[t("code",[a._v("-g")]),a._v(" "),t("code",[a._v("--groups")]),a._v(" "),t("ul",[t("li",[a._v("멀티캐스트에 대한 그룹별 정보를 보여줌 (IPv4/IPv6)")])])]),a._v(" "),t("li",[t("code",[a._v("-i")]),a._v(" "),t("code",[a._v("--interface")]),a._v(" "),t("ul",[t("li",[a._v("인터페이스별 통계값")])])]),a._v(" "),t("li",[t("code",[a._v("-n")]),a._v(" "),t("code",[a._v("--numberic")]),a._v(" "),t("ul",[t("li",[a._v("도메인을 주소를 읽지 않고 숫자로 출력한다.")]),a._v(" "),t("li",[a._v("아래 3개의 명령어가 합쳐진 형태이다.\n"),t("ul",[t("li",[t("code",[a._v("--numberic-hosts")]),a._v(" : 호스트 부분을 IP 로 출력")]),a._v(" "),t("li",[t("code",[a._v("--numberic-ports")]),a._v(" : 포트 부분을 숫자로 출력")]),a._v(" "),t("li",[t("code",[a._v("--numberic-users")]),a._v(" : 유저 부분을 숫자로 출력 (UID)")])])])])]),a._v(" "),t("li",[t("code",[a._v("-o")]),a._v(" "),t("code",[a._v("--timers")]),a._v(" "),t("ul",[t("li",[a._v("연결 대기 시간 표기")])])]),a._v(" "),t("li",[t("code",[a._v("-p")]),a._v(" "),t("code",[a._v("--program")]),a._v(" "),t("ul",[t("li",[a._v("PID 와 사용중인 프로그램명을 표시")])])]),a._v(" "),t("li",[t("code",[a._v("-r")]),a._v(" "),t("code",[a._v("--route")]),a._v(" "),t("ul",[t("li",[a._v("라우팅 테이블 보기")])])]),a._v(" "),t("li",[t("code",[a._v("-s")]),a._v(" "),t("code",[a._v("--statistics")]),a._v(" "),t("ul",[t("li",[a._v("프로토콜 요약 정보")])])]),a._v(" "),t("li",[t("code",[a._v("-t")]),a._v(" "),t("code",[a._v("--tcp")]),a._v(" "),t("ul",[t("li",[a._v("TCP 프로토콜 보기")])])]),a._v(" "),t("li",[t("code",[a._v("-u")]),a._v(" "),t("code",[a._v("--udp")]),a._v(" "),t("ul",[t("li",[a._v("UDP 프로토콜 보기")])])]),a._v(" "),t("li",[t("code",[a._v("-v")]),a._v(" "),t("ul",[t("li",[a._v("버전 보기")])])]),a._v(" "),t("li",[t("code",[a._v("-w")]),a._v(" "),t("code",[a._v("--row")]),a._v(" "),t("ul",[t("li",[a._v("RAW 프로토콜 보기")])])]),a._v(" "),t("li",[t("code",[a._v("-A")]),a._v(" "),t("ul",[t("li",[a._v("프로토콜별 보기")])])]),a._v(" "),t("li",[t("code",[a._v("-M")]),a._v(" "),t("ul",[t("li",[a._v("마스커 레이딩 정보 표시")])])])]),a._v(" "),t("h2",{attrs:{id:"crontab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crontab"}},[a._v("#")]),a._v(" Crontab")]),a._v(" "),t("h3",{attrs:{id:"cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[a._v("#")]),a._v(" CLI")]),a._v(" "),t("p",[a._v("에디터 열기")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -e\n")])])]),t("p",[a._v("작업 목록")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -l\n")])])]),t("p",[a._v("작업 삭제")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -r\n")])])]),t("h3",{attrs:{id:"주기-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#주기-설정"}},[a._v("#")]),a._v(" 주기 설정")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("*　　　　　　*　　　　　　*　　　　　　*　　　　　　*\n분"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("-59"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("　　시간"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("-23"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("　　일"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("-31"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("　　월"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("-12"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("　　　요일"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("-7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("초단위로 실행할 경우 "),t("code",[a._v("sleep")]),a._v(" 명령어 를 이용하면 된다.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("참고자료")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://jdm.kr/blog/2",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://jdm.kr/blog/2"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);