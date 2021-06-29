//importing modules
import express from "express";
import sendemail from "./utils.js";

//app config
const app = express();
const port = 5000;

//middleware
app.use(express.json());

//api routes
app.get("/", (req, res) => {res.status(200).send("Server is working!")});
app.post("/sendemail", (req,res) => {
    sendemail(req.body.to);
})

//listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
