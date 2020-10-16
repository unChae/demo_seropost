var path = require('path'); 
var Sequelize = require('sequelize'); 
var env = process.env.NODE_ENV || 'development'; 
var config = require(path.join(__dirname, '..', 'config.json'))[env]; 
var db = {}; 
var sequelize = new Sequelize(config.database, config.username, config.password, config); 

db.sequelize = sequelize; 
db.Sequelize = Sequelize; 

db.Address = require('./Address')(sequelize, Sequelize); 
db.Offline = require('./Offline')(sequelize, Sequelize); 
db.Online = require('./Online')(sequelize, Sequelize); 
db.Post = require('./Post')(sequelize, Sequelize); 
db.Question = require('./Question')(sequelize, Sequelize); 
db.QuestionCategory = require('./QuestionCategory')(sequelize, Sequelize); 
db.User = require('./User')(sequelize, Sequelize); 

db.Address.belongsTo(db.User, {foreignKey: 'ad_us_id', targetKey: 'us_social_id'});

db.Offline.belongsTo(db.Post, {foreignKey: 'of_po_id', targetKey: 'po_id'});
db.Offline.belongsTo(db.User, {foreignKey: 'of_us_id', targetKey: 'us_social_id'});

db.Online.belongsTo(db.Post, {foreignKey: 'on_po_id', targetKey: 'po_id'});
db.Online.belongsTo(db.User, {foreignKey: 'on_us_id', targetKey: 'us_social_id'});

db.Post.belongsTo(db.User, {foreignKey: 'po_us_id', targetKey: 'us_social_id'});

db.Question.belongsTo(db.User, {foreignKey: 'qu_us_id', targetKey: 'us_social_id'});
db.Question.belongsTo(db.QuestionCategory, {foreignKey: 'qu_qc_id', targetKey: 'qc_id'});

module.exports = db;
