const api = require("../api/auth");

module.exports = (router) => {
    
    // 인증번호 전송
    router.post('/certification', api.certification);
    
    // 유저 데이터 반환
    router.post('/get_user_data', api.get_user_data);
    
    // 유저 데이터 반환 - 휴대폰 번호로 요청
    router.post('/get_phone_user', api.get_phone_user);

    // 인증번호 확인
    router.post('/number_certification', api.number_certification);
    
    // 회원가입
    router.post('/set_user_data', api.set_user_data);
    
    // 회원정보 수정
    router.post('/update_user', api.update_user);

    return router;
};
