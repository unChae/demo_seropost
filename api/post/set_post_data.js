// models
const model = require("../../models");
const Post = model.Post;

// utils
const response = require("../utils/response");
const image = require("../utils/image");

module.exports = async (req, res) => {
    let {us_social_id, po_content} = req.body;
    let po_photo = req.file.location
    
    let post = await Post.create({
        raw : true,
        po_us_id : us_social_id,
        po_content,
        po_photo
    })
    .catch((err) => {
        console.log("[set_post_data] DB 등록 실패");
        response(res, 200, "[set_post_data] DB 등록 실패", err);
    });
    
    console.log(post)
    
    //let po_id=post.po_id
   
    // po_photo가 이미지로 왔을때
    // await image.set_base64(po_photo);
    // po_photo = await image.s3_upload(us_social_id, po_id);
    
    // po_photo가 base 64로 왔을때
    //po_photo = await image.s3_upload(po_photo, us_social_id, po_id, 0)
    // po_content_pohto = await image.s3_upload(po_content_pohto, us_social_id, po_id, 1)
    
    //post = await Post.update({
    //    raw : true,
    //    po_photo,
        // po_content_pohto
    //},{ where : {po_id}})
    //.catch((err) => {
    //    console.log("[set_post_data] DB 갱신 실패")
    //    response(res, 200, "[set_post_data] DB 갱신 실패", err)
    //});
    
    response(res, 200, "[set_post_dat] DB 등록 성공", post);
};