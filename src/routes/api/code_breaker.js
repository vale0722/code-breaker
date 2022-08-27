const { CodeBreakerController } = require("../../controllers");
const router = require("express").Router();
const CodeBreakerRequest = require("../../requests/code_breaker.request");

router.post("/start-game", CodeBreakerController.store);
router.post("/resolve", ...CodeBreakerRequest.resolve, CodeBreakerController.resolve);

module.exports = router;
