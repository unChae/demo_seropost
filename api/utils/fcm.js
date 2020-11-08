var FCM = require('fcm-node');

var serverKey = process.env.FIRE_BASE_SERVICE_KEY; 
var fcm = new FCM(serverKey);

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'registration_token',  //기기 토큰값
    notification: {
        title: 'Title of your push notification',   //제목
        body: 'Body of your push notification'  //보낼메시지
    },
};

module.exports = {
    send : (us_fcm_token) => {
        return new Promise(function(resolve, reject){
            message.to = us_fcm_token
        
            fcm.send(message, function(err, res){
                if (err) {
                    // console.log("Something has gone wrong!");
                    reject(res)
                } else {
                    // console.log("Successfully sent with response: ");
                    resolve(res)
                }
            });
        })
        
        
    }
}
