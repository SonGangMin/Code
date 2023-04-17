var DataTypes = require("sequelize").DataTypes;
var _domain = require("./domain");
var _follow = require("./follow");
var _hashtag = require("./hashtag");
var _post = require("./post");
var _post_hashtag = require("./post_hashtag");
var _user = require("./user");

function initModels(sequelize) {
  var domain = _domain(sequelize, DataTypes);
  var follow = _follow(sequelize, DataTypes);
  var hashtag = _hashtag(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var post_hashtag = _post_hashtag(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  post_hashtag.belongsTo(hashtag, { as: "hashtag", foreignKey: "hashtagId" });
  hashtag.hasMany(post_hashtag, {
    as: "post_hashtags",
    foreignKey: "hashtagId",
  });
  post_hashtag.belongsTo(post, { as: "post", foreignKey: "postId" });
  post.hasMany(post_hashtag, { as: "post_hashtags", foreignKey: "postId" });
  follow.belongsTo(user, { as: "following", foreignKey: "following_id" });
  user.hasMany(follow, { as: "follows", foreignKey: "following_id" });
  follow.belongsTo(user, { as: "follower", foreignKey: "follower_id" });
  user.hasMany(follow, { as: "follower_follows", foreignKey: "follower_id" });
  post.belongsTo(user, { as: "users", foreignKey: "user_id" });
  user.hasMany(post, { as: "posts", foreignKey: "user_id" });
  post.belongsToMany(hashtag, { as: "hashtags", through: post_hashtag });
  user.belongsToMany(user, {
    as: "Following",
    foreignKey: "following_id",
    through: follow,
  });
  user.belongsToMany(user, {
    as: "Follower",
    foreignKey: "follower_id",
    through: follow,
  });
  hashtag.belongsToMany(post, { as: "posts", through: post_hashtag });
  user.hasMany(domain, { foreignKey: "UserId" });
  domain.belongsTo(user);

  return {
    domain,
    follow,
    hashtag,
    post,
    post_hashtag,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
