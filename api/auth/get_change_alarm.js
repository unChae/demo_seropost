// models
const model = require("../../models");
const User = model.User;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, us_alarm} = req.body;

    try{
        let user = await User.findOne({
            raw:true,
            where: {us_social_id}
        })
        .catch((err) => {
            console.log("[get_change_alarm] DB 반환 오류");
            response(res, 200, "[get_change_alarm] DB 반환 오류", err);
        });
        
        if(user!=null){
            await User.update({
                raw:true,
                us_alarm
            },{where :{us_social_id}}).catch((err) => {
                console.log('[get_change_alarm] DB 오류')
                response(res, 200, '[get_change_alarm] DB 오류', err)
            });
            console.log('get_alarm_data');
            response(res, 200, "[get_alarm_data] DB 데이터 반환 완료", us_alarm);
        }
        else{
            console.log('get_alarm_data');
            response(res, 200, "[get_alarm_data] 등록되지 않은 유저", null);
        }
    }catch(err) {
        response(res, 200, "[get_alarm_data] 등록되지 않은 유저.", null);
    }
};