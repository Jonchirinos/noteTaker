// create post route
const fb = require("express").Router();
// const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require("../helpers");

fb.get("/", (req, res) => readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))));
// create get route to show the notes in the form of an array
// EXTRA CREDIT delete the notes
module.exports = fb;
