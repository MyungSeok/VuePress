(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{399:function(t,e,_){"use strict";_.r(e);var v=_(0),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"큐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#큐"}},[t._v("#")]),t._v(" 큐")]),t._v(" "),_("ul",[_("li",[t._v("처음에 저장한 데이터를 가장 먼저 꺼내는 선입선출 (FIFO : First In First Out) 구조로 되어 있다.")]),t._v(" "),_("li",[t._v("입출력이 양방향에서 이루어지는 데이터 구조이다.")]),t._v(" "),_("li",[t._v("삽입 연산을 "),_("em",[_("strong",[t._v("Enqueue")])]),t._v(" 삭제 연산을 "),_("em",[_("strong",[t._v("Dequeue")])]),t._v(" 라고 한다.")])]),t._v(" "),_("h2",{attrs:{id:"단점"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),_("ul",[_("li",[t._v("데이터 삽입 후 계속 항목 삭제를 하면 REAR 와 FRONT 가 만나게 되어 공백 Queue 가 됨에도 불구하고 오버 플로우 현상이 생겨 메모리낭비 현상이 생기게 된다.")])]),t._v(" "),_("h2",{attrs:{id:"용도"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#용도"}},[t._v("#")]),t._v(" 용도")]),t._v(" "),_("ul",[_("li",[t._v("OS 의 작업 스케쥴링")]),t._v(" "),_("li",[t._v("대기행렬 처리")])]),t._v(" "),_("h2",{attrs:{id:"유의사항"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#유의사항"}},[t._v("#")]),t._v(" 유의사항")]),t._v(" "),_("p",[t._v("Queue 에서 데이터를 추출할 때는 첫번째 저장된 데이터를 삭제하므로 배열리스트와 같은 배열 기반 "),_("code",[t._v("Collection Class")]),t._v(" 를 사용하면 데이터를 꺼낼때마다 빈공간을 채우기 위해 데이터의 복사가 발생한다.")]),t._v(" "),_("p",[t._v("이는 성능저하를 야기 시키기 때문에 "),_("em",[_("strong",[t._v("연결 리스트 (Linked List) 로 구현")])]),t._v(" 하는것이 적합하다.")]),t._v(" "),_("h2",{attrs:{id:"priority-queue-우선순위-큐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#priority-queue-우선순위-큐"}},[t._v("#")]),t._v(" Priority Queue (우선순위 큐)")]),t._v(" "),_("p",[t._v("우선순위가 높은 데이터가 먼저 작업 된다.")]),t._v(" "),_("h3",{attrs:{id:"구현-방법"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#구현-방법"}},[t._v("#")]),t._v(" 구현 방법")]),t._v(" "),_("ul",[_("li",[t._v("배열을 기반으로 구현")]),t._v(" "),_("li",[t._v("연결리스트를 기반으로 구현")]),t._v(" "),_("li",[t._v("힙 (Heap) 이용하여 구현")])]),t._v(" "),_("blockquote",[_("p",[t._v("데이터가 적을때는 문제가 없지만 _"),_("strong",[t._v("데이터가 많을 경우에는 노드 수에 비례해서 비교를 하기 때문에 성능저하의 이슈")]),t._v("_가 있다."),_("br"),t._v("\n따라서 "),_("em",[_("strong",[t._v("주로 힙 (Heap) 을 이용하여 구현")])]),t._v(" 하는 것이 일반적이다.")])]),t._v(" "),_("h2",{attrs:{id:"데큐-디큐-덱-deque-double-end-queue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#데큐-디큐-덱-deque-double-end-queue"}},[t._v("#")]),t._v(" 데큐 / 디큐 / 덱 (Deque : Double-End Queue)")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Queue")]),t._v(" 와 "),_("code",[t._v("Stack")]),t._v(" 을 합쳐놓은 형태이다.")]),t._v(" "),_("li",[t._v("두개의 포인터를 사용하여 양쪽에서 삽입과 삭제를 발생시킬수 있다.")])]),t._v(" "),_("h3",{attrs:{id:"특징"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),_("ul",[_("li",[t._v("크기가 가변적이다.\n"),_("ul",[_("li",[t._v("리스트와 같이 데이터를 담을 수 있는 크기가 가변적이다.")])])]),t._v(" "),_("li",[t._v("앞과 뒤에서 삽입과 삭제가 가능하다.")]),t._v(" "),_("li",[t._v("구현이 쉽지 않다.")]),t._v(" "),_("li",[t._v("랜덤 접근이 가능하다.")]),t._v(" "),_("li",[t._v("중간에 데이터의 삽입 및 삭제가 용이하지 않다.\n"),_("ul",[_("li",[t._v("되도록이면 중간에 데이터를 삽입하거나 삭제하는 것은 피해야 하며, 삽입과 삭제를 중간에 한다면 삽입과 삭제한 위치의 데이터를 모두 이동해야 한다.")])])])]),t._v(" "),_("h3",{attrs:{id:"중간에-데이터-삽입-시"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#중간에-데이터-삽입-시"}},[t._v("#")]),t._v(" 중간에 데이터 삽입 시")]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/A018.png",alt:"데큐_삽입"}})]),t._v(" "),_("h3",{attrs:{id:"중간에-데이터-삭제-시"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#중간에-데이터-삭제-시"}},[t._v("#")]),t._v(" 중간에 데이터 삭제 시")]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/A019.png",alt:"데큐_삭제"}})]),t._v(" "),_("h3",{attrs:{id:"deque-를-사용하는-경우"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#deque-를-사용하는-경우"}},[t._v("#")]),t._v(" Deque 를 사용하는 경우")]),t._v(" "),_("p",[t._v("다음과 같은 경우 Deque 를 사용하면 효과적이다.")]),t._v(" "),_("ul",[_("li",[t._v("앞과 뒤에서 삽입 혹은 삭제를 한다.\n"),_("ul",[_("li",[_("em",[_("strong",[t._v("STL Container")])]),t._v(" 라이브러리 중에서 Deque 사용할때 성능이 가장 좋다.")])])]),t._v(" "),_("li",[t._v("저장할 데이터의 개수가 가변적이다.\n"),_("ul",[_("li",[t._v("Deque 는 동적으로 크기가 변하므로 유연하게 사용 가능하다.")])])]),t._v(" "),_("li",[t._v("검색을 거의 하지 않는다.\n"),_("ul",[_("li",[t._v("많은 데이터를 저장하며 검색이 필요한 경우라면  "),_("code",[t._v("Map")]),t._v(", "),_("code",[t._v("Set")]),t._v(", "),_("code",[t._v("HashMap")]),t._v(" 중 하나를 선택해서 사용하는편이 효과적이다.")])])]),t._v(" "),_("li",[t._v("데이터 접근을 랜덤하게 하고 싶다.\n"),_("ul",[_("li",[_("code",[t._v("Vector")]),t._v(" 와 같이 랜덤 접근이 가능하다. (사용방법도 같음)")])])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.hanbit.co.kr/channel/category/category_view.html?cms_code=CMS3942847236",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.hanbit.co.kr/channel/category/category_view.html?cms_code=CMS3942847236"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);