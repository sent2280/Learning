// if we are exporting at the same line of declarion then direct export is allowed, else {} has to be used
// export {obj1}

 function display(){
    console.log("display function");
}
 const uName="Name1";
 let password="Pass1";

 class TestClass{
      display1(){
        console.log("display function inside class");
    }
}

 let obj1;

 obj1 = {
  "key1" : "value1",
  "key2" : "value2"
}


let funExp = ()=>{console.log('funExp')};

module.exports = {
              display,
              uName,
              password,
              TestClass,
              obj1,
              funExp
            };