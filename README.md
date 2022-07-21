# record-of-my-feelings
오늘의 기분과 일기를 기록할 수 있는 웹사이트
</br>

https://fee1in.netlify.app/
- [설계](#설계)
- [기능](#기능)
- [구현](#구현)
- [트러블슈팅](#트러블슈팅)
- [학습 내용](#학습내용)
</br>

***

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
<img width="500" alt="레이아웃" src="https://user-images.githubusercontent.com/104069346/178153664-44e7bc32-8a8e-474f-bfa2-60613cefb1df.png">
<img width="500" alt="모달" src="https://user-images.githubusercontent.com/104069346/178153661-748bdf14-20e8-4fb4-8653-c0b072cca890.png">

- 로고 이미지
- 응원 텍스트
  - API 사용. 혹은 랜덤으로 직접 만든 텍스트 띄움.
- 입력받은 이모티콘의 개수를 기분별로 표시
- 기분 기록장
  - 모달에서 사용자가 선택한 이모티콘 삽입
  - 이모티콘 click or hover 시 적었던 일기가 뜸
- 기분 이모티콘 추가 버튼
  - 기분 이모티콘, 일기 입력받는 모달 생성

(+ 22.07.18)
- 일기 삭제 버튼
- 일기 수정 버튼
  - 수정 취소 버튼
  - 수정 완료 버튼
  



</br>

## 기능
### 반응형
|화면 크기에 따라 배치 변화|
|------|
|<img src='https://user-images.githubusercontent.com/104069346/178147613-c90e69f8-f16d-4f7b-a887-212ae5ba4003.gif'/>|

### 응원의 말
|새로고침 시 응원 텍스트 변화|
|------|
|<img src='https://user-images.githubusercontent.com/104069346/178147761-d52315a7-6753-46a1-86bf-7e41aabc9cb7.gif'>|

### 데스크탑
|모달을 통해 일기 작성|
|------|
|<img src='https://user-images.githubusercontent.com/104069346/179919570-d048252a-51b3-4b5e-aca2-5ebe8d1efc57.gif'/>|

|이모티콘을 눌러 작성했던 일기 보기 / 기분 별로 개수 표시|
|------|
|<img src='https://user-images.githubusercontent.com/104069346/179923826-ad11db73-eef6-41e0-a377-24b69e6fb276.gif'/>|

|작성했던 일기 삭제|
|------|
|<img src='https://user-images.githubusercontent.com/104069346/180228308-fbb19aef-e620-48a9-a101-2c4fb2bde19b.gif'/>|

|작성했던 일기 수정|
|------|
|<img src='https://user-images.githubusercontent.com/104069346/179925212-ecba7b3c-4469-4a62-b7d7-ddeb9a11240c.gif'/>|

### 모바일
|기본 화면|모달|일기 추가된 모습|
|------|---|---|
|<img src='https://user-images.githubusercontent.com/104069346/178148470-f8417c33-095b-493b-b6de-2ab61abd663d.jpg'/>|<img src='https://user-images.githubusercontent.com/104069346/178148466-ec7bebf0-f096-43fa-9c4f-05ba91d4e7b0.jpg'>|<img src='https://user-images.githubusercontent.com/104069346/180208815-db9fe397-5777-4112-8bad-a234a1eba2cf.jpg'>|

</br>

## 구현

### empty state일 때 텍스트 출력
- 삼항 연산자 이용
```
배열의 길이 > 0 ? map함수 실행 : 텍스트 출력
```
- 입력된 일기가 담긴 배열

### 이모티콘 별 개수
```
배열.filter((item) => 모든 이모티콘 기록 === 특정 이모티콘 이름).length
```
- filter로 그동안 선택 되었던 특정 이모티콘만으로 구성된 배열을 새로 만듦
- length로 새로 만들어진 배열의 길이를 구함

### 응원 텍스트
- `Math.radom` 이용
- 새로고침 시 `Math.random`으로부터 random index 받음
```
const [인덱스] = useState(Math.floor(Math.random() * (응원 텍스트 배열의 길이)));
```

### 모달을 통해 일기 작성
  ```
{
    diary: 일기
    emoji: 기분 이모티콘의 이름
    emojiImg: 기분 이모티콘의 이미지
    id: key 역할 현재 날짜, 시간으로 만들어짐
    image: 이미지 URL 
  } 
```
- useState 이용해 data 입력 받음
- useState로 객체를 배열에 추가
- map 함수를 이용해 입력받은 data 출력

### 모달에서 이모티콘 선택 -> 출력
- useState 이용
- 이모티콘은 input의 radio type
- input의 onChange 이용
- 이모티콘이 클릭되면 함수 실행
```
setSelected(e.target.value)
setEmojiFile(`/${e.target.value}.png`);
```
- `selected === (이모티콘 이름)` -> checked = true
- emojiFile로 선택한 이모티콘의 이미지 경로 저장
- 선택된 이모티콘이 map 함수를 통해 출력

### 이모티콘을 클릭해 작성했던 일기 보기
- 이모티콘 출력 시 `value = 객체의 id(now)`
- 이모티콘 클릭 시 `id(clicked) = value`
- `입력 받은 정보가 담겼던 객체의 id`와 `value를 받은 id`가 같으면 id에 해당하는 일기를 map 함수로 렌더링

### 일기 삭제
```
setItems(items.filter((item) => item.id !== id));
```
- filter 이용
- 현재 일기(id)가 아닌 일기만 필터링해 배열 생성
- set함수를 통해 만들어진 배열로 업데이트

### 일기 수정
1) 수정 버튼
```
setIsEdit(!isEdit)
```
- edit mode로 변경

```
edit mode ? 텍스트 박스 : 저장된 일기 
```
- 삼항 연산자 이용
- 수정 모드가 되면 `<textarea>`를 띄워 일기를 수정
- 수정 모드가 아니라면 저장된 일기만 보여줌

2) 수정 모드
```
const [수정 다이어리, 다이어리 수정 함수] = useState
```
- `다이어리 수정 함수`로 사용자가 수정한 일기를 입력 받아 `수정 다이어리`에 저장

3) 수정 취소 버튼
- `setIsEdit(!isEdit)`로 edit mode 끔 
- `수정 다이어리`에 저장 되었던 값을 지워야 함
- `다이어리 수정 함수`에 기존의 다이어리가 저장되어있는 `diary`를 전달

4) 수정 완료 버튼
```
function onEdit (id, newDiary) {
  setItems(map(item.id === 현재 일기의 id ? {...item, diary: newDiary} : item))
  }
```
- 삼항 연산자 이용
- 기존의 item의 item.diary에 수정된 일기를 저장하는 함수 
- 매개변수로 현재 시점의 id, `수정 다이어리`를 전달
- 수정된 item을 `setItems`로 전달

</br>

## 트러블슈팅
### 문제
index를 button의 value에서 가져오려 함.
**button element에는 `event.target.value`의 `value` 속성이 없음.**

### 해결
 - 애초에 증감 연산자나 +1을 이용해 value 값을 계속 변경시켜 index를 만드는 것은 불안정.
 - 고유의 값(name, id...)을 넣어주는 게 좋음.
 - index를 key로 사용하고 있었음. 이는 나중에 구현할 삭제 기능에 오류 야기.
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
</br>

### 문제
`Encountered two children with the same key.`

### 해결
- JSX를 `<></>`로 감싸서 생긴 문제
- map 함수 안에서 최상위 태그로 빈 태그 X
- `<div>`로 해결
- 다른 방법 `<React.Fragment>`
</br>

### 문제
- 새로고침을 하지 않아도 응원 텍스트의 index가 바뀌는 오류 발생

### 해결
- useState로 해결
- 상수인 속성을 이용

</br>

## 학습 내용
- 모달에서 받은 입력값을 메인에 표시할 때 useRef를 사용하려 했음.
  - `useRef(uncontrolled component)`는 DOM에 직접 접근하는 방식임으로 지양. `useState, react-hook-form` 사용이 좋음.
  - controlled component는 React controlled에 의해 처리. 
- tailwind
  - A utility-first CSS framework
  - HTML 태그에 CSS를 직접 적는 방식이라 편리
- useState는 const로 만들어졌음. 반드시 setstate를 이용해 값을 변경.
- 타입명 object, function (X)
  - object: `{name: string, age: number,}`
  - function : `() => void`
- useEffect - Mount
  - 실행 시 콘솔에 객체가 두 번 찍히는 문제
  - `index.tsx`에서 `<React.StrictMode>`로 `<App />`을 감싸줬기 때문
  - 개발 모드 -> 렌더링 두 번
- React Fragment
  - `<></>` , `<React.Fragment></React.Fragment>`
  - `Fragments let you group a list of children without adding extra nodes to the DOM.`
  - `If you use the shorthand syntax for fragments <> </>, you won't be able to pass any props to the fragment.`
  - <a href="https://reactjs.org/docs/fragments.html#gatsby-focus-wrapper">Fragments</a>
</br>

**Redux 공부 후 적용시킬 예정**