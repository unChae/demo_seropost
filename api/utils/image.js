// modules
const request = require('request').defaults({ encoding: null });
const multer = require('multer');
const multerS3 = require('multer-s3');
var AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region : 'ap-northeast-2'
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET, // 버킷 이름
        contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
        acl: 'public-read', // 클라이언트에서 자유롭게 가용하기 위함
        key: (req, file, cb) => {
            console.log(file);
            cb(null, file.originalname)
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
});

// var base64 = null;

module.exports = {
    
    //이미지 url주소를 이미지 파일로 만들어줌 base64형태로
    // set_base64: async (uri) => {
    //     base64 = await new Promise((resolve, reject) => {
    //         request.get(uri, function (err, res, body) {
    //             if (!err && res.statusCode == 200) {
    //                 let data = "data:" + res.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
    //                 resolve(data);
    //             } else {
    //                 return reject(err);
    //             }
    //         })
    //     })
    // },
    imageupload: async() =>{
        return upload.single('po_photo')
    },
    
    //이미지 파일을 s3에 저장
    s3_upload: async (base64, us_social_id, po_id, check) => {
        return new Promise(function(resolve, reject){
            let buffer = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""),'base64')
            let param = {}
            if(check==0){
                param = {
                    'Bucket': process.env.AWS_S3_BUCKET,
                    'Key': us_social_id + '/post/' + po_id + '_post.png',
                    'ACL': 'public-read',
                    'Body': buffer,
                    'ContentEncoding': 'base64',
                    'ContentType': 'image/jpeg'
                }
            }
            else{
                param = {
                    'Bucket': process.env.AWS_S3_BUCKET,
                    'Key': us_social_id + '/post/' + po_id + '_content.png',
                    'ACL': 'public-read',
                    'Body': buffer,
                    'ContentEncoding': 'base64',
                    'ContentType': 'image/jpeg'
                }
            }
            s3.upload(param, function(err, data){
                if(err) {
                    console.log(err);
                    reject(new Error('Request error'))
                }
                console.log(data.Location)
                resolve(data.Location)
            })
            
        })
        
    }
}