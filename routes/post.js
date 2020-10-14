const api = require("../api/post");

module.exports = (router) => {
    // Post 데이터 반환
    router.post('/get_post_data', api.get_post_data);

    // Post 데이터 저장
    router.post('/set_post_data', api.set_post_data);

    return router;
};
