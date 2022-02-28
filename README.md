# 📝 TypeScript로 구현하는 todolist

> SSG.COM 신입 인턴과제

✨Goal: TypeScript에 대한 이해

## 프로젝트 시작하기

```bash
yarn
yarn api
```

### 서버 실행하기

```bash
yarn server
```

# Self Checklist

## Thu, Feb 17th, 2022 (1일차)

- [x] 개발환경 setting (vscode, node, json-server 등 설치)
- [x] vite로 프로젝트 생성
- [x] json-server 테스트

## Fri, Feb 18th, 2022 (2일차)

- [x] 와이어프레임 디자인 (Figma)
- [x] TS 공부 (Udemy)
- [x] HTML structure & CSS 작성

## Mon, Feb 21st, 2022 (3일차)

- [x] TS 공부 (Udemy)
- [x] HTML 구조 변경 (`template` tag 기반 기능 분리)
- [x] CSS 오류 수정 - 배경 linear-gradient 전체화면으로 안되는 문제
- [x] task 추가하기 기능 구현
- [x] task 완료하기 기능 구현 (toggle)
  - [x] error) toggle 제대로 안됨 (더블클릭해야 체크됨, 상위 체크박스 누르면 해제됨 (???)) (🔍해결)
- [x] task 수정하기 기능 구현
- [x] task 삭제하기 기능 구현

## Tue, Feb 22nd, 2022 (4일차)

> PP센터 실습

- [x] json-server와 연동하기 (🔍해결)
  - [x] task 불러오기 기능 구현
  - [x] task 완료하기 기능 구현 (🔍해결)
  - [x] task 추가하기 기능 구현
  - [x] task 삭제하기 기능 구현
- [x] toggle error 수정 (🔍해결)

## Wed, Feb 23rd, 2022 (5일차)

- [x] last edit
- [x] 발표 & 코드리뷰
- [x] toggle 남은 task count 되도록 수정 (🔍해결)

---

### 📃Planning

- [x] 와이어프레임 디자인 (Figma)
- [x] 기본기능 정의
- [x] 추가기능 고민

### 💡Implementaion

- [x] structure 잡기
- [x] TS 추가
- [x] json-server 연동

# 🔥Extra Work

### General

- [ ] 추가, 수정, 삭제시 snackbox message를 띄운다.
- [ ] Title을 설정할 수 있다.
- [ ] 오늘 날씨를 표시한다.
- [ ] 중요도별 남은 할 일 개수를 알려준다.
- [ ] progress bar를 상단에 보여준다.
- [ ] prompt, alert 대신 modal window를 띄워준다.

### ADD

- [ ] dropbox로 중요도를 설정할 수 있다. (low, medium, high)
- [ ] 생성시각이 DB에 저장된다.

### VIEW

- [ ] 완료된 목록 보기/숨기기를 할 수 있다.
- [ ] 중요도 순으로 정렬할 수 있다.
- [ ] 생성 날짜 순으로 정렬할 수 있다.
- [ ] 가나다순으로 정렬할 수 있다.

### EDIT

- [ ] task 완료시 animation과 함께 체크 표시가 된다.
- [ ] 체크박스가 아니라 리스트를 눌러도 task를 완료할 수 있다.
- [ ] drap & drop으로 순서를 변경할 수 있다.
- [ ] 내용 수정시 input box에 기존 내용을 끌어온다.
- [ ] last edited 날짜를 표시한다. (optional)
