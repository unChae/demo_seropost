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
            where : {on_us_id : us_social_id},
            order: [['createdAt','DESC']]
        })
        .catch((err) => {
            console.log("[get_received_post] DB 반환 오류");
            response(res, 200, "[get_received_post] DB 반환 오류", err);
        });
        
        for( var post of online_post){
            post.post = await Post.findOne({
                raw : true,
                where : { po_id: post.on_po_id }
            })
            .catch((err) => {
                console.log("[get_received_post] DB 반환 오류");
                response(res, 200, "[get_received_post] DB 반환 오류", err);
            });
        }
        // console.log(online_post);    
        console.log('get_received_post');    
        response(res, 200,"[get_received_post] Post 데이터 반환 완료", online_post)

    }catch(err){
        response(res, 200,"[get_received_post] 등록되지 않은 Post", err)
    }
};