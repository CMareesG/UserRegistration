const express = require("express");
const route = express.Router();
const {creates,fetch,del} = require("../Control/userControl")
route.route("/").post(creates).get(fetch);
route.route("/:id").delete(del);

module.exports = route;