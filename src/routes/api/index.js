const express = require("express");
const router = express.Router();

router.use("/items", require("./code_breaker"));

module.exports = router;
