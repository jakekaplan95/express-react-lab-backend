// Dependencies
const express = require("express");
const cors = require("cors");

// import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// app object
const app = express();

// Middleware
app.use(cors());


// Routes

// home route
app.get("/", (req, res) => {
    res.send("hello world");
});

// retreives projects route
app.get("/projects", (req, res) => {
    //projects get sent via json
    res.json(projects);
})

// retrieves about info route
app.get("/about", (req, res) => {
    // send about via JSON
    res.json(about);
})

// variable for port number
const PORT = process.env.PORT || 4000;

// server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
