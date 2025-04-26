const express = require("express");

const app = express();
app.use("/user", (req, res) => {
  res.send("HAHAHAHAHAHAH");
});
app.get("/user", (req, res) => {
  res.send({ firstName: "Sowmiya", lastName: "Ramadhas" });
});
app.post("/user", (req, res) => {
  res.send("Data saved successfully");
});

app.put("/user", (req, res) => {
  res.send("Data updated");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted successfully");
});

app.listen(3000, () => {
  console.log("server is up and running");
});
