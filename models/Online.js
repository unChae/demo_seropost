module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Online', { 
        on_po_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }, 
        on_us_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    },{ 
        updatedAt: false,
        timestamps:true
    }); 
    
    model.removeAttribute('id');
    
    return model;
}
