//  This is file based imports
const fs = require("fs");
const { readFileSync } = require("fs");

//  Defining Read File will pause the excution of these and will print at the end
const data = fs.readFile("./passwd.txt", "utf-8", (err, data) => {
  console.log(data);
});

// Defining ReadFileasync will make this run first after excuting this remmaining will excute
const data1 = readFileSync("./passwd.txt", "utf-8");

console.log(data + " - I will be Printed at the End");
console.log(data1 + " - I will be Printed at the Start");

console.log("I am First");

const b = require("./index");

b.printname("kousik");

// Information about Write File
// Lets create  a  file kousik.txt and store my Full Name

const myname = "kousik Gunturu";

fs.writeFileSync("./kousik.txt", myname + "Gunturu", () => {
  console.log("Written");
});
