const { CodeBreakerController } = require("../../controllers");
const router = require("express").Router();
const CodeBreakerRequest = require("../../requests/code_breaker.request");

router.post("/", CodeBreakerController.store);
router.post("/", ...CodeBreakerRequest.resolve, CodeBreakerController.resolve);

module.exports = router;
