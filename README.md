# actac.js
## 개요
[![NPM](https://nodei.co/npm/actac.png?compact=true)](https://nodei.co/npm/actac/)

actac.js는 아스키 문자를 [아희](https://aheui.github.io) 출력 코드로 변환하는 Node.js 모듈입니다.
원래 [아스키-아희 변환기](http://asciitoaheui.herokuapp.com)에 사용된 코드였으나 
아희 10주년을 맞이하여 아희의 부흥을 도모하고자 NPM으로 모듈을 배포해 재사용성을 높였습니다.


## 튜토리얼
#### 설치
명령행에서 NPM으로 설치 `npm install actac`
또는 전역으로 설치 `npm install -g actac`

#### 간단하게 쓰는 방법
```js
require('actac');
console.log("Hello, Aheui".aheui);
```

#### 귀찮게 쓰는 방법
```js
var actac = require('actac');
console.log(actac.aheui("Hello, Aheui");
```

#### 결과
```
밣밢따맣밗밮따밦따밙다맣밦밟따박따맣밦밟따반따맣밬발따밝따밦다맣밪밣다밨따맣밣밥따맣밟밠따반다맣밞밥다밣따맣밨밖따밦따밚다맣밝밦다밞따맣밬발따밝따맣하
```

#### + 왜 있는지 모르겠는 기능
```js
console.log("Hello, Aheui".hanbeone);
//  = actac.hanbeone("Hello, Aheui");
```
먼저 스택에 문자를 모두 담아두고 마지막에 한번에 출력해서 글자가 거꾸로 나옵니다.


## 라이센스
이 소프트웨어는 `THE BEER-WARE LICENSE (Revision 42)`를 따릅니다.
