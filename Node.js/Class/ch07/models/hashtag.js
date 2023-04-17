const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hashtag', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "hashtag_UN"
    }
  }, {
    sequelize,
    tableName: 'hashtag',
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
        name: "hashtag_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
