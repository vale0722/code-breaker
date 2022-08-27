"use strict";
const DTO = require("./dto");

module.exports = class Item extends DTO {
  constructor(data) {
    super();
    this.id = data.id;
    this.room = data.room;
    this.secret = data.secret;
  }

  static toDTO(item) {
    return new Item(
        item
        ? {
            id: item.id,
            room: item.room,
            secret: item.secret,
          }
        : {
              id: "",
              room: "",
              secret: "",
          }
    );
  }
};
