const router = require("express").Router();

const users = [
  { id: 1, name: "user 1" },
  { id: 2, name: "user 2" },
  { id: 3, name: "user 3" }
];

router.get("/:id", (req, res) => {
  const user = users.find(user => user.id == req.params.id);
  res.json(user);
});

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
