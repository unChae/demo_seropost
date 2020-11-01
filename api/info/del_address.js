// models
const model = require("../../models");
const Address = model.Address;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {ad_id} = req.body;
    
    let address = await Address.destroy({
        raw : true,
        where : { ad_id }
    })
    .catch((err) => {
        console.log('[del_address] DB 오류')
        response(res, 200, '[del_address] DB 오류', err)
    });
    console.log('del_address')
    response(res, 200, "[del_address] DB 삭제 완료.", address);
};