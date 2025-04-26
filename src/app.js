const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send("Hello from server");
// });
app.use("/profile", (req, res) => {
  res.send("From Profile screen");
});

app.use("/connections", (req, res) => {
  res.send("Connections Screen");
});

app.listen(3000, () => {
  console.log("server is up and running");
});
