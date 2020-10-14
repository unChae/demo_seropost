const api = require("../api/auth");

module.exports = (router) => {
    
    // 인증번호 전송
    router.post('/certification', api.certification);
    
    // 유저 데이터 반환
    router.post('/get_user_data', api.get_user_data);

    // 인증번호 확인
    router.post('/number_certification', api.number_certification);
    
    // 회원가입
    router.post('/set_user_data', api.set_user_data);

    return router;
};
