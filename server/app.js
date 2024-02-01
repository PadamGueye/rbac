const express = require("express");
const authenticateToken = require("./middlewares/authenticateToken");
const mainRoute = require("./routes/mainRouter");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(authenticateToken);
app.use("/", mainRoute);
app.use(errorHandler);

module.exports = app;