const { Sequelize } = require("sequelize");
const config = require("../config");
const database = new Sequelize(config.db);
database
  .authenticate()
  .then(() => {
    console.log(`Database connection established`);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = database;
