// models
const model = require("../../models");
const User = model.User;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, us_phone_number, us_name, us_address, us_address_detail} = req.body;
    
    let user = await User.update({
        raw : true,
        us_phone_number,
        us_name,
        us_address,
        us_address_detail
    },{ where : {us_social_id}})
    .catch((err) => {
        console.log('[update_user] DB 오류')
        response(res, 200, '[update_user] DB 오류', err)
    });

    response(res, 200, "[update_user] DB 변경 완료.", user);
};