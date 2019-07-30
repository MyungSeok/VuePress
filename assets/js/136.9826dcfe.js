(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{294:function(e,t,r){"use strict";r.r(t);var v=r(1),a=Object(v.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"memory-leak"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#memory-leak","aria-hidden":"true"}},[e._v("#")]),e._v(" Memory Leak")]),e._v(" "),r("p",[e._v("웹 페이지 내에서 무거운 자바스크립트 코드 사용사에 페이지 성능에 영향을 미치는 메모리 문제를 찾아내는 방법을 알아본다."),r("br"),e._v(" "),r("em",[r("strong",[e._v("메모리 누수")])]),e._v(", "),r("em",[r("strong",[e._v("메모리 팽창")])]),e._v(", "),r("em",[r("strong",[e._v("잦은 가비지 수집")])]),e._v(" 등이 대표적인 원인으로 꼽힌다.")]),e._v(" "),r("h2",{attrs:{id:"메모리-팽창과-누수의-판별"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#메모리-팽창과-누수의-판별","aria-hidden":"true"}},[e._v("#")]),e._v(" 메모리 팽창과 누수의 판별")]),e._v(" "),r("p",[e._v("단순히 사이트의 점점 더 많은 메모리를 사용하게 된다면 누수가 발생된다고 볼 수 있다."),r("br"),e._v("\n여기서 많은 메모리의 기준은 "),r("em",[r("strong",[e._v("RAIL 모델")])]),e._v(" 을 사용하여 사용자에게 주안점을 두는것이다.")]),e._v(" "),r("h3",{attrs:{id:"rail-모델"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rail-모델","aria-hidden":"true"}},[e._v("#")]),e._v(" RAIL 모델")]),e._v(" "),r("p",[e._v("사용자 중심의 성능 모델로 다음 네가지의 측면을 반영한다.")]),e._v(" "),r("ul",[r("li",[e._v("Response\n"),r("ul",[r("li",[e._v("사용자의 입력은 100ms 내에 인지해야 함")])])]),e._v(" "),r("li",[e._v("Animation\n"),r("ul",[r("li",[e._v("애니메이션의 스크롤 시간을 10ms 이내에 프레임을 생성해야 함")])])]),e._v(" "),r("li",[e._v("Idle\n"),r("ul",[r("li",[e._v("메인 스레드의 유휴시간을 극대화 해야 함")])])]),e._v(" "),r("li",[e._v("Load\n"),r("ul",[r("li",[e._v("대화형 콘텐츠의 경우 1000ms 이내에 전달해야 함")])])])]),e._v(" "),r("h2",{attrs:{id:"메모리-누수-예방-및-분석"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#메모리-누수-예방-및-분석","aria-hidden":"true"}},[e._v("#")]),e._v(" 메모리 누수 예방 및 분석")]),e._v(" "),r("ul",[r("li",[e._v("크롬 (Chrome) 의 작업 관리자로 메모리 사용량을 실시간 모니터링\n"),r("ul",[r("li",[e._v("타임라인 (Timeline) 기록으로 메모리 누수의 시각화")]),e._v(" "),r("li",[e._v("힙 스냅샷으로 분리된 DOM 트리 메모리 누수의 발견")]),e._v(" "),r("li",[e._v("Javascript 힙 (Heap) 메모리 누수 파악 (Allocation Timeline)")]),e._v(" "),r("li",[e._v("함수별 메모리 할당 관측")]),e._v(" "),r("li",[e._v("잦은 가비지 수집 관측")])])])]),e._v(" "),r("h2",{attrs:{id:"해결방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#해결방법","aria-hidden":"true"}},[e._v("#")]),e._v(" 해결방법")]),e._v(" "),r("ul",[r("li",[e._v("크롬 작업관리자를 사용하여 확인 가능")]),e._v(" "),r("li",[e._v("시간의 흐름에 따른 메모리 사용량을 타임라인으로 기록하여 시각화한다.")]),e._v(" "),r("li",[e._v("분리된 DOM 트리 (일반적인 메모리 누수 원인) 을 힙 스냅샷으로 식별할 수 있다.")]),e._v(" "),r("li",[e._v("JS 힙에 새 메모리가 할당될 때 할당 타임라인 기록을 확인하여 알아낼 수 있다.")])]),e._v(" "),r("h2",{attrs:{id:"chrome-heap-snapshot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chrome-heap-snapshot","aria-hidden":"true"}},[e._v("#")]),e._v(" Chrome Heap Snapshot")]),e._v(" "),r("p",[e._v("Google Chrome Browser 에서 제공되는 개발자 도구에서 Heap Snapshot 을 찍으며 아래와 같은 뷰 선택기를 통한 분석 환경이 제공된다.")]),e._v(" "),r("ul",[r("li",[e._v("Summary View\n"),r("ul",[r("li",[e._v("생성자 이름을 기준으로 그룹화된 객체를 보여준다.")]),e._v(" "),r("li",[e._v("생성자 기준으로 각각의 메모리 사용량으로 객체 추적이 가능하다.")]),e._v(" "),r("li",[e._v("DOM 누수 추적에 유용하다.")])])]),e._v(" "),r("li",[e._v("Comparison View\n"),r("ul",[r("li",[e._v("두 스냅샷간의 차이점을 표시한다.")]),e._v(" "),r("li",[e._v("두개 혹은 작업 이전과 이후의 스냅샷 비교가 가능하다.")]),e._v(" "),r("li",[e._v("비워진 메모리 델타와 참조 카운트를 검사하면 메모리 누수 존재 원인과 이유를 확인 가능하다.")])])]),e._v(" "),r("li",[e._v("Containment View\n"),r("ul",[r("li",[e._v("Heap Content 탐색이 가능하다.")]),e._v(" "),r("li",[e._v("객체 구조를 좀더 자세히 볼 수 있으며 전역 네임스페이스 부터 참조된 객체를 분석하여 무엇인지 알아낼 수 있다.")]),e._v(" "),r("li",[e._v("클로져 분석이 가능하고 객체를 심층적으로 탐색 및 접근이 가능하다.")])])]),e._v(" "),r("li",[e._v("Dominators View\n"),r("ul",[r("li",[e._v("도미네이터 트리를 표시하여 누적 지점을 찾는데 유용하다.")]),e._v(" "),r("li",[e._v("실행되고 있는 예상치 않는 객체에 대한 참조가 있는지 혹은 삭제/가비지 수집이 되고 있는지 확인이 가능하다.")])])])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("참고자료")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/memory-problems/?hl=ko",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/web/tools/chrome-devtools/memory-problems/?hl=ko"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/rail?hl=ko",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/web/fundamentals/performance/rail?hl=ko"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=a.exports}}]);