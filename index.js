console.log("Hello world");
console.log("kousik");
const a = 20;
console.log(a / 20);

//  npm to install anything

// npm install - installs everything which are there in dependencies of package.json
// packages bundles which we can download

// {
// npm uninstall package-name
// Using this packages withh be deleted from dependencies
// }

//  Let us say variable a is a module
// Here everything is a module , We can export a as a module
const obj = {
  printname: (name) => {
    console.log(name + " is a Super Hero");
  },
};

//  File Based , Build in , Third Party


//  THis is file based Exports
module.exports = obj;
