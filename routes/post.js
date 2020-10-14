const api = require("../api/post");

module.exports = (router) => {
   
    // 포스트 정보 반환
    router.post('/get_user_data', api.get_user_data);
    // 포스트 정보 저장
    router.post('/set_user_data', api.set_user_data);
    
    return router;
};
