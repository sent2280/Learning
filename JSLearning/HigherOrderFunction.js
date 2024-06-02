// function passed to other function as argument
// or function returns another function as arg
// is called higher order function


// Custom higher order function

function hello(){
   console.log("Hello");
}

function format(fn){
 console.log("---------------");
 fn();
 console.log("---------------");
}

format(hello);

function printArray(arr){
    console.log(arr);
 }


// array related HOF

const arr1 = [1,2,5,11,9,3,4,4,100,55];

// use map
const arr2 = arr1.map(value=>value*2);
printArray(arr1);
printArray(arr2);

// use filter - single calback with multiple params
const arr3 = arr1.filter((value,index,originalArray)=>{
    console.log("index = ",index);
    return value%2 == 0;
})

printArray(arr3);

//use reduce
const result = arr3.reduce((accumalator,currentValue,index,orgArray)=>{
    return accumalator + currentValue;
})

console.log("result = ",result)

// sort
const sortedResult = arr3.sort();
console.log("Natural sortedResult = ",sortedResult)

// sort
const sortedResultDesc = arr3.sort((a,b)=>b-a);
console.log("Desc sortedResult = ",sortedResultDesc)

//Obj array sorting
const objectsArray = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Tob", age: 10 },
    { name: "Tob", age: 33 },
  ];

const sortedResultArrObj = objectsArray.sort((a,b)=>a.age-b.age);
console.log("Asc sortedResultArrObj = ",sortedResultArrObj)
