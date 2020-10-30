// modules
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
//timesetting
const moment=require("moment");


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region : 'ap-northeast-2'
});
let param = ''

const storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET, // 버킷 이름
    contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
    acl: 'public-read', // 클라이언트에서 자유롭게 가용하기 위함
    key: (req, file, cb) => {
        let date = moment().format('YYYYMMDDHHmmss');
        let {us_social_id, po_content} = req.body
        param = us_social_id + '/post/' + date + '/' + file.fieldname + '.png'
        cb(null, param)
    },
});

module.exports.upload = multer({storage:storage})