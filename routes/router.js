const { Router } = require("express");
const fs = require("fs/promises");
const path = require("path");

const usersPath = path.join(__dirname, "../db/users.json");

const router = Router();

router.get("/users", async (req, res) => {
  try {
    const users = await fs.readFile();
  } catch (e) {}
});

module.exports = router;
