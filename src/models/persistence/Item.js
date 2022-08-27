"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ models }) {
    }
  }
  Item.init(
    {
      room: DataTypes.STRING(70),
      secret: DataTypes.STRING(4),
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
