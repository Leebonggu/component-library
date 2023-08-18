# CDD Practice

## Babel

- Storybook 환경은 이미 내부적으로 Babel을 사용하고 있습니다.
- package.json\_ 요구 사항에 맞는 몇 가지 추가 사전 설정 및 플러그인을 추가할 예정입니다. 다음 패키지를 설치합니다.

- @babel/preset-env코드를 변환할 때 특정 브라우저 환경을 대상으로 할 수 있습니다.
- @babel/preset-reactJSX 및 기타 React 기능을 사용할 수 있게 해주는 플러그인 조합
- @babel/preset-typescriptBabel이 TypeScript를 사용할 수 있도록 합니다(유형 검사 없이).
- babel-plugin-styled-components프로덕션 환경에서 스타일의 디버깅 및 축소를 개선합니다.
- @babel/plugin-transform-runtime그리고 @babel/runtime. 라이브러리가 Babel로 트랜스파일될 때 출력에 포함되는 여러 도우미 함수와 유틸리티가 있습니다. 더 많은 패키지를 사용하면 이러한 헬퍼가 복제되고 애플리케이션의 번들 크기가 늘어납니다. 여기 에 런타임 종속성을 포함하면 @babel/runtime패키지가 로컬에서 복제하지 않도록 할 수 있습니다.

## Rollup

- 모듈 번들러를 구성하려면 다음 종속성을 설치합니다.
- 롤업 구성에는 input, output및 의 세 가지 공통 섹션이 있습니다 plugins.

### 입력

섹션 은 input위에서 정의한 진입점을 참조합니다. 이는 출력에 번들로 포함될 모듈을 결정합니다.

### 출력 번호

output빌드가 완료되었을 때 번들 및 트랜스파일된 출력이 배치될 위치를 정의합니다. format또한 모듈 형식을 결정하는 구성을 받습니다 . 출력 배열을 제공함으로써 ESModule 및 CommonJS 출력 유형을 포함하는 다중 배포 빌드를 생성할 수 있습니다.

main출력 파일 module경로 는 package.json.

### 플러그인

플러그인은 Rollup이 코드를 이해하고 올바르게 묶을 수 있도록 합니다.

- del
  - 존재하는 기존 빌드 파일을 삭제합니다.
- externals
  - 우리가 의존하는 종속성이 라이브러리 내에 번들되지 않도록 합니다.
  - 이를 통해 공통 종속성을 다른 패키지와 중복 제거하여 번들 크기를 줄일 수 있습니다.
- nodeResolve
  - Rollup에서 타사 모듈을 찾을 수 있습니다.node_modules
- commonjs
  - Rollup 내에서 CommonJS 모듈을 ESModules로 변환
- babel
  - 이전에 정의한 Babel 구성을 사용하여 코드를 다양한 브라우저에서 사용할 수 있는 형식으로 변환합니다.

## Refer

- https://rollupjs.org/tutorial/
- https://falsy.me/%eb%a6%ac%ec%95%a1%ed%8a%b8-%ec%bb%b4%ed%8f%ac%eb%84%8c%ed%8a%b8-%eb%9d%bc%ec%9d%b4%eb%b8%8c%eb%9f%ac%eb%a6%ac-%eb%a7%8c%eb%93%a4%ea%b8%b0-typescript-rollup-react/
