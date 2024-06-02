function add(a,b){
let result = a+ b;
console.log("result = " + result);
}

add(5,9);

// function with default params
function addValues(a,b,c=1){
    let result = a+ b+c;
    console.log("result = " + result);
    }

// function with expression

const sayHello = function(name){
  console.log("Hello ",name);  
}

sayHello("Kumar");

// function expression with arrow function
const sayHelloArrow = (name)=>{
console.log("Arrow funtion demo ",name);
let a = 5;
console.log("a =" + a);
}

sayHelloArrow("Hello");

const sayHelloArrowModified = sayHelloArrow;

sayHelloArrowModified("Modified");

// console.log("a =" + a);
    
addValues(5,9);
addValues(5,9,10);

//Normal funtion as a object property

const objA = {
    a: 5,
    b: 10,
    c: 13,
    hello: function sayHello(){
       console.log('Normal funtion as a object property',this.d);
    },
    d: 45
}

objA.hello();

//arrow funtion as a object property

const obj1 = {
    a: 5,
    b: 19,
    name: (name)=>{
        console.log(name);
        return name;
    },
}


console.log(obj1.name("name test"));

obj1.add = (a,b)=>a +b;

console.log("obj1 ",obj1);
console.log("add fn ",obj1.add(9,10));


// function contructor to create multiple objects with
//same properties
function student(name,age,totalMarks,mob) {
    this.name = name;
    this.age = age;
    this.totalMarks = totalMarks;
    this.mob = mob;
}

// This creates new instance, it means change in one property
// will not impact others
let objInst1 = new student("Kumar",35,400,9633300000);
let objInst2 = new student("abc",35,400,9633300000);
let objInst3 = new student("ghi",35,400,9633300000);

objInst1.name = "test"

console.log(objInst1,objInst2,objInst3);

// copy object - this will impact both new and original values
let objInst4 =  objInst2;
objInst2.name = "test";

console.log(objInst2,objInst4);


