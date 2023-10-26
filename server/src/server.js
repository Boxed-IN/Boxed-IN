const express = require('express');
const knex = require('./knex');
const app = express();
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
});

app.use(express.json());
app.use(cors());
app.use(express.static('../client/dist'));

//Endpoints
app.get("/", (request, response) =>{
    response.status(200).send("Hello Server");
});