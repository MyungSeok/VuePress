(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{471:function(t,e,r){"use strict";r.r(e);var v=r(1),o=Object(v.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flux","aria-hidden":"true"}},[t._v("#")]),t._v(" Flux")]),t._v(" "),r("p",[t._v("Facebook 에서 클라이언트-사이드 웹 어플리케이션을 만들기 위해 사용하는 "),r("strong",[t._v("어플리케이션 아케텍처")]),t._v("이다.")]),t._v(" "),r("p",[t._v("이는 단방향 데이터 흐름을 활용하여 뷰 컴퍼넌트를 구성하는 React 를 보안하는 역할을 한다.")]),t._v(" "),r("h2",{attrs:{id:"flux-구성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flux-구성","aria-hidden":"true"}},[t._v("#")]),t._v(" Flux 구성")]),t._v(" "),r("p",[t._v("Flux 어플리케이션은 세가지 핵심부분으로 구성된다.")]),t._v(" "),r("ul",[r("li",[t._v("Dispatcher")]),t._v(" "),r("li",[t._v("Stores")]),t._v(" "),r("li",[t._v("Views (React Component)")])]),t._v(" "),r("p",[t._v("위 세 요소는 기존 MVC (Model - View - Controller) 구조와는 다르며 MVC 와는 다르게 데이터가 단방향으로 흐른다.")]),t._v(" "),r("p",[t._v("React View 에서는 사용자가 상호작용을 할 때, 해당 View 는 중앙의 Dispather 를 통해 Action 을 전파하게 된다.")]),t._v(" "),r("p",[t._v("어플리케이션 데이터와 비지니스 로직을 가지고 있는 Store 는 "),r("strong",[t._v("Action 이 전파되면 이 Action 에 영향범위에 있는 모든 View 를 갱신")]),t._v("한다.")]),t._v(" "),r("p",[t._v("즉 View 가 어떤 방식으로 갱신해야 되는지 일일이 작성하지 않고서도 데이터를 변경할 수 있는 형태에서 편리하다.")]),t._v(" "),r("p",[t._v("Flux 는 Store 를 이용하여 제어를 완전히 뒤집었다."),r("br"),t._v("\n일관성을 유지해야 한다는 명목으로 외부의 갱신에 의존하는 방식과 달리 Store 는 갱신을 받아들이고 적절히 조화한다.")]),t._v(" "),r("p",[t._v("Store 바깥에 아무것도 두지 않는 방식으로 데이터의 도메인을 관리해야 할 필요가 없어져 외부의 갱신에 따른 문제를 명확하게 분리할 수 있도록 돕는다.")]),t._v(" "),r("p",[t._v("Store 는 독립된 공간을 가지고 있어 직접적인 "),r("code",[t._v("setter()")]),t._v(" 메서드가 없는 대신 Dispather 에 등록한 콜백을 통해 데이터를 받게된다.")]),t._v(" "),r("h2",{attrs:{id:"데이터의-흐름"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#데이터의-흐름","aria-hidden":"true"}},[t._v("#")]),t._v(" 데이터의 흐름")]),t._v(" "),r("p",[t._v("Flux 어플리케이션의 데이터는 단방향으로 흐른다.")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/A091.png",alt:"Flux 데이터의 흐름 1"}})]),t._v(" "),r("p",[t._v("단방향 데이터 흐름은 Flux 패턴의 핵심인데 Flux 프로그래머의 제일 멘탈 모델이 된다.")]),t._v(" "),r("p",[t._v("Dispather, Store, View 는 독립적인 노드로 입력과 출력이 완전히 구분된다."),r("br"),t._v("\nAction 은 새로운 데이터를 포함하고 잇는 간단한 객체로 Type 프로프티로 구분된다.")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/A092.png",alt:"Flux 데이터의 흐름 2"}})]),t._v(" "),r("ul",[r("li",[t._v("Action\n"),r("ul",[r("li",[t._v("모든 데이터는 Dispather 를 통해 흐르며, Action 은 Dispather 에게 Action Creator 메서드를 제공하는데 대부분의 Action 은 View 에서 사용자와 상호작용 과정에서 발생한다.")])])]),t._v(" "),r("li",[t._v("Dispather\n"),r("ul",[r("li",[t._v("Dispather 는 Store 에 등록하기 위한 콜백을 실행한 이후에 Action 을 모든 Store 로 전달한다.")])])]),t._v(" "),r("li",[t._v("Store\n"),r("ul",[r("li",[t._v("등록한 콜백을 활용해 Store 는 관리하고 있는 상태 중 어떤 Action 이라도 관련이 있다면 전달해준다.")]),t._v(" "),r("li",[t._v("Store 는 Change 이벤트를 Controller-View 에게 알려주고 그 결과로 데이터 계층에서의 변화가 일어난다.")])])]),t._v(" "),r("li",[t._v("View\n"),r("ul",[r("li",[t._v("Controller-View 는 이 이벤트를 듣고 있다가 이벤트 핸들러가 있는 Store 에서 데이터를 가져온다.")]),t._v(" "),r("li",[t._v("Controller-View 는 스스로 "),r("code",[t._v("setState()")]),t._v(" 메서드를 호출하고 컴포넌트 트리에 속해 있는 자식 노드 모두를 다시 랜더링 하게 한다.")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/A093.png",alt:"Flux 데이터의 흐름 3"}})]),t._v(" "),r("p",[t._v("Action Creator 는 라이브러리에서 제공하는 Helper 메서드로 메서드 파라미터에서 Action 을 생성하고 Type 을 설정하거나 Dispather 에게 제공하는 역할을 한다.")]),t._v(" "),r("p",[t._v("모든 Action 은 Store 가 Dispather 에 등록해둔 콜백을 통해 모든 Store 에 전송된다.")]),t._v(" "),r("p",[t._v("Action 에 대한 응답으로 Store 가 스스로 갱신을 한 다음에는 자신이 변경되었다고 모두에게 알린다.")]),t._v(" "),r("p",[t._v("Controller-View 가 변경이벤트를 듣고 새로운 데이터를 Store 에서 가져온 후 모든 트리에 있는 자식뷰에게 새로운 데이터를 제공한다.")]),t._v(" "),r("p",[t._v("이 Flux 구조는 함수형 반응 프로그래밍을 다시 재현하는 것을 쉽게 만들거나 데이터-흐름 프로그래밍, 흐름 기반 프로그래밍을 만드는데 쉽도록 돕는다."),r("br"),t._v("\n어플리케이션에서 흐르는 데이터 흐름이 양방향 바인딩이 아닌 단방향으로 흐르기 때문이다."),r("br"),t._v("\n어플리케이션의 상태는 모두 Store 에서 관리되고 어플리케이션의 다른 부분과 Dispather 에 의해 동기적으로 변경되는 방법으로 관리된다.")]),t._v(" "),r("p",[t._v("이와 같은 구조는 우리의 어플리케이션이 함수형 반응 프로그래밍 (Functional Reactive Programming) 이나 더 세부적으로 데이터-흐름 프로그래밍 (Data-Flow Programming) 또는 흐름 기반 프로그래밍 (Flow-based Programming) 을 연상하게 한다는 사실을 쉽게 떠올리게 한다."),r("br"),t._v("\n즉 데이터의 흐름이 양방향 바인딩이 아닌 단일 방향으로 흐른다."),r("br"),t._v("\n어플리케이션의 상태는 store에 의해 관리를 해서 어플리케이션의 다른 부분들과 결합도를 극히 낮춘 상태로 유지될 수 있다."),r("br"),t._v("\nStore 의 사이에서 의존성이 생긴다고 해도 Dispachter 에 의해 엄격한 위계가 유지되어 동기적으로 갱신되는 방식으로 관리된다.")]),t._v(" "),r("p",[t._v("양방향 데이터 바인딩은 연속적인 갱신이 발생하고 객체 하나의 변경이 다른 객체를 변경하게 되어 실제 필요한 업데이트보다 더 많은 분량을 실행하게 된다."),r("br"),t._v("\n어플리케이션의 규모가 커지면 데이터의 연속적인 갱신이 되는 상황에서는 사용자 상호작용의 결과가 어떤 변화를 만드는지 예측하는데 어려워진다."),r("br"),t._v("\n갱신으로 인한 데이터 변경이 단 한 차례만 이뤄진다면 전체 시스템은 좀 더 예측 가능하게 된다.")]),t._v(" "),r("h2",{attrs:{id:"단일-dispather"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#단일-dispather","aria-hidden":"true"}},[t._v("#")]),t._v(" 단일 Dispather")]),t._v(" "),r("p",[t._v("Dispatcher 는 Flux 어플리케이션의 중앙 허브로 모든 데이터의 흐름을 관리한다.")]),t._v(" "),r("p",[t._v("본질적으로 Store 의 콜백을 등록하는데 쓰이고 Action 을 Store 에 배분해주는 간단한 작동 방식으로 그 자체가 특별하게 똑똑한 것은 아니다."),r("br"),t._v("\n각각의 Store 를 직접 등록하고 콜백을 제공한다.")]),t._v(" "),r("p",[t._v("Action Creator 가 새로운 Action 이 있다고 Dispatcher 에게 알려주면 어플리케이션에 있는 모든 Store는 해당 Action을 앞서 등록한 callback으로 전달 받는다.")]),t._v(" "),r("p",[t._v("어플리케이션의 규모가 커지게 되면 Dispachter 의 역할은 더욱 필수적이다."),r("br"),t._v("\n바로 Store 간에 의존성을 특정적인 순서로 콜백을 실행하는 과정으로 관리하기 때문이다."),r("br"),t._v("\nStore는 다른 store의 업데이트가 끝날 때까지 선언적으로 기다릴 수 있고 끝나는 순서에 따라 스스로 갱신된다.")]),t._v(" "),r("h2",{attrs:{id:"store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[t._v("#")]),t._v(" Store")]),t._v(" "),r("p",[t._v("Store 는 어플리케이션의 상태와 로직을 포함하고 있다."),r("br"),t._v("\nStore의 역할은 전통적인 MVC의 모델과 비슷하지만 많은 객체의 상태를 관리할 수 있는데 ORM 모델이 하는 것처럼 단일 레코드의 데이터를 표현하는 것도 아니고 Backbone의 컬랙션과도 다르다."),r("br"),t._v("\nstore는 단순히 ORM 스타일의 객체 컬랙션을 관리하는 것을 넘어 어플리케이션 내의 개별적인 도메인 에서 어플리케이션의 상태를 관리한다.")]),t._v(" "),r("p",[t._v("예를 들면, Facebook의 돌아보기 편집기 에서 지속적으로 재생된 시간과 플레이어 상태를 지속적으로 추적하기 위해 TimeStore 를 활용한다."),r("br"),t._v("\n같은 어플리케이션에서 ImageStore 는 이미지 콜랙션을 지속적으로 추적한다."),r("br"),t._v("\nTodoMVC 예제의 TodoStore 도 비슷하게 할 일 항목의 콜랙션을 관리한다.")]),t._v(" "),r("p",[t._v("Store는 두 모델 컬랙션의 특징을 보여주는 것과 동시에 싱글턴 모델의 논리적 도메인으로 역할을 한다.")]),t._v(" "),r("p",[t._v("위에서 언급한 것과 같이 store는 자신을 Dispatcher 에 등록하고 callback을 제공한다."),r("br"),t._v("\n이 Callback 은 Action 을 파라미터로 받는다."),r("br"),t._v("\nStore 의 등록된 Callback 의 내부에서는 Switch 문을 사용한 Action 타입을 활용해서 Action 을 해석하고 Store 내부 메소드에 적절하게 연결될 수 있는 훅을 제공한다. 여기서 결과적으로 action은 disaptcher를 통해 store의 상태를 갱신한다. store가 업데이트 된 후, 상태가 변경되었다는 이벤트를 중계하는 과정으로 View 에게 새로운 상태를 보내주고 View 스스로 업데이트하게 만든다.")]),t._v(" "),r("h2",{attrs:{id:"view-controllers-view"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#view-controllers-view","aria-hidden":"true"}},[t._v("#")]),t._v(" View & Controllers-View")]),t._v(" "),r("p",[t._v("React 는 조화롭고 자유로운 형태로 다시 랜더링 할 수 있는 View 를 View 레이어로 제공한다.")]),t._v(" "),r("p",[t._v("복잡한 View 위계의 상위를 살펴보면 Store 에 의해 이벤트를 중계할 수 있는 특별한 종류의 View가 있다."),r("br"),t._v("\n이 View 를 Controller-View 라고 부르는데 Store 에서 데이터를 얻을 수 있는 glue 코드를 제공하고 데이터를 위계대로 자식들에게 전달하도록 돕는다."),r("br"),t._v("\n페이지의 광범위한 영역을 관리하는 Contoller-View 를 가지게 된다.")]),t._v(" "),r("p",[t._v("Store 에게 이벤트를 받으면 Store 의 퍼블릭 "),r("code",[t._v("getter()")]),t._v(" 메소드를 통해 새로 필요한 데이터를 처음으로 요청하게 된다."),r("br"),t._v("\n그 과정에서 "),r("code",[t._v("setState()")]),t._v(" 또는 "),r("code",[t._v("forceUpdate()")]),t._v(" 메소드를 호출하게 되고 그 호출 과정에서 자체의 "),r("code",[t._v("render()")]),t._v(" 메소드와 하위 모든 자식의 "),r("code",[t._v("render()")]),t._v(" 메소드를 실행한다.")]),t._v(" "),r("p",[t._v("전체적인 Store 의 상태를 단일 객체로 만들어 하위에 있는 View 에 전달하게 되는데 다른 자식들도 필요한 부분이라면 데이터를 사용할 수 있도록 한다."),r("br"),t._v("\n또한 Controller-View 는 위계의 최상위에서 마치 Controller 와 같은 역할을 지속적으로 수행해 하위에 있는 View가 가능한 한 순수하게, 함수적으로 유지될 수 있도록 한다."),r("br"),t._v("\n또한 Store 의 전체 상태를 단일 객체로 흘려 보내는데 이 방식은 관리해야 하는 프로퍼티 수를 줄이는 효과도 있다.")]),t._v(" "),r("p",[t._v("때때로 컴포넌트의 단순함을 유지하기 위해 위계 깊은 곳에서 Contoller-Views 가 추가적으로 필요할 때가 있다."),r("br"),t._v("\n중간에 Contoller-Views 를 넣으면 특정 데이터 도메인에 관계된 위계 영역을 감싸서 독립적으로 만드는데 (Encapsulate :: 캡슐화) 도움이 된다."),r("br"),t._v("\n하지만 주의해야 할것은 위계 내에서 만든 Controller-View는 단일의 데이터 흐름과 상충해 잠재적으로 새로운 데이터 흐름의 시작점에서 충돌할 수 있다.")]),t._v(" "),r("p",[t._v("내부에 Controller-View 를 추가하는 것을 결정할 때에는 여러 데이터 업데이트의 흐름이 위계와 다른 방향으로 흐르지 않도록 고려해 단순함의 균형을 유지해야 한다."),r("br"),t._v("\n여러 데이터가 업데이트 되면 이상한 효과를 만들어 React 의 렌더링 메소드가 다른 Controller-View 에 의해 반복적으로 실행되서 디버깅의 어려움을 가중할 가능성이 있다. 내부 Controller-View를 만드는 것을 결정할 때, 데이터를 갱신하기 위해 위계에서 여러 방향으로 흐르는 복잡성에 반해 단순한 컴포넌트의 이점에서 균형을 찾아야 한다."),r("br"),t._v("\n여러 방향으로의 데이터 갱신은 이상한 효과를 만들 수 있다."),r("br"),t._v("\n특히 React의 렌더 메소드는 여러 Controller-View 를 갱신하기 위해 반복적으로 실행이 되어버려 디버깅의 어려움을 가중할 수도 있다.")]),t._v(" "),r("h2",{attrs:{id:"action"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[t._v("#")]),t._v(" Action")]),t._v(" "),r("p",[t._v("Dispatcher 는 Action 을 호출해 데이터를 불러오고 Store 로 전달할 수 있도록 메소드를 제공한다."),r("br"),t._v("\nAction 의 생성은 Dispatcher 로 Action 을 보낼 때 의미있는 Helper 메소드로 포개진다.")]),t._v(" "),r("p",[t._v("TODO 어플리케이션에서 할 일 아이템의 문구를 변경하고 싶다고 가정하자."),r("br"),t._v(" "),r("code",[t._v("updateText(todoId, newText)")]),t._v(" 와 같은 함수 시그니쳐를 이용해 TodoActions 모듈 내에 Action 을 만든다."),r("br"),t._v("\n이 메소드는 View 의 이벤트 핸들러로부터 호출되어 실행할 수 있고 그 결과로 사용자 상호작용에 응답할 수 있게 된다."),r("br"),t._v("\n이 Action Creator 메서드는 Type 을 추가할 수 있다."),r("br"),t._v("\n이 Type 을 이용해 Action 이 Store에서 해석될 수 있도록, 적절한 응답이 가능하도록 한다."),r("br"),t._v("\n예시에서와 같이 "),r("code",[t._v("TODO_UPDATE_TEXT")]),t._v(" 와 같은 이름의 타입을 사용한다.")]),t._v(" "),r("p",[t._v("Action 은 서버와 같은 다른 장소에서 올 수 있다."),r("br"),t._v("\n예를 들면 데이터를 초기화 할 때 이런 과정이 발생할 수 있다."),r("br"),t._v("\n또한 서버에서 에러 코드를 반환하거나 어플리케이션이 제공된 후에 업데이트가 있을 때 나타날 수 있다.")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("참고자료")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://haruair.github.io/flux/docs/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://haruair.github.io/flux/docs/overview.html"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=o.exports}}]);