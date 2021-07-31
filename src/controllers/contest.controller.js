const Contest = require("../models/Contest");

module.exports = {
  async index(req, res) {
    const contest = await Contest.findAll({})
      .then((contest) => {
        return res.json({ contest });
      })
      .catch(function (err) {
        return res.json(err);
      });
  },

  store(req, res) {
    const { name, email, recipe_name, ingredients, method, region } = req.body;
    if (
      name != "" &&
      email != "" &&
      recipe_name != "" &&
      ingredients != "" &&
      method != "" &&
      region != ""
    ) {
      const content = Contest.create({
        name,
        email,
        recipe_name,
        ingredients,
        method,
        region,
      })
        .then((content) => {
          return res.json({
            message: "Contest successfully added",
          });
        })
        .catch(function (err) {
          return res.json(err);
        });
    } else {
      res.status(400).send({
        message: "Fields cannot be empty",
      });
    }
  },

  async remove(req, res) {
    await Contest.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((content) => {
        if (content == 0) {
          return res.status(400).json({
            message: "Contest not deleted!",
          });
        } else {
          return res.json({
            message: "Contest deleted successfully!",
          });
        }
      })
      .catch((err) =>
        res.json({
          message: err.message,
        })
      );
  },
};
