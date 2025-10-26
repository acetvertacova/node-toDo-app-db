import express from "express";
import dotenv from "dotenv";
import categoryRouter from "./routes/CategoryRoute.js";
import todoRouter from "./routes/TodoRoute.js";
import { swaggerUi, specs } from "./swagger/swagger.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/categories', categoryRouter);
app.use('/api/todos', todoRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});