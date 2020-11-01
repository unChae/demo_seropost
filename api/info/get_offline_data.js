// models
const model = require("../../models");
const Offline = model.Offline;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, po_id} = req.body;
    
    let offline = await Offline.findAll({
        raw : true,
        where : { of_us_id : us_social_id, of_po_id : po_id },
    })
    .catch((err) => {
        console.log('[get_offline_data] DB 오류')
        response(res, 200, '[get_offline_data] DB 오류', err)
    });
    // console.log(offline)
    console.log('get_offline_data')
    response(res, 200, "[get_offline_data] DB 반환 완료.", offline);
};