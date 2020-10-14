// models
const model = require("../../models");
const Post = model.Post;

// utils
const response = require("../utils/response");

module.exports = async (req, res) =>{
    let {us_id} = req.body;  
    
    let post = await Post.findAll({
        where : {po_us_id : us_id}
    })
    .catch((err) => {
        console.log("[get_post_data] 데이터 반환 실패");
        response(res, 200, "[get_post_dat] Post 데이터 반환 오류", err);
    });
    
    response(res, 200,"[get_post_data] Post 데이터 반환 완료", post)
    
};
