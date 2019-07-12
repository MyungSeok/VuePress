(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{301:function(t,e,a){"use strict";a.r(e);var v=a(1),_=Object(v.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fundamental"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundamental","aria-hidden":"true"}},[t._v("#")]),t._v(" Fundamental")]),t._v(" "),a("h2",{attrs:{id:"문-과-식-의-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문-과-식-의-차이","aria-hidden":"true"}},[t._v("#")]),t._v(" 문 과 식 의 차이")]),t._v(" "),a("p",[t._v("문과 식은 비슷하지만 조금은 다른 차이점이 있다.")]),t._v(" "),a("ul",[a("li",[t._v("문\n"),a("ul",[a("li",[t._v("코드 엔진에서 해석하고 버리는 힌트 같은 것")]),t._v(" "),a("li",[t._v("대표 언어 : "),a("code",[t._v("Java")]),t._v(", "),a("code",[t._v("Javascript")]),t._v(", "),a("code",[t._v("C")]),t._v(" 등등")])])]),t._v(" "),a("li",[t._v("식\n"),a("ul",[a("li",[t._v("변수에 할당되어 저장 된다")]),t._v(" "),a("li",[t._v("대표 언어 : "),a("code",[t._v("Ruby")]),t._v(", "),a("code",[t._v("Kotlin")]),t._v(" 등등")])])])]),t._v(" "),a("h2",{attrs:{id:"메모리-공간-구조의-대해"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리-공간-구조의-대해","aria-hidden":"true"}},[t._v("#")]),t._v(" 메모리 공간 구조의 대해")]),t._v(" "),a("p",[t._v("프로그램 실행시 "),a("em",[a("strong",[t._v("운영체제")])]),t._v(" 는 우리가 실행시키는 프로그램을 위해 메모리 공간을 할당 해 준다."),a("br"),t._v("\n이는 크게 "),a("em",[a("strong",[t._v("데이터 (Data)")])]),t._v(", "),a("em",[a("strong",[t._v("힙 (Heap)")])]),t._v(", "),a("em",[a("strong",[t._v("스택 (Stack)")])]),t._v(" 로 나뉘게 되며 각각의 시기, 용도, 위치가 다르게 된다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/A017.png",alt:"메모리공간"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",[t._v("용도")]),t._v(" "),a("th",[t._v("생명주기")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("데이터 (Data)")]),t._v(" "),a("td",[t._v("전역변수와 "),a("code",[t._v("static")]),t._v(" 변수가 할당되는 영역")]),t._v(" "),a("td",[t._v("프로그램의 시작과 동시에 할당되고"),a("br"),t._v("프로그램이 종료되어야 메모리에서 소멸")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("힙 (Heap)")]),t._v(" "),a("td",[t._v("필요에 의해 동적으로 메모리를 할당 할 때 사용 (Runtime)"),a("br"),t._v("프로그램이 실행되는 동안 결정하며 런타임때 사용되는 공간")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("스택 (Stack)")]),t._v(" "),a("td",[t._v("함수 호출시에 생성되는 지역변수와 매개변수가 저장되는 영역 (Compile)")]),t._v(" "),a("td",[t._v("함수 호출이 완료되면 사라짐")])])])]),t._v(" "),a("p",[t._v("스택 (Stack) 과 힙 (heap) 을 좀더 세부적으로 비교해보면 다음과 같다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("스택 (Stack)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("힙 (Heap)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("접근 속도")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("빠른 접근")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("느린 접근")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("메모리 제한")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("제한적")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("제한 없음")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Resize 가능")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("불가 (Compile 시에 결정)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("가능 (파편화 가능성)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("특징")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("지역변수에만 할당")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("전역적 접근")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://dsnight.tistory.com/50",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://dsnight.tistory.com/50"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"unsinged-int"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsinged-int","aria-hidden":"true"}},[t._v("#")]),t._v(" Unsinged Int")]),t._v(" "),a("p",[t._v("부호가 없는 정수형의 값만 가진다."),a("br"),t._v("\n때문에 부호를 결정짓는 비트만큼의 값의 범위가 늘어난다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("유형")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("바이트")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("이름")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("값의 범위")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("signed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("–2,147,483,648 ~ 2,147,483,647")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0 ~ 4,294,967,295")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("char")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("없음")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("–128~127(기본값)"),a("br"),t._v("/J를 사용하여 컴파일된 경우 0~255")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("signed char")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("signed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-128 ~ 127")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned char")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0 ~ 255")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://msdn.microsoft.com/ko-kr/library/s3f49ktz.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://msdn.microsoft.com/ko-kr/library/s3f49ktz.aspx"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"교착-상태-deadlock-데드락"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#교착-상태-deadlock-데드락","aria-hidden":"true"}},[t._v("#")]),t._v(" 교착 상태 (Deadlock : 데드락)")]),t._v(" "),a("p",[t._v("두 개 이상의 작업이 서로 상대방의 작업이 끝나기 만을 기다리고 있기 때문에 결과적으로 아무것도 완료되지 못하는 상태를 말한다.")]),t._v(" "),a("p",[t._v("대개 멀티 프로그래밍 환경에서 한정된 자원을 서로 사용하려고 경쟁하는 상황에서 발생한다.")]),t._v(" "),a("h3",{attrs:{id:"원인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#원인","aria-hidden":"true"}},[t._v("#")]),t._v(" 원인")]),t._v(" "),a("p",[t._v("한 시스템 내에서 아래 네가지 조건이 동시에 성립하면 발생")]),t._v(" "),a("ul",[a("li",[t._v("상호 배제 (Mutal Exclusion)\n"),a("ul",[a("li",[t._v("자원은 한 번에 한 프로세스만 사용할 수 있어야 한다.")])])]),t._v(" "),a("li",[t._v("점유 대기 (Hold and Wait)\n"),a("ul",[a("li",[t._v("???")])])]),t._v(" "),a("li",[t._v("비선점 (No Preemption)\n"),a("ul",[a("li",[t._v("다른 프로세스에 할당된 자원은 사용이 끝날때까지 강제로 점유할 수 없다.")])])]),t._v(" "),a("li",[t._v("순환 대기 (Circular Wait)\n"),a("ul",[a("li",[t._v("???")])])])]),t._v(" "),a("h3",{attrs:{id:"해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해결","aria-hidden":"true"}},[t._v("#")]),t._v(" 해결")]),t._v(" "),a("ul",[a("li",[t._v("교착 상태 예방 및 회피")]),t._v(" "),a("li",[t._v("교착 상태 탐지 및 회복")]),t._v(" "),a("li",[t._v("교착 상태 무시")])]),t._v(" "),a("h3",{attrs:{id:"예방"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예방","aria-hidden":"true"}},[t._v("#")]),t._v(" 예방")]),t._v(" "),a("p",[t._v("교착 상태의 회피 방법중에 은행원 알고리즘 (Banker's Algorithm) 이라고 있으며 다음과 같다.")]),t._v(" "),a("ul",[a("li",[t._v("프로세스가 자원을 요구할 때 시스템은 자원을 할당한 후에도 안정된 상태로 남아있는지 사전에 검사하여 교착상태를 회피하는 기법")]),t._v(" "),a("li",[t._v("안정된 상태에 있으면 자원을 할당하며, 그렇지 않으면 다른 프로세스들이 자원을 해지할 때까지 대기한다.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://includestdio.tistory.com/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://includestdio.tistory.com/12"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"type-safe-란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-safe-란","aria-hidden":"true"}},[t._v("#")]),t._v(" Type-Safe 란?")]),t._v(" "),a("p",[t._v("어떠한 연산 (Operation) 도 정의 되지 않는 결과를 내놓지 않는 것 이라고 한다.")]),t._v(" "),a("p",[t._v("이는 예측 불가능한 결과를 내지 않는건데")]),t._v(" "),a("p",[t._v("예를 들면")]),t._v(" "),a("p",[a("code",[t._v("1 + '1'")]),t._v(" 아래의 연산이 가능하거나 문자열 변수에 숫자 1을 할당하는 것이 가능하다거나 하는 "),a("em",[a("strong",[t._v("비논리적인 일")])]),t._v(" 을 일컫는다.")]),t._v(" "),a("p",[t._v("보통 "),a("code",[t._v("type-safe")]),t._v(" 하다고 알려진 언어에서는 컴파일시에 이런 에러를 처리해주지만 "),a("code",[t._v("type-safe")]),t._v(" 하지 않는 언어에서는 이를 적당이 암묵적으로 처리한다.")]),t._v(" "),a("p",[t._v("그래서 "),a("code",[t._v("javascript")]),t._v(" 는 "),a("code",[t._v("type-safe")]),t._v(" 한 언어가 아니라고 한다.")]),t._v(" "),a("p",[t._v("일반적으로 "),a("code",[t._v("C#")]),t._v(", "),a("code",[t._v("java")]),t._v(" 등과 같이 컴파일 기반언어들을 "),a("code",[t._v("type-safe")]),t._v(" 한 언어로 취급한다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://m.blog.naver.com/PostView.nhn?blogId=jerrypop&logNo=40117130140&proxyReferer=https%3A%2F%2Fwww.google.com%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://m.blog.naver.com/PostView.nhn?blogId=jerrypop&logNo=40117130140&proxyReferer=https%3A%2F%2Fwww.google.com%2F"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=_.exports}}]);