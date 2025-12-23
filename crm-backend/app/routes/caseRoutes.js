const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const caseController = require("../controllers/caseController");

router.post("/", auth, caseController.createCase);
router.patch("/:id", auth, caseController.updateCase);

module.exports = router;
