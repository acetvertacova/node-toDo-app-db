import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Todo API",
            version: "1.0.0",
            description: "API for toDo app"
        },
        servers: [
            {
                url: "http://localhost:3000/api"
            }
        ]
    },
    apis: ["./routes/swaggerDocs.js"],
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
