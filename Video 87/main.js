const fs = require("fs");

console.log("starting");

fs.writeFile("noob.txt", "Hello channel welcome to my guys", () => {
  console.log("Channel is good boy");
  fs.readFile("noob.txt", (e, d) => {
    console.log(e, d.toString());
  });
});

fs.appendFile("noob.txt", "Loremipsum", (e, d) => {
  console.log(d);
});

console.log("ending");
