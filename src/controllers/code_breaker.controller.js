const { validationResult } = require("express-validator");
const {storeItem, showItem} = require("../use-cases/items");
const {resolveCodeBreaker} = require("../helpers/code_breaker");

module.exports = {
  async store(req, res) {
    const response = {};
    try {
      const result = await storeItem(req);
      response.status = 201;
      response.body = {
        room: result.room
      };
    } catch (e) {
      response.status = 400;
      response.body = {
        error: e.message,
      };
    }

    res.status(response.status).json(response.body);
  },

  async resolve(req, res) {
    const response = {};
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        const item = await showItem(req);
        const result = await resolveCodeBreaker(req.body.number, item.secret);
        response.status = 201;
        response.body = {
          result
        };
      } catch (e) {
        response.status = 400;
        response.body = {
          error: e.message,
        };
      }
    } else {
      response.status = 402;
      response.body = { error: errors };
    }

    res.status(response.status).json(response.body);
  }
};
