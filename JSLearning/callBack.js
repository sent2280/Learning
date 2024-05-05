// best example for callback
// when to use ccallback? - sometime we have to wait for our current function to wait its completion, in that case
// if i call at the end of line, since JS is asynchronous it wont wait for my current one to complete
// call back is like adding then indirectly to current function

setTimeout(function(){
console.log("Hai dear..");
},7000);

// rewriting same timeout - little different

setTimeout(testFunctionObj,10 * 1000);

function testFunctionObj(){
    console.log("Hai dear..");
}

// Some realtime use case
// Assume something you want to display after reading from file, so display function can be used as call back here


// dummy code
function getResponse(responeValidation){
// Logic to trigger get call
setTimeout(testFunctionObj,10 * 1000);
console.log("Response received");
responeValidation();
}

function responeValidation(){
    console.log("Response validation"); 
}

getResponse(responeValidation);

