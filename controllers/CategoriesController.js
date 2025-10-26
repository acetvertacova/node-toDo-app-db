import db from '../models/index.js';
const Category = db.Category;
const Todo = db.Todo;
const { Op } = db.Sequelize;

export async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll({ include: { model: Todo, as: 'todos' } });
        res.json(categories);
    } catch (error) {
        console.error('Error in getAllCategories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
