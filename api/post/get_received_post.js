// models
const model = require("../../models");
const User = model.User;
const Online = model.Online;
const Offline = model.Offline;
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
            console.log("[get_received_post] Online DB 반환 오류");
            response(res, 200, "[get_received_post] Online DB 반환 오류", err);
        });
        
        for( var post of online_post){
            post.post = await Post.findOne({
                where : { po_id: post.on_po_id },
                include:[{
                    model: User,
                    attributes:['us_name', 'us_photo']
                }]
            })
            .catch((err) => {
                console.log("[get_received_post] Post DB 반환 오류");
                response(res, 200, "[get_received_post] Post DB 반환 오류", err);
            });
            
            let offline = await Offline.findOne({
                raw:true,
                where : {of_po_id : post.on_po_id}
            })
            .catch((err) => {
                console.log("[get_received_post] Offline DB 반환 오류");
                response(res, 200, "[get_received_post] Offline DB 반환 오류", err);
            })
        
            post.of_status = offline.of_status
            post.of_name = offline.of_name
            post.of_address = offline.of_address
            post.of_address_detail = offline.of_address_detail
        }
        // console.log(online_post);    
        console.log('get_received_post');    
        response(res, 200,"[get_received_post] Post 데이터 반환 완료", online_post)

    }catch(err){
        response(res, 200,"[get_received_post] 등록되지 않은 Post", err)
    }
};