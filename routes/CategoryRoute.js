import express from 'express';
import * as categoryController from "../controllers/CategoriesController.js";

const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.getAllCategories);

export default categoryRouter;
