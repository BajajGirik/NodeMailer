//importing modules
import express from "express";

//app config
const app = express();
const port = 5000;

//middleware


//api routes
app.get("/", (req, res) => {res.status(200).send("Server is working!")});

//listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
