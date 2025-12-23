const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const customerController = require("../controllers/customerController");

router.get("/", auth, customerController.getCustomers);
router.post("/", auth, customerController.createCustomer);

module.exports = router;
