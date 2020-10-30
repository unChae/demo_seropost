// models
const model = require("../../models");
const Offline = model.Offline;
const Online = model.Online;
const Post = model.Post;
const Sequelize = require('sequelize'); 

// utils
const response = require("../utils/response");

module.exports = async (req, res) =>{
    let {us_social_id} = req.body;
    let post_number=new Object()
    
    let sended_post = await Offline.findAll({
        raw : true,
        where : {of_us_id : us_social_id},
        // include : [{
        //     model : Post
        // }],
        // order: [['createdAt','DESC']]
    })
    .catch((err) => {
        console.log("[get_sended_post] DB 반환 오류");
        response(res, 200, "[get_sended_post] DB 반환 오류", err);
    });
    post_number.sended_post=Object.keys(sended_post).length
    let received_post = await Online.findAll({
        raw: true,
        where : {on_us_id : us_social_id}
    })
    .catch((err) => {
        console.log("[get_sended_post] DB 반환 오류");
        response(res, 200, "[get_sended_post] DB 반환 오류", err);
    });
    post_number.received_post=Object.keys(received_post).length
    
    console.log(post_number)
    response(res, 200,"[get_sended_post] DB 데이터 반환 완료", post_number);

};
