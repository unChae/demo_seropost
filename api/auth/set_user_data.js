// models
const model = require("../../models");
const User = model.User;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, us_photo, 
    us_phone_number, 
    us_name, us_address, 
    us_address_detail, 
    us_address_number} = req.body;
    
    let user = await User.create({
        raw:true,
        us_social_id,
        us_phone_number,
        us_name,
        us_address,
        us_address_detail,
        us_address_number,
        us_photo
    })
    .catch((err) => {
        console.log('[set_user_data] DB 등록 오류')
        response(res, 500, '[set_user_data] DB 등록 오류', err)
    });
    console.log('set_user_data')
    response(res, 200, "[set_user_data] DB user 등록 완료.", user);
};