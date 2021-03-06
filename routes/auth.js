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
    
    // 회원정보 수정
    router.post('/update_user', api.update_user);
    
    // 회원정보 삭제
    router.post('/del_user_data', api.del_user_data);
    
    // 회원 알람 정보 변환
    router.post('/get_change_alarm', api.get_change_alarm);

    return router;
};
