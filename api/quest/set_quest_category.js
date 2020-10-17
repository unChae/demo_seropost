// models
const model = require("../../models");
const Category = model.QuestionCategory;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {qc_content} = req.body;
    
    let category = await Category.create({
        qc_content
    })
    .catch((err) => {
        console.log('[set_quest_category] DB 등록 오류')
        response(res, 200, '[set_quest_category] DB 등록 오류', err)
    });

    response(res, 200, "[set_quest_category] DB question category 등록 완료.", category);
};