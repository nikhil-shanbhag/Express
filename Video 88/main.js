const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About us");
});
app.get("/contact", (req, res) => {
  res.send("Contact us");
});
app.get("/blog", (req, res) => {
  res.send("Hello blog");
});
app.get("/blog/:slug", (req, res) => {
  //logic to fetch {slug} from the db
  //For URL:http://localhost:3000/blog/intro-to-expressJs?mode=dark&regin=in

  console.log(req.params); //{ slug: 'intro-to-expressJs' }
  console.log(req.query); //{ mode: 'dark', regin: 'in' }
  res.send(`Hello ${req.params.slug}`);
});
// app.get("/blog/intro-to-py", (req, res) => {
//   //logic to fetch intro to py from the db
//   res.send("Hello intro-to-py");
// });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
