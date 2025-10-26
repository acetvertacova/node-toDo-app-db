import express from "express";
import dotenv from "dotenv";
import categoryRouter from "./routes/CategoryRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.use('/api/categories', categoryRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});