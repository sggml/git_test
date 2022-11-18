#목표
   -js 문법 이해
    - 올드 버젼 문법
    -최신 문법


    -history

    -구성 및 관계성
      - JavaScript(1993 ~ )
      - ES5 : ECMAScript 5, 표준스크립트, 2009 발표
      - ESNext : ECMA 2015년부터 매년 발표(업그레이드, 변경,...) 새로운 발표, 문법 추가
      - TypeScript : ESNext = Type
      - 범위
          - TypeScript(MS) > ESNext > ES5
          - TypeScript -> ESNext -> ES5 => 모든 브라우저 호환된다
            - 현제 js쪽은 ES5로 가동된다
            - TS -> 컴파일 ESNext -> 처리(표준화) -> ES5 생성
            - trans compile 처리하여 사용
      -React
          - 1) ESNext 개발 -> ES5 호환처리 (이번 과정 방식)
          - 2) TypeScript -> ESNext -> ES5

# 웹서비스 형태
    - 프런트 중심
       - 유저가 브라우저를 통해 보는 화면 -> 클라이언트 중심으로 랜더링
       - Client Side Rendering : CSR
    - 백앤드 중시
    - 유저가 브라우저를 통해 보는 화면 -> 백엔드 중심으로 랜더링(서버에서 이미 페이지를 완성해서 보낸다):SSR
    - 혼용
       - csr 과 ssr을 적절하게 섞는다