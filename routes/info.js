const api = require("../api/info");

module.exports = (router) => {
    
    // 주소록 저장
    router.post('/set_address_data', api.set_address_data);
    
    // 오프라인 전송 정보 저장
    router.post('/set_offline_data', api.set_offline_data);
    
    // 오프라인 전송 정보 반환
    router.post('/get_offline_data', api.get_offline_data);

    // 온라인 전송 정보 저장
    router.post('/set_online_data', api.set_online_data);

    // 주소록 반환
    router.post('/get_address', api.get_address);

    // 주소록 삭제
    router.post('/del_address', api.del_address);

    // 주소록 변경
    router.post('/update_address', api.update_address);

    // Offline status 변경
    router.post('/get_change_ofstatus', api.get_change_ofstatus);
    

    return router;
};
