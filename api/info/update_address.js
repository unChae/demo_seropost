// models
const model = require("../../models");
const Address = model.Address;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {ad_id, ad_name, ad_address, ad_address_detail} = req.body;
    
    let address = await Address.update({
        raw : true,
        ad_name,
        ad_address,
        ad_address_detail
    },{ where : {ad_id}})
    .catch((err) => {
        console.log('[update_address] DB 오류')
        response(res, 200, '[update_address] DB 오류', err)
    });

    response(res, 200, "[update_address] DB 변경 완료.", address);
};