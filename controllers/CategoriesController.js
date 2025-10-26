import db from '../models/index.js';
const Category = db.Category;

export async function getAll(req, res) {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}

export async function getById(req, res) {
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' })
        }

        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

export async function create(req, res) {
    const { name } = req.body;
    try {
        const newCategory = await Category.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}

export async function update(req, res) {
    const id = req.params.id;
    const { name } = req.body;
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        category.name = name ?? category.name;
        await category.save();
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}

export async function remove(req, res) {
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        await category.destroy();
        res.status(204);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}