(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{452:function(a,e,t){"use strict";t.r(e);var r=t(1),s=Object(r.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[a._v("#")]),a._v(" Map")]),a._v(" "),t("p",[t("code",[a._v("Key")]),a._v(" 와 "),t("code",[a._v("Value")]),a._v(" 의 형태로 데이터를 관리한다.")]),a._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('  graph LR\n  A["Map"] --\x3e B["HashMap"]\n  A --\x3e C["Hashtable"]\n  A --\x3e D["Sorted Map"]\n  D --\x3e E["Tree Map"]\n')])])]),t("h2",{attrs:{id:"hashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" HashMap")]),a._v(" "),t("p",[a._v("HashMap 은 Map 인터페이스 계열의 대표적인 클래스이며 "),t("code",[a._v("get")]),a._v(", "),t("code",[a._v("put")]),a._v(" 등의 메서드를 사용하여 데이터를 관리한다.")]),a._v(" "),t("p",[a._v("HashMap 계열은 각각의 특징에 따라 아래와 같인 차이점으로 나뉜다.")]),a._v(" "),t("ul",[t("li",[a._v("HashMap\n"),t("ul",[t("li",[a._v("동기화 보장이 안된다. (Thread-not-safe)")]),a._v(" "),t("li",[a._v("Key & Value 에 Null 허용")])])]),a._v(" "),t("li",[a._v("Hashtable\n"),t("ul",[t("li",[a._v("동기화 보장이 된다. (Thread-safe : 멀티스레드 환경에서 안정적)")]),a._v(" "),t("li",[a._v("Key & Value 에 Null 허용 불가")])])]),a._v(" "),t("li",[a._v("TreeMap\n"),t("ul",[t("li",[a._v("정렬 기능을 지원함")])])])]),a._v(" "),t("h2",{attrs:{id:"hashtable-concurrenthashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashtable-concurrenthashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" Hashtable & ConcurrentHashMap")]),a._v(" "),t("p",[t("code",[a._v("HashMap")]),a._v(" 을 thread-safe 하도록 만든 클래스가 ConcurrentHashMap 이며, key & value 에 null 을 허용하지 않는다."),t("br"),a._v("\n둘 다 동기화 보장을 하는 특징이 있지만 구조적으로 작은 차이가 있다.")]),a._v(" "),t("ul",[t("li",[a._v("Hashtable\n"),t("ul",[t("li",[t("code",[a._v("synchronized")]),a._v(" 키워드를 Method 전체에 Lock 을 적용한다.")]),a._v(" "),t("li",[a._v("상대적으로 안정하지만 확장성이 떨어진다.")]),a._v(" "),t("li",[a._v("Hashtable 을 참조하는 Thread 의 갯수가 많아질수록 Lock 을 획득하기 위한 시간비용이 많이 들어 성능이 급격히 낮아진다.")])])]),a._v(" "),t("li",[a._v("ConcurrentHashMap\n"),t("ul",[t("li",[a._v("내부적으로 여러개의 세그먼트를 두고 각 세그먼트마다 별도의 락을 가지고 있다.")]),a._v(" "),t("li",[a._v("동시에 데이터를 삽입, 참조 하더라도 그 데이터가 다른 세그먼트에 위치하면 서로 Lock 을 얻기 위해 경쟁하지 않는다.")]),a._v(" "),t("li",[a._v("이러한 방식을 "),t("em",[t("strong",[a._v("Lock Striping")])]),a._v(" 이라고 한다.")]),a._v(" "),t("li",[a._v("Key & Value 에 Null 허용 불가")])])])]),a._v(" "),t("blockquote",[t("h3",{attrs:{id:"참고자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고자료","aria-hidden":"true"}},[a._v("#")]),a._v(" 참고자료")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://egloos.zum.com/Agbird/v/4849046",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://egloos.zum.com/Agbird/v/4849046"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"hashmap-의-동작-과정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-의-동작-과정","aria-hidden":"true"}},[a._v("#")]),a._v(" HashMap 의 동작 과정")]),a._v(" "),t("p",[a._v("Java 에서의 HashMap 은 Key & Value 를 쌍으로 저장한다."),t("br"),a._v("\n이는 Hash 함수를 필요로 hashCode 를 통하여 값을 저장하고 불러내는 과정을 거친다.")]),a._v(" "),t("p",[a._v("HashMap 과 HashTable 은 Map 인터페이스를 구현하고 있기 때문에 HashMap 과 HashTable 의 제공하고 있는 기능은 거의 같다."),t("br"),a._v("\n다만 HashMap 은 "),t("em",[t("strong",[a._v("보조해시함수 (Additional Hash Function)")])]),a._v(" 를 사용하고 있기 때문에 보조 해시함수를 사용하고 있지 않는 HashTable 에 비하여 해시 충돌 (Hash Colision) 이 덜 발생하고 있어 상대적으로 성능상의 이점을 보인다.")]),a._v(" "),t("h3",{attrs:{id:"보조-해시-함수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#보조-해시-함수","aria-hidden":"true"}},[a._v("#")]),a._v(" 보조 해시 함수")]),a._v(" "),t("p",[a._v("저장하려는 두 개가 같은 인덱스로 해싱 (hashing : hash 함수를 통해 계산됨을 의미) 하게 되면 같은곳에 저장할 수 없게 된다."),t("br"),a._v("\n때문에 해싱된 인덱스에 이미 다른 값들이 들어있다면 데이터를 저장할 다른 위치를 찾은뒤에야 저장할 수 있다.")]),a._v(" "),t("p",[a._v("해시 충돌을 회피하는 방법들은 다음과 같다.")]),a._v(" "),t("ul",[t("li",[a._v("개방 주소법 (Open Address)\n"),t("ul",[t("li",[a._v("해시충돌이 발생하면 다른 버킷 (데이터 주소 공간) 을 찾아 자료를 삽입하는 방식")]),a._v(" "),t("li",[a._v("비어있는 버킷을 탐색하거나 혹은 2차 해시함수를 이용하여 새로운 주소를 할당한다.")])])]),a._v(" "),t("li",[a._v("분리 연결법 (Seperate Chaining)\n"),t("ul",[t("li",[a._v("Java HashMap 에서 사용중인 대표적인 방식")]),a._v(" "),t("li",[a._v("??????????")])])])]),a._v(" "),t("p",[a._v("이 외에도 "),t("em",[t("strong",[a._v("해시 버킷의 동적 확장")])]),a._v(" 등과 같은 방법도 있다.")]),a._v(" "),t("blockquote",[t("h3",{attrs:{id:"참고자료-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고자료-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 참고자료")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://asfirstalways.tistory.com/332",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://asfirstalways.tistory.com/332"),t("OutboundLink")],1),t("br"),a._v(" "),t("a",{attrs:{href:"https://d2.naver.com/helloworld/831311",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://d2.naver.com/helloworld/831311"),t("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=s.exports}}]);