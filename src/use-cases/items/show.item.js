const { CodeBreaker } = require("data-access");
const {Item} = require("models/dto");

module.exports = async function (request) {
  const res = await CodeBreaker.findByRoom(request.body.room);
  return Item.toDTO(res);
};
