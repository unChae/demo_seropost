// models
const model = require("../../models");
const User = model.User;
const Post = model.Post;
const Offline = model.Offline;
const Online = model.Online;
const Address = model.Address;
const Question = model.Question;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id} = req.body;
    
    let offline = await Offline.destroy({
        raw : true,
        where : { of_us_id : us_social_id }
    })
    .catch((err) => {
        console.log('[del_user_data] Offline DB 오류')
        response(res, 200, '[del_user_data] Offline DB 오류', err)
    });
    console.log(offline)
    
    let online = await Online.destroy({
        raw : true,
        where : { on_us_id : us_social_id }
    })
    .catch((err) => {
        console.log('[del_user_data] Online DB 오류')
        response(res, 200, '[del_user_data] Online DB 오류', err)
    });
    console.log(online)
    
    let question = await Question.destroy({
        raw : true,
        where : { qu_us_id : us_social_id }
    })
    .catch((err) => {
        console.log('[del_user_data] Question DB 오류')
        response(res, 200, '[del_user_data] Question DB 오류', err)
    });
    console.log(question)
    
    let address = await Address.destroy({
        raw : true,
        where : { ad_us_id : us_social_id }
    })
    .catch((err) => {
        console.log('[del_user_data] Address DB 오류')
        response(res, 200, '[del_user_data] Address DB 오류', err)
    });
    console.log(address)
    
    let post = await Post.destroy({
        raw : true,
        where : { po_us_id : us_social_id }
    })
    .catch((err) => {
        console.log('[del_user_data] Post DB 오류')
        response(res, 200, '[del_user_data] Post DB 오류', err)
    });
    console.log(post)
    
    let user = await User.destroy({
        raw : true,
        where : { us_social_id }
    })
    .catch((err) => {
        console.log('[del_user_data] User DB 오류')
        response(res, 200, '[del_user_data] User DB 오류', err)
    });
    console.log(user)
    console.log('del_user_data')
    response(res, 200, "[del_user_data] DB 삭제 완료.", user+post+offline+online+address+question);
};