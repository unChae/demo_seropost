// models
const model = require("../../models");
const Question = model.Question;
const User = model.User;
const Category = model.QuestionCategory;

// utils
const response = require("../utils/response");

module.exports = async (req,res) => {
    let {us_social_id} = req.body;

    let question = await Question.findAll({
        raw : true,
        where:{
            qu_us_id: us_social_id,
            qu_parent_id : 0
        },
        include : [{
             model : Category,
        }],
        order: [['createdAt','DESC']]
    })
    .catch((err) => {
        console.log('[get_quest_data] DB 반환 오류')
        response(res, 200, '[get_quest_data] DB 반환 오류', err)
    });
    
    for(var idx in question){
        question[idx].question = await Question.findAll({
            raw : true,
            where : {qu_parent_id : question[idx].qu_id},
            include : [{
                model : User,
                attributes : [ 'us_name', 'us_photo' ]
            }],
            order: [['createdAt','DESC']]
        })
        .catch((err) => {
            console.log("[get_quest_data]  DB 반환 오류");
            response(res, 200, "[get_quest_data] DB 반환 오류 발생", err);
        });
    }
    // console.log(question)
    console.log('get_quest_data');
    response(res, 200, "[get_quest_data] DB 데이터 반환 완료", question);
    
};