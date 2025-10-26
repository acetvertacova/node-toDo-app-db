import express from 'express';
import * as todoController from "../controllers/TodoController.js";

const todoRouter = express.Router();

todoRouter.get('/', todoController.getAll);
todoRouter.post('/', todoController.create);
todoRouter.get('/:id', todoController.getById);
todoRouter.put('/:id', todoController.update);
todoRouter.delete('/:id', todoController.remove);
todoRouter.patch('/:id/toggle', todoController.toggleCompleted);

export default todoRouter;