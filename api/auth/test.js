// models
const model = require("../../models");

// utils
const response = require("../utils/response");
const image = require("../utils/image");

module.exports = async (req,res) => {
    let {us_photo} = req.body;
    
    let file = await image.set_base64(us_photo)
    let new_url = await image.s3_upload()
    console.log('new_url :' + new_url)

    response(res, 200, "[test] ", file);
};