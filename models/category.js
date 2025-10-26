import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.ToDo, {
        foreignKey: "category_id", // The foreign key in the Todo table
        as: 'todos'
      })
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Category',
    underscored: true,
  });
  return Category;
};