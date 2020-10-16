module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Question', { 
        qu_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        qu_us_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        qu_qc_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        qu_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        qu_parent_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },{ 
        timestamps:true, 
        updatedAt: false,
    }); 
    
    return model;
}
