// The index.js is a central hub to pull routes together
const express = require("express");
const router = express.Router();

router.use(require("./candidateRoutes"));

module.exports = router;
