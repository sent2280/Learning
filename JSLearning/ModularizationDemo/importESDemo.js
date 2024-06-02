import funExpDefault, { display,uName,password,TestClass,obj1 } from "./exportESDemo.js";
import * as obj from "./exportESDemo.js";

display();
console.log("uName = ",uName);
console.log("password = ",password);
console.log("obj1 = ",obj1);

let objClass = new TestClass();
objClass.display1();
funExpDefault();

console.log("<--------import as obj-------->");
obj.display()