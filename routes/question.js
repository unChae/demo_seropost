const api = require("../api/quest");

module.exports = (router) => {
    // Question 데이터 저장
    router.post('/set_data', api.set_data);
    
    // Question Category 데이터 저장
    router.get('/get_category_data', api.get_category_data);
    
    // Question 데이터 반환
    router.post('/get_data', api.get_data);
    
    return router;
};
