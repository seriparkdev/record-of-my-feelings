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

## 학습내용
- 모달에서 받은 입력값을 메인에 표시할 때 useRef를 사용하려 했음.
  - useRef(uncontrolled component)는 DOM에 직접 접근하는 방식임으로 지양. useState, react-hook-form 사용이 좋음.
  - controlled component는 React controlled에 의해 처리. 
- tailwind
  - A utility-first CSS framework
  - HTML 태그에 CSS를 직접 적는 방식이라 편리
