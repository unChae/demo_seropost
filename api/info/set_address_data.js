// models
const model = require("../../models");
const Address = model.Address;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, ad_name, ad_address, ad_address_detail, ad_number} = req.body;
    
    let check_address_name = await Address.findOne({
        raw: true,
        where:{ ad_name }
    })
    .catch((err) => {
        console.log('[set_address_data] DB 반환 오류')
        response(res, 200, '[set_address_data] DB 반환 오류', err)
    });
    
    if(check_address_name!=null){
        console.log('[set_address_data] 이미 등록된 이름')
        response(res, 200, '[set_address_data] 이미 등록된 이름', null)
    }
    else{
        let address = await Address.create({
            raw : true,
            ad_us_id : us_social_id,
            ad_name,
            ad_address,
            ad_address_detail,
            ad_number
        })
        .catch((err) => {
            console.log('[set_address_data] DB 등록 오류')
            response(res, 200, '[set_address_data] DB 등록 오류', err)
        });
        response(res, 200, "[set_address_data] DB address 등록 완료.", address);
    }
};