const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");
console.log(config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS, "=================");
const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: false,

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle
    }
  }
);
sequelize.authenticate().then(
  () => {
    console.log("Connection has been established successfully.");
  },
  err => {
    console.error("Unable to connect to the database:", err);
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.category = require("./category.model.js")(sequelize, Sequelize, DataTypes);
db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.service = require("./service.model.js")(sequelize, Sequelize, DataTypes);

db.category.hasMany(db.service, {
  foreignKey: "category_id",
  as: "serviceDetails"
});
db.service.belongsTo(db.category);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync Db with { force: true }");
});
module.exports = db;
