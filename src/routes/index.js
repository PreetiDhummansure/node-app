const express = require("express");

const app = express();

const UserRoute = require("./UserRoutes");
const AuthRoute = require("./AuthRoutes");
const postsRoutes= require("./postsRoutes")
const CategoryRoute = require("./CategoryRoutes");

const { auth } = require("../middlewares/Auth");

app.use("/user", UserRoute);
app.use("/auth", AuthRoute);
app.use("/posts",postsRoutes);
app.use("/category", auth, CategoryRoute);

module.exports = app;
