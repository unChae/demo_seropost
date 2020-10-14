module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('QuestionCategory', { 
        qc_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        qc_content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    },{ 
        timestamps:false, 
    }); 

    return model;
}
