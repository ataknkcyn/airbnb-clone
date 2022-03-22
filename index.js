require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { routes } = require("./src");
const port = process.env.NODE_DOCKER_PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
