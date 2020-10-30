// models
const model = require("../../models");
const Category = model.QuestionCategory;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let category = await Category.findAll({
        raw : true,
    })
    .catch((err) => {
        console.log('[get_category_data] DB 오류')
        response(res, 200, '[get_category_data] DB 오류', err)
    });

    response(res, 200, "[get_category_data] DB question category 반환 완료.", category);
};