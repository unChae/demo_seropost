// models
const model = require("../../models");
const Address = model.Address;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, ad_name, ad_address, ad_address_detail} = req.body;
    
    let address = await Address.create({
        raw : true,
        ad_us_id : us_social_id,
        ad_name,
        ad_address,
        ad_address_detail,
    })
    .catch((err) => {
        console.log('[set_address_data] DB 등록 오류')
        response(res, 200, '[set_address_data] DB 등록 오류', err)
    });

    response(res, 200, "[set_address_data] DB address 등록 완료.", address);
};