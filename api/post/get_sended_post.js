// models
const model = require("../../models");
const Offline = model.Offline;
const Post = model.Post;

// utils
const response = require("../utils/response");

module.exports = async (req, res) =>{
    let {us_id} = req.body;
    
    try{
        let offline_post = await Offline.findAll({
            where : {of_us_id : us_id}
        })
        .catch((err) => {
            console.log("[get_sended_post] 1 데이터 베이스 오류 발생");
            response(res, 200, "[get_sended_post] 데이터베이스 오류 발생", err);
        });
        
        let sended_post = [];

        for( var post in offline_post){
            sended_post += await Post.findOne({
                where : { po_id: post.of_us_id }
            })
            .catch((err) => {
                console.log("[get_sended_post] 2 데이터 베이스 오류 발생");
                response(res, 200, "[get_sended_post] 데이터베이스 오류 발생", err);
            });
        }
        console.log(sended_post);    
        response(res, 200,"[get_sended_post] Post 데이터 반환 완료", sended_post)

    }catch(err){
        response(res, 200,"[get_sended_post] 등록되지 않은 Post", null)
    }
};
