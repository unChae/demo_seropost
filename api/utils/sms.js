// aligoapi 호출
const aligoapi = require('aligoapi');

var AuthData = {
    key: process.env.ALIGOAPI_KEY,
    // 이곳에 발급받으신 api key를 입력하세요
    user_id: process.env.ALIGOAPI_USER_ID,
    // 이곳에 userid를 입력하세요
}

// random 숫자 생성
const random = require("./random");

var number = null;
var aligo_msg = {
    sender : process.env.ALIGOAPI_SENDER,
    receiver :'',
    msg : '',
};

module.exports = {
    set_us_phone_number: (us_phone_number) => {
        console.log("+82" + us_phone_number);
        number = random.number(1000,9999);
        
        aligo_msg.receiver = us_phone_number;
        console.log("reciever : " + aligo_msg.receiver);
        aligo_msg.msg = String(number);
        console.log("msg : " + aligo_msg.msg);
        console.log(aligo_msg);

    },
    send_sms: () => {
        
        aligoapi.send(aligo_msg, AuthData)
        .then((result) => {
            return true;            
        })
        .catch((err) => {
            return false;
        })        
    },

    get_number: () => {
        return number;
    },
}