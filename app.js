const express = require("express");
const app = express();

app.get("/api/test", (req, res) => {
  res.json({ message: "This is a message from server!" });
});

app.listen(4000, () => console.log("App listening on port 4000"));
