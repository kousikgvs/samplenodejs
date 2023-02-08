const random = require("make-random");
const { randomInRange } = require("make-random");
const { randomAZString } = require("make-random");
const { randomString } = require("make-random");

console.log(random);
randomInRange(10, 20).then((resp) => console.log(resp));
randomAZString().then((resp) => console.log(resp));
randomString().then((resp) => console.log(resp));
