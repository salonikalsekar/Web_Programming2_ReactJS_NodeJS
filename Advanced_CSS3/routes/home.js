const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
 res.render("home");
});

router.get("*", (req, res) => {
res.status(404).json({ error: "Not found" });
});

module.exports = router;