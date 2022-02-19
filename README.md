# wantend-colosseum

## 1. 프로젝트 소개

- 주제 : 많은 종류의 물류 데이터들을 한눈에 보고 손쉽게 처리하기 위한 UI
- 기간 : 22.02.17 ~ 22.02.19

## 2. 배포 링크
https://colosseum-mission.herokuapp.com/

## 3. 팀원 소개

<table>

  <tr align="center">
    <td><a href='https://github.com/Jiyong95'>이지용</a></td>
    <td><a href="https://github.com/BByungs">안병진</a></td>
    <td><a href="https://github.com/minjuice1">박민주</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://avatars.githubusercontent.com/u/49055628?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/81910935?v=4"  width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/82799961?v=4" width="150px"/></td>
  </tr>
</table>

## 4. 구현 기능

⚜ 이지용

- 메인 Grid UI
- select, search 가능한 UI
- 선택된 조건에 맞게 Data Filtering하는 함수

⚜ 안병진

- json-server 세팅 및 배포
- 상세 정보 모달 UI

⚜ 박민주

- 스크롤 리모콘 기능 구현
  - 한번 클릭시 사용자의 브라우저 크기에 맞게 이동
  - 더블 클릭시 브라우저 끝까지 이동
- 스크롤 utils 함수

## 5. 기술 스택

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## 6. 디렉토리 구조

```bash
.
├── App.tsx
├── Components
│   ├── Button.tsx     # 스크롤 리모콘
│   ├── Modal.tsx      # 상세 정보
│   ├── Select.tsx     # header 조건검색
│   ├── Table.tsx      # 메인 Grid
│   └── index.ts
├── hooks
├── index.tsx
├── react-app-env.d.ts
├── store
├── style
│   └── GlobalStyles.tsx
├── types
└── utils
    ├── getFilterData.ts
    ├── getScrollTo.tsx
    ├── getSelectList.ts
    └── index.ts
```

## 7. 설치 및 실행 방법

json-server 실행

```
npm run start:server
```

클라이언트 실행

```
npm run start
```

## 8. 커밋 컨벤션

|          | 사용 예시               |
| -------- | ----------------------- |
| feat     | 기능 구현               |
| design   | CSS 스타일링            |
| remove   | 파일 삭제               |
| move     | 디렉토리 또는 파일 이동 |
| chore    | 패키지 설치             |
| refactor | 리팩토링                |
| fix      | 버그 수정               |
