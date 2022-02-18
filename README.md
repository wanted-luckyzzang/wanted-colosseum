# wantend-colosseum

## 1. 프로젝트 소개

- 주제 : 많은 종류의 물류 데이터들을 한눈에 보고 손쉽게 처리하기 위한 UI
- 기간 : 22.02.17 ~ 22.02.19



## 2. 배포 링크



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
* 메인 Grid UI
* 

⚜ 안병진
* json-server 세팅 및 배포
* 상세 정보 모달 UI
    
⚜ 박민주
* 스크롤 리모콘 기능 구현 ( 클릭시 한페이지 이동, 더블 클릭시 끝까지 이동)
* 스크롤 utils 함수
  

## 5. 기술 스택
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


## 6. 디렉토리 구조

```bash
.
├── public
│   ├── favicon.ico
│   └── index.html
├── src 
│   ├── components
│   │   ├── Button.tsx          # 스크롤 리모콘
│   │   ├── Modal.tsx           # 상세 정보
│   │   ├── Select.tsx          # header 조건검색
│   │   ├── Table.tsx           # 메인 Grid
│   │   ├── index.ts
│   ├── style
│   │   └── GlobalStyles.tsx
│   ├── types
│   └── utils                   # 자주 사용하는 함수
│   │   ├── getFilterData.ts
│   │   ├── getScrollTo.tsx
│   │   ├── getSelectList.ts
│   │   └──  index.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── 
├── README.md
├── tsconfig.json
├── eslintrc
├── db.json
├── package.json
└── pacakage-lock.json
```


## 7. 설치 및 실행 방법
클라이언트 실행
    ```
    npm run start
    ```


## 8. 커밋 컨벤션

깃모지를 사용하여 이모티콘만 보고 커밋의 목적이나 의도를 쉽게 식별할 수 있도록 하였습니다.

| 깃모지 | 사용 예시 |
| --- | --- |
| :sparkles: | 기능 구현 |
| :lipstick: | CSS 스타일링 |
| :wrench: | utils 함수나 types 추가 |
| :fire: | 파일 삭제 |
| :wastebasket: | 코드 삭제 |
| 🚚 | 디렉토리 또는 파일 이동 |
| :package: | 패키지 설치 |
| ♻️ | 리팩토링 |
| 📝 | Readme 수정 |
| 🐛 | 버그 수정 |
