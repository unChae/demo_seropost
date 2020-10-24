// models
const model = require("../../models");

// utils
const response = require("../utils/response");
const image = require("../utils/image");

module.exports = async (req,res) => {
    let {us_social_id, us_photo, po_id} = req.body;
    
    await image.set_base64(us_photo)
    let new_url = await image.s3_upload(us_social_id, po_id
    ).then((result) => {
        console.log('result : ' + result)
        response(res, 200, 'success', result)
    }).catch((err) => {
        console.log(err)
        response(res, 20, 'success', err)
    })
};