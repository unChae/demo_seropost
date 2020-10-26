const api = require("../api/post");
const s3 = require("../api/utils/s3upload");

module.exports = (router) => {
    // Post 데이터 반환
    router.post('/get_post_data', api.get_post_data);
    
    // Post 데이터 저장
    router.post('/set_post_data', s3.upload.fields([{name : 'po_photo'}, {name : 'po_content_photo'}]), api.set_post_data);
    
    // 받은 Post 데이터 반환
    router.post('/get_received_post', api.get_received_post);
    
    // 보낸 Post 데이터 반환
    router.post('/get_sended_post', api.get_sended_post);

    return router;
};
