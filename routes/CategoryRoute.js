import express from 'express';
import * as categoryController from "../controllers/CategoriesController.js";

const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.getAll);
categoryRouter.post('/', categoryController.create);
categoryRouter.get('/:id', categoryController.getById);
categoryRouter.put('/:id', categoryController.update);
categoryRouter.delete('/:id', categoryController.remove);

export default categoryRouter;
