const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({ message: `Thanks for standing by test version 2` }); // Change or remove this if you want to.
});

module.exports = router;
