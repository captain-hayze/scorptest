'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
        this.belongsTo(User, {
          foreignKey: 'followingId',
          as: 'followed',
        });

        this.belongsTo(User, {
          foreignKey: 'followerId',
          as: 'follower',
        });
    }
  };
  Follow.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'Follow',
    tableName: 'Follows',
  });
  return Follow;
};