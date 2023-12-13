const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const errorHandler = require('./middleware/error_handler')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))

app.use(router)
app.use(errorHandler)

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})