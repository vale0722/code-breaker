const { item } = require("src/models/persistence");

const create = async function (data) {
  try {
    return await item.create({
      secret: data.secret,
      room: data.room,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const findByRoom = async function (room) {
  try {
    return await item.findOne({
      where: {
        room: room,
      },
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

module.exports = {
  create,
  findByRoom,
};
