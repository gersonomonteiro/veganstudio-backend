const Sequelize = require("sequelize");
const config = require("../config/db.config");

const Contest = require("../models/Contest");

const connection = new Sequelize(config);

Contest.init(connection);

module.exports = connection;
