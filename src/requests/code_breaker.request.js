const { body } = require("express-validator");

module.exports = {
  resolve: [
    body("number")
      .isString()
      .notEmpty()
      .isLength({ max: 4 }),
  ],
};
