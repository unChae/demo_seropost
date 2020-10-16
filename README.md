# demo sero project

- language
    - nodejs

- modules
    - 서버 실행
        - nodemon -g
        - express
        - express-session
    - 서버 환경
        - cors
        - dotenv
        - body-parser
    - 데이터베이스
        - sequelize
        - mysql2
    - jwt 토큰
        - bcrypt
        - jsonwebtoken
    - 백업, storage 관련
        - aws-sdk
        - request
        - node-fetch
    
- **코드 작성 요청 사항**
    - , 뒤에는 띄어쓰기
    - = 의 앞 뒤에는 한칸씩 사이 두기
    - 데이터베이스 find 할 때 raw:true 붙여주기
    - 상단에 require 작성 시 주석으로 묶어주기
    - 데이터베이스 접근시 catch 꼭 걸어주기
    - 항상 코드 한 줄 끝에 ; 붙여주기
    - 최대한 변수 선언은 let, 상수일 경우 const, 전역변수 활용일 경우에 let대신 var
    - }else{ else 앞뒤로 {} 붙여주기



##### 2020.10.14 written by deok

- 코드 정리
    - demo smol login 이식
    - SMS 인증 aligoapi 구현
    - .env aligoapi table 추가



##### 2020.10.15 written by deok

- 서버 Recovery
    - Routes, utils 복원
- 코드 정리
    - models Offline에 of_us_id 추가
    - models index.js Offline 테이블 수정
    - get_received_post, get_sended_post api 추가(정상작동확인)

- 해야 할 것들
    - get_sended_post에 offline include 시키기
    - Aligoapi 검증
    


##### 2020.10.16 written by deok

- 라우터 추가
    - 엽서의 전송과 관련된 라우터 info 추가
    - offline, online, address DB 생성 api 추가

- 코드 정리
    - User 테이블에서 us_id 삭제, us_social_id가 기능이어받게 수정
    - auth/api us_id데이터를 us_social_id 데이터 취급으로 변경
    - get_sended_post에서 offline 정보 안에 post 데이터 함께 반환  
     
- Git 관리
    - igonore 파일 생성
    - .env, config.json 제외

- 해야 할 것들
    - get_sended_post와 ge_post_data는 작성한 엽서함과 결재내역 / 세로전송 기능에따라 합치거나 삭제할 필요
    - Aligoapi 검증
