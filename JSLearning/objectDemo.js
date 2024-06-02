//Simple object

let person = {
    firstName : "Jhon",
    lastName : "joshep",
     age     : 25
}

console.log(person.firstName);

let data = "firstName";

console.log("person.data = " + person.data); // this will not work
console.log("person.data = " + person[data]); // this will work

console.log(typeof person);
console.log("firstName type " + typeof person.firstName);
console.log("age type " + typeof person.age);



//Complex object

let personObj2 = {
    firstName : "Den",
    lastName : "White",
     address : {
         line1: "200 2nd streen",
         city: "London",
         Country : "UK"
     }
}

console.log(personObj2.address.line1);
console.log(personObj2["address"]["line1"]);
console.log(typeof personObj2.address);

// accessing child property that doesnot exist
console.log(personObj2.address.line2); // undefined

// accessing parent property that doesnot exist
// console.log(personObj2.address1.line2); // TypeError: Cannot read properties of undefined (reading 'line2')

// to fix above error
console.log(personObj2.address1?.line2); // this will avoid error and result is undefined since property does not exist

// Printing the object
console.log("print obj using concatination " + person); // when you concatenate a string with an object using the + operator, JavaScript coerces the object into a string. This coercion usually results in the string "[object Object]".
console.log("person obj as arguments ",personObj2); // instead of concat using this, this works
console.log(personObj2); // this prints object properly


// Iterating
console.log("Iteration....")
for(let key in personObj2){
  console.log(key,"=",personObj2[key]);
}

console.log("Delete prop....")
delete personObj2.address;
console.log("After deletion",personObj2);


