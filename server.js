<<<<<<< HEAD
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
=======
//port config
const port =3001;
//express config
const exp=require("express");
//conflig server app
const app =exp();
const name = "Chamudini Thathsarani";
const batch = "Batch 2024";

app.listen(port, () => {
    console.log(`Server started at Port: ${port}`);
    console.log(`Name: ${name}`);
    console.log(`Batch: ${batch}`);
    console.log("Press Ctrl + C to stop the server");
});
// app.listen(port);
>>>>>>> 4f31b1d931e1c9b4526a4d34d0b4669848c9a70d
