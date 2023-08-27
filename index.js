const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.json({ message: "Hello friend!" });
});

app.listen(3000, () => console.log("sERVER IS RUNNING ON THE PORT 3000"));
