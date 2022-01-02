'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post, User}) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user',
      });

      this.hasOne(Post, {
        foreignKey: 'postId',
        as: 'post',
      });
    }
  };
  Like.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'Like',
    tableName: 'Likes',
  });
  return Like;
};