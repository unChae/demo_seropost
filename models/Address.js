module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Address', { 
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
            allowNull: false
        },
        ad_address_detail: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{ 
        timestamps: false
    }); 
    
    model.removeAttribute('id');
    
    return model;
}
