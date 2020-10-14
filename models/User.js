module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('User', { 
        us_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        us_social_id: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        us_phone_number: { 
            type: DataTypes.STRING(20), 
            allowNull: false
        }, 
        us_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        us_photo: {
            type: DataTypes.STRING(255),
        },
        us_address: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        us_address_detail: {
            type: DataTypes.TEXT,  
            allowNull: false
        },
        us_alarm: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        us_access_token: {
            type: DataTypes.STRING(255)
        },
        us_fcm_token: {
            type: DataTypes.STRING(255)
        },
    },{ 
        timestamps:false, 
    }); 
}
