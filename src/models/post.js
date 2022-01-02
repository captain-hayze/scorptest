'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  };
  Post.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    },
    image: {
      type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
    },
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'Posts',
  });
  return Post;
};