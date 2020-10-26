// models
const model = require("../../models");
const Post = model.Post;

// utils
const response = require("../utils/response");

module.exports = async (req, res) => {
    let {us_social_id, po_content} = req.body;
    let po_photo = req.files.po_photo[0].location
    let po_content_photo = req.files.po_content_photo[0].location
    
    let post = await Post.create({
        raw : true,
        po_us_id : us_social_id,
        po_content,
        po_photo,
        po_content_photo,
    })
    .catch((err) => {
        console.log("[set_post_data] DB 등록 실패");
        response(res, 200, "[set_post_data] DB 등록 실패", err);
    });
    console.log(post)
    response(res, 200, "[set_post_dat] DB 등록 성공", post);
    
};