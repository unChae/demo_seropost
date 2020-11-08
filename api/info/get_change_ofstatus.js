// models
const model = require("../../models");
const Offline = model.Offline;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, po_id, of_status, of_address, of_address_detail, of_address_number} = req.body;

    try{
        let offline = await Offline.findOne({
            raw:true,
            where: {of_us_id :us_social_id
                ,of_po_id : po_id
            }
        })
        .catch((err) => {
            console.log("[get_change_ofstatus] DB 반환 오류");
            response(res, 200, "[get_change_ofstatus] DB 반환 오류", err);
        });
        
        if(offline!=null){
            let offline_update = await Offline.update({
                raw:true,
                of_status,
                of_address,
                of_address_detail,
                of_address_number
            },{where :{of_us_id:us_social_id
                ,of_po_id : po_id
            }}).catch((err) => {
                console.log('[get_change_ofstatus] DB 반환 오류')
                response(res, 200, '[get_change_ofstatus] DB 반환 오류', err)
            });
            console.log('get_change_ofstatus');
            response(res, 200, "[get_change_ofstatus] DB 데이터 반환 완료", offline_update);
        }
        else{
            console.log('get_change_ofstatus')
            response(res, 200, "[get_change_ofstatus] 등록되지 않은 offline", null);
        }
        
    }catch(err) {
        response(res, 200, "[get_change_ofstatus] 등록되지 않은 Offline.", null);
    }
};