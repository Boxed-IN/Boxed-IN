const express = require("express");
const userController = require("./user/user.controller");
const app = express();
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5100;
app.use(express.json());
app.use(cors());
// app.use(express.static("../client/dist"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

//Endpoints

// //login user
app.get("/login", userController.getUser); //done returning user
// user by id
app.get("/login/:id", userController.getUser); // done returning user
// //create user
app.post("/create", userController.create); //done returning id and user_name
