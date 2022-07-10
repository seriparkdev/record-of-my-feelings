# record-of-my-feelings
- [설계](#설계)
- [트러블슈팅](#트러블슈팅)
- [학습내용](#학습내용)
## 설계
### 목표
- `react`와 `typescript`를 이용해 기분 기록 웹사이트 만들기
  - `typescript` 사용법 익히기
  - `tailwind` 사용법 익히기
### 기술 스택
- typescript
- react
- tailwind
### 레이아웃
- 로고 이미지
- 응원 텍스트
  - API 사용. 혹은 랜덤으로 직접 만든 텍스트 띄움.
- 입력 받은 이모티콘의 개수를 기분별로 표시
- 기분 기록장
  - 모달에서 사용자가 선택한 이모티콘 삽입
  - 이모티콘 click or hover 시 적었던 일기가 뜸
- 기분 이모티콘 추가 버튼
  - 기분 이모티콘, 일기 입력 받는 모달 생성
<img src="https://user-images.githubusercontent.com/104069346/175812597-f03ea43f-a51c-4bda-b8f4-ef5c66327bc6.jpg"></img>

## 트러블슈팅
### 문제
index를 button의 value에서 가져오려 함.
**button element에는 `event.target.value`의 `value` 속성이 없음.**

### 해결
 - 애초에 증감 연산자나 +1을 이용해 value 값을 계속 변경시켜 index를 만드는 것은 불안정.
 - 고유의 값(name, id...)을 넣어주는 게 좋음.
 - 인덱스 X -> id 추가.
 - button X -> input.
 - input에도 value 없음. 
 - `e.target as HTMLInputElement`로 해결.
</br>

### 문제
모달에서 고른 이모지를 출력하는 문제.

### 해결
1. 이름과 이미지 파일을 넣어둔 객체 배열과 선택한 이모지의 value 값을 비교해 png를 출력하는 방법.
 - **모달 컴포넌트에서 문제를 해결하는 게 복잡하지 않은 방식. 수정 필요.**
</br>

2. 모달 컴포넌트에서 useState를 이용해 상황에 따라 이미지 파일을 저장하는 방법.

  - 조건문에 useState를 사용해 이를 해결하려 했으나, 계속해서 값이 바뀌지 않는 오류가 발생.
    - `Don’t call Hooks inside loops, conditions, or nested functions.`
    - `React relies on the order in which Hooks are called.`
    - hook은 조건문, 반복문, 중첩된 함수에서 호출하면 안 됨.
    -  항상 함수의 최상위에서 hook을 호출하자.
    - 잘못된 순서의 상태값을 참조하게 되는 오류 발생.
  - 조건문을 이용하지 않고, useState를 이용하는 방법으로 해결!
  <a href="https://reactjs.org/docs/hooks-rules.html#gatsby-focus-wrapper">Rules of Hooks</a>

## 학습내용
- 모달에서 받은 입력값을 메인에 표시할 때 useRef를 사용하려 했음.
  - useRef(uncontrolled component)는 DOM에 직접 접근하는 방식임으로 지양. useState, react-hook-form 사용이 좋음.
  - controlled component는 React controlled에 의해 처리. 
- tailwind
  - A utility-first CSS framework
  - HTML 태그에 CSS를 직접 적는 방식이라 편리
- useState는 const로 만들어졌음. 반드시 setter를 이용해 값을 변경.
- 타입명 object, function (X)
  - object: `{name: string, age: number,}`
  - function : `() => void`
