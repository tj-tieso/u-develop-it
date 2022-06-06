// The index.js is a central hub to pull routes together
const express = require("express");
const router = express.Router();

router.use(require("./candidateRoutes"));
router.use(require("./partyRoutes"));

module.exports = router;
