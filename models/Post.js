module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Post', { 
        po_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        po_us_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        po_photo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        po_content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{ 
        updatedAt: false,
        timestamps:true
    }); 
    
    return model;
}
