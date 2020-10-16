// models
const model = require("../../models");
const Offline = model.Offline;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, po_id, of_name, of_address, of_address_detail, of_status} = req.body;
    
    let offline = await Offline.create({
        of_po_id : po_id,
        of_us_id : us_social_id,
        of_name,
        of_address,
        of_address_detail,
        of_status
    })
    .catch((err) => {
        console.log('[set_offline_data] DB 등록 오류')
        response(res, 200, '[set_offline_data] DB 등록 오류', err)
    });

    response(res, 200, "[set_offline_data] DB offline 등록 완료.", offline);
};