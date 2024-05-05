"use strict";
// creating and using own custom promise

let promiseObj = new Promise(function(resolve,reject) {

    setTimeout(function(){
        resolve("resolved successfully");
    },4000)

});
   
promiseObj.then(function(value){
console.log(value);
});


// create promise as a function and use it

let promiseObjfunction = function(age){

    return new Promise(function(resolve,reject){
     if(age < 18){
         reject('minor');
     } else {
         resolve('major');
     }

    });
}
 
// TC 1
promiseObjfunction(20).then(function(text){
 console.log("tc1 success " + text);
},function(text){
    console.log("tc1 fail " + text);
});

//TC 2
promiseObjfunction(17).then(function(text){
    console.log("tc2 success " + text);
   },function(error){
       console.log("tc2 fail " + error);
   });
   


// TC 3 using then catch (modification of TC 2)

promiseObjfunction(17).then(function(text){
    console.log("tc3 success " + text);
   }).catch(function(error){
    console.log("tc3 fail " + error);
   })
