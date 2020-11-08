// aligoapi 호출
const aligoapi = require('aligoapi');
// aixos 호출
const axios = require('axios');

// random 숫자 생성
const random = require("./random");

var number = null;
var aligo_msg = {
    key : process.env.ALIGOAPI_KEY,
    user_id : process.env.ALIGOAPI_USER_ID,
    sender : process.env.ALIGOAPI_SENDER,
    receiver :'',
    msg : '',
    // testmode_yn	: 'Y'
};

module.exports = {
    set_us_phone_number: (us_phone_number) => {
        
        number = random.number(1000,9999);
        aligo_msg.receiver = us_phone_number;
        aligo_msg.msg = String(number);
        console.log(aligo_msg);

    },
    
    send_sms: () => {
        
        axios.post('https://apis.aligo.in/send/', null, {
            params : {
                key : aligo_msg.key,
                user_id : aligo_msg.user_id,
                sender : aligo_msg.sender,
                receiver : aligo_msg.receiver,
                msg : aligo_msg.msg
            }
        }).catch((err) => {
            console.log(err)
            return false;
        })
        return true;
    },

    get_number: () => {
        
        return number;
    },
    
    send_address_sms:(us_phone_number)=>{
        
        aligo_msg.receiver = us_phone_number;
        aligo_msg.msg = 'Please enter your address'
        console.log(aligo_msg);
        
        axios.post('https://apis.aligo.in/send/', null, {
            params : {
                key : aligo_msg.key,
                user_id : aligo_msg.user_id,
                sender : aligo_msg.sender,
                receiver : aligo_msg.receiver,
                msg : aligo_msg.msg
            }
        }).catch((err) => {
            console.log(err)
            return false;
        })
        return true;
        
    }
}
