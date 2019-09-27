'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
    BIGINT,
    DATE,
  } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(76),
      allowNull: false,
    },
    username: {
      type: STRING(12),
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING(100),
      allowNull: false,
    },
    createdTime: {
      type: DATE,
      defaultValue: DATE.NOW,
    },
    version: {
      type: BIGINT,
      defaultValue: 0,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  return User;
};
