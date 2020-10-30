const api = require("../api/quest");

module.exports = (router) => {
    // Question 데이터 저장
    router.post('/set_quest_data', api.set_quest_data);
    
    // Question 데이터 삭제
    router.post('/del_quest', api.del_quest);
    
    // Question Category 데이터 저장
    router.get('/get_category_data', api.get_category_data);
    
    // Question 데이터 반환
    router.post('/get_quest_data', api.get_quest_data);
    
    return router;
};
