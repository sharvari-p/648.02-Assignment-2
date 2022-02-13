const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../static")));

app.listen(PORT, () => console.log('Listening on PORT', PORT));