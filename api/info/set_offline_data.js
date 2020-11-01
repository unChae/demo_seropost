// models
const model = require("../../models");
const Offline = model.Offline;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, po_id, of_name, of_address, of_address_detail, of_address_number} = req.body;
    
    let offline = await Offline.create({
        raw : true,
        of_po_id : po_id,
        of_us_id : us_social_id,
        of_name,
        of_address,
        of_address_detail,
        of_address_number
    })
    .catch((err) => {
        console.log('[set_offline_data] DB 등록 오류')
        response(res, 200, '[set_offline_data] DB 등록 오류', err)
    });
    console.log('set_offline_data')
    response(res, 200, "[set_offline_data] DB offline 등록 완료.", offline);
};