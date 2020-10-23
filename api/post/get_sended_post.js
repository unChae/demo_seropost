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
            include : [{
                model : Post
            }]
        })
        .catch((err) => {
            console.log("[get_sended_post] DB 반환 오류");
            response(res, 200, "[get_sended_post] DB 반환 오류", err);
        });
        response(res, 200,"[get_sended_post] DB 데이터 반환 완료", sended_post);

    }catch(err){
        response(res, 200,"[get_sended_post] 등록되지 않은 Post", err)
    }
};
