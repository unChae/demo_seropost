// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {number} = req.body;
    let _number = req.session.number;
    console.log('number :',number)
    console.log('session :',_number)

    if(_number) {
        if(number == _number){
            req.session.destroy(function(){
                console.log('destroy');
            });
            response(res, 200, "[number_certification] 인증 완료.", null);
        }else{
            response(res, 200, "[number_certification] 인증번호가 틀림.", null);
        }
    }else{
        response(res, 200, "[number_certification] 인증번호 만료.", null);
    }
};
