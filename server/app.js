
const express = require("express");
const app = express();
const paymentRoute = require("./routes/paymentRoute")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(paymentRoute);
module.exports = app;
