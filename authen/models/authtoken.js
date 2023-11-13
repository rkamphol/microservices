'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class AuthToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthToken.init({
    user: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiryAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AuthToken',
  });

  AuthToken.createToken = async function (user) {
    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + process.env.JWT_REFRESH_EXPIRATION);
    let _token = uuidv4();
    let refreshToken = await AuthToken.create({
      token: _token,
      user: user.id,
      expiryAt: expiredAt.getTime(),
    });
    return refreshToken.token;
  }

  AuthToken.verifyExpiration = (token) => {
    return token.expiryAt.getTime() < new Date().getTime();
  }
  return AuthToken;
};