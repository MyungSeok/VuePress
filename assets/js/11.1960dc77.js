(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{403:function(t,e,l){"use strict";l.r(e);var a=l(1),i=Object(a.a)({},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"analytics-engine"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#analytics-engine","aria-hidden":"true"}},[t._v("#")]),t._v(" Analytics Engine")]),t._v(" "),l("h2",{attrs:{id:"시스템-구성도"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#시스템-구성도","aria-hidden":"true"}},[t._v("#")]),t._v(" 시스템 구성도")]),t._v(" "),l("p",[l("img",{attrs:{src:"/img/A020.png",alt:"Hadoop Echo System"}})]),t._v(" "),l("p",[l("img",{attrs:{src:"/img/A021.png",alt:"Spark System"}})]),t._v(" "),l("h2",{attrs:{id:"데이터처리-패키지-비교"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#데이터처리-패키지-비교","aria-hidden":"true"}},[t._v("#")]),t._v(" 데이터처리 패키지 비교")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Feature")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Strom")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Spark")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Samza")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Delivery Semantics")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("At Least Once Exactly-Once with Trident")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exactly Once Except in some failure scenarios")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("At Least Once")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("State Management")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stateless Roll your own or use Trident")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stateful Writes state to storage (HDFS)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stateful Embeded key-value store")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Latency")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Sub-Second")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Seconds Depending on batch size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Sub-Second")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Language Support")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Any JVM-languages, Ruby, Python, Javascript, Perl")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Scala, JAVA, Python, R")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Scala, JAVA JVM-languages only")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Processing Model")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("one-at-a-time")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("micro-batch / batch")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("one-at-a-time")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Backpressure")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("X")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Stream Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Spouts")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Receivers")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ConSumers")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Stream Primitive")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Tuple")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Dstream")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Message")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Stream Computation")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Bolts")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Transformations Window operations")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Tasks")])])])]),t._v(" "),l("h2",{attrs:{id:"결론"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#결론","aria-hidden":"true"}},[t._v("#")]),t._v(" 결론")]),t._v(" "),l("p",[l("strong",[t._v("Spark")]),t._v("는 Latency 에서 다소 느린 점이 있지만, exactly-once 전송을 제공하고 다양한 워크로드 컴포넌트를 제공한다.")]),t._v(" "),l("p",[l("strong",[t._v("Storm")]),t._v("은 Latency 에서 유리하지만, Trident를 적용해야 exactly-once 전송을 제공하며 상태관리기능도 Trident를 통해서 적용하거나 자체개발을 해야 한다.")]),t._v(" "),l("p",[l("strong",[t._v("Samza")]),t._v("는 Latency 에서 유리하지만, 아직 마이너버전이고 At Least Once 전송만을 제공하고 있다.")]),t._v(" "),l("h2",{attrs:{id:"검색-패키지-비교"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#검색-패키지-비교","aria-hidden":"true"}},[t._v("#")]),t._v(" 검색 패키지 비교")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Feature")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Solr")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Elastic Search")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Community & Developers")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Apache Software Foundation and community support")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Single commercial entity and its employees")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Node Discovery")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Apache Zookeeper, mature and battle-tested in a large number of projects")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Zen, built into Elasticsearch itself, requires dedicated master nodes to be split brain proof")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Shard Placement")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Static in nature, requires manual work to migrate shards, starting from Solr 7 – Autoscaling API allows for some dynamic actions")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Dynamic, shards can be moved on demand depending on the cluster state")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Caches")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Global, invalidated with each segment change")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Per segment, better for dynamically changing data")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Analytics Engine")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Facets and powerful streaming aggregations")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Sophisticated and highly flexible aggregations")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Optimized Query Execution")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Currently none")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Faster range queries depending on the context")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Search Speed")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Best for static data, because of caches and uninverted reader")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Very good for rapidly changing data, because of per-segment caches")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Analysis Engine Performance")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Great for static data with exact calculations")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exactness of the results depends on data placement")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Full Text Search Features")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Language analysis based on Lucene, multiple suggesters, spell checkers, rich highlighting support")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Language analysis based on Lucene, single suggest API implementation, highlighting rescoring")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DevOps Friendliness")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Not fully there yet, but coming")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Very good APIs")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Non-flat Data Handling")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Nested documents and parent-child support")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Natural support with nested and object types allowing for virtually endless nesting and parent-child support")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Query DSL")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JSON (limited), XML (limited) or URL parameters")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JSON")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Index/Collection Leader Control")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Leader placement control and leader rebalancing possibility to even the load on the nodes")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Not possible")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Join")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Currently none")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Parent_type/Children_type")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Machine Learning")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Built-in – on top of streaming aggregations focused on logistic regression and learning to rank contrib module")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Commercial feature, focused on anomalies and outliers and time-series data")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Ecosystem")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Modest – Banana, Zeppelin with community support")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Rich – Kibana, Grafana, with large entities support and big user base")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RDBMS Ingestion")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("dataimportHandler")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("logstash")])])])]),t._v(" "),l("h2",{attrs:{id:"데이터-수집-패키지-비교"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#데이터-수집-패키지-비교","aria-hidden":"true"}},[t._v("#")]),t._v(" 데이터 수집 패키지 비교")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Feature")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Flume")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Fluentd")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Log Stash")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Sqoop")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("언어")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Ruby")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Ruby & Java")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Java")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("입력")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Avro Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Dummy Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Beats Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("FTP Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exec Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exec Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Elastic Search Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Hbase Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Forward Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exec Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HDFS Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JMS Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("File Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JDBC Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Monitor Agent Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NetCat TCP Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Syslog Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IRC Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kite Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NetCat UDP Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Tail Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JDBC Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Scribe Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TCP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JMS Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Sequence Generator Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UDP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Spooling Directory Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Eventlog Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Log4J Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stress Source Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Pipe Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Syslog Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Rabbit MQ Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Taildir Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Redis Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Thrift Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("S3 Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Twitter 1% firehose Source")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stdin Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STOMP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Syslog Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TCP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UDP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("XMPP Input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("출력")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Avro Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Copy Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CSV Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Accumulo Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Elastic Search Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Elastic Search Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Elastic Search Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("FTP Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("File Roll Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exec Filter Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Email Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HBase Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HBase Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exec Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Exec Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HDFS Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HDFS Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("File Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("File Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HIVE Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Hive Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Forward Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JDBC Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Mongo Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("InfluxDB Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IRC Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Mongo Replset Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IRC Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kate Connector")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Null Option")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kite Dataset Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Relabel Ouput")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Mongo DB Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Logger Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Rewrite Tag Filter Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Nagios Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MorphlineSolr Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Round Robin Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Open TSDB Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Null Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("S3 Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Pipi Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Thrift Sink")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stdout Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Rabbit MQ Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WebHDFS Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Redis Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("S3 Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Solr Http Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stdout Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STOMP Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Syslog Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TCP Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UDP Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Web HDFS Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("XMPP Output")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("버퍼")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Memory Channel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Memory Buffer")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Memory Queue")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JDBC Channel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("File Buffer")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Presistent Queue")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka Channel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("File Channel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Spillable Memory Channel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Pseudo Transaction Channel")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("구성")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Single")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Multi-Agent Flow")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Consolidation")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Multiplexing")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),l("h2",{attrs:{id:"메세지-전송-패키지-비교"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#메세지-전송-패키지-비교","aria-hidden":"true"}},[t._v("#")]),t._v(" 메세지 전송 패키지 비교")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Feature")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Kafka")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Rabbit MQ")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("클라이언트")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C / C++")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Clojure")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Python")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Erlang")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Go (AKA golang)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Haskell")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Erlang")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Perl")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(".Net")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Scala")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Clojure")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Java")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Ruby")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Python")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Node JS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Ruby")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Proxy (HTTP REST, etc)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PHP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Perl")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Swift")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Stdin / Stdout")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v(".Net (C#)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PHP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Objective-C")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Rust")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JS")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Alternative Java")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Go")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Storm")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Elixir")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Scala DSL")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Swift")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("기본 메시징 처리 방식")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Topic 방식 (발행 - 구독)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Queue 방식 (발생 - 소비)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer Group 설정해서 Queue 방식 사용")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MQTT 를 통해서 Topic 방식 사용")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("클라이언트 동작")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Client Pull")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Server Push")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("지원 프로토콜")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TCP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AMQP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MQTT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STOMP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("저장소")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("파일")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("메모리 / 파일")])])])]),t._v(" "),l("h2",{attrs:{id:"결론-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#결론-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 결론")]),t._v(" "),l("p",[l("strong",[t._v("Kafka")]),t._v("는 IO 방식과 프로토콜의 오버 헤드가 적어 스트리밍 형태의 "),l("em",[l("strong",[t._v("데이터 전송에 적합")])])]),t._v(" "),l("p",[l("strong",[t._v("Rabbbit MQ")]),t._v("는 표준 프로토콜을 제공하고 큐에 데이터가 유입되면 이벤트가 발행해서 클라이언트에 데이터를 전달하는 "),l("em",[l("strong",[t._v("이벤트 처리에 적합")])]),t._v(" 하다.")])])},[],!1,null,null,null);e.default=i.exports}}]);