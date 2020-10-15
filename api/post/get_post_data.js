// models
const model = require("../../models");
const Post = model.Post;

// utils
const response = require("../utils/response");

module.exports = async (req, res) =>{
    let {us_id} = req.body;
    
    try{
        let post = await Post.findAll({
            where : {po_us_id : us_id}
        })
        .catch((err) => {
            console.log("[get_post_data] 데이터 베이스 오류 발생");
            response(res, 200, "[get_post_dat] 데이터베이스 오류 발생", err);
        });
        console.log(post);    
        response(res, 200,"[get_post_data] Post 데이터 반환 완료", post)

    }catch(err){
        response(res, 200,"[get_post_data] 등록되지 않은 Post", null)
    }
};