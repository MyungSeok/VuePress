# 1주차 (1 ~ 4 Chapter)

## Chapter 01 확장 가능한 언어

스칼라(Scala) 라는 이름은 확장 가능한 언어(Scalable) 라는 뜻이다.
이렇게 이름을 지은 이유는 스칼라를 사용자의 요구에 따라 자랄 수 있는 언어로 설계했기 때문이다.

> `scalable` 은 규모를 늘이고 줄이는게 자유롭다는 뜻이며, <br/>보통 규모가 늘어나거나 줄어들어도 성능이나 비용이 선형적으로 증가한다는 뜻이다.

스칼라는 객체지향 (Object Oriented) 과 함수형 (Functional) 프로그래밍 개념을 정적 타입 언어 (Statically Typed Language) 에 합쳐놓은 언어이다.

### 1.1  여러분의 마음에서 점점 자라나는 언어 (a language that grows on you)

```scala
var captial = Map("US" -> "Washington", "France" -> "Paris")
capital += ("Japan" -> "Tokyo")
println(capital("France"))
```

위와 같이 높은 수준의 간결하고, 불필요한 세미콜론이나 타입 지정으로 인해 지저분하지 않게 코드 작성이 가능하다.

이들의 공통적인 특징은 **연관맵**을 언어수준에서 지원한다는 점이다.

#### 새로운 타입을 키워가기

스칼라는 스칼라를 사용하는 사람들이 확장하고 변경할 수 있도록 설계했다. (Growing a language)

```scala
def factorial(x: BigInt): BigInt = 
  if (x == 0)
    1
  else 
    x * factorial(x - 1)
```

`factorial(30)` 을 호출하면 다음과 같은 결과를 볼 수 있다.

```scala
265252859812191058636308480000000
```

반환 타입인 `BigInt` 는 마치 내장 타입인것 처럼 보이지만 **스칼라 표준 라이브러리에 들어있는 평범한 클래스**일 뿐이다.

예를 들어 Java 에서 지원하는 `BigInteger` 를 사용한다면 다음과 같이 표현될 것 이다.

```scala
import java.math.BigInteger

def factorial(x: BigInteger): BigInteger = 
  if (x == BigInteger.ZERO)
    BigInteger.ONE
  else
    x.multiply(factorial(x.subtract(BigInteger.ONE)))
```

위와 같은 코드는 내장타입이 그에 맞는 메서드나 기능을 제공해줘야 하기 때문에 다양한 환경에서 유연하게 적용하기 어려울 것이다.

가령 십진수, 복소수, 유리수, 신뢰구간, 다항식 등의 모든 기능을 하나의 언어에서 모든것을 제공하는 것은 확장성이 좋지 않다.<br/>
스칼라는 언어가 기본적으로 지원하는것 처럼 사용자가 쉽게 사용할 수 있는 라이브러리를 제공하는 방식으로 사용자가 필요한 방향으로 확장하고 고칠 수 있게 허용한다.

#### 새로운 제어 구조 키워가기

스칼라의 확장성 원칙을 제어 구조에도 마찬가지로 적용된다.

이러한 확정성을 **액터 기반 동시선 프로그래밍 (Actor-based concurrent programming)** 스칼라 API 인 아카(Akka) 에서 볼 수 있다.

동시성 프로그래밍을 작성하는 일은 꽤 어려우며 자바의 스레드 모델은 **공유 메모리 (Shared Memory) 와 락 (Lock) 기반**으로 하며 코드를 보고 논리적으로 추론하기가 어렵다.<br/>코드에 숨어있는 경합 조건 (race condition) 이나 교착 상태 (deadlock) 이 없다고 확신하기는 어렵다.

안전한 대안은 얼랭 (Erlang) 프로그래밍에서 사용하는 **액터** 같은 메세지 전달 아키텍쳐이다.

다음 코드는 recipient 라는 **액터**에 메세지를 보내는 문장이다.

```scala
recipient ! msg
```

송신은 비동기적 (asynchronous) 이며 메세지를 보낸 액터는 수신가가 메세지를 수신할 때 까지 기다릴 필요 없이 즉시 다음 작업을 진행할 수 있다.

모든 액터는 우편함 (mailbox) 가 있으며 우편함에 도착한 메세지는 `receive` 블럭을 이용하여 처리한다.

```scala
def receive = {
  case Msg1 => ... // Msg1을 처리함
  case Msg2 => ... // Msg2를 처리함
}
```

주어진 여러 case 를 만족하는 메세지가 우편함에 없을 경우 액터는 동작을 멈추가 다음 메세지가 도착할 때 까지 기다린다.

다음은 체크섬 (checksum) 계산 서비스를 구현하는 아카 액터다.

```scala
class CheckSumActor extends Actor {
  var sum = 0
  
  def receive = {
    case Data(byte) => sum += byte
    case GetChecksum(requester) => 
      val checksum = ~(sum & 0xFF) + 1
      requester ! checksum
  }
}
```

위 코드는 `receive` 블럭을 정의한 후 <br/>
`Data` 메세지를 받으면 그 안에 들어있는 데이터 (byte) 에 sum 변수를 더한다.
`GetChecksum` 메세지를 받으면 sum 의 현재값을 이용하여 체크섬을 계산한 다음 요청한 `requester` 에게 `requester ! checksum` 이라는 송신 명령을 사용하여 결괏값을 전송한다.

이 코드에서 `receive` 나 메세지 송신 (!) 은 스칼라가 제공하는 내장 기능이 아니라 액터 라이브러리에서 제공하는 메서드에 불과하며, 스칼라 프로그래밍과는 별개의 정의된 메서드를 동작시키는 것이다.

액터 모델이 분산 컴퓨팅을 구현하는데 매우 적절한 도구이지만 이는 라이브러리임에도 불구하고 스칼라 언어와 하나인것처럼 보이며, 이는 마치 애초에 그 기능을 원래 언어가 지원하는것 처럼 느끼게 할 수 있다.

### 1.2 스칼라의 확장성이 가능한 이유

스칼라의 확장성에 가장 큰 영향을 끼치는 요인은 **객체 지향과 함수형 프로그래밍의 조합**이다.

스칼라에서는 함숫값도 객체이다.<br/>
앞에서 보여준 액터의 개념은 함수와 객체를 통합하지 않았다면 구현할 수 없었을 것이다.

#### 스칼라는 객체지향적이다

스칼라는 순수한 형태의 객체지향 언어이다.

모든 값이 객체이며, 모든 연산은 메서드 호출이다.<br/>
가령 `1 + 2` 라고 쓰면, 실제로는 `Int` 클래스가 정의한 `+` 라는 이름의 메서드를 호출하는 것이다.

스칼라의 트레이트 (trait) 를 이용하면 믹스인 (mixin) 조합을 통하여 클래스의 여러가지 측면을 각각 별도의 트레이트에 캡슐화 (encapsulate) 할 수 있다.

트레이트를 사용하면 다중 상속의 고전적 문제인 '다이아몬드 상속' 을 피할 수 있다.

> #### 다이아몬드 상속
> 동일한 클래스를 여러 경로를 통해 여러번 상속하는 경우<br/>
> [Java 에서는 다중 상속을 지원하지 않으며](https://siyoon210.tistory.com/125) C++ 같은 경우에도 안티패턴으로 사용을 지양한다.

#### 스칼라는 함수형이다

함수형 프로그래밍은 두가지 주요 아이디어에서 방향이 결정된다.

#### 1급 계층 (First Class) 이다

함수형 언어에서의 함수는 정수나 문자열과 동일한 자격을 갖는 값이다.<br/>
이는 다음과 같은 특성을 갖는다.

* 함수를 다른 함수의 인자로 넘길수 있다.
* 함수 안에서 결과로 함수를 반환할 수 있다.
* 함수를 변수에 저장할 수 있다.
* 함수안에서 함수를 정의할 수 잇다.

#### 프로그램은 입력값을 출력값으로 변환해야 하며, 데이터를 그 자리에서 변경하지 말아야 한다는 점이다

예를 들면 `s.replace(",", ":")` 은 새로운 문자열 객체가 생기며 기존 `s` 와는 다르다.<br/>
이는 변경 불가능 (immutable) 과 변경 가능 (mutable) 의 특성과도 유사한데 각 언어의 성격마다 다르다.<br/>
변경 불가능한 데이터 구조는 함수형 프로그램의 초석 중 하나이다.<br/>
스칼라의 경우 변경 불가능한 데이터 구조로써 리스트, 튜플, 맵, 집합을 제공한다.

또한 `replace` 와 같이 시스템에 다른 영향을 주지 않는 메서드를 **참조 투명 (referentially transparent) 하다** 한다.

함수형 언어는 변경 불가능한 데이터와 참조 투명한 메서드를 장려한다.

### 1.3 왜 스칼라인가?

스칼라는 확장성 말고도 다음 네가지 측면이 특징적이다.

* 호환성
* 간결성
* 고수준 추상화
* 고급 정적 타입

#### 스칼라는 호환성이 좋다

스칼라 프로그램은 JVM의 바이트 코드로 컴파일 된다.

완전한 상호운용성 (interoperability) 의 또 다른 측면으로는 스칼라가 자바 타입을 아주 많이 재사용한다는 점이다.

자바의 타입을 재사용하는 뿐만이 아니라 재정의 (redefinition) 하여 사용하는 것도 가능하다.

예를 들면 스칼라 문자열은 자신을 정수나 부동소수점으로 바꾸는 `toInt` 나 `toFloat` 를 지원한다.

스칼라에서는 암시적 형변환 (implicit conversion) 을 정의할 수 있다.

#### 스칼라는 간결하다

프로그램을 이해하고 읽기 위한 노력이 덜 들고, 그에 따른 오류가능성이 줄어든다는 것이다.

```java
class MyClass {
  private int index;
  private String name;

  public MyClass(int index, String name) {
    this.index = index;
    this.name = name;
  }
}
```
 
위 자바 코드를 아래와 같은 스칼라 코드로 바꿀수 있다.

```scala
class MyClass(index: Int, name: String)
```

스칼라의 타입 추론 (type inference) 은 이런 간결성을 가능하게 하는 또 다른 요소이다.<br/>
반복적으로 타입 정보를 쓸 필요가 없기 때문에, 프로그램이 덜 어수선하고 더 읽기 좋아진다.

스칼라는 일반적인 동작들을 묶어서 강력한 라이브러리를 정의할 수 잇는 도구를 많이 제공한다.<br/>
라이브러리 클래스의 여러 측면을 각각 별도의 트레이트에 분리해 넣을수 있어 유연하게 사용이 가능하다.

#### 스칼라는 고수준이다

아래 코드는 자바에서 동작되는 문자열에 대문자가 들어있는지 확인하는 코드이다.

```java
boolean nameHasUpperCase = false;

for (int i = 0; i < name.length(); ++i) {
  if (Character.isUpperCase(name.charAt(i))) {
    nameHasUpperCase = true;
    break;
  }
}
```

위 코드는 스칼라로 아래와 같이 쓸 수 잇다.

```scala
val nameHashUpperCase = name.exists(_.isUpper)
```

물론 Java 8 이후부터는 람다 (lambda) 와 스트림 (stream) 에 대한 지원이 들어갔기 때문에 스칼라에서도 비슷한 연산이 가능해졌다.

```java
boolean nameHasUpperCase = 
  name.chars().anyMatch(
    (int ch) -> Character.isUpperCase((char) ch)
  )
```

이전 버전에 비하면 엄청난 개선이지만 Java 8 코드는 여전히 스칼라 코드보다는 번잡스러워 보인다.

#### 스칼라는 정적 타입 언어다

스칼라는 아주 진보적인 정적 타입 시스템 (static type system) 을 가진 언어로써 다음을 제공한다.

* 자바와 비슷한 수준의 중첩 클래스 타입
* 제네릭 (Generic) 과 파라미터화한 타입을 허용
* 교집합 (intersection) 을 사용하여 타입을 조합할 수 있다
* 추상 타입 (abstract type) 을 사용하여 어떤 타입에서 상세 내용을 감출 수 있다

재사용이 가능한 컴포넌트의 인터페이스를 이루는 멤버의 타입 시그니쳐 (signature) 는 명시해야한다.

### 1.4 스칼라의 뿌리

스칼라는 많은 언어들로부터 아이디어와 영향을 받아 왔다.

스칼라의 추상화 타입은 제네릭타입보다 더 객체지향적인 대안이 될 수 있다.

스칼라 트레이트는 더 유연한 컴포넌트 조립을 허용하며, 익스트랙터 (extractor) 는 패턴 매치를 내부 표현과 분리하는 방법을 제공한다.

### 1.5 결론

스칼라의 타입 시스템과 함수형 프로그래밍은 프로그램의 사고방식을 바꿀 수 있는 지적인 경험을 제공한다는 사실을 체감한다.


## Chapter 02 스칼라 첫걸음

### 2.1 1단계: 스칼라 인터프리터 사용법을 익히자

스칼라를 시작하기 가장 쉬운 방법은 스칼라 인터프리터 (대화형 Shell) 을 사용하는 것이다.

표현식 (expression) 을 입력하면 인터프리터가 그 표현식을 계산해서 결괏값을 출력할 것이다.

```bash
$ scala
Welcome to Scala version 2.11.7
Type in expressions to have them evaluated.
Type :help for more information.

scala>
```

1 + 2 와 같은 표현식을 입력하고 엔터를 누르자

```scala
scala> 1 + 2
```

다음과 같이 응답한다.

```scala
res0: Int = 3
```

`res{번호}` 의 식별자 (identifier) 는 나중에 사용할 수 있다.

만약 `res0` 가 `3` 으로 정해졌으면 아래와 같이 해당 식별자에 3을 곱하면 9를 출력한다.

```scala
scala> res0 * 3
res1: Int = 9
```

Hello World 출력은 다음과 같다.

```scala
scala> println("Hello, world!")
Hello, world!
```

### 2.2 2단계: 변수를 정의해보자 

스칼라에는 두가지 종류의 변수가 있는데 `val` 과 `var` 이며 특징은 다음과 같다.

* val : 불변 (immutable)
* var : 가변 (mutable)

또한 스칼라는 아래와 같이 타입 추론이 가능하다.

```scala
scala> val msg = "Hello, world!"
msg: String = Hello, world!
```

### 2.3 3단계: 함수를 정의해보자

스칼라에서는 함수의 정의를 다음과 같이 한다.

```scala
def max(x: Int, y: Int): Int = {
  if (x > y)
    x
  else 
    y
}
```

위 코드는 아래와 같이 중괄호를 생략하여 표현이 가능하다.

```scala
def max(x: Int, y: Int) = if (x > y) x else y
```

스칼라 컴파일러가 함수의 반환 타입을 반드시 지정하도록 요구하는 경우가 있는데 이는 **함수가 재귀적 (recursive) 이라면 반드시 반환 타입을 명시해야 한다.**

만약 함수가 어떤 관심이 있을만한 결과를 돌려주지 않는 경우가 바로 아래와 같은 경우다.

```scala
def greet() = println("Hello, world!")
```

`greet()` 함수를 정의하면 인터프리터가 `greet: ()Unit` 이라고 응답할 것이다.

`Unit` 은 `greet` 함수의 반환 타입인데 이는 우리가 관심을 가질 만한 값을 반환하지 않는다는 뜻이다.<br/>
이는 자바의 `void` 와 비슷한 역활을 하며 스칼라에서는 모두 `Unit` 을 반환하는 메서드가 된다.

즉, 반환 타입이 `Unit` 인 메서드는 부수효과를 위해서만 실행하는 함수이다.

### 2.4 4단계: 스칼라 스크립트를 작성해보자

```scala
println("Hello, " + args(0) + "!" )
```

```bash
$ scala helloarg.scala planet

Hello, planet!
```

스칼라 배열의 첫번째 원소는 `args[0]` 이 아니고 `args(0)` 이다.

### 2.5 5단계: while로 루프를 돌고, if로 결정해보자

```scala
var i = 0

while (i < args.length) {
  if (i != 0)
    println(" ")
  println(args(i))
  i += 1
}
```

이 코드는 명령형 스타일이며 작동을 지시하는 명령을 한 번에 하나씩 사용하는 방식이다.

> 위 코드는 예시일 뿐 다음에 배울 배열의 인덱스를 사용해 이터레이션 하는 것이 더 나은 접근방법이다. 

### 2.6 6단계: foreach와 for를 사용해 이터레이션해보자

스칼라를 더 잘 알게 될수록 함수형 (functional) 스타일로 코드 작성을 하게 될 것이다.

```scala
args.foreach(arg => println(arg))
```

위 코드는 함수 리터럴 (function literal) 을 사용하였지만 더 정확한 형태는 다음과 같다.

```scala
args.foreach(println)
```

함수 리터럴 문법은 파라미터 이름의 목록이 괄호 안에 오고, 그 위에 오른쪽 화살표, 마지막으로 함수의 본문이 있어야 한다.<br/>

```scala
(x: Int, y: Int) => x + y
```

### 2.7 결론

스칼라의 기본적은 문법을 알아봤으니 다음장에서는 좀 더 여러운 주제로 넘어간다.

## Chapter 03 스칼라 두 번째 걸음

2장에서는 스칼라의 기초를 3장에서는 스칼라에서 스크립트를 작성할 수 있을 정도의 충분한 지식을 쌓을수 있다. 

### 3.1 7단계: 배열에 타입 파라미터를 지정해보자

스칼라에서는 `new` 를 사용해 객체를 인스턴스화 할 수 있다.

다음 코드는 스칼라에서 `java.math.BigInteger` 인스턴스를 만들고 값 `"12345"` 를 인스턴스화 한다.

```scala
val big = new java.math.BigInteger("12345")
```

배열을 타입으로 파라미터화 하는 방법이다.

```scala
val greetStrings = new Array[String](3)

greetStrings(0) = "Hello"
greetStrings(1) = ", "
greetStrings(2) = "world!\n"

for (i < 0 to 2)
  print(greetStrings(i))
```

배열의 첫번째 요소를 접근하려면 자바에서는 `greetStrings[0]` 이지만 스칼라에서는 `greetStrings(0)` 이다.

`for` 반복문의 코드중에 나타나는 스칼라의 특징은 **메서드가 파라미터를 하나만 요구하는 경우, 그 메서드를 점(.)과 괄호 없이 호출할 수 있다는 점**이다.

이 예에서 `to` 는 실제로 `Int` 인자를 하나만 받는 메서드이며 `0 to 2` 는 내부적으로 `(0).to(2)` 라는 메서드 호출로 바뀐다.

> 스칼라는 모든 객체가 함수이다.

전통적으로 `1 + 2` 라는 코드는 `(1).+(2)` 라고도 쓸 수 있다.

변수 하나 이상의 값을 괄호로 둘러싸서 호출하면 스칼라는 그 코드를 변수에 대해 `apply` 라는 메서드를 호출하는 것으로 바꾼다.

즉, `greetStrings(i)` 는 `greetStrings.apply(i)` 로 바뀐다.

마찬가지로 **어떤 변수 뒤에 괄호로 둘러싼 인자들이 있는 표현식에 할당 하면, 컴파일러는 인자와 등호, 오른쪽값등을 모두 넣어 `update` 메서드를 호출한다.**

즉 `greetStrings(0) = "Hello"` 는 `greetStrings.update(0, "Hello")` 로 바뀐다.

하지만 위 코드는 개념을 보여주려는 의도로 스칼라에서는 추천하지 않는 코드이며 더 좋은 방법을 사용하는 코드는 다음과 같다.

스칼라에서는 타입 추론이 가능하기 때문에 아래와 같이 배열을 만들고 초기화 할 수 있다.

```scala
val numNames = Array("zero", "one", "two")
```

위에서 언급한 것 처럼 위 코드를 좀 더 장황하게 만들면 아래와 같다.

```scala
val numNames = Array.apply("zero", "one", "two")
```

### 3.2 8단계: 리스트를 사용해보자

함수형 프로그래밍의 가장 큰 착안점 하나는 **메서드에 부수효과가 없어야 한다**는 점이다.

메서드의 유일한 동작은 계산을 해서 값을 반환하는 것 뿐이다.

리스트를 만들고 초기화하는 방식은 다음과 같다.

```scala
val oneTwoThree = List(1, 2, 3)
```

리스트에 원소를 추가하는 방식은 다음과 같이 이루어진다.

```scala
val twoThree = List(2, 3)
val oneTwoThree = 1 :: twoThree

println(oneTwoThree)
```

연산자 콘즈 (::) 를 사용하여 처리하는데 이는 연산자 결합법칙에 의거하여 이후 5.9 절에서 설명한다.

위 코드는 다음과 같은 결과를 볼 수 있다.

```scala
List(1, 2, 3)
```

빈 리스트를 `Nil` 로 줄여 쓸 수 있어 이를 이용하여 리스트를 초기화 할 수 있다.

```scala
val oneTwoThree = 1 :: 2 :: 3 :: Nil

println(oneTwoThree)
```

리스트와 리스트 간을 붙일 때는 `:::` 을 사용한다.

```scala
List("a", "b") ::: List("c", "d", "e")
```

### 3.3 9단계: 튜플을 사용해보자

튜플은 리스트와 다르게 동시에 문자열과 정수를 함께 사용가능하다.

튜플은 다음과 같이 사용할 수 있다.

```scala
var pair = (99, "Luftballons")

println(pair._1)
println(pair._2)
```

튜플을 인스턴스화하고 나서 각 원소에 접근하려면, 점 (.) 과 밑줄 (_) 다음에 1부터 시작하는 인덱스를 넣는다. (0 이 아닌 1부터 시작)

```scala
99
Luftballons
```

튜플의 실제 타입은 내부에 들어 있는 원소의 갯수와 각각의 타입에 따라 바뀐다.

위 튜플은 `Tuple2[Int, String]` 이다.

```scala
('u', 'r', "the", 1, 4, "me")
```

위 튜플의 타입은 다음과 같다.

```scala
Tuple6[Char, Char, String, Int, Int, String]
```

### 3.4 10단계: 집합과 맵을 써보자

스칼라의 목적은 함수형 스타일과 명령형 스타일의 장점을 모두 취할수 있게 돕는것이다.

이를 위해 스칼라 컬렉션 라이브러리에서는 변경 가능한 컬렉션과 변경 불가능한 컬렉션을 구분해놓는 곳이 있다.

예를 들어 배열은 항상 변경 가능하지만, 리스트는 항상 변경 불가능하다.<br/>
하지만 집합 혹은 맵은 변경한 것과 변경 불가능 것을 모두 제공한다.

이는 **스칼라에서는 클래스 계층 안에서 변경 가능성을 모델링 하기 때문이다.**

스칼라에서 제공하는 트레이트 (trait) 을 사용하여 확장 (extends) 하거나 혼합 (mixed) 하여 사용이 가능하다.

![스칼라 집합의 클래스 계층도](/img/A117.png)

위 그림처럼 변경 가능하거나 혹은 변경 불가능한 클래스를 임포트 (import) 하여 사용한다.

다음은 변경 불가능한 집합을 생성, 초기화, 사용하는 방법이다.

```scala
var jetSet = Set("Boeing", "Airbus")
jetSet += "Lear"
println("jetSet.contains("Cessna")
```

위 코드의 `Set` 은 `scala.collection.immutable.Set` 의 동반 객체에 있는 `apply` 를 호출 하였다.

만약 변경 가능한 집합을 사용하고 싶다면 아래와 같이 `scala.collection.mutable` 을 임포트 (import) 하면 된다.

```scala
import scala.collection.mutable

val moiveSet = mutable.Set("Hitch", "Poltergeist")
movieSet += "Shrek"
println(movieSet)
```

`movieSet += "Sherk"` 대신에 `moiveSet.+=("Shrek")` 이라고 쓸 수 있다.

변경 가능한 맵은 위와 유사하게 아래와 같이 사용하면 된다.

```scala
import scala.collection.mutable

val treasureMap = mutable.Map[Int, String]()

treasureMap += (1 -> "Go to island.")
treasureMap += (2 -> "Find big X on ground")
treasureMap += (3 -> "Dig.")

println(treasureMap(2))
```

```scala
Find big X on ground.
```

변경 불가능한 맵을 생성, 초기화, 사용은 다음과 같다.

```scala
val romanNumeral = Map(
  1 -> "I", 2 -> "II", 3 -> "III", 4 -> "IV", 5 -> "V"
)
println(romanNumeral)
```

스칼라가 `->` 를 모든 객체에 적용 가능하게 만들 수 있는 이유는<br/> 
스칼라의 다양한 매커니즘 중 하나인 **암시적 변환 (implicit conversion) 이 일어나기 때문**이다. (21장)

> 기본적으로 컬랙션 클래스를 호출하면 변경 불가능한 클래스를 호출하는 것 같음

### 3.5 11단계: 함수형 스타일을 인식하는 법을 배우자

함수형 스타일의 사용을 권장 하는데, 코드상에서 `var` 대신에 `val` 을 사용하여 프로그래밍 하도록 노력하자.

이는 더더욱 코드를 함수적으로 동작 시키도록 만들수 있으며, 내부적으로는 부수효과를 없애도록 유도하기 때문이다.

부수효과가 절대적으로 나쁜건 아니지만 최대한 지양하도록 하자

### 3.6 12단계: 파일의 내용을 줄 단위로 읽자

어떤 파일의 모든 줄의 문자 개수를 줄을 잘 맞춰 출력하기

```scala
import scala.io.Source

def widthOfLength(s: String) = s.length.toString.length

if (arg.length > 0) {
  val lines = Source.formFile(args(0)).getLines().toList
   
  val longestLine = lines.reduceLeft(
    (a, b) => if (a.length > a.length) a else b
   )

  val maxWidth = widthOfLength(longestLine)

  for (line <- lines) {
    val numSpaces = maxWidth - widthOfLength(line)
    val padding = " " * numSpaces
    println(padding + line.length + " | " + line)
  }
} else
  Console.err.println("Please enter filename")
```

### 3.7 결론

스칼라 스크립트 사용 준비는 끝났고, 각 주제에 대해 더 상세하게 알아본다.

## Chapter 04 클래스와 객체

2장과 3장에서 스칼라의 클래스와 객체에 대한 기본적인 사항은 살펴보았다.

이 장에서는 다음 내용들을 살펴본다.

* 클래스 (class)
* 필드 (field)
* 메서드 (method)
* 세미콜론 추론 (semicolon interface)

또한 애플리케이션을 작성하기 위한 싱글톤을 어떻게 사용할지 살펴본다.

자바와 비슷한 개념이지만 완전히 같지는 않다.

### 4.1 클래스, 필드, 메서드

클래스는 객체에 대한 청사진이다.

클래스를 정의하고 나면 `new` 를 사용하여 객체를 만들 수 있다.

```scala
class ChecksumAccumulator {
  // 여기 클래스의 정의가 들어간다.
}
```

클래스 안에는 변수와 메서드를 넣을수 있으며 이를 멤버 (member) 라고 한다.

이후 `ChecksumAccumulator` 타입의 객체를 만들고 싶다면 다음과 같이 할 수 있다.

```scala
new ChecksumAccumulator
```

클래스를 인스턴스화 (instanciate) 할 때, 스칼라 런타임은 해당 객체의 상태 (각 변수의 내용) 를 담을 메모리를 확보한다.<br/>
각 클래스를 여러 변수에 인스턴스화 하면 그 결과에 따라 인스턴스 객체는 프로그램 진행에 따라 변할 수 있다.

**객체의 강건성 (robustness) 를 추구하는 한 가지 중요한 방법은 객체의 상태 (인스턴스 변수 값 전체) 를 해당 인스턴스가 살아 있는 동안 항상 바르게 유지하는 것이다.**

**이는 클래스 내부 필드를 비공개 (private) 로 만들어서 외부에서 직접 접근할 수 없도록 하는 것 이다.**<br/>
비공개 필드는 같은 클래스 안에 정의한 함수에서만 접근 가능하기 때문에, 상태를 변경하는 코드를 클래스 내부로 한정하는 효과가 있다.

스칼라 메서드 파라미터는 val (immutable: 불변) 이라는 점 이다.

> 스칼라 파리미터가 `val` 인 이유는 `val` 이 분석하기 더 쉽기 때문이다. <br/>
> `val` 의 경우 분석을 위해 나중에 재할당해서 값이 바뀌는지 살펴볼 필요가 있다.<br/><br/>
> 반면에 `var` 은 추적해야 한다.

부수효과만을 위해 실행되는 메서드를 프로시저 (procedure) 라고 한다.

### 4.2 세미콜론 추론

아래와 같이 한줄에 여러문장을 넣으려면 다음과 같이 꼭 중간에 세미콜론을 넣어야 한다.

```scala
val s = "hello"; println(s)
```

### 4.3 싱글톤 객체

스칼라는 싱글톤 객체를 지원한다.

`class` 라는 키워드 대신 `object` 라는 키워드로 시작한다.

```scala
import scala.collection.mutable

object ChecksumAccumulator {
  private val cache = mutable.Map.empty[String, Int]

  def calculate(s: String): Int = 
    if (cache.contains(s)) 
      cache(s)
    else {
      val acc = new ChecksumAccumulator
      for (c <- s)
        acc.add(c.toByte)
      val cs = acc.checksum()
      cache += (s -> cs)
      cs
    }
}
```

어떤 싱글톤 객체의 이름이 어떤 클래스와 같을 때, 그 객체를 클래스의 동반객체 (companion object) 라고 한다.

클래스와 동반 객체는 반드시 같은 소스파일 안에 정의해야 한다.

> 자바와 같이 클래스나 객체를 파일 이름과 동일하게 구성하지 않아도 되지만 개발의 편의성을 위해서 파일변과 클래스명을 동일하게 유지하는 것을 권장한다.

동반 클래스가 없는 싱글톤 클래스를 독립객체 (standalone object) 라고 한다.

### 4.4 스칼라 애플리케이션

스칼라 프로그램을 실행하려면 `Array[String]` 을 유일한 인자로 받고 `Unit` 을 반환하는 `main` 이라는 메서드 이름을 가진 독립 싱글톤 객체 이름을 알아야 한다.

위 조건을 만족하는 `main` 메서드만 있으면 어떤 독립 객체든 애플리케이션의 시작점을 알 수 있다.

```scala
import ChecksumAccumulator.calculate

object Summer {
  def main(args: Array[String]) {
    for (arg <- args)
      println(args + ": " + calculate(arg))
  }
}
```

> 스칼라는 항상 `java.lang` 과 `scala` 패키지의 엠버를 암시적으로 임포트 한다.

### 4.5 App 트레이트

스칼라는 타이핑 수고를 덜 수 잇는 scala.App 이라는 트레이트를 제공한다.

트레이트를 사용하기 정의할 싱글톤 뒤에 `extends App` 이라고 써야 한다.<br/>
그 후, `main` 메서드를 적은 대신 `main` 메서드에 넣고 싶은 코드를 직접 싱글톤 객체를 중괄호 사이 (바디) 에 넣는다.

```scala
import ChecksumAccumulator.calculate

object FallWinterSpringSummer extends App {
  for (season <- List("fall", "winter", "spring"))
    println(season + ": " + calculate(season))
}
```

이때 `args` 라는 문자열의 배열을 사용하여 명령행 인자에 접근할 수 있다.

### 4.5 결론

스칼라의 기본적인 사항을 알아봤다.

다음장에서는 스칼라의 기본타입과 활용하는 방법을 배울것이다.

## Chapter 05 기본 타입과 연산

스칼라는 **암시적 변환 (implicit conversion)** 을 통해 자바가 제공하는 연산 외의 여러 연산을 추가로 제공함으로써 기본타입이 얼마나 풍부해질 수 있는지 확인할 수 있다.

### 5.1 기본 타입

* 정수형 타입 (intergral type) : `Byte`, `Short`, `Int`, `Long`, `Char`
* 수 타입 (numeric type) : `Float`, `Double`

### 5.2 리터럴

스칼라의 모든 타입은 리터럴 (literal) 로 적을수 있다.

> **리터럴**<br/>
> 상숫값을 코드에 직접 적는 방법

#### 정수 리터럴

```scala
val hex = 0x5
// Int = 5

val hex2 = 0x00FF
// Int = 255

val magic = 0xcafebebe
// Int = -889275714
```

#### 부동소수점 리터럴

```scala
val big = 1.2345
// Double = 1.2345

val bigger = 1.2345e1
// Double = 12.345

val biggerStill 123E45
// Double = 1.23E47
```

#### 문자 리터럴

```scala
val a = 'A'
// Char = A

val d = '\u0041'
// Char = A
```

#### 문자열 리터럴

```scala
val hello = "Hello"
// String = Hello
```

```scala
println("""Welcome to Ultamix 3000
           Type "HELP" for help.""")
```

위 코드의 결과는 아래와 같다.

```scala
Welcome to Ultamix 3000
           Type "HELP" for help.
```

이는 두번째 줄에 공백이 들어갔기 때문인데, 이 문제해결을 위해서는 `stripMargin` 문자열에 대해 호출하여 처리한다.


```scala
println("""|Welcome to Ultamix 3000
           |Type "HELP" for help.""".stripMargin)
```

이제 코드가 원하는 대로 동작한다.

```scala
Welcome to Ultamix 3000
Type "HELP" for help.
```

#### 심볼 리터럴

```scala
val s = 'aSymbol
// Symbol = 'aSymbol
```

#### 불리언 리터럴

```scala
val bool = true
// Boolean = true

val full = false
// Boolean = false
```

### 5.3 문자열 인터폴레이션

스칼라는 인터폴레이션 (interpolation) 을 위한 메커니즘을 포함한다.

기본적으로는 `s` 와 `f` 를 제공한다.

```scala
s"The answer is ${6 * 7}."
// The answer is 42
```

`f` 무자열 이터폴레이션을 사용하면 내장된 표현식에 대해 `printlnf` 스타일의 형식을 지정할 수 있다.

```scala
val pi = "Pi"

f"$pi is approximately ${math.Pi}.8f."
// String = Pi is approximately 3.14159265
```

### 5.4 연산자는 메서드다

스칼라는 기본타입에 대해 풍부한 연산자를 제공한다.

모든 메서드는 연산자가 될 수 있다.

1개의 인자를 받는 메서드인 경우 아래와 같이 축약한 표현이 가능하다. <br/>
다음은 같은 표현의 코드이다.

```scala
val s = "Hello, world!"

s.indexOf('o')

or 

s indexOf 'o'

// Int = 4

```

```scala
-2.0

or

(2.0).unary_-

// Double = -2.0
```

```scala
val s = "Hello, world!"

s.toLowerCase()

or 

s toLowerCase

// String = hello, world!
```

### 5.5 산술연산

모든 수 타입에 더하기 (+), 빼기 (-), 곱하기 (*), 나누기 (/), 나머지 (%) 를 중위 연산자를 사용해 계산할 수 있다.

### 5.6 관계 연산과 논리연산

수 타입을 크다 (>), 작다 (<), 크거나 같다 (>=), 작거나 같다 (<=) 라는 관계 연산자를 사용해 비교 가능하며 그 결과는 `Boolean` 값으로 반환한다.

논리 연산으로는 논리곱 (&&, &), 논리합 (||, |) 이 있다. <br/>
각각은 두 `Boolean` 피 연산자를 취하며 `Boolean` 결괏값을 내놓는다.

> 스칼라에서 && 와 || 연산은 자바와 마찬가지로 쇼트 서킷 (short circuit: 회로) 연산이다.

### 5.7 비트 연산

* 비트곱 (&)
* 비트합 (|)
* 비트 배타합 (^)
* 단항 비트 반전 연산자 (~)

### 5.8 객체 동일성

두 객체가 같은지 비교하고 싶다면 `==` 을 사용할 수 있고 같지 않은지 비교하려면 `!=` 을 사용한다.

### 5.9 연산자 우선순위와 결합 법칙

표현식에서 어느 부분을 우선적으로 실행할지 결정하는 방식이다.

일반적으로 결합법칙을 따른다 (곱하기 / 나누기 > 더하기 / 빼기)

### 5.10 풍부한 래퍼

암시적 변환에 따른 방법으로 스칼라 API 를 통해 확인 가능하다.

### 5.11 결론

이번장에서 가장 중요한 사항은 **스칼라에서는 연산자가 메서드 호출이라는 사실**, **스칼라 기본타입에 더 유용한 메서드를 제공해주는 풍부한 레퍼 클래스로 변환하는 암시적 변환이 존재**한다는 점이다.