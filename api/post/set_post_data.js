// models
const model = require("../../models");
const Post = model.Post;
const moment=require("moment");
// utils
const response = require("../utils/response");

module.exports = async (req, res) => {
    let {us_social_id, po_content} = req.body;
    let po_photo = req.files.po_photo[0].location
    let po_content_photo = req.files.po_content_photo[0].location
    let po_record = req.files.po_record[0].location
    let date = moment().format('YYYYMMDDHHmmss');
    
    let post = await Post.create({
        raw : true,
        po_us_id : us_social_id,
        po_content,
        po_photo,
        po_content_photo,
        po_record,
        createAt : date
    })
    .catch((err) => {
        console.log("[set_post_data] DB 등록 실패");
        response(res, 200, "[set_post_data] DB 등록 실패", err);
    });
    console.log('set_post_data')
    response(res, 200, "[set_post_dat] DB 등록 성공", post);
    
};