const { CodeBreaker } = require("../../data-access");
const { Item } = require("../../models/dto");
const { v4: uuidv4 } = require('uuid');

module.exports = async function () {
  const res = await CodeBreaker.create({
    secret: Math.floor(1000 + Math.random() * 9000).toString(),
    room: uuidv4(),
  });
  return Item.toDTO(res);
};
