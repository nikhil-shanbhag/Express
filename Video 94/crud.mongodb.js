// CRUD Operation
use("crudDb");

//CREATE
db.createCollection("courses");

// db.courses.insertOne({
//   name: "Lorem ipsum dollor is noob catere",
//   price: 0,
//   assignments: 12,
//   projects: 45,
// });

// db.courses.insertMany([
//   {
//     name: "Lorem ipsum dollor is noob catere1",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere2",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere3",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere4",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere5",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere6",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere7",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere8",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere9",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Lorem ipsum dollor is noob catere10",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
// ]);

//READ
// let a = db.courses.find({ price: 0 });
// console.log(a.toArray());

// let b = db.courses.findOne({ price: 0 });
// console.log(b);


//UPDATE
db.courses.updateOne({price: 0}, {$set:{price: 100}})
db.courses.updateMany({price: 0}, {$set:{price: 1000}})

//DELETE
db.courses.deleteOne({price: 1000})
db.courses.deleteMany({price: 1000})