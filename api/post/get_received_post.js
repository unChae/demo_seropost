// models
const model = require("../../models");
const Online = model.Online;
const Post = model.Post;

// utils
const response = require("../utils/response");

module.exports = async (req, res) =>{
    let {us_social_id} = req.body;
    
    try{
        let online_post = await Online.findAll({
            raw : true,
            where : {on_us_id : us_social_id}
        })
        .catch((err) => {
            console.log("[get_received_post] 1 데이터 베이스 오류 발생");
            response(res, 200, "[get_received_post] 데이터베이스 오류 발생", err);
        });
        
        let received_post = [];
        for( var post in online_post){
            received_post += await Post.findOne({
                raw : true,
                where : { po_id: post.on_po_id }
            })
            .catch((err) => {
                console.log("[get_received_post] 2 데이터 베이스 오류 발생");
                response(res, 200, "[get_received_post] 데이터베이스 오류 발생", err);
            });
        }
        
        console.log(received_post);    
        response(res, 200,"[get_received_post] Post 데이터 반환 완료", received_post)

    }catch(err){
        response(res, 200,"[get_received_post] 등록되지 않은 Post", null)
    }
};
