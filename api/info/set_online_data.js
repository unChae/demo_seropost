// models
const model = require("../../models");
const User = model.User;
const Online = model.Online;

// utils
const response = require("../utils/response");
const sms = require("../utils/sms");

module.exports = async (req,res) => {
    let {us_phone_number, po_id} = req.body;
    
    let user = await User.findOne({
        raw: true,
        where : {us_phone_number}
    })
    .catch((err) => {
        console.log('[set_online_data] User DB 반환 오류')
        response(res, 200, '[set_online_data] User DB 반환 오류', err)
    });
    
    if(user!=null){
        let online = await Online.create({
            raw: true,
            on_po_id: po_id,
            on_us_id: user.us_social_id
        })
        .catch((err) => {
            console.log('[set_online_data] Onlie DB 등록 오류')
            response(res, 200, '[set_online_data] Online DB 등록 오류', err)
        });
        console.log('set_online_data')
        response(res, 200, "[set_online_data] DB user 등록 완료.", online);
    }
    else{
        let send_verify = sms.send_address_sms(us_phone_number)
        if(send_verify){
            console.log('set_online_data : sms sended')
                response(res, 200, "[set_online_data] 인증번호 발송 완료.", true);
        }
        else{
            response(res, 200, "[set_online_data] 인증번호 발송 실패.", null);
        }
    }
};