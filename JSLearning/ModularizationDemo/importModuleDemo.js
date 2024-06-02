const {display,uName,password,obj1,TestClass} = require("./exportModuleDemo.js");

display();
console.log("uName = ",uName);
console.log("password = ",password);
console.log("obj1 = ",obj1);

let objClass = new TestClass();
objClass.display1();