# UMC 5th 8주차 미션
## 8주차 미션에 로그인 서버 연결(요청 및 응답 처리)
UMC에서 제공하는 [서버](https://github.com/silvarge/UMC_WEB)와 axios 라이브러리를 사용해 로그인 요청을 보내고, 토큰을 포함한 응답을 받아 로컬 스토리지에 저장하는 기능, 토큰 검증 요청을 보내 토큰이 유효할 때 까지 로그인을 유지하는 기능을 추가하였습니다.
- 토큰이 올바른 경우 : 토큰 검증에서 응답 받은 user name을 활용해 `user name 님 환영합니다!` 문구 출력, 새로고침 시에도 토큰이 유효할 때 까지 로그인 유지
<img width="1438" alt="스크린샷 2023-11-23 오전 11 49 37" src="https://github.com/hanpengbutt/UMC5th-movieapp-clonecoding-jwt/assets/89825051/e4c708d5-91c0-4dcd-8feb-e355625bd673">
- 토큰이 만료된 경우: alert로 로그인 정보가 만료됨을 알리고 로그아웃 및 토큰 삭제
<img width="1438" alt="스크린샷 2023-11-23 오후 12 06 00" src="https://github.com/hanpengbutt/UMC5th-movieapp-clonecoding-jwt/assets/89825051/f1cf4551-d951-4b7f-baee-4bccf391c71e">
