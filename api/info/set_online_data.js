// models
const model = require("../../models");
const Online = model.Online;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, po_id} = req.body;
    
    let online = await Online.create({
        raw : true,
        on_po_id : po_id,
        on_us_id : us_social_id
    })
    .catch((err) => {
        console.log('[set_online_data] DB 등록 오류')
        response(res, 200, '[set_online_data] DB 등록 오류', err)
    });

    response(res, 200, "[set_online_data] DB user 등록 완료.", online);
};