// models
const model = require("../../models");
const User = model.User;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_phone_number} = req.body;

    try{
        let user = await User.findOne({
            raw:true,
            where: {us_phone_number}
        })
        .catch((err) => {
            console.log("[get_phone_user] 데이터베이스 오류 발생.");
            response(res, 200, "[get_phone_user] 데이터베이스 오류 발생.", err);
        });
        console.log('get_phone_user');
        response(res, 200, "[get_phone_user] 유저 데이터 반환 완료.", user);
    }catch(err) {
        response(res, 200, "[get_phone_user] 등록되지 않은 유저.", null);
    }
};