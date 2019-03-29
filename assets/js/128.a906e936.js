(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{404:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_01-redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-redis","aria-hidden":"true"}},[t._v("#")]),t._v(" 01.Redis")]),t._v(" "),s("p",[t._v("인메모리 기반의 데이터 베이스")]),t._v(" "),s("h2",{attrs:{id:"설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치하기","aria-hidden":"true"}},[t._v("#")]),t._v(" 설치하기")]),t._v(" "),s("h3",{attrs:{id:"_1-의존-라이브러리-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-의존-라이브러리-설치","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 의존 라이브러리 설치")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential tcl\n")])])]),s("h4",{attrs:{id:"필수-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#필수-패키지","aria-hidden":"true"}},[t._v("#")]),t._v(" 필수 패키지")]),t._v(" "),s("ul",[s("li",[t._v("build-essential\n"),s("ul",[s("li",[t._v("C, C++ 컴파일 환경을 구성 가능하게 한다.")]),t._v(" "),s("li",[t._v("gcc, make 를 한번에 설치한다.")])])]),t._v(" "),s("li",[t._v("tcl\n"),s("ul",[s("li",[t._v("Tool Command Language")]),t._v(" "),s("li",[t._v("설치한 응용 프로그램을 확장하는 것을 돕는 프로그램 언어")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-소스-다운로드-및-압축-해제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-소스-다운로드-및-압축-해제","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 소스 다운로드 및 압축 해제")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /tmp/src\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /tmp/src\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O http://download.redis.io/redis-stable.tar.gz\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvfz redis-stable.tar.gz\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" redsi-stable\n")])])]),s("h3",{attrs:{id:"_3-컴파일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-컴파일","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 컴파일")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 빌드")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 생략 가능")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 명령어 설치")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-실행","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 실행")]),t._v(" "),s("h4",{attrs:{id:"systemctl-명령어"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-명령어","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("systemctl")]),t._v(" 명령어")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start redis\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status redis\n")])])]),s("h4",{attrs:{id:"systemctl-안될-때"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-안될-때","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("systemctl")]),t._v(" 안될 때")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서버기동")]),t._v("\n$ redis-server\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redis 접속 (새 터미널로)")]),t._v("\n$ redis-cli\n")])])]),s("h4",{attrs:{id:"클라이언트-접속-툴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트-접속-툴","aria-hidden":"true"}},[t._v("#")]),t._v(" 클라이언트 접속 툴")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/luin/medis?fbclid=IwAR3o5CCwylxYkSQGbxoqkI35pqGl41fx9v6nBJLeKbnXoU7CvzSW9j_WvKU",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/luin/medis?fbclid=IwAR3o5CCwylxYkSQGbxoqkI35pqGl41fx9v6nBJLeKbnXoU7CvzSW9j_WvKU"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("클라이언트 접속 툴 사용시 외부에서 접속 불가 할 수 있으니 "),s("code",[t._v("protected-mode")]),t._v(" 를 해제하고 사용하도록 한다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ redis-cli\n\n127.0.0.1:6379"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" protected-mode no\nOK\n")])])]),s("blockquote",[s("h3",{attrs:{id:"issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issue","aria-hidden":"true"}},[t._v("#")]),t._v(" Issue")]),t._v(" "),s("ul",[s("li",[t._v("설치 이후에 redis 서버가 기동이 불가함")]),t._v(" "),s("li",[t._v("해당 소스파일 경로로 "),s("em",[s("strong",[t._v("redis-server.sh")])]),t._v(" 로 기동")]),t._v(" "),s("li",[t._v("이후 redis-cli 사용 가능함")])])]),t._v(" "),s("p",[t._v("추후 서비스로 등록하여 데몬으로 기동 가능하게 설정 해야 함")]),t._v(" "),s("blockquote",[s("h3",{attrs:{id:"참고자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고자료","aria-hidden":"true"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hanee24.github.io/2018/01/05/how-to-install-redis-on-ubuntu-16-04/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hanee24.github.io/2018/01/05/how-to-install-redis-on-ubuntu-16-04/"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://zetawiki.com/wiki/%EC%9A%B0%EB%B6%84%ED%88%AC16_redis_%EC%84%A4%EC%B9%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zetawiki.com/wiki/우분투16_redis_설치"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://hyunalee.tistory.com/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hyunalee.tistory.com/17"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);