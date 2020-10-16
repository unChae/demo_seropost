const api = require("../api/info");

module.exports = (router) => {
    
    // 주소록 저장
    router.post('/set_address_data', api.set_address_data);
    
    // 회원가입
    router.post('/set_offline_data', api.set_offline_data);
    
    // 회원가입
    router.post('/set_online_data', api.set_online_data);
    

    return router;
};
