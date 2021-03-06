# React로 영화 웹서비스를 만들자 !

## 먼저 기본적인 React 사용을 익히자 !

### 220410

React를 src로 import 하여 사용.
<br>
React.createElement를 활용하여 간단한 React의 동작을 알아봄.
<br>
ReactDOM을 활용하여 render하는 것도 알아봄.
<br>
처음 React의 동작만 설명하는 부분이라 이해하지 않아도 됌.
<br>
나중에 JSX를 사용하기 때문인가봄.

### 220411

React의 JSX를 사용하여 좀 더 간단하고 보기 쉽게 만듬.
<br>
JSX는 자바스크립트에 XML을 추가한 확장 문법인데 리엑트로 프로젝트를 개발할 때 사용된다.
<br>
브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태로 변환한다.

### 220412

React가 아닌 경우 일반 자바스크립트는 노드 정보가 바뀔때 마다 노드 트리를
<br>
처음부터 다시 생성한다.
<br>
근데 리엑트는 가상 DOM을 사용하여 우리가 보이는 부분(UI)만 수정하여 보여주고 나서 업데이트가 끝나면 일괄로 합쳐서 실제 DOM이 만들어 진다.
<br>
이후 처음 사용해본 React Hooks 중 useState() 함수를 사용했는데.
<br>
함수의 사용법은 다음과 같다.
<br>
const [number, setNumber] = useState(0);
<br>
const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값);
<br>
이는 데이터가 바뀔때 마다 컴포넌트를 리렌더링하고 UI를 새롭게 해주는 장점이 있다.
<br>
또한 state는 직접할당과 함수할당이 있는데 현재 state와 관련이 없는 값은
<br>
직접할당을 주어도 상관없지만 state의 변화(계산)를 주어 새로운 state값 을 원하면
<br>
함수할당을 해야한다.

간단한 예시로
<br>

1. 값으로 여러번
   <br>
   function onClick() {
   <br>
   setCounter(counter + 1);
   <br>
   setCounter(counter + 1);
   <br>
   setCounter(counter + 1);
   <br>
   setCounter(counter + 1);
   <br>
   setCounter(counter + 1);
   <br>
   }

   counter = 1

2. 함수로 여러번
   <br>
   function onClick() {
   <br>
   setCounter(current => current+ 1);
   <br>
   setCounter(current => current+ 1);
   <br>
   setCounter(current => current+ 1);
   <br>
   setCounter(current => current+ 1);
   <br>
   setCounter(current => current+ 1);
   <br>
   }

   counter = 5

로 나오게 된다.

강의에선 함수로 state를 할당하는 것이 안전하다고 이야기한다.

JSX에서 HTML의 class, for과 같은 문법 용어는 사용 못한다.
<br>
className 혹은 htmlFor과 같이 사용해야함.

### 220413

React에서 함수를 다른 함수에서 불러올 수 있는데
<br>
<MinutesToHours />와 같이 표시하여 불러올 수 있다.

html 태그 중 select와 option 태그를 활용하여 원하는 UI를 가져오도록 하였다.
<br>
이후 App 함수에 useState 함수를 새롭게 만들어 각 option들의 value 값을 받아와
<br>
value값에 맞는 option. 즉 UI를 가져오도록 하였다.

그리고 React를 사용할 때 자바스크립트 문법을 사용하고 싶다면
<br>
{} 중괄호를 활용하여 사용할 수 있다.
<br>
만약 중괄호를 활용하지 않는다면 html 화면에 text로 표시된다.

이후 Km to Mile을 숙제로 내주셔서 만들어 볼 예정이다.
Km to Mile 완료.

### 220414

설정가능한 컴포넌트를 배움.
<br>
마크업이나 스타일을 최대한 재사용할 수 있도록 함.
<br>
props의 사용으로 인자를 줄 수 있음.
<br>
자바스크립트에서 event.target의 느낌(?)
<br>
props.prop이름 으로 불러올 수 있으며, shortcut을 주로 사용한다고 함.
<br>
굳이 Object에서 꺼낼 필요가 없기 때문
<br>
<br>
re-Render을 할 때 불필요한 렌더링이 들어 간 경우 React.memo로 방지할 수 있음.
<br>
부모 컴포넌트를 변경 시 자식 컴포넌트도 re-render가 일어나면 불필요한 렌더링을 방지해준다.
<br>
<br>
propTypes로 prop의 type을 경고해준다.
<br>
이는 props에서 우리가 실수하는 부분을 잡아내기 위함이며, props의 기본값을 정할 수도 있다.
<br>
또한 isRequired를 사용하여 필수조건으로 만들 수도 있다.
<br>
<br>
<br>
<br>
React 설치

$ npx create-react-app my-app
<br>
<br>
<br>
<br>

React설치 이후 npm start를 실행하면 react가 실행된다.
<br>
<br>
컴포넌트 당 1개의 js파일을 가질 수 있으며 모듈화가 가능하다.
<br>
컴포넌트 별 스타일은 .module.css 파일을 생성하고 import를 사용하여 불러온다.
<br>
<br>
스타일은 className이나 id를 사용하고 import 이름과 함께 property에 적용한다.
<br>
<br>
예)
<br>
import styles from "./App.module.css";
<br>

div className={styles.tomato}
<br>
<br>
<br>
React를 설치하여 실행하게 되면 script로 import 할 필요가 없고 useState와 같이 Hook 사용 시 앞에 React.을 붙일 필요가 없어짐.
<br>
useEffect를 사용해봄.
<br>
코드를 실행하는데 있어 불필요한 리렌더링을 제어해준다.
<br>
useEffect(실행 함수, [ 디펜던시 ])와 같이 사용하며 1번만 렌더링하고 싶은 경우 디펜던시를 빈칸으로 두고, 디펜던시가 변함에 따라 실행하고 싶으면 디펜던시를 넣어줄 수 있다.
<br>
디펜던시는 여러개 넣어 줄 수 있음.
<br>
<br>
<br>
CleanUp Function

cleanup은 컴포넌트가 없어 질때 어떠한 결과를 보내고 싶어하거나 컴포넌트가 사라지거나 없어 질때 콘솔창에 표시하고 싶어 할 때 사용한다.
<br>
디펜던시가 비어 있는 경우는 컴포넌트가 사라질 때 cleanup 함수가 호출되며, 함수 앞에 return을 꼭 붙여줘야한다.
<br>
사실 실제 앱 개발 시 크게 사용하지 않는다고 한다.
<br>
허나 필요로하는 상황이 있을 수 있으므로 알아두는 것 이 좋음.

### 220415

ToDo List 제작
<br>
ToDo List에 DeleteBtn 구현
<br>
수업 진행을 위해 해당 내용을 블로그에 업로드 후 삭제
<br>
https://artjunior.tistory.com/56
<br>

### 220416

Coin Tracker 제작
<br>
원하는 USD로 얼마만큼의 암호화폐를 살 수 있는지 구현
<br>
수업 진행을 위해 해당 내용을 블로그에 업로드 후 삭제
<br>
https://artjunior.tistory.com/57
<br>
