// models
const model = require("../../models");
const Address = model.Address;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id} = req.body;
    
    let address = await Address.findAll({
        raw : true,
        where : { ad_us_id : us_social_id }
    })
    .catch((err) => {
        console.log('[get_address] DB 오류')
        response(res, 200, '[get_address] DB 오류', err)
    });
    console.log('get_address')
    response(res, 200, "[get_address] DB 반환 완료.", address);
};