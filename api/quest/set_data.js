// models
const model = require("../../models");
const Question = model.Question;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id, qu_qc_id, qu_content, qu_parent_id} = req.body;

    let question = await Question.create({
        raw : true,
        qu_us_id : us_social_id,
        qu_qc_id,
        qu_content,
        qu_parent_id,
    })
    .catch((err) => {
        console.log('[set_data] DB 등록 오류')
        response(res, 200, '[set_data] DB 등록 오류', err)
    });

    response(res, 200, "[set_data] DB question 등록 완료.", question);
};