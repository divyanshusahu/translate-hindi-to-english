const express = require("express");
const bodyParser = require("body-parser");

const translate = require("./api/translate")

const app = express();

// middlewares
app.use(bodyParser.json());

// routes
app.use("/translate", translate)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
