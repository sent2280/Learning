// if we are exporting at the same line of declarion then direct export is allowed, else {} has to be used
// export {obj1}

export function display(){
    console.log("display function");
}
export const uName="Name1";
export let password="Pass1";

export class TestClass{
      display1(){
        console.log("display function inside class");
    }
}

 let obj1;

 obj1 = {
  "key1" : "value1",
  "key2" : "value2"
}

export {obj1};

let funExp = ()=>{console.log('funExp')};
let funExpDefault = ()=>{console.log('funExp Default')};
let funExpDefault2 = ()=>{console.log('funExp Default')};


export {funExp,funExpDefault2};
export default funExpDefault;