const { Model, Sequelize } = require("sequelize");

class Contest extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        recipe_name: {
          type: Sequelize.STRING,
        },
        ingredients: {
          type: Sequelize.STRING,
        },
        method: {
          type: Sequelize.STRING,
        },
        region: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        tableName: "contests",
      }
    );
  }
}
module.exports = Contest;
