const express = require("express");

const { list } = require("../controllers/postsController");

const router = express.Router();

router.get("/", list);

module.exports = router;