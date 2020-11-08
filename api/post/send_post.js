// models
const model = require("../../models");
const Post = model.Post;
const User = model.User;

// utils
const response = require("../utils/response");
const fcm = require("../utils/fcm")

module.exports = async (req,res) => {
    let {us_phone_number} = req.body;
    
    let receive_user = await User.findOne({
        raw:true,
        where :{us_phone_number}
    })
    .catch((err) => {
        console.log("[send_post] User DB 반환 오류");
        response(res, 200, "[send_post] User DB 반환 오류", err);
    });
    
    
    fcm.send(receive_user.us_fcm_token, res)
    .then((result) => {
        console.log('send_post succes')
        response(res, 200, "[send_post] FCM 알림 발송 성공", result);
    
    })
    .catch((err) => {
        console.log("send_post fail");
        response(res, 200, "[send_post] FCM 알림 발송 실패", err);
        
    })
};