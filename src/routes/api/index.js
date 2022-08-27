const express = require("express");
const router = express.Router();
const CodeBreakerRequest = require("../../requests/code_breaker.request");
const {CodeBreakerController} = require("../../controllers");

router.post("/start-game", CodeBreakerController.store);
router.post("/resolve", ...CodeBreakerRequest.resolve, CodeBreakerController.resolve);

module.exports = router;
