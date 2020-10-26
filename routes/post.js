const api = require("../api/post");
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

module.exports = (router) => {
    // Post 데이터 반환
    router.post('/get_post_data', api.get_post_data);
    
    // Post 데이터 저장
    router.post('/set_post_data', upload.single('po_photo'), api.set_post_data);
    
    // 받은 Post 데이터 반환
    router.post('/get_received_post', api.get_received_post);
    
    // 보낸 Post 데이터 반환
    router.post('/get_sended_post', api.get_sended_post);

    return router;
};
