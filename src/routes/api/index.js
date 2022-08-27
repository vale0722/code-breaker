const express = require("express");
const router = express.Router();

router.use("/items", require("./code_breaker"));
router.use("/products", require("./products"));

module.exports = router;
