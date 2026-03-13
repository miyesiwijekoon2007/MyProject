const express = require("express");
const app = express();
const port = 3001;

// to read POST form data
app.use(express.urlencoded({ extended: true }));

// serve HTML files
app.use(express.static("public"));

// POST request to get the user's name
app.post("/submit", (req, res) => {
    const username = req.body.username; // store name in variable

    // redirect using GET request
    res.redirect("/greeting.html?name=" + username);
});

// start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});