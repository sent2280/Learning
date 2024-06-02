// Array destructuring

const arr1 = [1,2,5,11,9,3,4,4,100,55];

let a,b,rest;

[a,b] = arr1;
console.log(a,b);
[,,a,,b,,...rest] = arr1;
console.log(a,b,rest); // a=5,b=9,c=[4,4,100,55]

const nestArr1 = [1,[4,3,2,1],5,11,9,3,4,4,100,55];
let [d,e] = nestArr1;
console.log(d,e);
// de-structure inner array
let [f,[,innerArrayElement,]] = nestArr1;
console.log(f,innerArrayElement); // innerArrayElement = 3

// Object destructuring

const obj1 = {
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "contacts": [
      {
        "type": "email",
        "value": "john.doe@example.com"
      },
      {
        "type": "phone",
        "value": "555-1234"
      }
    ]
  }

  function demo1({name,age=20,contacts}){
   console.log(name,age,contacts)
  }

  demo1(obj1);

  function demo2([firstObj,secondObj]){
    console.log(firstObj,secondObj);
   }
 
   console.log("*********Demo2*******");
   demo2(obj1.contacts);