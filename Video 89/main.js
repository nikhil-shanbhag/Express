const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));  // middleware

app
  .get("/", (req, res) => {
    console.log("Hey its a get request");
    res.send("Hello World! GET");
  })
  .post("/", (req, res) => {
    console.log("Hey its a post request");
    res.send("Hello World! POST");
  })
  .put("/", (req, res) => {
    console.log("Hey its a put request");
    res.send("Hello World! PUT ");
  })
  .delete("/", (req, res) => {
    console.log("Hey its a delete request");
    res.send("Hello World! DELETE");
  });

app.get("/index", (req, res) => {
  console.log("Hey its index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name:["apple", "ball", "cat"] });
  res.send("Hello World! GET");
});

app.listen(port, () => {
  console.log(`Example app listening on the ${port}`);
});
