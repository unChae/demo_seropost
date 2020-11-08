// models
const model = require("../../models");
const Offline = model.Offline;
const Post = model.Post;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id} = req.body;
    
    let offline = await Offline.findAll({
        raw : true,
        where : { of_us_id : us_social_id },
        order: [['createdAt','DESC']]
    })
    .catch((err) => {
        console.log('[get_offline_data] Offline DB 오류')
        response(res, 200, '[get_offline_data] Offline DB 오류', err)
    });
    
    for( var post of offline){
            post.post = await Post.findOne({
                raw : true,
                where : { po_id: post.of_po_id }
            })
            .catch((err) => {
                console.log("[get_offline_data] Post DB 반환 오류");
                response(res, 200, "[get_offline_data] Post DB 반환 오류", err);
            });
        }
    // console.log(offline)
    console.log('get_offline_data')
    response(res, 200, "[get_offline_data] DB 반환 완료.", offline);
};