// variable declration

// variable is function scoped

function variableVarTest(){
     test = 10; // variable can be assigned before its declared
     var test;
     console.log("var test = " + test);
}

variableVarTest();

function variableLetTest(){
    testLet = 20; // this declration gives you the error, variable cant be used before declration
    let testLet;
    const constURL = "google.com";
    constURL = "yahoo.com";            // this will give error
    console.log("let test = " + testLet);
}

// variableLetTest();

// function

// convert promise function wriiten on promiseDemo as arrow function

let promiseObjfunction = (age = 30)  => {

    return new Promise((resolve,reject)=>{
     if(age < 18){
         reject('minor');
     } else {
         resolve('major');
     }

    });
}

// TC 1
promiseObjfunction(20).then(text =>{
    console.log("tc1 success " + text);
   },(text)=>{
       console.log("tc1 fail " + text);
   });

// TC 2
promiseObjfunction().then(text =>{
    console.log("tc2 no value passed, success " + text);
   },(text)=>{
       console.log("tc1 fail " + text);
   });


// rest param
// it will collect all the rest of parameters

let add = (a,b,...c) => {
     let result = 0;
    for(let value of c){
        result = result + value;
        }
        return result + a + b;  
};


console.log("result = " + add(5,10,12,30,25));


// string template and multi-line

let firstName = "senthil";
let lastName = "kumar";

let message = `Hai ${firstName} ${lastName},
               Hope your doing great,
               Have a nice day`;
console.log("mesage " + message);


// array

var arr = [10,18,20,45,32];
console.log("Array before processing.. " + arr);

// filter will process given array and return array which matches the condition
    
 let ageArr =  arr.filter(age =>{
           if(age >=18){
               return age;
           }
       })

       console.log("Array after processing.. " + ageArr);

// select employee which has salary more than 10,000

let empArray = [
        {
        name : "senthil",
        sal : 1000
        },
    {
        name : "kumar",
        sal : 4000000
    }
];

let newArray = empArray.filter(entry =>{
                    if(entry.sal >= 100000){
                    return entry.name;
                     }
                });
    
         console.log("salary after processing.. " + newArray[0].name); 


// map
let newMap = arr.map(entry=>{
      return entry * 10;
});

console.log("map = " + newMap);