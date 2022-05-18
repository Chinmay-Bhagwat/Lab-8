const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
service = require('./service.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../lab8'));
service.attachService(app);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index1.html"));
});
app.listen(3300, () => {
    console.log(`Server is running on port 3300.`);
});