const api = require("../api/quest");

module.exports = (router) => {
    // Question 데이터 저장
    router.post('/set_quest_data', api.set_quest_data);
    
    // Question Category 데이터 저장
    router.post('/set_quest_category', api.set_quest_category);
    

    return router;
};
