const { CodeBreakerController } = require("src/controllers");
const router = require("express").Router();
const CodeBreakerRequest = require("src/requests/code_breaker.request");

router.post("/", CodeBreakerController.store);
router.post("/", ...CodeBreakerRequest.resolve, CodeBreakerController.resolve);

module.exports = router;
