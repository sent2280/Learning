// initialization
let arr1 = [10,5,3,3,1,4];
console.log("arr1 = " + arr1);
// in JS type of will return as obj, bcoz array stored as object in js
console.log("typeof = ",typeof arr1); 
//To find out array use isArray - this is static method
// in constructor function
console.log("isArray = ",Array.isArray(arr1)); 
console.log("instance of = ",arr1 instanceof Array); 


// initialization with function constructor
let arr2 = new Array(40,22,33,10);
console.log("arr2 = " + arr2);
console.log("type = ",typeof arr2);


// array with different data types allowed
let arr3 = ["Hi",5,function hello(){console.log("test")},{key: "value"}];
console.log("arr3 " + arr3);
console.log("arr3[0] " + arr3[0]);
//console.log("arr3[2] " + );
arr3[2]();


// adding more elements using index
arr1[5] = 5;
arr1[6] = 5;
console.log("after adding elements = " + arr1);

// adding more elements using methods
arr1.push(10);
arr1.push(11);
console.log("after adding elements = " + arr1);

// adding more elements using methods - array of elements
arr1.push([15,15]);
console.log("after adding elements = " + arr1);

// removing elements using methods
arr1.pop();
arr1.pop();
console.log("after adding elements = " + arr1);


// add and remove elements from beginning of array
console.log(arr1.shift(1));
console.log(arr1.unshift(2));
console.log(arr1);

let arr6 = [10,5,3,3,6,9,10,22];
console.log("arr1 = " + arr1);

// splice to remove elements from array

let arr4 = arr6.splice(1,1);
console.log("arr1 = " + arr1);
console.log("arr4 = " + arr4);

// splice to remove and add elements into array
let arr5 = arr6.splice(2,1,[100,20,10]);
console.log("arr1 = " + arr1);
console.log("arr5 = " + arr5);