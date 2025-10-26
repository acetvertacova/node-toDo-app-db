import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Todo, {
        foreignKey: "category_id",
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
    tableName: "Categories",
    underscored: true,
  });
  return Category;
};