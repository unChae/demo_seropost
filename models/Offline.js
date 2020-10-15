module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Offline', { 
        of_po_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        of_us_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        of_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        of_address: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        of_address_detail: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        of_status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }
    },{ 
        updatedAt: false,
        timestamps: true
    }); 
    
    model.removeAttribute('id');
    
    return model;
}
