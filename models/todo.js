import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Todo extends Model {
    static associate(models) {
      Todo.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: 'category'
      })
    }
  }
  Todo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Todo',
    tableName: 'Todos',
    underscored: true,
  });
  return Todo;
};