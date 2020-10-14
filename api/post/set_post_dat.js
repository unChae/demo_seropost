// models
const model = require("../../models");
const Post = model.Post;

// utils
const response = require("../utils/response");

module.sexports = async (req, res) => {
    let {us_id, po_photo, po_content} = req.body;
    
    // po_photo를 s3에저장
    let s3_url;
    // 저장된 s3 주소를 DB에 저장
    
    let post = Post.create({
        po_us_id : us_id,
        po_photo : s3_url,
        po_content
    })
    .catch((err) => {
        console.log("[set_post_data] DB 등록 실패");
        response(res, 200, "[set_post_data] DB 등록 실패", err)
    });
    
    response(res, 200, "[set_post_dat] DB 등록 성공", post)
    
    
};