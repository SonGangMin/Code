const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "user_UN"
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    provider: {
      type: DataTypes.ENUM('local','kakao'),
      allowNull: false,
      defaultValue: "local"
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
