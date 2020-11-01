module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Address', {
        ad_id : {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        },
        ad_us_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ad_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        ad_address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        ad_address_detail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ad_address_number: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },{ 
        timestamps: false
    });
    
    return model;
}
