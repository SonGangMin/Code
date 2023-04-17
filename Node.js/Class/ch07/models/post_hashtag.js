const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_hashtag', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    postId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    hashtagId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'hashtag',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'post_hashtag',
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
        name: "post_hashtag_FK",
        using: "BTREE",
        fields: [
          { name: "postId" },
        ]
      },
      {
        name: "post_hashtag_FK_1",
        using: "BTREE",
        fields: [
          { name: "hashtagId" },
        ]
      },
    ]
  });
};
