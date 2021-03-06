# Boot

## Spring Boot 기동

### Linux Deploy Shell Script

리눅스 환경에서 쉽게 관리를 위해 _**Shell Script**_ 형태로 만들어 두어 관리한다.

#### start.sh

앱을 시작하고 해당 _**PID**_ 를 파일에 저장한다.

```bash
#!/bin/bash
java -jar myapp.jar & echo $! > ./pid.file &
```

#### stop.sh

저장된 _**PID**_ 를 사용하여 앱을 중지 한다.

```bash
#!/bin/bash
kill $(cat ./pid.file)
```

:::tip 참고자료
<https://code.i-harness.com/ko/q/195154c>
:::

#### Gradle 로 Spring Boot 기동

```bash
# gradle bootRun
```

#### 빌드 파일 기동

기본 기동

```bash
$ java -jar ./sq_wf-0.0.1-SNAPSHOT.jar
```

포트 `8888` 변경하여 기동

```bash
$ java -jar -Dserver.port=8888 ./sq_wf-0.0.1-SNAPSHOT.jar
```

`spring.profiles.active` 값 지정하여 기동

```bash
$ java -jar -Dserver.port=8888 -Dspring.profiles.active=release ./sq_wf-0.0.1-SNAPSHOT.jar
```

## 히카리 (Hikari CP)

Spring Boot 2.0 부터 지원 하는 JDBC Connection Pool 이다.

:::tip 참고자료
<http://jeong-pro.tistory.com/162>  
<http://netframework.tistory.com/entry/HikariCP-소개>
:::

## 타임 리프 (Thymeleaf)

스프링 부터에서 사용 가능한 뷰 (View) 들은 아래와 같은 종류가 있다.

* FreeMarker
* Groovy
* Thymeleaf
* Velocity
* JSP

이들 중에 `Thymeleaf` 에 관해서 알아보도록 하겠다.

:::tip 참고자료
<http://millky.com/@origoni/post/1144>  
<https://github.com/ihoneymon/spring-boot-orm-learn/blob/master/THYMELEAF_TEMPLATE_ENGINE.md>
:::