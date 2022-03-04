// create post route
const fb = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../../helpers/fsUtils");

fb.get("/notes", (req, res) => readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))));
// create get route to show the notes in the form of an array
fb.post("/notes", (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
            feedback_id: uuidv4(),
        };

        readAndAppend(newNote, "./db/db.json");

        const response = {
            status: "success",
            body: newNote,
        };

        res.json(response);
    } else {
        res.json("Error in posting feedback");
    }
});
// EXTRA CREDIT delete the notes
module.exports = fb;
