// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Image extends Model {}

// Image.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     type: {
//         type: DataTypes.STRING
//     },
//     name:{
//         type: DataTypes.STRING
//     },
//     data: {
//         type: DataTypes.BLOB("long"),
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//     post_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'post',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'like',
//   },
// );

// module.exports = Image;