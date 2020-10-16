// models
const model = require("../../models");
const Offline = model.Offline;
const Post = model.Post;
const Sequelize = require('sequelize'); 

// utils
const response = require("../utils/response");

module.exports = async (req, res) =>{
    let {us_social_id} = req.body;
    
    try{
        let sended_post = await Offline.findAll({
            raw : true,
            where : {of_us_id : us_social_id},
        })
        .catch((err) => {
            console.log("[get_sended_post] 1 데이터 베이스 오류 발생");
            response(res, 200, "[get_sended_post] 데이터베이스 오류 발생", err);
        });
        
        for( var idx in sended_post){
            sended_post[idx].post = await Post.findOne({
                where : { po_id: sended_post[idx].of_po_id }
            })
            .catch((err) => {
                console.log("[get_sended_post] 2 데이터 베이스 오류 발생");
                response(res, 200, "[get_sended_post] 데이터베이스 오류 발생", err);
            });
        }
        response(res, 200,"[get_sended_post] Post 데이터 반환 완료", sended_post);

    }catch(err){
        response(res, 200,"[get_sended_post] 등록되지 않은 Post", err)
    }
};
