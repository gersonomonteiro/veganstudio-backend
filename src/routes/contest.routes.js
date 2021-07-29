const contestController = require("../controllers/contest.controller");

const router = require("express").Router();

router.get("/contests", contestController.index);
router.post("/contests", contestController.store);

module.exports = router;
