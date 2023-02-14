
node version : 14.21.1 \
npm version : 6.14.17

=== 주요 패키지 ===\
Vite + TypeScript + Eslint + Prettier + StyledComponent + StoryBook + MobX + ReactQuery

=== 패키지 목적 ===\
Vite : 모듈 번들링\
React : WEB 개발 편리\
TypeScript : 타입 규정\
Eslint + Prettier : 코드 스타일과 규칙\
StyledComponent : 스타일 컴포넌트화\
StoryBook : 아토믹 디자인과 스타일 컴포넌트를 극대화 하기 위한 UI 테스트 툴\
MobX : 클라이언트 상태 관리\
ReactQuery : 서버 상태 관리\
primereact primeicons : 전체 프로젝트 디자인\
ReactRouter : 페이지 Router 관리

폴더 구조
```bash
├── src
│   ├── common
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── orgnisms
│   └── page
│   │   ├── pageNameComponent
│   │   │    ├── modules
│   │   │    │    ├── model
│   │   │    │    ├── respository
│   │   │    │    ├── store
│   │   │    ├── templates
│   └── stories
│   └── App.tsx
│   └── main.tsx
│   └── PageRouterManager.tsx
```
common : 컴포넌트별 폴더 (UI) \
atoms : 원자 단위 컴포넌트 (only View + styled-Components) \
molecules : 원자 + 원자 컴포넌트 (only View + styled-Components) \
organisms : molecules + molecules 컴포넌트 (only View + styled-Components) \
page : API 통신, 상태 데이터 표기 등 실제 페이지 \
modules : page를 구성하는 데이터 \
model : page 내에서 사용되는 데이터 type 정의 \
repository : page 내에서 사용되는 api 정의 \
store : page 내에서 관리 되는 상태 데이터 \
templates : page layout (only style) \
PageRouterManager : page router 관리 \

install
```javascript
npm install
```

start
```javascript
npm run dev
```






