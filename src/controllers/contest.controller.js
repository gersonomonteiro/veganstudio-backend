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
          return res.json(content);
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
};
