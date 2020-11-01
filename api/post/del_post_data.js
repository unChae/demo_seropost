// models
const model = require("../../models");
const Post = model.Post;
const Offline = model.Offline;
const Online = model.Online;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {po_id} = req.body;
    
    let offline = await Offline.destroy({
        raw : true,
        where : { of_po_id : po_id }
    })
    .catch((err) => {
        console.log('[del_post_data] Offline DB 오류')
        response(res, 200, '[del_post_data] Offline DB 오류', err)
    });
    console.log(offline)
    
    let online = await Online.destroy({
        raw : true,
        where : { on_po_id : po_id }
    })
    .catch((err) => {
        console.log('[del_post_data] Online DB 오류')
        response(res, 200, '[del_post_data] Online DB 오류', err)
    });
    console.log(online)
    
    let post = await Post.destroy({
        raw : true,
        where : { po_id }
    })
    .catch((err) => {
        console.log('[del_post_data] Post DB 오류')
        response(res, 200, '[del_post_data] Post DB 오류', err)
    });
    console.log(post)
    console.log('del_post_data')
    response(res, 200, "[del_post_data] DB 삭제 완료.", post+offline+online);
};