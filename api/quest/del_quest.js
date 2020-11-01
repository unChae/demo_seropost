// models
const model = require("../../models");
const Question = model.Question;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {qu_id} = req.body;
    
    let question = await Question.destroy({
        raw : true,
        where : { qu_id }
    })
    .catch((err) => {
        console.log('[del_quest] DB 오류')
        response(res, 200, '[del_quest] DB 오류', err)
    });
    console.log('del_quest')
    response(res, 200, "[del_quest] DB 삭제 완료.", question);
};