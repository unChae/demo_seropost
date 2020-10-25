// utils
const response = require("../utils/response");
const model = require('../../models');
const User = model.User;

module.exports = async (req,res) => {
    let {number} = req.body;
    console.log(req.session)
    console.log(req.session.number)
    if(req.session.number) {
        if(number == req.session.number){
            req.session.destroy(function(){
            });
            console.log('인증완료')
            response(res, 200, "[number_certification] 인증 완료.", true);
        }else{
            response(res, 200, "[number_certification] 인증번호가 틀림.", false);
            console.log('인증실패')
        }
    }else{
        response(res, 200, "[number_certification] 인증번호 만료.", null);
        console.log('인증만료')
    }
};
